import { Link } from "@tanstack/react-router";

const links = [
  { to: "/" as const, label: "Exhibitions" },
  { to: "/store" as const, label: "Store" },
  { to: "/about" as const, label: "About" },
  { to: "/ranking" as const, label: "Ranking" },
];

const right = [
  { to: "/contacts" as const, label: "Contacts" },
  { to: "/blog" as const, label: "Blog" },
  { to: "/privacy" as const, label: "Privacy" },
];

export function Header() {
  return (
    <header className="border-b border-foreground/80 sticky top-0 bg-background z-50">
      <div className="grid grid-cols-3 items-center px-3 md:px-4 py-3 text-[9px] md:text-[10px] uppercase tracking-[0.18em]">
        <nav className="flex gap-3 md:gap-5 overflow-hidden">
          {links.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              className={`hover:opacity-60 ${i > 0 ? "hidden sm:inline" : ""}`}
              activeProps={{ className: "font-bold underline underline-offset-4" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link to="/" className="text-center font-bold tracking-[0.25em] md:tracking-[0.3em] text-[10px] md:text-xs">
          NEIROVISION
        </Link>
        <nav className="flex justify-end items-center gap-3 md:gap-5">
          {right.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="hover:opacity-60 hidden md:inline"
              activeProps={{ className: "font-bold underline underline-offset-4" }}
            >
              {l.label}
            </Link>
          ))}
          <span className="flex gap-3 md:ml-2">
            <Link to="/contacts" aria-label="Mail">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="5" width="18" height="14"/><path d="M3 5l9 8 9-8"/></svg>
            </Link>
            <button aria-label="Search">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>
            </button>
          </span>
        </nav>
      </div>
    </header>
  );
}

export function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      <section className="px-4 pt-10 pb-6 border-b border-foreground/80">
        <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/60">{eyebrow}</p>
        <h1
          className="mt-3 font-display lowercase leading-[0.88] tracking-[-0.04em]"
          style={{ fontSize: "clamp(2.5rem, 11vw, 11rem)" }}
        >
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-sm md:text-base uppercase tracking-wide text-foreground/75">
            {intro}
          </p>
        )}
      </section>
      {children}
    </main>
  );
}
