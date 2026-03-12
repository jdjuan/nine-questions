import type { NextApiRequest, NextApiResponse } from "next";
import { getNeonSql } from "../../../db/neon";

type QuestionAnswerRow = { answer_id: string };

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const sql = getNeonSql();
    const { questionId } = req.query;

    const rows = (await sql`
      SELECT answer_id
      FROM nine_questions_answers
      WHERE question_id = ${`${questionId}`}
    `) as QuestionAnswerRow[];
    const results = rows.reduce<Record<string, number>>((acc, current) => {
      const id = current.answer_id || "";
      acc[id] = acc[id] ? acc[id] + 1 : 1;
      return acc;
    }, {});

    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to retrieve question results" });
  }
}
