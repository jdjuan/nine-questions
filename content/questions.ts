import { Question } from "@/models/question.model";
import circularSaw from "../public/circular-saw.jpeg";
import algorithm from "../public/algorithm.jpeg";
import dishwasher from "../public/dishwasher.png";
import windscreen from "../public/windscreen.jpeg";
import heater from "../public/heater.webp";
import escape from "../public/escape.webp";
import monopoly from "../public/monopoly.jpeg";
import refrigerator from "../public/refrigerator.jpeg";
import liquid from "../public/liquid.jpeg";
import { answers } from "@/content/answers";

export const questionSet: Question[] = [
  {
    id: "1",
    inventor: "Tabitha Babbitt",
    inventorImageUrl: answers.tabitha.inventorImageUrl,
    invention: "circular saw",
    inventionImageUrl: circularSaw,
    year: 1812,
    note: "She didn't patent it though.",
    // note: "It's worth noting that Babbitt didn't file a patent at the time of the invention, and this has led to controversy regarding ownership.",
    answers: [answers.man1, answers.tabitha, answers.man27, answers.man3],
  },
  {
    id: "2",
    inventor: "Margaret Wilcox",
    inventorImageUrl: answers.margaret.inventorImageUrl,
    invention: "car heater",
    inventionImageUrl: heater,
    year: 1893,
    // note: "In 2020, Inventor's Digest named Wilcox's patent for car heater one of their top ten patents by women.",
    answers: [answers.man13, answers.margaret, answers.man2, answers.man22],
  },
  {
    id: "3",
    inventor: "Mary Anderson",
    inventorImageUrl: answers.mary.inventorImageUrl,
    invention: "windscreen wiper",
    inventionImageUrl: windscreen,
    // note: "In 2011 Anderson was inducted into the National Inventors Hall of Fame",
    year: 1903,
    answers: [answers.man11, answers.man14, answers.man12, answers.mary],
  },
  {
    id: "4",
    inventor: "Anna Connelly",
    inventorImageUrl: answers.anna.inventorImageUrl,
    invention: "fire escape",
    inventionImageUrl: escape,
    // note: "She was one of the first women to register a patent for an invention after the Civil War",
    year: 1887,
    answers: [answers.man20, answers.anna, answers.man17, answers.man18],
  },
  {
    id: "5",
    inventor: "Lizzie Magie",
    inventorImageUrl: answers.lizzie.inventorImageUrl,
    invention: "first monopoly game",
    inventionImageUrl: monopoly,
    year: 1903,
    note: "She created The Landlord's Game, which was used three decades later by the Parker Brothers to publish a modified version known as Monopoly. They only gave her credit posthumously",
    answers: [answers.man24, answers.lizzie, answers.man25, answers.man21],
  },
  {
    id: "6",
    inventor: "Bette Nesmith Graham",
    inventorImageUrl: answers.bette.inventorImageUrl,
    invention: "liquid paper",
    inventionImageUrl: liquid,
    year: 1956,
    note: "",
    answers: [answers.bette, answers.man23, answers.man9, answers.man6],
  },
  {
    id: "7",
    inventor: "Florence Parpart",
    inventorImageUrl: answers.florence.inventorImageUrl,
    invention: "electric refrigerator",
    inventionImageUrl: refrigerator,
    year: 1901,
    answers: [answers.man22, answers.florence, answers.man26, answers.man16],
  },
  {
    id: "8",
    inventor: "Josephine Cochrane",
    inventorImageUrl: answers.josephine.inventorImageUrl,
    invention: "first successful dishwasher",
    inventionImageUrl: dishwasher,
    year: 1886,
    answers: [answers.josephine, answers.man19, answers.man28, answers.man29],
  },
  {
    id: "9",
    inventor: "Ada Lovelace",
    inventorImageUrl: answers.ada.inventorImageUrl,
    invention: "first algorithm",
    inventionImageUrl: algorithm,
    year: 1843,
    answers: [answers.ada, answers.man10, answers.man5, answers.man15],
  },
];
