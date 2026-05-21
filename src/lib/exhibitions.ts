import ex01 from "@/assets/ex-01.jpg";
import ex02 from "@/assets/ex-02.jpg";

export type Exhibition = {
  slug: string;
  title: string;
  desc: string;
  code: string;
  img: string;
  category: string;
  date: string;
  location: string;
  curator: string;
  longDesc: string[];
};

export const exhibitions: Exhibition[] = [
  {
    slug: "concrete-dreams",
    title: "Concrete Dreams",
    desc: "Brutalist architecture meets surrealist painting in monolithic installation",
    code: "25S",
    img: ex01,
    category: "Installation",
    date: "12 Mar — 28 Jun 2026",
    location: "Hall A / Floor 02",
    curator: "Ines Vargas",
    longDesc: [
      "Concrete Dreams collides raw brutalist volumes with the dream-logic of surrealist painting. Visitors move through monolithic forms where shadow, fire, and figure dissolve into a single ritual space.",
      "The work asks what remains of architecture when it is asked to remember, to grieve, and to dance.",
    ],
  },
  {
    slug: "the-whispering-wire",
    title: "The Whispering Wire",
    desc: "Images translating fabulous atmospheres",
    code: "5S",
    img: ex02,
    category: "Print Series",
    date: "04 Apr — 19 May 2026",
    location: "Hall B / Floor 01",
    curator: "Hiro Tanaka",
    longDesc: [
      "A series of large-format prints where crimson clouds, lone moons, and migrating birds form a quiet, almost mythological weather report.",
      "Each image is a translation of sound into atmosphere.",
    ],
  },
];

export function getExhibition(slug: string) {
  return exhibitions.find((e) => e.slug === slug);
}