"use client";

import React, { useEffect, useState } from "react";

export default function TelemetryRuler() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const progress = Math.min(
        100,
        Math.max(0, Math.round((window.scrollY / totalHeight) * 100))
      );
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Generate 25 calibrated ticks
  const tickCount = 25;

  return (
    <div
      aria-hidden="true"
      className="hidden 2xl:flex fixed left-3 top-1/2 -translate-y-1/2 z-40 flex-col items-center select-none pointer-events-none"
    >
      <div className="relative flex flex-col items-end gap-[6px] py-4">
        {Array.from({ length: tickCount }).map((_, i) => {
          const isMajor = i % 5 === 0;
          const isActive = (i / (tickCount - 1)) * 100 <= scrollProgress;
          return (
            <div
              key={i}
              className={`transition-all duration-200 ${
                isMajor ? "w-4 h-[1.5px]" : "w-2 h-[1px]"
              } ${
                isActive
                  ? "bg-amber opacity-90 shadow-[0_0_6px_rgba(255,184,0,0.5)]"
                  : "bg-[var(--text)]/20 opacity-40"
              }`}
            />
          );
        })}

        {/* Live Head Percentage Readout */}
        <div
          className="absolute -right-12 font-mono text-[9px] text-amber font-semibold tracking-wider transition-all duration-150"
          style={{
            top: `${scrollProgress}%`,
            transform: "translateY(-50%)",
          }}
        >
          [{scrollProgress}%]
        </div>
      </div>
    </div>
  );
}
