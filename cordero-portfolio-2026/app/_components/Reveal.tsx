"use client";

import { createElement, useEffect, useRef, type ReactNode } from "react";

type Tag = "div" | "section" | "li" | "article" | "header" | "footer";

type Props = {
  children: ReactNode;
  delay?: number;
  as?: Tag;
  className?: string;
};

export function Reveal({
  children,
  delay = 0,
  as = "div",
  className = "",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            node.classList.add("is-visible");
            obs.unobserve(node);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );

    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return createElement(
    as,
    {
      ref,
      className: `reveal ${className}`,
      style: delay ? { transitionDelay: `${delay}ms` } : undefined,
    },
    children
  );
}
