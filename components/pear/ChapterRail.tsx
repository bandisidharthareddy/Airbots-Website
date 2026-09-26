"use client";

import React, { useEffect, useState } from "react";
import Magnetic from "@/components/Magnetic";

interface Chapter {
  id: string;
  num: string;
  title: string;
}

const CHAPTERS: Chapter[] = [
  { id: "fleet", num: "01", title: "The Fleet" },
  { id: "arena", num: "02", title: "The Ledger" },
  { id: "turf", num: "03", title: "Home Turf" },
  { id: "cadre", num: "04", title: "The Cadre" },
];

export default function ChapterRail() {
  const [activeChapter, setActiveChapter] = useState<string>("fleet");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      for (const ch of CHAPTERS) {
        const el = document.getElementById(ch.id);
        if (el) {
          const top = el.offsetTop - 200;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveChapter(ch.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      aria-label="Chapters"
      className="hidden xl:flex fixed right-4 top-1/2 -translate-y-1/2 z-50 flex-col gap-6 select-none font-mono text-[10px] tracking-[0.2em] uppercase"
    >
      {CHAPTERS.map((ch) => {
        const isActive = activeChapter === ch.id;
        return (
          <Magnetic key={ch.id} radius={40}>
            <a
              href={`#${ch.id}`}
              onClick={(e) => scrollToSection(ch.id, e)}
              className={`group flex items-center justify-end gap-3 transition-colors duration-300 ${
                isActive ? "text-[var(--text)]" : "text-[var(--text-dim)] hover:text-[var(--text-muted)]"
              }`}
            >
              {/* Title shown on hover or when active */}
              <span
                className={`transition-all duration-300 ${
                  isActive
                    ? "opacity-100 translate-x-0 font-semibold text-amber pulsing-gold-tag"
                    : "opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                }`}
              >
                Ch. {ch.num} // {ch.title}
              </span>

              {/* Indicator dash / pill */}
              <span
                className={`h-[3px] rounded-full transition-all duration-300 ${
                  isActive
                    ? "w-8 bg-amber shadow-[0_0_12px_rgba(255,184,0,0.8)]"
                    : "w-3 bg-[var(--text)]/20 group-hover:w-5 group-hover:bg-[var(--text)]/40"
                }`}
              />
            </a>
          </Magnetic>
        );
      })}
    </nav>
  );
}
