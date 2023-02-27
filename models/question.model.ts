import { StaticImageData } from "next/image";
import { Answer } from "./answer.model";

export interface Question {
  id: string;
  invention: string;
  inventionImageUrl: StaticImageData;
  inventor: string;
  inventorImageUrl: StaticImageData;
  year: number;
  note?: string;
  answers: Answer[];
}
