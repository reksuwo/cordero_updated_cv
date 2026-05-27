"use client";

type Props = {
  index: string;
  name: string;
  year: string;
  stack: string;
  blurb: string;
  href?: string;
};

export function ProjectRow({ index, name, year, stack, blurb, href = "#" }: Props) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="group block border border-rule-strong bg-background p-5 transition-colors hover:bg-foreground hover:text-background"
    >
      <div className="flex items-baseline justify-between gap-3 text-[11px] uppercase tracking-[0.18em] text-muted group-hover:text-background/70">
        <span>./{index}</span>
        <span>{year}</span>
      </div>
      <h3 className="mt-3 text-2xl tracking-tight sm:text-3xl">
        {name}
        <span className="ml-1 text-muted group-hover:text-background/50">_</span>
      </h3>
      <p className="mt-3 text-sm leading-6 text-foreground/70 group-hover:text-background/80">
        {blurb}
      </p>
      <div className="mt-5 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-muted group-hover:text-background/70">
        <span>{stack}</span>
        <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
          ↗
        </span>
      </div>
    </a>
  );
}
