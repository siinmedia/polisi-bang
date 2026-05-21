import { exhibitions } from "@/lib/exhibitions";

export type Post = {
  slug: string;
  kicker: string;
  title: string;
  author: string;
  date: string;
  read: string;
  excerpt: string;
  /** Optional: override cover image. Falls back to matching exhibition image by slug. */
  image?: string;
  /** Optional: long-form body, each item is a paragraph. */
  body?: string[];
};

/**
 * Tambahkan postingan baru di sini.
 * Cukup tambahkan satu object baru ke array `posts`, blog & halaman detail
 * akan otomatis terupdate.
 */
export const posts: Post[] = [
  {
    slug: "concrete-dreams",
    kicker: "Field Notes",
    title: "Walking through Concrete Dreams",
    author: "Ines Vargas",
    date: "12 Mar 2026",
    read: "6 min",
    excerpt: "On the strange choreography of brutalist halls and the dancers we placed inside them.",
    body: [
      "We began with the assumption that brutalism is loud. After three months inside the halls, we learned the opposite — it is the quietest material we have ever worked with.",
      "The dancers responded by slowing down. The architecture set the tempo.",
    ],
  },
];

export function imageFor(slug: string): string | undefined {
  const post = posts.find((p) => p.slug === slug);
  if (post?.image) return post.image;
  return exhibitions.find((e) => e.slug === slug)?.img;
}

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
