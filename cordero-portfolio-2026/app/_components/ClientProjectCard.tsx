type Props = {
  index: string;
  name: string;
  year: string;
  stack: string;
  blurb: string;
  href: string;
};

export function ClientProjectCard({
  index,
  name,
  year,
  stack,
  blurb,
  href,
}: Props) {
  const shotUrl = `https://s.wordpress.com/mshots/v1/${encodeURIComponent(
    href
  )}?w=1280&h=800`;
  const displayUrl = href
    .replace(/^https?:\/\//, "")
    .replace(/\/$/, "")
    .replace(/\/.*$/, "");

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden border border-rule-strong bg-background transition-colors hover:border-foreground"
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-3 border-b border-rule-strong bg-rule/40 px-3 py-2">
        <span className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full border border-rule-strong" />
          <span className="h-2 w-2 rounded-full border border-rule-strong" />
          <span className="h-2 w-2 rounded-full border border-rule-strong" />
        </span>
        <span className="flex flex-1 items-center gap-1.5 truncate rounded-sm border border-rule-strong bg-background px-2 py-0.5 text-[10px] tracking-wider text-muted">
          <span className="text-subtle">https://</span>
          <span className="truncate">{displayUrl}</span>
        </span>
        <span className="hidden text-[10px] uppercase tracking-[0.18em] text-muted sm:inline">
          ./{index}
        </span>
      </div>

      {/* Screenshot */}
      <div className="relative aspect-[16/10] overflow-hidden bg-rule">
        {/* loading shimmer (visible until image paints over it) */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0 8px, transparent 8px 16px)",
          }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={shotUrl}
          alt={`${name} — live screenshot`}
          loading="lazy"
          className="relative h-full w-full object-cover object-top grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-[1.03]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-foreground/5 transition-opacity duration-500 group-hover:opacity-0"
        />
        <span className="pointer-events-none absolute right-3 top-3 inline-flex items-center gap-1 border border-rule-strong bg-background/80 px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] text-muted backdrop-blur">
          <span className="h-1 w-1 rounded-full bg-foreground" />
          live
        </span>
      </div>

      {/* Meta */}
      <div className="space-y-3 border-t border-rule-strong p-4">
        <div className="flex items-baseline justify-between gap-3 text-[11px] uppercase tracking-[0.18em] text-muted">
          <span>{stack}</span>
          <span>{year}</span>
        </div>
        <h3 className="text-xl tracking-tight">
          {name}
          <span className="text-muted">_</span>
        </h3>
        <p className="text-sm leading-6 text-foreground/70">{blurb}</p>
        <div className="flex items-center justify-between border-t border-rule-strong pt-3 text-[11px] uppercase tracking-[0.18em] text-muted">
          <span>view live site</span>
          <span
            aria-hidden
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            ↗
          </span>
        </div>
      </div>
    </a>
  );
}
