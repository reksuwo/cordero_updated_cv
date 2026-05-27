"use client";

import { useEffect, useState } from "react";

export function StatusBar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: "Asia/Manila",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-40 border-b border-rule-strong bg-background/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-2 text-[11px] uppercase tracking-[0.15em] text-muted sm:px-8">
        <span className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
            <span className="hidden sm:inline">derek@cordero</span>
            <span className="sm:hidden">derek</span>
          </span>
          <span className="text-subtle">:</span>
          <span>~/portfolio</span>
        </span>
        <span className="hidden flex-1 px-6 text-center text-foreground/70 sm:block">
          <span className="text-foreground">●</span> AVAILABLE — WEB DEV / FULL-STACK
        </span>
        <span className="tabular-nums">
          {time || "--:--:--"} <span className="text-subtle">MNL</span>
        </span>
      </div>
    </div>
  );
}
