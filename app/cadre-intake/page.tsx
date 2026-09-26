"use client";

import React from "react";
import Link from "next/link";

export default function CadreIntakePage() {
  return (
    <div className="min-h-screen w-full bg-[#0A0B0E] text-[#E8D8B8] relative overflow-hidden select-none flex flex-col justify-between items-center p-4 sm:p-8 md:p-12">
      {/* Lithograph Halftone, Vintage Vignette, and Grain Noise Layers */}
      <div className="absolute inset-0 halftone-litho pointer-events-none opacity-60 z-0"></div>
      <div className="absolute inset-0 vintage-vignette pointer-events-none z-10"></div>
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none z-0"></div>

      {/* Dramatic Sunburst Beams / Metropolis Forced Perspective Rays */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-25">
        <svg
          viewBox="0 0 1000 1000"
          className="w-full h-full object-cover text-[#C5A059]"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.75"
        >
          {/* Symmetrical Sunburst radiating from bottom-center */}
          <line x1="500" y1="1000" x2="0" y2="0" />
          <line x1="500" y1="1000" x2="100" y2="0" />
          <line x1="500" y1="1000" x2="200" y2="0" />
          <line x1="500" y1="1000" x2="300" y2="0" />
          <line x1="500" y1="1000" x2="400" y2="0" />
          <line x1="500" y1="1000" x2="500" y2="0" />
          <line x1="500" y1="1000" x2="600" y2="0" />
          <line x1="500" y1="1000" x2="700" y2="0" />
          <line x1="500" y1="1000" x2="800" y2="0" />
          <line x1="500" y1="1000" x2="900" y2="0" />
          <line x1="500" y1="1000" x2="1000" y2="0" />
          <line x1="500" y1="1000" x2="0" y2="250" />
          <line x1="500" y1="1000" x2="1000" y2="250" />
          <line x1="500" y1="1000" x2="0" y2="500" />
          <line x1="500" y1="1000" x2="1000" y2="500" />
          <line x1="500" y1="1000" x2="0" y2="750" />
          <line x1="500" y1="1000" x2="1000" y2="750" />
        </svg>
      </div>

      {/* Stepped Monolithic Towers Silhouettes (Art Deco Metropolis Skyline) */}
      <div className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none opacity-20 flex justify-between items-end px-4 z-0">
        {/* Left Monoliths */}
        <div className="flex items-end gap-1.5 sm:gap-3">
          <div className="w-8 sm:w-16 h-36 border-t-2 border-r-2 border-[#C5A059] bg-[#0A0B0E]/80"></div>
          <div className="w-10 sm:w-20 h-52 border-t-2 border-r-2 border-[#C5A059] bg-[#0A0B0E]/80"></div>
          <div className="w-12 sm:w-24 h-64 border-t-2 border-r-2 border-[#C5A059] bg-[#0A0B0E]/80"></div>
        </div>
        {/* Right Monoliths */}
        <div className="flex items-end gap-1.5 sm:gap-3">
          <div className="w-12 sm:w-24 h-64 border-t-2 border-l-2 border-[#C5A059] bg-[#0A0B0E]/80"></div>
          <div className="w-10 sm:w-20 h-52 border-t-2 border-l-2 border-[#C5A059] bg-[#0A0B0E]/80"></div>
          <div className="w-8 sm:w-16 h-36 border-t-2 border-l-2 border-[#C5A059] bg-[#0A0B0E]/80"></div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* VINTAGE ART DECO POSTER FRAMEWORK                                         */}
      {/* ========================================================================= */}
      <div className="relative z-20 w-full max-w-5xl my-auto border-2 border-[#C5A059]/70 p-4 sm:p-8 md:p-12 bg-[#0E0F14]/90 backdrop-blur-md shadow-[0_0_60px_rgba(0,0,0,0.9),0_0_30px_rgba(197,160,89,0.15)]">
        {/* Concentric Inner Pinstripe Border */}
        <div className="absolute inset-2 sm:inset-3 border border-[#C5A059]/30 pointer-events-none"></div>
        <div className="absolute inset-3 sm:inset-5 border border-[#3E7B73]/40 pointer-events-none"></div>

        {/* Art Deco Symmetrical Corner Ornaments */}
        <div className="absolute -top-3 -left-3 w-8 h-8 border-t-4 border-l-4 border-[#D4AF37]"></div>
        <div className="absolute -top-3 -right-3 w-8 h-8 border-t-4 border-r-4 border-[#D4AF37]"></div>
        <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-4 border-l-4 border-[#D4AF37]"></div>
        <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-4 border-r-4 border-[#D4AF37]"></div>

        {/* Top Header Banner: 1920s Typographic Header */}
        <div className="text-center pb-6 sm:pb-8 border-b border-[#C5A059]/40 relative">
          <div className="flex items-center justify-center gap-4 text-[#C5A059] mb-2">
            <span className="h-[1px] w-12 sm:w-28 bg-[#C5A059]/50"></span>
            <span className="font-cinzel text-xs sm:text-sm tracking-[0.35em] uppercase text-[#D4AF37]">
              BULLETIN NO. MCMXXVI // DEPT. EIE
            </span>
            <span className="h-[1px] w-12 sm:w-28 bg-[#C5A059]/50"></span>
          </div>

          <h2 className="font-deco text-2xl sm:text-4xl md:text-5xl tracking-[0.25em] uppercase brass-gradient-text drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            AIRBOTS AUTOMATON FOUNDRY
          </h2>

          <div className="flex items-center justify-center gap-3 font-cinzel text-[10px] sm:text-xs tracking-[0.3em] text-[#3E7B73] uppercase mt-1">
            <span>HYDERABAD DIVISION</span>
            <span>◆</span>
            <span>VNRVJIET CAMPUS</span>
            <span>◆</span>
            <span>EST. MCMXXVI</span>
          </div>
        </div>

        {/* Centerpiece: Symmetrical Mechanical Cog & Stepped Monolith */}
        <div className="py-10 sm:py-14 text-center relative flex flex-col items-center">
          {/* Mechanical Cog & Piston Iconography */}
          <div className="relative mb-8 select-none">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 border-dashed border-[#C5A059]/60 flex items-center justify-center relative animate-[spin_40s_linear_infinite]">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#3E7B73] flex items-center justify-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 border border-[#D4AF37] rotate-45"></div>
              </div>
            </div>

            {/* Static Mechanical Crossbars */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="w-36 sm:w-44 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="h-36 sm:h-44 w-[1px] bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent"></span>
            </div>
          </div>

          {/* Stepped Art Deco Badge */}
          <div className="inline-block px-6 py-1.5 mb-6 border-y-2 border-[#C5A059] bg-[#14151C]/90 font-cinzel text-xs sm:text-sm tracking-[0.35em] text-[#D4AF37] uppercase">
            OPERATIONAL STATUS // TRANSMISSION SEALED
          </div>

          {/* Imposing Primary Headline */}
          <h1 className="font-deco text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.08em] uppercase text-[#FFF7E6] deco-forced-perspective max-w-4xl leading-[0.95] mb-6 px-2">
            THE FOUNDRY IS AT MAXIMUM CAPACITY
          </h1>

          {/* Symmetrical Art Deco Divider Ornament */}
          <div className="w-full max-w-md flex items-center justify-center gap-3 my-4">
            <span className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent"></span>
            <div className="w-3 h-3 border border-[#D4AF37] rotate-45 bg-[#0E0F14]"></div>
            <div className="w-2 h-2 bg-[#3E7B73] rotate-45"></div>
            <div className="w-3 h-3 border border-[#D4AF37] rotate-45 bg-[#0E0F14]"></div>
            <span className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent"></span>
          </div>

          {/* Thematic Subtext */}
          <p className="font-cinzel text-sm sm:text-base md:text-lg leading-relaxed text-[#D8C7A5] max-w-2xl mx-auto px-4 mt-4 tracking-[0.08em]">
            Current cadre assembly is locked. Our production lines and combat
            divisions are fully manned for the current cycle. Cease transmission
            and await the next operational intake.
          </p>

          {/* Telemetry Gauge Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 mt-10 pt-8 border-t border-[#C5A059]/20 w-full max-w-2xl font-mono text-[10px] sm:text-xs tracking-[0.2em] text-[#A69779] uppercase">
            <div className="p-2 border border-[#C5A059]/20 bg-[#121319]">
              <span className="text-[#3E7B73] block mb-1">PISTONS</span>
              <span className="text-[#D4AF37] font-bold">ENGAGED</span>
            </div>
            <div className="p-2 border border-[#C5A059]/20 bg-[#121319]">
              <span className="text-[#3E7B73] block mb-1">ASSEMBLY</span>
              <span className="text-[#D4AF37] font-bold">100% MANNED</span>
            </div>
            <div className="p-2 border border-[#C5A059]/20 bg-[#121319]">
              <span className="text-[#3E7B73] block mb-1">PRESSURE</span>
              <span className="text-[#D4AF37] font-bold">MAX LOAD</span>
            </div>
            <div className="p-2 border border-[#C5A059]/20 bg-[#121319]">
              <span className="text-[#3E7B73] block mb-1">NEXT CYCLE</span>
              <span className="text-[#D4AF37] font-bold">PENDING</span>
            </div>
          </div>
        </div>

        {/* Bottom Navigation & Action */}
        <div className="pt-6 sm:pt-8 border-t border-[#C5A059]/40 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="font-cinzel text-xs tracking-[0.2em] text-[#8C7A59] text-center sm:text-left uppercase">
            <span>OFFICIAL NOTICE // FOUNDRY B-321</span>
            <span className="block text-[10px] text-[#3E7B73] mt-0.5">
              AUTONOMOUS COMBAT &amp; FLUID KINETICS
            </span>
          </div>

          {/* Return Button styled with Art Deco stepped geometry */}
          <Link
            href="/"
            className="group relative inline-flex items-center gap-3 px-8 py-3.5 border-2 border-[#D4AF37] bg-[#1A1814] text-[#FFF4D4] font-deco text-lg sm:text-xl tracking-[0.2em] uppercase hover:bg-[#D4AF37] hover:text-[#0A0B0E] transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] cursor-pointer"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1 text-[#D4AF37] group-hover:text-[#0A0B0E]">
              ←
            </span>
            <span>RETURN TO ARSENAL</span>
          </Link>
        </div>
      </div>

      {/* Bottom Poster Footnote */}
      <div className="relative z-20 mt-6 text-center font-cinzel text-[10px] tracking-[0.3em] text-[#C5A059]/60 uppercase">
        CONSTRUCTED UNDER DIRECTIVE MCMXXVI // AIRBOTS VNRVJIET
      </div>
    </div>
  );
}
