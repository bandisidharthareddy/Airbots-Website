"use client";

import React, { useEffect, useState } from "react";
import FloodButton from "@/components/pear/FloodButton";
import { useTheme } from "next-themes";

export default function Footer() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isLight = mounted && resolvedTheme === "light";

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[var(--bg-secondary)] px-6 md:px-12 py-16 md:py-24 border-t border-hairline relative select-none overflow-hidden">
      {/* Background Watermark Monogram Emblem (pear.no style .ft-mark) */}
      <div className="absolute right-6 md:right-16 top-1/2 -translate-y-1/2 w-[340px] md:w-[600px] aspect-[4/1] opacity-[0.03] pointer-events-none select-none">
        <svg viewBox="0 0 160 40" fill="currentColor" className="w-full h-full text-[var(--text)]">
          <path d="M12 32L24 8L36 32H29L24 21L19 32H12Z" />
          <rect x="22" y="17" width="4" height="4" />
          <path d="M38 12L44 8H50L44 12H38Z" />
          <text
            x="52"
            y="27"
            fontFamily="'Space Grotesk', sans-serif"
            fontSize="18"
            fontWeight="800"
            letterSpacing="0.25em"
          >
            AIRBOTS
          </text>
          <circle cx="150" cy="22" r="3" />
        </svg>
      </div>

      {/* Fluid Cybernetic Refractive Glass Bounded Box Container */}
      <div className="fluid-glass relative w-full p-8 md:p-16 rounded-3xl md:rounded-[40px] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.5)] border border-[var(--border)]">
        {/* Editorial Tagline Lockup */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-hairline">
          <div>
            {/* Logos & Official Division Backing Pod */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-[var(--hover-bg)] border border-[var(--border)] backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.2)]">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-amber/40 shadow-[0_2px_8px_rgba(255,184,0,0.3)]">
                  <img
                    src="/assets/logos/airbots-logo.jpg"
                    alt="Airbots Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-sans font-bold text-xs tracking-wider text-[var(--text)]">AIRBOTS FOUNDRY</span>
              </div>

              <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-[var(--hover-bg)] border border-[var(--border)] backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.2)]">
                <img
                  src={isLight ? "/assets/logos/vnr-logo-black.png" : "/assets/logos/vnr-logo-white.png"}
                  alt="VNRVJIET Logo"
                  className="h-6 w-auto object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)] transition-opacity duration-300"
                />
                <div className="flex flex-col text-left">
                  <span className="font-mono text-[9px] tracking-wider text-amber font-semibold leading-none">
                    OFFICIAL INSTITUTIONAL BACKING
                  </span>
                  <span className="font-mono text-[8px] tracking-wider text-[var(--text-muted)] leading-none mt-0.5">
                    VNR VIGNANA JYOTHI INSTITUTE OF ENG. &amp; TECH.
                  </span>
                </div>
              </div>
            </div>

            <div className="font-mono text-[10px] tracking-[0.25em] text-amber uppercase mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber inline-block animate-pulse"></span>
              FOUNDRY ETHOS // 2025-2026
            </div>
            <h2 className="font-serif italic font-normal text-2xl sm:text-3xl md:text-5xl leading-tight text-[var(--text)] max-w-2xl">
              Not an after-hours hobby club, a{" "}
              <span className="text-amber">foundry for national supremacy.</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <FloodButton href="https://instagram.com/airbots_vnrvjiet">
              FOLLOW @AIRBOTS_VNRVJIET
            </FloodButton>
            <button
              onClick={scrollToTop}
              className="px-8 py-3.5 rounded-full liquid-glass anti-gravity hover:border-amber font-mono text-[12px] font-semibold tracking-[0.2em] uppercase text-[#FFFFFF] hover:text-amber transition-all duration-500 hover:scale-[1.04] active:scale-[0.97] cursor-pointer"
            >
              BACK TO APEX ↑
            </button>
          </div>
        </div>

        {/* Bottom Coordinates & Legal Telemetry */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--text-muted)]">
          <div className="flex items-center gap-3">
            <span className="text-amber font-bold">+</span>
            <span>AIRBOTS // DEPT. OF EIE, VNRVJIET</span>
          </div>

          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            <span className="text-[var(--text)] font-semibold">17.5385° N, 78.3860° E</span>
            <span>ROOM B-321, B-BLOCK</span>
            <span>HYDERABAD, TELANGANA</span>
            <span className="text-amber font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse"></span>
              STATUS: SYNCHRONIZED
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
