import { AnswerRequest } from "@/models/answer.request";
import type { NextApiRequest, NextApiResponse } from "next";
import { AnswerRow, getNeonSql } from "../../db/neon";

const toAnswerResponse = (row: AnswerRow) => ({
  id: `${row.id}`,
  questionId: row.question_id,
  answerId: row.answer_id,
  isCorrect: row.is_correct,
  createdAt: row.created_at,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const sql = getNeonSql();

    if (req.method === "GET") {
      const rows = (await sql`
        SELECT id, question_id, answer_id, is_correct, created_at
        FROM nine_questions_answers
        ORDER BY id ASC
      `) as AnswerRow[];
      res.status(200).json(rows.map(toAnswerResponse));
      return;
    }

    if (req.method === "POST") {
      const body: AnswerRequest = req.body;
      const [inserted] = (await sql`
        INSERT INTO nine_questions_answers (question_id, answer_id, is_correct, created_at)
        VALUES (${body.questionId}, ${body.answerId}, ${body.isCorrect}, ${new Date().toISOString()})
        RETURNING id, question_id, answer_id, is_correct, created_at
      `) as AnswerRow[];
      if (!inserted) throw new Error("Unable to insert answer");
      res.status(200).json(toAnswerResponse(inserted));
      return;
    }

    res.setHeader("Allow", "GET, POST");
    res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to process answer request" });
  }
}
