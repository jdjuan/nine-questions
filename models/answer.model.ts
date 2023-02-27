import { StaticImageData } from "next/image";

export interface Answer {
  id: string;
  isCorrect: boolean;
  inventorImageUrl: StaticImageData;
}
