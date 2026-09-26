"use client";

import React from "react";

const OBJECTIVES = [
  {
    num: "01",
    tag: "DISCIPLINE // COMPETITIVE",
    title: "COMPETITIVE ROBOTICS",
    desc: "Design, build, and deploy high-speed autonomous and intelligent robotic systems engineered specifically for national and international technical arenas.",
  },
  {
    num: "02",
    tag: "DISCIPLINE // R&D",
    title: "RESEARCH & INNOVATION",
    desc: "Foster a culture of robotics research, hardware-in-the-loop experimentation, and technological breakthrough through active collaborative engineering.",
  },
  {
    num: "03",
    tag: "DISCIPLINE // PROTOTYPING",
    title: "HANDS-ON LEARNING",
    desc: "Provide immersive exposure to robotics through rapid iterative design, CNC/waterjet prototyping, bench testing, and real-time field triage.",
  },
  {
    num: "04",
    tag: "DISCIPLINE // MASTERY",
    title: "TECHNICAL SKILL DEVELOPMENT",
    desc: "Cultivate interdisciplinary mastery across mechanical CAD kinematics, PCB layout, sensor integration, discrete PID loops, and embedded firmware.",
  },
];

const CORE_DOMAINS = [
  { name: "ROBOTICS", spec: "Autonomous Kinetics & Control Systems" },
  { name: "RESEARCH", spec: "HIL Prototyping & Academic Partnerships" },
  { name: "MECHANICAL DESIGN", spec: "CAD, Finite Element Analysis & Hardox Armor" },
  { name: "DESIGN & FIRMWARE", spec: "Embedded C/C++, STM32 & High-Speed Arrays" },
  { name: "DOCUMENTATION", spec: "Engineering Dossiers & Open Hardware Repos" },
  { name: "SOCIAL MEDIA & CADRE", spec: "Community Architecture & Event Staging" },
];

