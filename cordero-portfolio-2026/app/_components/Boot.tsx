"use client";

import { useEffect, useState } from "react";

const lines = [
  "[ OK ] Mounting /portfolio",
  "[ OK ] Loading ./derek-cordero",
  "[ OK ] Brewing ./coffee.sh",
  "[ OK ] Compiling experience.log",
  "[ OK ] Resolving projects/*",
  "[ OK ] Ready.",
];

export function Boot() {
  const [shown, setShown] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (shown >= lines.length) {
      const t = setTimeout(() => setDone(true), 350);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setShown((n) => n + 1), 140);
    return () => clearTimeout(t);
  }, [shown]);

  if (done) return null;

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-[60] flex items-center justify-center bg-background p-8 font-mono text-sm leading-7 text-foreground sm:p-12"
      style={{ transition: "opacity 350ms ease", opacity: shown >= lines.length ? 0 : 1 }}
    >
      <div className="flex w-full max-w-md flex-col items-start gap-1">
        <p className="mb-4 text-muted">derek@cordero:~$ ./boot.sh</p>
        {lines.slice(0, shown).map((l, i) => (
          <p
            key={i}
            className="animate-boot-line"
            style={i === shown - 1 ? undefined : { animation: "none" }}
          >
            {l.startsWith("[ OK ]") ? (
              <>
                <span className="text-muted">[</span>
                <span className="px-0.5 text-foreground"> OK </span>
                <span className="text-muted">]</span>
                <span className="ml-2 text-foreground/80">{l.slice(7)}</span>
              </>
            ) : (
              l
            )}
          </p>
        ))}
        {shown < lines.length && <span className="caret" />}
      </div>
    </div>
  );
}
