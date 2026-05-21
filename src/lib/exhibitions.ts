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
    slug: "vonis-akbp-basuki-semarang",
    title: "Oknum Polisi Divonis 6 Tahun",
    desc: "AKBP Basuki divonis enam tahun penjara.",
    code: "26S",
    img: ex01,
    category: "Kriminal",
    date: "21 Mei 2026",
    location: "PN Semarang",
    curator: "ANTARA",
    longDesc: [
      "Pengadilan Negeri Semarang menjatuhkan hukuman enam tahun penjara kepada AKBP Basuki dalam kasus kematian dosen perempuan berinisial DL.",

      "Majelis hakim menilai terdakwa mengabaikan kondisi korban yang membutuhkan pertolongan medis hingga akhirnya meninggal dunia.",
    ],
  },

  {
    slug: "vonis-robig-semarang",
    title: "PN Semarang Vonis Robig",
    desc: "Robig dihukum 15 tahun penjara.",
    code: "15S",
    img: ex02,
    category: "Kriminal",
    date: "08 Agt 2025",
    location: "PN Semarang",
    curator: "DANDAPALA",
    longDesc: [
      "Majelis hakim PN Semarang menyatakan Robig Zaenudin terbukti melakukan kekerasan terhadap anak yang mengakibatkan korban meninggal dunia dan luka.",

      "Terdakwa dijatuhi hukuman 15 tahun penjara serta denda Rp200 juta setelah penembakan yang menewaskan seorang pelajar di Semarang.",
    ],
  },
];

export function getExhibition(slug: string) {
  return exhibitions.find((e) => e.slug === slug);
}