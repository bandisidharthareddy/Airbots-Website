"use client";

import React from "react";
import CylindricalCarousel from "@/components/pear/CylindricalCarousel";

interface LedgerRecord {
  code: string;
  name: string;
  category: string;
  venue: string;
  result: string;
  isFirstPlace?: boolean;
}

const LEDGER_DATA: LedgerRecord[] = [
  {
    code: "REC_01 // 2024",
    name: "Yukthi National Hackathon",
    category: "Hardware Autonomous Systems",
    venue: "BVRIT Hyderabad",
    result: "01 // 1ST PLACE CHAMPION",
    isFirstPlace: true,
  },
  {
    code: "REC_02 // 2024",
    name: "Robotec LFR Competition",
    category: "High-Frequency Track Solvers",
    venue: "MLRIT Hyderabad",
    result: "01 // 1ST PLACE (FASTEST LAP)",
    isFirstPlace: true,
  },
  {
    code: "REC_03 // 2024",
    name: "EMERGE National Hackathon",
    category: "Hardware R&D Division",
    venue: "VNRVJIET Campus",
    result: "01 // 1ST PLACE CHAMPION",
    isFirstPlace: true,
  },
  {
    code: "REC_04 // 2023-24",
    name: "Elan & nVision Sustainable Dev Track",
    category: "Sustainable Systems Engineering",
    venue: "IIT Hyderabad",
    result: "01 // 1ST PLACE CHAMPION",
    isFirstPlace: true,
  },
  {
    code: "REC_05 // 2023-24",
    name: "Infinitus LFR & Robo Race",
    category: "Track Solver & Obstacle Sprint",
    venue: "SRM AP",
    result: "02 // 2ND PLACE RUNNER-UP",
  },
  {
    code: "REC_06 // 2023-24",
    name: "Vasavi College Robotics Arena",
    category: "Tactical Arena Trial",
    venue: "Vasavi College of Engg",
    result: "02 // 2ND PLACE RUNNER-UP",
  },
  {
    code: "REC_07 // 2024",
    name: "Founder's Arena Pitching Fest",
    category: "Venture Prototyping Track",
    venue: "WeWork Innovation Forum",
    result: "02 // 2ND PLACE RUNNER-UP",
  },
  {
    code: "REC_08 // NAT-CIRCUIT",
    name: "TechnoXian, BITS Goa, NIT Surathkal & IIT Guwahati",
    category: "SRM Chennai & Kolkata // Quark & TechXcelerate // Engi Grand Prix",
    venue: "National Circuit",
    result: "DEPLOYED // NATIONAL SQUAD",
  },
];

const TURF_TRACKS = [
  {
    index: "01",
    tag: "TRACK // 01 — OPTICAL",
    title: "LINE FOLLOWER ROBOT (LFR)",
    desc: "Calibrated optical tracking track with continuous tight curvature, crossover paths, and sharp 90-degree junctions evaluated at microsecond cycles.",
    spec: "SPEC // PRECISION MULTIPLEXED ARRAY",
  },
  {
    index: "02",
    tag: "TRACK // 02 — COMBAT ARENA",
    title: "2V2 ROBO SOCCER",
    desc: "Enclosed polycarbonate battle enclosure featuring high-torque mobile strikers colliding in fast-paced 3-minute tactical halves.",
    spec: "SPEC // REINFORCED CAGE DYNAMICS",
  },
  {
    index: "03",
    tag: "TRACK // 03 — OBSTACLES",
    title: "ALL-TERRAIN RACE (ATR)",
    desc: "Grueling mechanical torture test over rock ballast, water basins, and 45-degree angled timber inclines challenging suspension geometries.",
    spec: "SPEC // HIGH-CLEARANCE CHASSIS TRIAL",
  },
  {
    index: "04",
    tag: "TRACK // 04 — SPRINT",
    title: "CIRCUIT RACE",
    desc: "Pure sprint trial across high-traction switchback pavement testing micro-controlled throttle curves, steering response, and top-end straight speed.",
    spec: "SPEC // HIGH-SPEED LAP RECORD MATRIX",
  },
];

