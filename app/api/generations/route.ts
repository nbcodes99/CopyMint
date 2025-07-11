import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { auth } from "../auth/[...nextauth]/session";
import { user_generations } from "@/app/drizzle/schema";
import { db } from "@/app/drizzle/db";

export async function GET() {
  const session = await auth();

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const generations = await db
    .select()
    .from(user_generations)
    .where(eq(user_generations.user_id, session.user.id))
    .orderBy(user_generations.created_at);

  return NextResponse.json({ generations });
}
