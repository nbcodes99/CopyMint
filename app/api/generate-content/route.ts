// import { NextResponse } from "next/server";
// import OpenAI from "openai";

// const apiKey = process.env.OPENAI_API_KEY;

// if (!apiKey) {
//   throw new Error("Missing OPENAI_API_KEY in environment variables");
// }

// console.log("API KEY:", process.env.OPENAI_API_KEY);

// const openai = new OpenAI({ apiKey });

// export async function POST(req: Request) {
//   const { niche, contentType } = await req.json();

//   try {
//     const chatCompletion = await openai.chat.completions.create({
//       model: "gpt-3.5-turbo",
//       messages: [
//         {
//           role: "system",
//           content: `You're an expert content creator helping small businesses generate engaging ${contentType}.`,
//         },
//         {
//           role: "user",
//           content: `Generate a ${contentType} for a business in the ${niche} niche.`,
//         },
//       ],
//     });

//     return NextResponse.json({
//       content: chatCompletion.choices[0].message.content,
//     });
//   } catch (error: any) {
//     console.error("[OPENAI ERROR]", error);

//     if (error.status === 429) {
//       return NextResponse.json(
//         {
//           error: "Rate limit or quota exceeded.",
//         },
//         { status: 429 }
//       );
//     }

//     return NextResponse.json(
//       { error: error.message || "Failed to generate content." },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from "next/server";
import OpenAI from "openai";

const apiKey = process.env.OPENAI_API_KEY;
console.log("[DEBUG] Loaded OpenAI Key:", apiKey ? "Loaded" : "MISSING");

const openai = new OpenAI({
  apiKey,
});

export async function POST(req: Request) {
  console.log("[DEBUG] Received POST request to /api/generate-content");

  const { niche, contentType } = await req.json();
  console.log("[DEBUG] Inputs:", { niche, contentType });

  try {
    console.log("[DEBUG] Sending request to OpenAI...");

    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You're an expert content creator helping small businesses generate engaging ${contentType}.`,
        },
        {
          role: "user",
          content: `Generate a ${contentType} for a business in the ${niche} niche.`,
        },
      ],
    });

    console.log("[DEBUG] OpenAI Response received");

    return NextResponse.json({
      content: chatCompletion.choices[0].message.content,
    });
  } catch (error: any) {
    console.error("[OPENAI_ERROR]", error);

    return NextResponse.json(
      {
        error:
          error?.message ||
          "Failed to generate content. Check API key and billing status.",
      },
      { status: 500 }
    );
  }
}
