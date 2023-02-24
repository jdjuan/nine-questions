import { StaticImageData } from "next/image";

export interface Question {
  id: string;
  invention: string;
  inventionImageUrl: StaticImageData;
  inventor: string;
  year: number;
  options: { isCorrect: boolean; inventorImageUrl: StaticImageData }[];
}
