import { NextRequest, NextResponse } from "next/server";
import { db } from "@/app/drizzle/db";
import { user_generations } from "@/app/drizzle/schema";
import { auth } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const session = await auth();

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { niche, contentType } = body;

  if (!niche || !contentType) {
    return NextResponse.json({ error: "Missing input" }, { status: 400 });
  }

  const promptMap: Record<string, string> = {
    instagram_post:
      "Write a 4-slide Instagram carousel post for a business in the {niche} niche. Each slide should be short, engaging, and designed to grab attention. End with a call-to-action on the last slide.",

    linkedin_post:
      "Create a professional and insightful LinkedIn post for a business in the {niche} niche. Keep it informative, engaging, and value-driven.",

    email_newsletter:
      "Generate a compelling email newsletter for a business in the {niche} niche. It should be warm, persuasive, and drive action.",

    product_description:
      "Write a persuasive product description for a product in the {niche} niche. Highlight its benefits and make it irresistible.",

    youtube_script:
      "Create a short and engaging YouTube video script introduction for a business in the {niche} niche. Hook the viewer in the first few lines.",

    post: "Generate an informative and interesting blog post introduction for a topic in the {niche} niche. Make it valuable and easy to read.",

    tweet:
      "Write a catchy, punchy tweet for a business in the {niche} niche. Make it witty, relatable, or thought-provoking.",
  };

  const template = promptMap[contentType];

  if (!template) {
    return NextResponse.json(
      { error: "Unsupported content type" },
      { status: 400 }
    );
  }

  const prompt = template.replace("{niche}", niche);

  try {
    const res = await fetch("https://api.cohere.ai/v1/generate", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.COHERE_API_KEY}`,
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        model: "command",
        prompt,
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    const data = await res.json();
    const content = data.generations?.[0]?.text || "No content generated.";

    const saved = await db
      .insert(user_generations)
      .values({
        user_id: session.user.id,
        content,
        niche,
        content_type: contentType,
      })
      .returning();

    return NextResponse.json({
      content,
      saved: saved[0],
    });
  } catch (error) {
    console.error("Cohere API error:", error);
    return NextResponse.json(
      { error: "Failed to generate content" },
      { status: 500 }
    );
  }
}