export default function Arena() {
  return (
    <div className="w-full">
      <section id="arena" className="w-full border-b border-hairline relative z-30">
      {/* Sticky Chapter Marker: 02 // ARENA */}
      <div className="sticky top-[72px] z-30 w-full px-6 md:px-12 py-4 md:py-5 glass border-b border-hairline flex flex-col md:flex-row md:items-baseline justify-between gap-3">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-xs font-semibold tracking-[0.2em] pulsing-gold-tag">
            02 // ARENA
          </span>
          <h2 className="font-sans text-xl md:text-3xl font-bold uppercase tracking-tight text-[var(--text)]">
            THE <span className="font-serif italic font-normal tracking-normal capitalize text-amber">Arena</span> // COMPETITIVE LEDGER
          </h2>
        </div>
        <span className="font-mono text-[11px] text-[var(--text-muted)] uppercase tracking-[0.2em]">
          VERIFIED PODIUM REGISTER // WIN RATIO: 82.4%
        </span>
      </div>

      {/* Editorial Ledger Table with Black Liquid Glass Treatment */}
      <div className="w-full px-4 sm:px-6 md:px-12 py-6 md:py-8">
        <div className="black-liquid-glass w-full overflow-hidden">
          {/* Column Labels */}
          <div className="hidden md:grid grid-cols-12 pb-4 mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--text-muted)] border-b border-[var(--border)] font-semibold select-none">
            <div className="col-span-2">[ CODE / CYCLE ]</div>
            <div className="col-span-5">[ COMPETITION ]</div>
            <div className="col-span-2">[ INSTITUTION / VENUE ]</div>
            <div className="col-span-3 text-right">[ RESULT / PODIUM ]</div>
          </div>

          {/* Ledger Rows */}
          <div className="divide-y divide-[var(--border)]">
            {LEDGER_DATA.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-12 py-5 items-baseline gap-2 md:gap-0 relative hover:bg-[var(--hover-bg)] transition-colors rounded-lg px-2 group"
              >
                <div className="col-span-2 font-mono text-xs tracking-[0.15em] text-[var(--text-muted)] group-hover:text-[var(--text)] transition-colors">
                  {row.code}
                </div>
                <div className="col-span-5 flex flex-col pr-4">
                  <span className="font-sans text-base md:text-lg font-bold uppercase tracking-tight text-[var(--text)] group-hover:text-amber transition-colors">
                    {row.name}
                  </span>
                  <span className="font-body text-xs text-[var(--text-muted)] mt-0.5">
                    {row.category}
                  </span>
                </div>
                <div className="col-span-2 font-mono text-xs text-[var(--text-muted)] uppercase">
                  {row.venue}
                </div>
                <div
                  className={`col-span-3 font-mono text-xs md:text-right uppercase tracking-[0.15em] ${
                    row.isFirstPlace
                      ? "text-amber font-bold"
                      : "text-[var(--text-muted)] font-medium"
                  }`}
                >
                  {row.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pear.no 3D Cylindrical Technical FAQ / Telemetry Revolver */}
      <CylindricalCarousel />

      </section>

      {/* ========================================================================= */}
      {/* HOME TURF: CONVERGENCE ROBO ARENA                                         */}
      {/* ========================================================================= */}
      <section id="turf" className="w-full border-b border-hairline relative z-35">
        {/* Sticky Chapter Marker: 03 // TURF */}
        <div className="sticky top-[72px] z-30 w-full px-6 md:px-12 py-4 md:py-5 glass border-b border-hairline flex flex-col md:flex-row md:items-baseline justify-between gap-3">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-xs font-semibold tracking-[0.2em] pulsing-gold-tag">
              03 // TURF
            </span>
            <h2 className="font-sans text-xl md:text-3xl font-bold uppercase tracking-tight text-[var(--text)]">
              HOME TURF // ROBOARENA
            </h2>
          </div>
          <span className="font-mono text-[11px] text-[var(--text-muted)] uppercase tracking-[0.2em]">
            HOST PROVING GROUND // 4 DETERMINISTIC DISCIPLINES
          </span>
        </div>

        {/* Flat 4-Column Hairline Grid with Glassmorphic Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          {TURF_TRACKS.map((track, i) => (
            <div
              key={i}
              className="fluid-glass rounded-3xl p-8 md:p-12 flex flex-col justify-between min-h-[360px] relative transition-all duration-500 hover:scale-[1.02]"
            >
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-amber/10 border border-amber/30 font-mono text-[10px] tracking-[0.2em] text-amber uppercase mb-4">
                  {track.tag}
                </div>
                <h3 className="font-sans text-xl font-bold uppercase tracking-tight text-[var(--text)] mb-3">
                  {track.title}
                </h3>
                <p className="font-body text-xs leading-relaxed text-[var(--text-muted)] font-light">
                  {track.desc}
                </p>
              </div>
              <div className="font-mono text-[10px] tracking-[0.15em] text-[var(--text-dim)] uppercase pt-6 border-t border-hairline">
                {track.spec}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
