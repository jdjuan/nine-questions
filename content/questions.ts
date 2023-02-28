import { Question } from "@/models/question.model";
import circularSaw from "../public/circular-saw.jpeg";
import algorithm from "../public/algorithm.jpeg";
import dishwasher from "../public/dishwasher.png";
import windscreen from "../public/windscreen.jpeg";
import heater from "../public/heater.webp";
import escape from "../public/escape.webp";
import monopoly from "../public/monopoly.webp";
import refrigerator from "../public/refrigerator.jpeg";
import liquid from "../public/liquid.webp";
import { answers } from "@/content/answers";

export const questionSet: Question[] = [
  {
    id: "1",
    inventor: "Anna Connelly",
    inventorImageUrl: answers.anna.inventorImageUrl,
    invention: "fire escape",
    inventionImageUrl: escape,
    note: "Her invention resulted in the modification of the New York City building codes, which required residential buildings to have secondary means of escape for emergencies.",
    year: 1887,
    answers: [answers.man20, answers.anna, answers.man17, answers.man18],
  },
  {
    id: "2",
    inventor: "Margaret Wilcox",
    inventorImageUrl: answers.margaret.inventorImageUrl,
    invention: "car heater",
    inventionImageUrl: heater,
    year: 1893,
    note: "In 2020, Inventor's Digest named Wilcox's patent for car heater one of their top ten patents by women.",
    answers: [answers.man13, answers.margaret, answers.man2, answers.man22],
  },
  {
    id: "3",
    inventor: "Mary Anderson",
    inventorImageUrl: answers.mary.inventorImageUrl,
    invention: "windscreen wiper",
    inventionImageUrl: windscreen,
    note: "Anderson was refused by manufacturers when she tried to sell her new windshield cleaning device. Only after her patent expired, a similar device became a standard on cars.",
    year: 1903,
    answers: [answers.man11, answers.man14, answers.mary, answers.man12],
  },
  {
    id: "4",
    inventor: "Tabitha Babbitt",
    inventorImageUrl: answers.tabitha.inventorImageUrl,
    invention: "circular saw",
    inventionImageUrl: circularSaw,
    year: 1812,
    note: "It's worth noting that Babbitt didn't file a patent at the time of the invention, and this has led to controversy regarding ownership.",
    answers: [answers.man1, answers.man3, answers.tabitha, answers.man27],
  },
  {
    id: "5",
    inventor: "Lizzie Magie",
    inventorImageUrl: answers.lizzie.inventorImageUrl,
    invention: "first monopoly game",
    inventionImageUrl: monopoly,
    year: 1903,
    note: "Magie created The Landlord's Game, which was designed to showcase the evils of unchecked capitalism. Close to 30 years later a man patented a very similar game called Monopoly and sold it to Parker Brothers. They only gave her credit posthumously.",
    answers: [answers.man24, answers.lizzie, answers.man25, answers.man21],
  },
  {
    id: "6",
    inventor: "Josephine Cochrane",
    inventorImageUrl: answers.josephine.inventorImageUrl,
    invention: "first successful dishwasher",
    inventionImageUrl: dishwasher,
    year: 1886,
    note: "Cochrane came up with the invention to use water pressure, instead of scrubbers that were used back then, to clean dishes. Although there were other prototypes, Cochrane’s design was the most effective one from the rest.",
    answers: [answers.josephine, answers.man19, answers.man28, answers.man29],
  },
  {
    id: "7",
    inventor: "Florence Parpart",
    inventorImageUrl: answers.florence.inventorImageUrl,
    invention: "electric refrigerator",
    inventionImageUrl: refrigerator,
    year: 1914,
    note: "Parpart designed an electrical system that circulated water throughout the fridge to keep it cold. Her invention was a precursor to modern refrigerators and improved food storage efficiency for those with access to electricity.",
    answers: [answers.man22, answers.florence, answers.man26, answers.man16],
  },
  {
    id: "8",
    inventor: "Bette Nesmith Graham",
    inventorImageUrl: answers.bette.inventorImageUrl,
    invention: "liquid paper",
    inventionImageUrl: liquid,
    year: 1956,
    note: "In 1979 Graham sold Liquid Paper to Gillette Corporation for 47.5M USD. She had 200 employees and produced 25M products per year.",
    answers: [answers.bette, answers.man23, answers.man9, answers.man6],
  },
  {
    id: "9",
    inventor: "Ada Lovelace",
    inventorImageUrl: answers.ada.inventorImageUrl,
    invention: "first algorithm",
    inventionImageUrl: algorithm,
    year: 1843,
    note: "Lovelace added her own notes when translating the lectures of her mathematics professor. Later, she was credited with penning the world’s first computer algorithm. There's nevertheless sources who disagree to the extend of her contributions.",
    answers: [answers.man10, answers.man5, answers.man15, answers.ada],
  },
];
