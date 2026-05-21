import { useState, useMemo } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site-header";
import { SearchBar } from "@/components/search-bar";
import { posts, imageFor } from "@/lib/posts";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Berita — polisibang.site" },
      {
        name: "description",
        content: "Kumpulan berita kriminal, persidangan, dan laporan terbaru dari berbagai wilayah.",
      },
      { property: "og:title", content: "Berita — polisibang.site" },
      {
        property: "og:description",
        content: "Kumpulan berita kriminal, persidangan, dan laporan terbaru dari berbagai wilayah.",
      },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    if (!q) return posts;

    return posts.filter((p) =>
      [p.title, p.excerpt, p.author, p.kicker]
        .join(" ")
        .toLowerCase()
        .includes(q),
    );
  }, [query]);

  const [featured, ...rest] = filtered;

  return (
    <PageShell
      eyebrow="NEWS / 2026"
      title="berita"
      intro="Informasi terbaru mengenai kriminal, persidangan, dan laporan hukum dari berbagai daerah."
    >
      <SearchBar
        value={query}
        onChange={setQuery}
        placeholder="Cari berita..."
        resultCount={filtered.length}
        totalCount={posts.length}
      />

      {filtered.length === 0 && (
        <section className="px-4 py-24 text-center">
          <p className="text-[11px] uppercase tracking-[0.25em] text-foreground/60">
            Berita tidak ditemukan.
          </p>
        </section>
      )}

      {featured && (
        <section className="border-b border-foreground/80 px-4 py-10">
          <Link
            to="/exhibition/$slug"
            params={{ slug: featured.slug }}
            className="group grid grid-cols-1 gap-6 md:grid-cols-12"
          >
            <div className="aspect-[4/3] overflow-hidden bg-foreground/5 md:col-span-7">
              <img
                src={imageFor(featured.slug)}
                alt={featured.title}
                className="img-mono h-full w-full object-cover group-hover:scale-[1.02]"
              />
            </div>

            <div className="flex flex-col justify-end md:col-span-5">
              <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/60">
                {featured.kicker} · Utama
              </p>

              <h2
                className="mt-3 font-display uppercase leading-[0.95] tracking-tight"
                style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
              >
                {featured.title}
              </h2>

              <p className="mt-4 text-sm text-foreground/80 md:text-base">
                {featured.excerpt}
              </p>

              <p className="mt-5 text-[10px] uppercase tracking-[0.18em] text-foreground/60">
                {featured.author} · {featured.date} · {featured.read}
              </p>
            </div>
          </Link>
        </section>
      )}

      {rest.length > 0 && (
        <section className="px-4 py-10">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-3">
            {rest.map((p) => (
              <Link
                key={p.slug}
                to="/exhibition/$slug"
                params={{ slug: p.slug }}
                className="group flex flex-col"
              >
                <div className="aspect-[4/5] overflow-hidden bg-foreground/5">
                  <img
                    src={imageFor(p.slug)}
                    alt={p.title}
                    loading="lazy"
                    className="img-mono h-full w-full object-cover group-hover:scale-[1.03]"
                  />
                </div>

                <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-foreground/60">
                  {p.kicker}
                </p>

                <h3 className="mt-1 font-display uppercase text-xl leading-tight md:text-2xl">
                  {p.title}
                </h3>

                <p className="mt-2 text-sm text-foreground/75">
                  {p.excerpt}
                </p>

                <p className="mt-3 text-[10px] uppercase tracking-[0.18em] text-foreground/60">
                  {p.author} · {p.date} · {p.read}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </PageShell>
  );
}