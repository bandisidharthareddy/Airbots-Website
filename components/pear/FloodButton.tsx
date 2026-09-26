"use client";

import React from "react";

interface FloodButtonProps {
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  children: React.ReactNode;
  className?: string;
}

export default function FloodButton({
  href = "#",
  onClick,
  children,
  className = "",
}: FloodButtonProps) {
  const content = (
    <>
      {/* Base Layer */}
      <span className="relative z-10 flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-mono text-[12px] font-semibold tracking-[0.2em] uppercase text-[#FFFFFF] transition-colors duration-300">
        {children}
        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5 text-amber">
          →
        </span>
      </span>

      {/* Flood Wipe Layer */}
      <span
        aria-hidden="true"
        className="absolute inset-0 z-20 flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-amber font-mono text-[12px] font-bold tracking-[0.2em] uppercase text-[#0A0A0A] transition-all duration-400 ease-out [clip-path:inset(100%_0_0_0)] group-hover:[clip-path:inset(0%_0_0_0)]"
      >
        {children}
        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5 text-[#0A0A0A]">
          →
        </span>
      </span>
    </>
  );

  const baseClasses = `group relative inline-block overflow-hidden rounded-full liquid-glass anti-gravity hover:border-amber transition-all duration-500 hover:scale-[1.04] active:scale-[0.97] cursor-pointer select-none ${className}`;

  if (href.startsWith("#") || href.startsWith("/")) {
    return (
      <a href={href} onClick={onClick} className={baseClasses}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={baseClasses}>
      {content}
    </button>
  );
}
