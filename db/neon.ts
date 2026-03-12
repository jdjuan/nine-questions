import { neon } from "@neondatabase/serverless";

export type AnswerRow = {
  id: number;
  question_id: string;
  answer_id: string;
  is_correct: boolean;
  created_at: string;
};

let sql: ReturnType<typeof neon> | undefined;

export const getNeonSql = () => {
  if (sql) return sql;

  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    throw new Error("Missing DATABASE_URL environment variable");
  }

  sql = neon(databaseUrl);

  return sql;
};
