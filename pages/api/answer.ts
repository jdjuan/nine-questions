import { AnswerRequest } from "@/models/answer.request";
import type { NextApiRequest, NextApiResponse } from "next";
import { getXataClient } from "../../db/xata";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const xata = getXataClient();
  if (req.method === "GET") {
    const records = await xata.db.Answers.getAll();
    res.status(200).json(records);
  } else if (req.method === "POST") {
    const body: AnswerRequest = req.body;
    const record = await xata.db.Answers.create({ ...body, createdAt: new Date() });
    res.status(200).json(record);
  }
}
