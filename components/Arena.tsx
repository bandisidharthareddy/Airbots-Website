"use client";

import React, { useState, useMemo } from "react";
import CylindricalCarousel from "@/components/pear/CylindricalCarousel";

export interface LedgerRecord {
  id: string;
  code: string;
  name: string;
  category: "hackathon" | "robotics" | "project";
  categoryLabel: string;
  date: string;
  year: number;
  era: "founder" | "official"; // founder: 2023-2024, official: 2025-2026
  venue: string;
  result: string;
  placementType: "first" | "podium" | "finalist" | "participant" | "collaboration";
  highlight?: boolean;
}

const LEDGER_DATA: LedgerRecord[] = [
  // =========================================================================
  // HACKATHONS & INNOVATION CHALLENGES (14 Entries)
  // =========================================================================
  {
    id: "hack-01",
    code: "HACK // 2024.01",
    name: "YUKTHI NATIONAL LEVEL HACKATHON",
    category: "hackathon",
    categoryLabel: "Autonomous Systems & Hardware",
    date: "Apr 24, 2024",
    year: 2024,
    era: "founder",
    venue: "BVRIT Hyderabad",
    result: "01 // 1ST PLACE CHAMPION",
    placementType: "first",
    highlight: true,
  },
  {
    id: "hack-02",
    code: "HACK // 2025.01",
    name: "EMERGE 2025 NATIONAL LEVEL HACKATHON",
    category: "hackathon",
    categoryLabel: "Hardware R&D & Embedded Systems",
    date: "Apr 22, 2025",
    year: 2025,
    era: "official",
    venue: "VNRVJIET Campus",
    result: "01 // 1ST PLACE CHAMPION",
    placementType: "first",
    highlight: true,
  },
  {
    id: "hack-03",
    code: "HACK // 2025.02",
    name: "ELAN & NVISION SUSTAINABLE DEV HACKATHON",
    category: "hackathon",
    categoryLabel: "Sustainable Systems Engineering",
    date: "Jan 10-11, 2025",
    year: 2025,
    era: "official",
    venue: "IIT Hyderabad",
    result: "01 // 1ST PLACE CHAMPION",
    placementType: "first",
    highlight: true,
  },
  {
    id: "hack-04",
    code: "HACK // 2025.03",
    name: "FOUNDER’S ARENA PITCHING FEST",
    category: "hackathon",
    categoryLabel: "Venture Hardware Prototyping",
    date: "May 31, 2025",
    year: 2025,
    era: "official",
    venue: "WeWork, Hyderabad",
    result: "02 // 2ND PLACE RUNNER-UP",
    placementType: "podium",
  },
  {
    id: "hack-05",
    code: "HACK // 2023.01",
    name: "CONVERGENCE HARDWARE HACKATHON",
    category: "hackathon",
    categoryLabel: "Hardware Foundry Prototyping",
    date: "Jan 25, 2023",
    year: 2023,
    era: "founder",
    venue: "VNRVJIET Campus",
    result: "04 // 4TH PLACE",
    placementType: "finalist",
  },
  {
    id: "hack-06",
    code: "HACK // 2024.02",
    name: "TECHXCELERATE NATIONAL LEVEL HACKATHON",
    category: "hackathon",
    categoryLabel: "National Innovation Challenge",
    date: "Oct 09-10, 2024",
    year: 2024,
    era: "founder",
    venue: "BITS Pilani Hyderabad",
    result: "10 // NATIONAL WINNER (10TH PLACE)",
    placementType: "finalist",
  },
  {
    id: "hack-07",
    code: "HACK // 2023.02",
    name: "NASA SPACE APPS HACKATHON",
    category: "hackathon",
    categoryLabel: "Aerospace & Planetary Data Systems",
    date: "Aug 01, 2023",
    year: 2023,
    era: "founder",
    venue: "VNRVJIET / NASA Space Apps",
    result: "STATE LEVEL TOP 10",
    placementType: "finalist",
  },
  {
    id: "hack-08",
    code: "HACK // 2024.03",
    name: "ENGI 2025 NATIONAL LEVEL TECH FEST",
    category: "hackathon",
    categoryLabel: "National Innovation Grand Prix",
    date: "Oct 18-20, 2024",
    year: 2024,
    era: "founder",
    venue: "NIT Surathkal",
    result: "NATIONAL FINALISTS",
    placementType: "finalist",
  },
  {
    id: "hack-09",
    code: "HACK // 2025.04",
    name: "INNOVATHON 2.0",
    category: "hackathon",
    categoryLabel: "Hardware Innovation & IoT",
    date: "Jan 29-30, 2025",
    year: 2025,
    era: "official",
    venue: "VNRVJIET Campus",
    result: "FINALISTS",
    placementType: "finalist",
  },
  {
    id: "hack-10",
    code: "HACK // 2025.05",
    name: "TECHXCELERATE NATIONAL LEVEL HACKATHON",
    category: "hackathon",
    categoryLabel: "Automation & Embedded Systems",
    date: "Feb 09-10, 2025",
    year: 2025,
    era: "official",
    venue: "BITS Pilani Goa",
    result: "NATIONAL FINALISTS",
    placementType: "finalist",
  },
  {
    id: "hack-11",
    code: "HACK // 2024.04",
    name: "SMART INDIA HACKATHON (SIH 2024)",
    category: "hackathon",
    categoryLabel: "Nationwide Problem Statement",
    date: "Sep 30, 2024",
    year: 2024,
    era: "founder",
    venue: "Government of India",
    result: "CLEARED ROUND 01 (NATIONAL)",
    placementType: "participant",
  },
  {
    id: "hack-12",
    code: "HACK // 2024.05",
    name: "FLIPKART GRID 6.0 — ROBOTICS DIVISION",
    category: "hackathon",
    categoryLabel: "Autonomous Warehouse Robotics",
    date: "Oct 20, 2024",
    year: 2024,
    era: "founder",
    venue: "Online National Portal",
    result: "QUALIFIED ROUND 01 (NATIONALLY)",
    placementType: "participant",
  },
  {
    id: "hack-13",
    code: "HACK // 2023.03",
    name: "IOT SPRINT HACKATHON",
    category: "hackathon",
    categoryLabel: "Connected Sensor Architecture",
    date: "Oct 19-20, 2023",
    year: 2023,
    era: "founder",
    venue: "VNRVJIET Campus",
    result: "COMPLETED // PROTOTYPE BUILT",
    placementType: "participant",
  },
  {
    id: "hack-14",
    code: "HACK // 2024.06",
    name: "HACKSAVVY NATIONAL LEVEL HACKATHON",
    category: "hackathon",
    categoryLabel: "Hardware-Software Integration",
    date: "Mar 22, 2024",
    year: 2024,
    era: "founder",
    venue: "MGIT Hyderabad",
    result: "COMPLETED // DEPLOYED",
    placementType: "participant",
  },

  // =========================================================================
  // ROBOTICS & HARDWARE COMPETITIONS (10 Entries)
  // =========================================================================
  {
    id: "robo-01",
    code: "ROBO // 2024.01",
    name: "ROBOTEC 2025 LINE FOLLOWER ROBOT",
    category: "robotics",
    categoryLabel: "High-Frequency Optical Track",
    date: "Mar 29, 2024",
    year: 2024,
    era: "founder",
    venue: "MLRIT Hyderabad",
    result: "01 // 1ST PLACE CHAMPION (FASTEST LAP)",
    placementType: "first",
    highlight: true,
  },
  {
    id: "robo-02",
    code: "ROBO // 2026.01",
    name: "LINE FOLLOWING ROBOT AT INFINITUS 2026",
    category: "robotics",
    categoryLabel: "Autonomous Optical Track Solver",
    date: "Feb 25-28, 2026",
    year: 2026,
    era: "official",
    venue: "SRM AP",
    result: "02 // 2ND PLACE RUNNER-UP",
    placementType: "podium",
  },
  {
    id: "robo-03",
    code: "ROBO // 2026.02",
    name: "ROBO RACE COMPETITION AT INFINITUS 2026",
    category: "robotics",
    categoryLabel: "All-Terrain Racer & Obstacle Sprint",
    date: "Feb 25-28, 2026",
    year: 2026,
    era: "official",
    venue: "SRM AP",
    result: "02 // 2ND PLACE RUNNER-UP",
    placementType: "podium",
  },
  {
    id: "robo-04",
    code: "ROBO // 2025.01",
    name: "ELAN & NVISION MAZE SOLVER ROBOT",
    category: "robotics",
    categoryLabel: "Autonomous Labyrinth Grid",
    date: "Feb 23, 2025",
    year: 2025,
    era: "official",
    venue: "IIT Hyderabad",
    result: "04 // 4TH POSITION",
    placementType: "finalist",
  },
  {
    id: "robo-05",
    code: "ROBO // 2024.02",
    name: "CONNAISSANCE 2025 MAZE SOLVING ROBOT",
    category: "robotics",
    categoryLabel: "Pathfinding & Dead-Reckoning",
    date: "Apr 05, 2024",
    year: 2024,
    era: "founder",
    venue: "JNTU Hyderabad",
    result: "05 // 5TH PLACE",
    placementType: "finalist",
  },
  {
    id: "robo-06",
    code: "ROBO // 2026.03",
    name: "TECHFEST HYDERABAD ZONALS — IIT BOMBAY",
    category: "robotics",
    categoryLabel: "National Championship Qualifiers",
    date: "Oct 15, 2026",
    year: 2026,
    era: "official",
    venue: "JNTU Hyderabad",
    result: "OFFICIALLY INVITED // ZONAL SQUAD",
    placementType: "collaboration",
  },
  {
    id: "robo-07",
    code: "ROBO // 2024.03",
    name: "TECHNOXIAN WORLD ROBOTICS CHAMPIONSHIP",
    category: "robotics",
    categoryLabel: "Robo Race, LFR, Maze & Drone Rescue",
    date: "Jun 09-11, 2024",
    year: 2024,
    era: "founder",
    venue: "SRM Chennai",
    result: "MULTI-TRACK NATIONAL DEPLOYMENT",
    placementType: "participant",
  },
  {
    id: "robo-08",
    code: "ROBO // 2025.02",
    name: "QUARK 2025 LINE FOLLOWER COMPETITION",
    category: "robotics",
    categoryLabel: "Precision Optical Sprint Track",
    date: "Feb 09-10, 2025",
    year: 2025,
    era: "official",
    venue: "BITS Pilani Goa",
    result: "COMPLETED // ADVANCED TRACK",
    placementType: "participant",
  },
  {
    id: "robo-09",
    code: "ROBO // 2025.03",
    name: "ELAN & NVISION MAZE SOLVER TRIAL",
    category: "robotics",
    categoryLabel: "Autonomous Path Resolver",
    date: "Jan 10-11, 2025",
    year: 2025,
    era: "official",
    venue: "IIT Hyderabad",
    result: "COMPLETED // SEMI-FINAL ROUND",
    placementType: "participant",
  },
  {
    id: "robo-10",
    code: "ROBO // 2026.04",
    name: "ROBOVEDA 9.0 AT SUDHEE 2026",
    category: "robotics",
    categoryLabel: "LFR, Robo Race & Project Exposition",
    date: "Feb 17-18, 2026",
    year: 2026,
    era: "official",
    venue: "CBIT Hyderabad",
    result: "TRIPLE-TRACK PARTICIPATION",
    placementType: "participant",
  },

  // =========================================================================
  // PROJECTS, WORKSHOPS & RESEARCH (3 Entries)
  // =========================================================================
  {
    id: "proj-01",
    code: "PROJ // 2026.01",
    name: "IIT-BOMBAY E-YANTRA NATIONAL PROJECT",
    category: "project",
    categoryLabel: "Hardware-in-the-Loop Embedded Systems",
    date: "Jun 15, 2026",
    year: 2026,
    era: "official",
    venue: "IIT Bombay / VNRVJIET",
    result: "TECHNICAL COLLABORATION // HIL TESTBED",
    placementType: "collaboration",
  },
  {
    id: "proj-02",
    code: "PROJ // 2025.01",
    name: "AIRBOTS ROBOTICS WORKSHOP SERIES",
    category: "project",
    categoryLabel: "MCU Architecture & Kinematics",
    date: "May 01 - Jun 01, 2025",
    year: 2025,
    era: "official",
    venue: "Online / VNRVJIET",
    result: "LEAD INSTRUCTORS // APPRENTICE CADRE",
    placementType: "collaboration",
  },
  {
    id: "proj-03",
    code: "PROJ // 2025.02",
    name: "ROBOTIC ARM FINE-TUNING FOR AUTOMATION",
    category: "project",
    categoryLabel: "Industrial Motion & Pick-and-Place",
    date: "Jun 15 - Jul 12, 2025",
    year: 2025,
    era: "official",
    venue: "Xairo Tech",
    result: "INDUSTRIAL MOTION MODEL FINE-TUNED",
    placementType: "collaboration",
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
    title: "MULTI-TERRAIN RACER (ATR)",
    desc: "Grueling mechanical torture test over rock ballast, water basins, and 45-degree angled timber inclines challenging suspension geometries.",
    spec: "SPEC // HIGH-CLEARANCE CHASSIS TRIAL",
  },
  {
    index: "04",
    tag: "TRACK // 04 — SPRINT",
    title: "CIRCUIT RACING",
    desc: "Pure sprint trial across high-traction switchback pavement testing micro-controlled throttle curves, steering response, and top-end straight speed.",
    spec: "SPEC // HIGH-SPEED LAP RECORD MATRIX",
  },
];

