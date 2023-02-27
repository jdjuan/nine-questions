import type { NextApiRequest, NextApiResponse } from "next";
import { getXataClient } from "../../../db/xata";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const xata = getXataClient();
  const { questionId } = req.query;
  const records = await xata.db.Answers.filter({ questionId: `${questionId}` }).getMany();
  const results = records.reduce((acc: any, current) => {
    const id = current.answerId || "";
    acc[id] = acc?.[id] ? acc[id] + 1 : 1;
    return acc;
  }, {});
  res.status(200).json(results);
}
