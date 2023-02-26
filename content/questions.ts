import { Question } from "@/content/question.model";
import circularSaw from "../public/circular-saw.jpeg";
import tabitha from "../public/tabitha.webp";
import algorithm from "../public/algorithm.jpeg";
import ada from "../public/ada.jpeg";
import josephine from "../public/josephine.jpeg";
import dishwasher from "../public/dishwasher.png";
import mary from "../public/mary.jpeg";
import windscreen from "../public/windscreen.jpeg";
import margaret from "../public/margaret.webp";
import heater from "../public/heater.webp";
import anna from "../public/anna.jpeg";
import escape from "../public/escape.webp";
import lizzie from "../public/lizzie.jpeg";
import monopoly from "../public/monopoly.jpeg";
import florence from "../public/florence.jpeg";
import refrigerator from "../public/refrigerator.jpeg";
import bette from "../public/bette.jpeg";
import liquid from "../public/liquid.jpeg";
import man1 from "../public/man1.jpeg";
import man2 from "../public/man2.jpeg";
import man3 from "../public/man3.jpeg";
import man5 from "../public/man5.png";
import man6 from "../public/man6.jpeg";
import man9 from "../public/man9.jpeg";
import man10 from "../public/man10.jpeg";
import man11 from "../public/man11.jpeg";
import man12 from "../public/man12.webp";
import man13 from "../public/man13.jpg.webp";
import man14 from "../public/man14.jpeg";
import man15 from "../public/man15.jpeg";
import man16 from "../public/man16.jpeg";
import man17 from "../public/man17.jpeg";
import man18 from "../public/man18.jpeg";
import man19 from "../public/man19.jpeg";
import man20 from "../public/man20.jpeg";
import man21 from "../public/man21.jpeg";
import man22 from "../public/man22.jpeg";
import man23 from "../public/man23.jpeg";
import man24 from "../public/man24.jpeg";
import man25 from "../public/man25.jpeg";
import man26 from "../public/man26.webp";
import man27 from "../public/man27.jpeg";
import man28 from "../public/man28.jpeg";
import man29 from "../public/man29.jpeg";

export const questionSet: Question[] = [
  {
    id: "1",
    inventor: "Tabitha Babbitt",
    inventorImageUrl: tabitha,
    invention: "circular saw",
    inventionImageUrl: circularSaw,
    year: 1812,
    note: "She didn't patent it though.",
    // note: "It's worth noting that Babbitt didn't file a patent at the time of the invention, and this has led to controversy regarding ownership.",
    options: [
      { isCorrect: false, inventorImageUrl: man1 },
      { isCorrect: true, inventorImageUrl: tabitha },
      { isCorrect: false, inventorImageUrl: man27 },
      { isCorrect: false, inventorImageUrl: man3 },
    ],
  },
  {
    id: "2",
    inventor: "Margaret Wilcox",
    inventorImageUrl: margaret,
    invention: "car heater",
    inventionImageUrl: heater,
    year: 1893,
    // note: "In 2020, Inventor's Digest named Wilcox's patent for car heater one of their top ten patents by women.",
    options: [
      { isCorrect: false, inventorImageUrl: man13 },
      { isCorrect: true, inventorImageUrl: margaret },
      { isCorrect: false, inventorImageUrl: man2 },
      { isCorrect: false, inventorImageUrl: man22 },
    ],
  },
  {
    id: "3",
    inventor: "Mary Anderson",
    inventorImageUrl: mary,
    invention: "windscreen wiper",
    inventionImageUrl: windscreen,
    // note: "In 2011 Anderson was inducted into the National Inventors Hall of Fame",
    year: 1903,
    options: [
      { isCorrect: false, inventorImageUrl: man11 },
      { isCorrect: false, inventorImageUrl: man14 },
      { isCorrect: false, inventorImageUrl: man12 },
      { isCorrect: true, inventorImageUrl: mary },
    ],
  },
  {
    id: "4",
    inventor: "Anna Connelly",
    inventorImageUrl: anna,
    invention: "fire escape",
    inventionImageUrl: escape,
    // note: "She was one of the first women to register a patent for an invention after the Civil War",
    year: 1887,
    options: [
      { isCorrect: false, inventorImageUrl: man20 },
      { isCorrect: true, inventorImageUrl: anna },
      { isCorrect: false, inventorImageUrl: man17 },
      { isCorrect: false, inventorImageUrl: man18 },
    ],
  },
  {
    id: "5",
    inventor: "Lizzie Magie",
    inventorImageUrl: lizzie,
    invention: "first monopoly game",
    inventionImageUrl: monopoly,
    year: 1903,
    note: "She created The Landlord's Game, which was used three decades later by the Parker Brothers to publish a modified version known as Monopoly. They only gave her credit posthumously",
    options: [
      { isCorrect: false, inventorImageUrl: man24 },
      { isCorrect: true, inventorImageUrl: lizzie },
      { isCorrect: false, inventorImageUrl: man25 },
      { isCorrect: false, inventorImageUrl: man21 },
    ],
  },
  {
    id: "6",
    inventor: "Bette Nesmith Graham",
    inventorImageUrl: bette,
    invention: "liquid paper",
    inventionImageUrl: liquid,
    year: 1956,
    note: "",
    options: [
      { isCorrect: true, inventorImageUrl: bette },
      { isCorrect: false, inventorImageUrl: man23 },
      { isCorrect: false, inventorImageUrl: man26 },
      { isCorrect: false, inventorImageUrl: man6 },
    ],
  },
  {
    id: "7",
    inventor: "Florence Parpart",
    inventorImageUrl: florence,
    invention: "electric refrigerator",
    inventionImageUrl: refrigerator,
    year: 1901,
    options: [
      { isCorrect: false, inventorImageUrl: man22 },
      { isCorrect: true, inventorImageUrl: florence },
      { isCorrect: false, inventorImageUrl: man26 },
      { isCorrect: false, inventorImageUrl: man16 },
    ],
  },
  {
    id: "8",
    inventor: "Josephine Cochrane",
    inventorImageUrl: josephine,
    invention: "first successful dishwasher",
    inventionImageUrl: dishwasher,
    year: 1886,
    options: [
      { isCorrect: true, inventorImageUrl: josephine },
      { isCorrect: false, inventorImageUrl: man19 },
      { isCorrect: false, inventorImageUrl: man28 },
      { isCorrect: false, inventorImageUrl: man29 },
    ],
  },
  {
    id: "9",
    inventor: "Ada Lovelace",
    inventorImageUrl: ada,
    invention: "first algorithm",
    inventionImageUrl: algorithm,
    year: 1843,
    options: [
      { isCorrect: true, inventorImageUrl: ada },
      { isCorrect: false, inventorImageUrl: man10 },
      { isCorrect: false, inventorImageUrl: man5 },
      { isCorrect: false, inventorImageUrl: man15 },
    ],
  },
];
