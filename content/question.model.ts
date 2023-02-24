import { StaticImageData } from "next/image";

export interface Question {
  id: string;
  invention: string;
  inventionImageUrl: StaticImageData;
  inventor: string;
  inventorImageUrl: StaticImageData;
  year: number;
  note?: string;
  options: { isCorrect: boolean; inventorImageUrl: StaticImageData }[];
}
