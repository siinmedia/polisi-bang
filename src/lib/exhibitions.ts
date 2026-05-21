import ex01 from "@/assets/ex-01.jpg";

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
    desc: "Pengadilan Negeri Semarang menjatuhkan hukuman enam tahun penjara terhadap AKBP Basuki dalam kasus kematian seorang dosen perempuan.",
    code: "NEWS26",
    img: ex01,
    category: "Kriminal",
    date: "21 Mei 2026",
    location: "Pengadilan Negeri Semarang",
    curator: "ANTARA News",
    longDesc: [
      "Pengadilan Negeri Kota Semarang menjatuhkan hukuman enam tahun penjara kepada AKBP Basuki, seorang anggota Polri aktif yang menjadi terdakwa dalam kasus kematian perempuan dosen berinisial DL. Putusan yang dibacakan Hakim Ketua Achmad Rasjid tersebut lebih berat dibanding tuntutan jaksa penuntut umum yang sebelumnya meminta hukuman lima tahun penjara.",
      
      "Majelis hakim menyatakan terdakwa terbukti melanggar Pasal 474 Ayat 3 KUHP tentang kealpaan yang mengakibatkan kematian seseorang. Dalam pertimbangannya, hakim menilai terdakwa mengetahui korban berada dalam kondisi darurat namun tidak memberikan pertolongan maupun akses medis yang dapat menyelamatkan nyawa korban. Setelah putusan dibacakan, terdakwa menyatakan banding sementara pihak penuntut umum masih mempertimbangkan langkah hukum lanjutan."
    ],
  },
];

export function getExhibition(slug: string) {
  return exhibitions.find((e) => e.slug === slug);
}