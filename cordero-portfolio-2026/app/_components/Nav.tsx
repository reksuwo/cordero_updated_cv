"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#clients", label: "Clients" },
  { href: "#stack", label: "Stack" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 80);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, y / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-9 z-30 transition-all duration-300 ${
        scrolled
          ? "border-b border-rule-strong bg-background/85 backdrop-blur"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 text-[11px] uppercase tracking-[0.18em] sm:px-8">
        <a href="#top" className="text-foreground">
          <span className="text-muted">~/</span>derek
          <span className="caret" />
        </a>
        <ul className="hidden gap-1 sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="inline-flex items-center px-3 py-1 text-muted transition-colors hover:text-foreground hover:underline underline-offset-4"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="border border-rule-strong px-3 py-1 text-foreground transition-colors hover:bg-foreground hover:text-background"
        >
          Let&apos;s talk
        </a>
      </div>
      <div className="h-px w-full bg-rule">
        <div
          className="h-px bg-foreground transition-[width] duration-150 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </nav>
  );
}
