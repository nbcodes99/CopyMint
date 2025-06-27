import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { accounts, sessions, users, verification_tokens } from "./schema";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(pool, {
  schema: { users, sessions, verification_tokens, accounts },
});

export type DB = typeof db;
