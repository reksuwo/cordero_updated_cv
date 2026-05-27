"use client";

import { useEffect, useState } from "react";

type Props = {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  caret?: boolean;
};

export function TypedText({
  text,
  delay = 0,
  speed = 35,
  className = "",
  caret = false,
}: Props) {
  const [i, setI] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (i >= text.length) return;
    const t = setTimeout(() => setI((n) => n + 1), speed);
    return () => clearTimeout(t);
  }, [started, i, text, speed]);

  return (
    <span className={className}>
      {text.slice(0, i)}
      {caret && i < text.length && <span className="caret" />}
    </span>
  );
}