export default function Cadre() {
  return (
    <section id="cadre" className="w-full border-b border-hairline relative z-40">
      {/* Sticky Chapter Marker: 04 // CADRE */}
      <div className="sticky top-[72px] z-30 w-full px-6 md:px-12 py-4 md:py-5 glass border-b border-hairline flex flex-col md:flex-row md:items-baseline justify-between gap-3">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-xs font-semibold tracking-[0.2em] pulsing-gold-tag">
            04 // CADRE
          </span>
          <h2 className="font-sans text-xl md:text-3xl font-bold uppercase tracking-tight text-[var(--text)]">
            THE FOUNDATION // <span className="font-serif italic font-normal tracking-normal capitalize text-amber">C-Cadre</span>
          </h2>
        </div>
        <span className="font-mono text-[11px] text-[var(--text-muted)] uppercase tracking-[0.2em]">
          ORGANIZATIONAL ARCHITECTURE &amp; FACILITY
        </span>
      </div>

      {/* ========================================================================= */}
      {/* 1. ABOUT AIRBOTS & TIMELINE VALIDATION                                     */}
      {/* ========================================================================= */}
      <div className="p-4 sm:p-6 md:p-12 border-b border-hairline">
        <div className="w-full fluid-glass rounded-3xl md:rounded-[36px] p-8 md:p-14 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber/10 border border-amber/30 font-mono text-[10px] tracking-[0.2em] text-amber uppercase mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse"></span>
                ABOUT // OFFICIAL COMPETITIVE ROBOTICS DIVISION
              </div>
              <h3 className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-[var(--text)] leading-tight mb-4">
                AIRBOTS: The Competitive Robotics Division of VNRVJIET
              </h3>
              <p className="font-body text-sm md:text-base text-[var(--text-muted)] font-light leading-relaxed mb-4">
                Established in <strong className="text-amber font-semibold">2023</strong> by a group of passionate engineering students and formally recognized as the official varsity robotics division in <strong className="text-amber font-semibold">2025</strong>, AIRBOTS serves as a collaborative foundry for engineering design, hardware innovation, and competition-ready robotic systems.
              </p>
              <p className="font-body text-sm text-[var(--text-dim)] font-light leading-relaxed">
                Dedicated to promoting hands-on learning, robotics research, and national supremacy, the club represents VNR Vignana Jyothi Institute of Engineering and Technology across premier collegiate circuits and national championships.
              </p>
            </div>

            {/* Quick Metrics Badge Column */}
            <div className="grid grid-cols-2 gap-3 min-w-[280px] font-mono text-xs">
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-hairline flex flex-col justify-between">
                <span className="text-[9px] uppercase tracking-wider text-[var(--text-muted)]">ESTABLISHED</span>
                <span className="text-sm font-bold text-amber mt-1">2023</span>
                <span className="text-[9px] text-[var(--text-dim)] uppercase mt-0.5">VNRVJIET CAMPUS</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-hairline flex flex-col justify-between">
                <span className="text-[9px] uppercase tracking-wider text-[var(--text-muted)]">DIVISION STATUS</span>
                <span className="text-sm font-bold text-[var(--text)] mt-1">OFFICIAL</span>
                <span className="text-[9px] text-amber uppercase mt-0.5">FORMALIZED 2025</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-hairline flex flex-col justify-between">
                <span className="text-[9px] uppercase tracking-wider text-[var(--text-muted)]">HEADQUARTERS</span>
                <span className="text-sm font-bold text-[var(--text)] mt-1">ROOM B-321</span>
                <span className="text-[9px] text-[var(--text-dim)] uppercase mt-0.5">B-BLOCK FOUNDRY</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-hairline flex flex-col justify-between">
                <span className="text-[9px] uppercase tracking-wider text-[var(--text-muted)]">ANNUAL ARENA</span>
                <span className="text-sm font-bold text-amber mt-1">ROBO ARENA 2.0</span>
                <span className="text-[9px] text-[var(--text-dim)] uppercase mt-0.5">CO-HOSTED W/ IEEE</span>
              </div>
            </div>
          </div>

          {/* Core Domains Pill Grid */}
          <div className="mt-10 pt-8 border-t border-hairline">
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--text-muted)] mb-4">
              // CORE OPERATIONAL DOMAINS
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {CORE_DOMAINS.map((domain, idx) => (
                <div
                  key={idx}
                  className="px-4 py-3 rounded-2xl bg-white/[0.02] border border-hairline hover:border-amber/40 transition-colors flex flex-col justify-center"
                >
                  <span className="font-sans text-xs font-bold uppercase tracking-wider text-[var(--text)] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber inline-block"></span>
                    {domain.name}
                  </span>
                  <span className="font-mono text-[9px] text-[var(--text-muted)] tracking-wider mt-1">
                    {domain.spec}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. OBJECTIVES (4-COLUMN GRID)                                              */}
      {/* ========================================================================= */}
      <div className="p-4 sm:p-6 md:p-12 border-b border-hairline">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold tracking-[0.2em] pulsing-gold-tag">
              04.01 // OBJECTIVES
            </span>
            <h3 className="font-sans text-lg md:text-xl font-bold uppercase tracking-tight text-[var(--text)]">
              STRATEGIC PILLARS &amp; MISSION
            </h3>
          </div>
          <span className="hidden sm:inline font-mono text-[10px] uppercase tracking-widest text-[var(--text-dim)]">
            DETERMINISTIC BLUEPRINT
          </span>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {OBJECTIVES.map((obj, i) => (
            <div
              key={i}
              className="fluid-glass rounded-3xl p-6 md:p-8 flex flex-col justify-between min-h-[260px] relative transition-all duration-500 hover:scale-[1.02]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-amber/10 border border-amber/30 font-mono text-[9px] tracking-[0.18em] text-amber uppercase">
                    {obj.tag}
                  </span>
                  <span className="font-mono text-xs text-[var(--text-dim)]">{obj.num}</span>
                </div>
                <h4 className="font-sans text-lg font-bold uppercase tracking-tight text-[var(--text)] mb-2">
                  {obj.title}
                </h4>
                <p className="font-body text-xs leading-relaxed text-[var(--text-muted)] font-light">
                  {obj.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. FUTURE VISION CALLOUT                                                  */}
      {/* ========================================================================= */}
      <div className="px-4 sm:px-6 md:px-12 py-6 border-b border-hairline">
        <div className="p-6 md:p-8 rounded-3xl bg-amber/5 border border-amber/30 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-3xl">
            <div className="font-mono text-[10px] tracking-[0.2em] text-amber uppercase mb-1">
              // FUTURE HORIZON &amp; ECOSYSTEM VISION
            </div>
            <p className="font-body text-xs sm:text-sm text-[var(--text)] leading-relaxed italic">
              &ldquo;AIRBOTS aims to establish a strong competitive robotics ecosystem within VNRVJIET by encouraging innovation, technical excellence, and collaborative engineering. The club strives to prepare students for national and international robotics competitions while fostering research-driven development and practical learning in modern robotics technologies.&rdquo;
            </p>
          </div>
          <a
            href="/cadre-intake"
            className="px-6 py-2.5 rounded-full liquid-glass anti-gravity font-mono text-xs font-bold tracking-[0.2em] text-white hover:text-amber uppercase whitespace-nowrap self-start lg:self-center"
          >
            JOIN THE CADRE →
          </a>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 4. LEADERSHIP PILLARS                                                      */}
      {/* ========================================================================= */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 p-6 border-b border-hairline">
        {/* 01 Student Coordinator */}
        <div className="fluid-glass rounded-3xl p-8 md:p-12 flex flex-col justify-between min-h-[280px] relative transition-all duration-500 hover:scale-[1.02]">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-amber/10 border border-amber/30 font-mono text-[10px] tracking-[0.2em] text-amber uppercase mb-3">
              LEADERSHIP // STUDENT COORDINATOR
            </div>
            <h3 className="font-sans text-2xl font-bold uppercase tracking-tight text-[var(--text)]">
              Riteesh Dath
            </h3>
            <p className="font-mono text-xs text-[var(--text-muted)] uppercase mt-1">
              Student Coordinator // AIRBOTS
            </p>
          </div>
          <p className="font-body text-xs text-[var(--text-muted)] font-light leading-relaxed pt-4 border-t border-hairline mt-4">
            Directs competitive operations, track systems calibration, hardware
            architecture, and national campaign deployments across collegiate
            circuits.
          </p>
        </div>

        {/* 02 Founders */}
        <div className="fluid-glass rounded-3xl p-8 md:p-12 flex flex-col justify-between min-h-[280px] relative transition-all duration-500 hover:scale-[1.02]">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-amber/10 border border-amber/30 font-mono text-[10px] tracking-[0.2em] text-amber uppercase mb-3">
              FOUNDING PILLARS // 2023
            </div>
            <h3 className="font-sans text-2xl font-bold uppercase tracking-tight text-[var(--text)]">
              Sharath &amp; Karthikeya
            </h3>
            <p className="font-mono text-xs text-[var(--text-muted)] uppercase mt-1">
              Founders // AIRBOTS
            </p>
          </div>
          <p className="font-body text-xs text-[var(--text-muted)] font-light leading-relaxed pt-4 border-t border-hairline mt-4">
            Established the competitive robotics foundation at VNRVJIET in 2023;
            pioneered the first-generation high-speed Line Following chassis and
            proving grounds.
          </p>
        </div>

        {/* 03 Faculty Coordinator */}
        <div className="fluid-glass rounded-3xl p-8 md:p-12 flex flex-col justify-between min-h-[280px] relative transition-all duration-500 hover:scale-[1.02]">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-amber/10 border border-amber/30 font-mono text-[10px] tracking-[0.2em] text-amber uppercase mb-3">
              FACULTY SPONSORSHIP
            </div>
            <h3 className="font-sans text-2xl font-bold uppercase tracking-tight text-[var(--text)]">
              Dr. Senthil Kumar Selvaraj
            </h3>
            <p className="font-mono text-xs text-[var(--text-muted)] uppercase mt-1">
              Faculty Coordinator // Dept. of EIE
            </p>
          </div>
          <p className="font-body text-xs text-[var(--text-muted)] font-light leading-relaxed pt-4 border-t border-hairline mt-4">
            Academic supervisor for instrumentation, sensor systems validation,
            embedded architecture, and institutional research facilitation.
          </p>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 5. WORKSHOP HQ & TELEMETRY TERMINAL                                        */}
      {/* ========================================================================= */}
      <div className="p-4 sm:p-6 md:p-12">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 relative z-40 fluid-glass rounded-3xl md:rounded-[36px] overflow-hidden">
          {/* Physical Location Details */}
          <div className="lg:col-span-6 p-8 md:p-14 border-b lg:border-b-0 lg:border-r border-hairline flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-amber/10 border border-amber/30 font-mono text-[10px] tracking-[0.2em] text-amber uppercase mb-3">
                PHYSICAL COORDINATES // WORKSHOP HQ
              </div>
              <h3 className="font-sans text-3xl md:text-4xl font-bold uppercase tracking-tight text-[var(--text)] mb-3">
                Room B-321, B-Block
              </h3>
              <p className="font-body text-xs md:text-sm text-[var(--text-muted)] font-light leading-relaxed mb-6">
                Vallurupalli Nageswara Rao Vignana Jyothi Institute of Engineering &amp;
                Technology, Vignana Jyothi Nagar, Pragathi Nagar, Nizampet, Hyderabad,
                Telangana 500090.
              </p>

              <div className="grid grid-cols-2 gap-4 font-mono text-[11px] text-[var(--text-muted)] uppercase tracking-[0.15em] border-t border-hairline pt-4">
                <div>LATITUDE // 17.5385° N</div>
                <div>LONGITUDE // 78.3860° E</div>
                <div>FACILITY // FOUNDRY B-321</div>
                <div>INSTITUTION // VNRVJIET</div>
              </div>
            </div>

            <div className="pt-8 flex items-center gap-6 font-mono text-xs uppercase tracking-[0.2em]">
              <a
                className="text-[var(--text)] hover:text-amber transition-colors flex items-center gap-2 border-b border-[var(--text)] hover:border-amber pb-1"
                href="https://instagram.com/airbots_vnrvjiet"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>INSTAGRAM // @airbots_vnrvjiet</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* Raw Industrial Telemetry Console */}
          <div className="lg:col-span-6 p-8 md:p-14 flex flex-col justify-between font-mono text-[11px] leading-relaxed text-[var(--text-muted)]">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-hairline text-[var(--text-dim)]">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber inline-block animate-pulse"></span>
                  TELEMETRY_TERMINAL // BUS_B321
                </span>
                <span className="text-amber">STATUS: SYNCHRONIZED</span>
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <span className="text-[var(--text)]">&gt;</span> SYSTEM: AIRBOTS CENTRAL KERNEL INITIALIZED
                </div>
                <div>
                  <span className="text-[var(--text)]">&gt;</span> TIMELINE: ESTABLISHED 2023 // FORMALIZED 2025
                </div>
                <div>
                  <span className="text-[var(--text)]">&gt;</span> REGISTRY: LFR / ATR / UAV / RC TRAINER / MAZE SOLVER
                </div>
                <div>
                  <span className="text-[var(--text)]">&gt;</span> PROTOCOL: HARDOX AR500/AR600 EXPERIMENTAL STAGE
                </div>
                <div>
                  <span className="text-[var(--text)]">&gt;</span> PROVING GROUND: ROBO ARENA 2.0 (SEPT 18-19, 2026)
                </div>
                <div>
                  <span className="text-[var(--text)]">&gt;</span> WORKSHOP HQ: B-321, B-BLOCK READY FOR DISPATCH
                </div>
                <div>
                  <span className="text-[var(--text)]">&gt;</span> TOTAL FIELD CAMPAIGNS: 27 VERIFIED RECORDS
                </div>
                <div className="text-[var(--text)] mt-3">
                  &gt; SYS_READY // LISTENING ON 17.5385_78.3860{" "}
                  <span className="inline-block w-2 h-3.5 bg-amber animate-pulse align-middle ml-1"></span>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-hairline flex justify-between text-[10px] text-[var(--text-dim)] uppercase">
              <span>PORT // RAW_UART_57600</span>
              <span>CYCLE 2023–2026 // OPERATIONAL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
