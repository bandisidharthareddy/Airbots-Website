"use client";

import React, { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import Magnetic from "@/components/Magnetic";
import { useTheme } from "next-themes";

export default function Header() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isLight = mounted && resolvedTheme === "light";

  const navItems = [
    { label: "FLEET", href: "#fleet" },
    { label: "ARENA", href: "#arena" },
    { label: "TURF", href: "#turf" },
    { label: "CADRE", href: "#cadre" },
  ];

  return (
    <header className="fixed top-3.5 left-4 right-4 md:left-8 md:right-8 z-[100] h-[72px] rounded-full px-4 sm:px-8 flex justify-between items-center transition-all fluid-glass border border-[var(--border)] backdrop-blur-[24px]">
      {/* Left Side: Brand Visual Anchor & VNR Integration */}
      <div className="flex items-center gap-3 sm:gap-5">
        <Magnetic radius={35}>
          <a
            href="#"
            className="flex items-center gap-3 group select-none"
            aria-label="Airbots Home"
          >
            {/* Airbots Logo Primary Anchor */}
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-amber/50 shadow-[0_4px_16px_rgba(255,184,0,0.4)] transition-transform duration-300 group-hover:scale-105">
              <img
                src="/assets/logos/airbots-logo.jpg"
                alt="Airbots Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-lg sm:text-xl font-black tracking-[0.15em] text-[var(--text)] group-hover:text-amber transition-colors leading-none flex items-center gap-1.5">
                AIRBOTS
                <span className="w-1.5 h-1.5 rounded-full bg-amber inline-block animate-pulse"></span>
              </span>
              <span className="font-mono text-[9px] tracking-[0.18em] text-[var(--text-muted)] uppercase mt-1 leading-none">
                17.5385° N, 78.3860° E
              </span>
            </div>
          </a>
        </Magnetic>

        {/* VNR Logo in Nested Fluid Glass Pill with Contextual Asset Swapping */}
        <div className="hidden xl:flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[var(--hover-bg)] border border-[var(--border)] backdrop-blur-md shadow-[0_2px_10px_rgba(0,0,0,0.1)] transition-colors">
          <img
            src={isLight ? "/assets/logos/vnr-logo-black.png" : "/assets/logos/vnr-logo-white.png"}
            alt="VNRVJIET Official Division"
            className="h-5 w-auto object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.2)] transition-opacity duration-300"
          />
          <div className="flex flex-col text-left">
            <span className="font-mono text-[8px] tracking-wider text-amber font-semibold leading-none">
              OFFICIAL DIVISION
            </span>
            <span className="font-mono text-[8px] tracking-wider text-[var(--text-muted)] leading-none mt-0.5">
              VNRVJIET // B-321
            </span>
          </div>
        </div>
      </div>

      {/* Center: Primary Navigation with Fluid Pill Hover */}
      <nav className="hidden md:flex items-center gap-2 lg:gap-4 p-1.5 rounded-full bg-[var(--hover-bg)] border border-[var(--border)] backdrop-blur-sm">
        {navItems.map((item) => (
          <Magnetic key={item.label} radius={35}>
            <a
              href={item.href}
              className="font-sans text-[14px] font-semibold tracking-[0.12em] uppercase text-[var(--text-muted)] hover:text-[var(--text)] px-4 py-1.5 rounded-full hover:bg-[var(--hover-bg)] hover:shadow-[0_0_15px_rgba(255,184,0,0.15)] transition-all duration-300"
            >
              {item.label}
            </a>
          </Magnetic>
        ))}
      </nav>

      {/* Right Side: Glowing Pill Join Button & Theme Toggle */}
      <div className="flex items-center gap-3 sm:gap-4">
        <Magnetic radius={35}>
          <a
            href="/cadre-intake"
            className="px-6 py-2 rounded-full font-mono text-[12px] font-bold tracking-[0.2em] uppercase text-[var(--text)] liquid-glass anti-gravity hover:border-amber hover:shadow-[0_0_28px_rgba(255,184,0,0.55)] transition-all duration-300 flex items-center gap-2 select-none"
          >
            <span>JOIN</span>
            <span className="text-amber">→</span>
          </a>
        </Magnetic>

        <Magnetic radius={30}>
          <div className="inline-block">
            <ThemeToggle />
          </div>
        </Magnetic>
      </div>
    </header>
  );
}