export default function Arena() {
  const [activeCategory, setActiveCategory] = useState<"all" | "hackathon" | "robotics" | "project">("all");
  const [activeEra, setActiveEra] = useState<"all" | "official" | "founder">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRecords = useMemo(() => {
    return LEDGER_DATA.filter((item) => {
      const matchesCategory = activeCategory === "all" || item.category === activeCategory;
      const matchesEra = activeEra === "all" || item.era === activeEra;
      const matchesQuery =
        searchQuery.trim() === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.venue.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.date.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.result.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesEra && matchesQuery;
    });
  }, [activeCategory, activeEra, searchQuery]);

  // Chronological Grouping for "All" era view
  const founderRecords = useMemo(() => {
    return filteredRecords.filter((r) => r.era === "founder");
  }, [filteredRecords]);

  const officialRecords = useMemo(() => {
    return filteredRecords.filter((r) => r.era === "official");
  }, [filteredRecords]);

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
          <div className="flex items-center gap-3">
            <span className="inline-block px-2.5 py-1 rounded-full bg-amber/10 border border-amber/30 font-mono text-[10px] text-amber uppercase tracking-wider font-semibold">
              EST. 2023 // 27 CAMPAIGNS REGISTERED
            </span>
            <span className="hidden sm:inline font-mono text-[11px] text-[var(--text-muted)] uppercase tracking-[0.18em]">
              WIN RATIO: 82.4%
            </span>
          </div>
        </div>

        {/* Editorial Ledger Table with Black Liquid Glass Treatment */}
        <div className="w-full px-4 sm:px-6 md:px-12 py-6 md:py-8">
          <div className="black-liquid-glass w-full overflow-hidden">
            {/* Filter and Telemetry Header Controls */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-4 border-b border-white/10">
              {/* Category Selection Tabs */}
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveCategory("all")}
                  className={`px-4 py-2 rounded-full font-mono text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-300 cursor-pointer ${
                    activeCategory === "all"
                      ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                      : "bg-white/10 text-[rgba(255,255,255,0.75)] hover:text-white hover:bg-white/20"
                  }`}
                >
                  ALL ENTRIES ({LEDGER_DATA.length})
                </button>
                <button
                  type="button"
                  onClick={() => setActiveCategory("hackathon")}
                  className={`px-4 py-2 rounded-full font-mono text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-300 cursor-pointer ${
                    activeCategory === "hackathon"
                      ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                      : "bg-white/10 text-[rgba(255,255,255,0.75)] hover:text-white hover:bg-white/20"
                  }`}
                >
                  HACKATHONS ({LEDGER_DATA.filter((i) => i.category === "hackathon").length})
                </button>
                <button
                  type="button"
                  onClick={() => setActiveCategory("robotics")}
                  className={`px-4 py-2 rounded-full font-mono text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-300 cursor-pointer ${
                    activeCategory === "robotics"
                      ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                      : "bg-white/10 text-[rgba(255,255,255,0.75)] hover:text-white hover:bg-white/20"
                  }`}
                >
                  ROBOTICS & HARDWARE ({LEDGER_DATA.filter((i) => i.category === "robotics").length})
                </button>
                <button
                  type="button"
                  onClick={() => setActiveCategory("project")}
                  className={`px-4 py-2 rounded-full font-mono text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-300 cursor-pointer ${
                    activeCategory === "project"
                      ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                      : "bg-white/10 text-[rgba(255,255,255,0.75)] hover:text-white hover:bg-white/20"
                  }`}
                >
                  R&D & WORKSHOPS ({LEDGER_DATA.filter((i) => i.category === "project").length})
                </button>
              </div>

              {/* Chronological Era Timeline Filter & Instant Search */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1.5 p-1 rounded-full bg-white/5 border border-white/10">
                  <button
                    type="button"
                    onClick={() => setActiveEra("all")}
                    className={`px-3 py-1 rounded-full font-mono text-[10px] tracking-wider uppercase transition-colors cursor-pointer ${
                      activeEra === "all"
                        ? "bg-amber text-black font-bold"
                        : "text-[rgba(255,255,255,0.75)] hover:text-white"
                    }`}
                  >
                    ALL ERAS
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveEra("official")}
                    className={`px-3 py-1 rounded-full font-mono text-[10px] tracking-wider uppercase transition-colors cursor-pointer ${
                      activeEra === "official"
                        ? "bg-amber text-black font-bold"
                        : "text-[rgba(255,255,255,0.75)] hover:text-white"
                    }`}
                  >
                    2025–26 OFFICIAL CADRE
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveEra("founder")}
                    className={`px-3 py-1 rounded-full font-mono text-[10px] tracking-wider uppercase transition-colors cursor-pointer ${
                      activeEra === "founder"
                        ? "bg-amber text-black font-bold"
                        : "text-[rgba(255,255,255,0.75)] hover:text-white"
                    }`}
                  >
                    2023–24 FOUNDER ERA
                  </button>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    placeholder="FILTER BY VENUE OR KEYWORD..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="px-3.5 py-1.5 rounded-full bg-black/40 border border-white/15 text-xs text-white placeholder-[rgba(255,255,255,0.45)] font-mono focus:outline-none focus:border-amber transition-colors w-48 sm:w-56"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/50 hover:text-white font-mono text-xs cursor-pointer"
                    >
                      ×
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Column Labels */}
            <div className="hidden md:grid grid-cols-12 pb-3 mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[rgba(255,255,255,0.75)] border-b border-white/10 font-semibold select-none">
              <div className="col-span-2">[ CODE / ERA ]</div>
              <div className="col-span-5">[ COMPETITION / DISCIPLINE ]</div>
              <div className="col-span-2">[ DATE / VENUE ]</div>
              <div className="col-span-3 text-right">[ RESULT / PLACEMENT ]</div>
            </div>

            {/* Empty State */}
            {filteredRecords.length === 0 && (
              <div className="py-16 text-center">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[rgba(255,255,255,0.5)]">
                  NO TELEMETRY MATCHES THE ACTIVE QUERY.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setActiveCategory("all");
                    setActiveEra("all");
                    setSearchQuery("");
                  }}
                  className="mt-4 px-4 py-1.5 rounded-full border border-amber/40 text-amber font-mono text-[10px] tracking-widest uppercase hover:bg-amber/10 transition-colors"
                >
                  RESET FILTERS
                </button>
              </div>
            )}

            {/* Structured Table Content */}
            {activeEra === "all" && !searchQuery ? (
              <div className="space-y-8">
                {/* 01. Official Division Deployments (2025 - 2026) */}
                {officialRecords.length > 0 && (
                  <div>
                    <div className="flex items-center gap-3 py-3 mb-2 border-b border-white/15 bg-white/[0.03] px-3 rounded-lg">
                      <span className="w-2 h-2 rounded-full bg-amber inline-block animate-pulse"></span>
                      <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-white">
                        /// OFFICIAL CADRE DEPLOYMENTS (2025 – 2026)
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[rgba(255,255,255,0.75)] ml-auto">
                        INSTITUTIONAL VARSITY DIVISION
                      </span>
                    </div>
                    <div className="divide-y divide-white/10">
                      {officialRecords.map((row) => (
                        <div
                          key={row.id}
                          className="grid grid-cols-1 md:grid-cols-12 py-4 items-baseline gap-2 md:gap-0 relative hover:bg-white/[0.04] transition-colors rounded-lg px-2 group"
                        >
                          <div className="col-span-2 flex flex-col font-mono">
                            <span className="text-xs tracking-[0.15em] text-[rgba(255,255,255,0.75)] group-hover:text-white transition-colors">
                              {row.code}
                            </span>
                            <span className="text-[9px] tracking-wider text-amber/90 uppercase mt-0.5">
                              [ OFFICIAL CADRE ]
                            </span>
                          </div>
                          <div className="col-span-5 flex flex-col pr-4">
                            <span className="font-sans text-base md:text-lg font-bold uppercase tracking-tight text-[#FFFFFF] group-hover:text-amber transition-colors">
                              {row.name}
                            </span>
                            <span className="font-body text-xs text-[rgba(255,255,255,0.75)] mt-0.5">
                              {row.categoryLabel}
                            </span>
                          </div>
                          <div className="col-span-2 flex flex-col font-mono text-xs text-[rgba(255,255,255,0.75)] uppercase">
                            <span className="font-bold text-white">{row.date}</span>
                            <span className="text-[10px] text-[rgba(255,255,255,0.75)] mt-0.5">{row.venue}</span>
                          </div>
                          <div className="col-span-3 font-mono text-xs md:text-right uppercase tracking-[0.12em]">
                            <span
                              className={`inline-block px-2.5 py-1 rounded-md ${
                                row.placementType === "first"
                                  ? "bg-amber/20 text-amber border border-amber/40 font-bold shadow-[0_0_12px_rgba(255,184,0,0.25)]"
                                  : row.placementType === "podium"
                                  ? "bg-white/10 text-white border border-white/20 font-semibold"
                                  : "text-[rgba(255,255,255,0.75)]"
                              }`}
                            >
                              {row.result}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 02. Pre-Establishment / Founder Achievements (2023 - 2024) */}
                {founderRecords.length > 0 && (
                  <div>
                    <div className="flex items-center gap-3 py-3 mb-2 border-b border-white/15 bg-white/[0.03] px-3 rounded-lg">
                      <span className="w-2 h-2 rounded-full bg-white/60 inline-block"></span>
                      <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-white">
                        /// PRE-ESTABLISHMENT / FOUNDER ACHIEVEMENTS (2023 – 2024)
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[rgba(255,255,255,0.75)] ml-auto">
                        GEN-1 CATALYTIC CAMPAIGNS
                      </span>
                    </div>
                    <div className="divide-y divide-white/10">
                      {founderRecords.map((row) => (
                        <div
                          key={row.id}
                          className="grid grid-cols-1 md:grid-cols-12 py-4 items-baseline gap-2 md:gap-0 relative hover:bg-white/[0.04] transition-colors rounded-lg px-2 group"
                        >
                          <div className="col-span-2 flex flex-col font-mono">
                            <span className="text-xs tracking-[0.15em] text-[rgba(255,255,255,0.75)] group-hover:text-white transition-colors">
                              {row.code}
                            </span>
                            <span className="text-[9px] tracking-wider text-[rgba(255,255,255,0.6)] uppercase mt-0.5">
                              [ FOUNDER ERA ]
                            </span>
                          </div>
                          <div className="col-span-5 flex flex-col pr-4">
                            <span className="font-sans text-base md:text-lg font-bold uppercase tracking-tight text-[#FFFFFF] group-hover:text-amber transition-colors">
                              {row.name}
                            </span>
                            <span className="font-body text-xs text-[rgba(255,255,255,0.75)] mt-0.5">
                              {row.categoryLabel}
                            </span>
                          </div>
                          <div className="col-span-2 flex flex-col font-mono text-xs text-[rgba(255,255,255,0.75)] uppercase">
                            <span className="font-bold text-white">{row.date}</span>
                            <span className="text-[10px] text-[rgba(255,255,255,0.75)] mt-0.5">{row.venue}</span>
                          </div>
                          <div className="col-span-3 font-mono text-xs md:text-right uppercase tracking-[0.12em]">
                            <span
                              className={`inline-block px-2.5 py-1 rounded-md ${
                                row.placementType === "first"
                                  ? "bg-amber/20 text-amber border border-amber/40 font-bold shadow-[0_0_12px_rgba(255,184,0,0.25)]"
                                  : row.placementType === "podium"
                                  ? "bg-white/10 text-white border border-white/20 font-semibold"
                                  : "text-[rgba(255,255,255,0.75)]"
                              }`}
                            >
                              {row.result}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Flat Filtered List when searching or filtered by specific Era */
              <div className="divide-y divide-white/10">
                {filteredRecords.map((row) => (
                  <div
                    key={row.id}
                    className="grid grid-cols-1 md:grid-cols-12 py-4 items-baseline gap-2 md:gap-0 relative hover:bg-white/[0.04] transition-colors rounded-lg px-2 group"
                  >
                    <div className="col-span-2 flex flex-col font-mono">
                      <span className="text-xs tracking-[0.15em] text-[rgba(255,255,255,0.75)] group-hover:text-white transition-colors">
                        {row.code}
                      </span>
                      <span className="text-[9px] tracking-wider uppercase mt-0.5 text-amber/90">
                        {row.era === "official" ? "[ OFFICIAL CADRE ]" : "[ FOUNDER ERA ]"}
                      </span>
                    </div>
                    <div className="col-span-5 flex flex-col pr-4">
                      <span className="font-sans text-base md:text-lg font-bold uppercase tracking-tight text-[#FFFFFF] group-hover:text-amber transition-colors">
                        {row.name}
                      </span>
                      <span className="font-body text-xs text-[rgba(255,255,255,0.75)] mt-0.5">
                        {row.categoryLabel}
                      </span>
                    </div>
                    <div className="col-span-2 flex flex-col font-mono text-xs text-[rgba(255,255,255,0.75)] uppercase">
                      <span className="font-bold text-white">{row.date}</span>
                      <span className="text-[10px] text-[rgba(255,255,255,0.75)] mt-0.5">{row.venue}</span>
                    </div>
                    <div className="col-span-3 font-mono text-xs md:text-right uppercase tracking-[0.12em]">
                      <span
                        className={`inline-block px-2.5 py-1 rounded-md ${
                          row.placementType === "first"
                            ? "bg-amber/20 text-amber border border-amber/40 font-bold shadow-[0_0_12px_rgba(255,184,0,0.25)]"
                            : row.placementType === "podium"
                            ? "bg-white/10 text-white border border-white/20 font-semibold"
                            : "text-[rgba(255,255,255,0.75)]"
                        }`}
                      >
                        {row.result}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 3D Cylindrical Technical FAQ / Telemetry Revolver */}
        <CylindricalCarousel />
      </section>

      {/* ========================================================================= */}
      {/* HOME TURF: ROBO ARENA 2.0 (HOSTED & ORGANIZED EVENT)                      */}
      {/* ========================================================================= */}
      <section id="turf" className="w-full border-b border-hairline relative z-35">
        {/* Sticky Chapter Marker: 03 // TURF */}
        <div className="sticky top-[72px] z-30 w-full px-6 md:px-12 py-4 md:py-5 glass border-b border-hairline flex flex-col md:flex-row md:items-baseline justify-between gap-3">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-xs font-semibold tracking-[0.2em] pulsing-gold-tag">
              03 // TURF
            </span>
            <h2 className="font-sans text-xl md:text-3xl font-bold uppercase tracking-tight text-[var(--text)]">
              HOME TURF // <span className="text-amber">ROBO ARENA 2.0</span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-block px-2.5 py-1 rounded-full bg-amber/10 border border-amber/30 font-mono text-[10px] text-amber uppercase tracking-wider font-semibold">
              SEPTEMBER 18TH & 19TH, 2026 // CO-ORGANIZED WITH IEEE
            </span>
            <span className="hidden sm:inline font-mono text-[11px] text-[var(--text-muted)] uppercase tracking-[0.18em]">
              6-HOUR ACTION ARENA
            </span>
          </div>
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
