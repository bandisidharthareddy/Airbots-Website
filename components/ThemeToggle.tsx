"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white/40">
        <Sun size={16} />
      </div>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="relative w-10 h-10 rounded-full border border-[var(--border)] hover:border-amber/80 bg-[var(--hover-bg)] hover:bg-[var(--surface-card)] text-[var(--text-muted)] hover:text-[var(--text)] transition-all duration-300 flex items-center justify-center cursor-pointer group shadow-[0_2px_10px_rgba(0,0,0,0.1)]"
    >
      {isDark ? (
        <Sun size={17} className="group-hover:text-amber group-hover:rotate-45 transition-transform duration-300" />
      ) : (
        <Moon size={17} className="group-hover:text-amber group-hover:-rotate-12 transition-transform duration-300" />
      )}
    </button>
  );
}
