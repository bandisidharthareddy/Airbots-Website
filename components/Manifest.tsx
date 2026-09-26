"use client";

import React, { useEffect, useRef, useState } from "react";
import GlitchImage from "@/components/GlitchImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function ManifestRow({
  children,
}: {
  children: React.ReactNode;
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!rowRef.current) return;
    const rect = rowRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      ref={rowRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`w-full fluid-glass rounded-3xl md:rounded-[32px] manifest-card grid grid-cols-1 lg:grid-cols-12 relative group overflow-hidden transition-all duration-500`}
    >
      {/* 4-point star corner glyph (pear.no style .st) */}
      <span className="absolute top-2 right-2 w-3 h-3 text-amber opacity-50 z-20 pointer-events-none">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0Q13.1 10.9 24 12Q13.1 13.1 12 24Q10.9 13.1 0 12Q10.9 10.9 12 0Z" />
        </svg>
      </span>

      {/* Interactive Mouse Glow: faint white radial gradient (opacity 0.05) illuminating background and hairline borders */}
      <div
        className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(650px circle at ${coords.x}px ${coords.y}px, rgba(255, 255, 255, 0.05), transparent 60%)`,
        }}
      />
      {children}
    </div>
  );
}

export default function Manifest() {
  const sectionRef = useRef<HTMLElement>(null);
  const parallaxRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      parallaxRefs.current.forEach((el) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { yPercent: -12 },
          {
            yPercent: 12,
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>('.manifest-card').forEach((card) => {
        gsap.fromTo(
          card,
          { y: 20, opacity: 0.85 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 92%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="fleet"
      className="w-full relative z-20"
    >
      {/* Sticky Chapter Marker: 01 // FLEET */}
      <div className="sticky top-[72px] z-30 w-full px-6 md:px-12 py-4 md:py-5 glass border-b border-hairline flex flex-col md:flex-row md:items-baseline justify-between gap-3">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-xs font-semibold tracking-[0.2em] pulsing-gold-tag">
            01 // FLEET
          </span>
          <h2 className="font-sans text-xl md:text-3xl font-bold uppercase tracking-tight text-[var(--text)]">
            TECHNICAL <span className="font-serif italic font-normal tracking-normal capitalize text-amber">Manifest</span> // FLEET ARSENAL
          </h2>
        </div>
        <span className="font-mono text-[11px] text-[var(--text-muted)] uppercase tracking-[0.2em]">
          SPECIFICATION REGISTER // REVISION 2025.2
        </span>
      </div>

      <div className="flex flex-col gap-6 px-6 md:px-12 py-6 md:py-8">
        {/* ========================================================================= */}
        {/* 1. AERIAL UAV & FIXED-WING TRAINER                                        */}
        {/* ========================================================================= */}
        <ManifestRow>
          <span className="absolute top-0 left-0 text-[var(--text-dim)] font-mono text-xs p-1 select-none z-10">
            +
          </span>

          {/* Left Image Column with Parallax */}
          <div className="lg:col-span-6 border-b lg:border-b-0 lg:border-r border-hairline relative p-8 md:p-14 flex flex-col justify-between overflow-hidden">
            <div className="w-full aspect-[16/10] relative z-20 overflow-hidden rounded-2xl border border-hairline shadow-[0_8px_24px_rgba(0,0,0,0.5)] group/img cursor-pointer">
              <div
                ref={(el) => {
                  parallaxRefs.current[0] = el;
                }}
                className="relative w-full h-[125%] -top-[12%] transform-gpu will-change-transform"
              >
                <GlitchImage src="/images/drone-trainer.png" alt="AIRBOTS Autonomous Drone and Fixed-Wing RC Aircraft" className="object-cover filter grayscale contrast-125 transition-all duration-700 group-hover/img:filter-none group-hover/img:scale-105" />
              </div>
              <div className="absolute top-3 left-3 font-mono text-[10px] tracking-[0.2em] px-2.5 py-1 rounded-full bg-black/60 border border-white/15 text-[var(--text)] uppercase z-10 backdrop-blur-md">
                FIG 01.01 // AEROSPACE CADRE
              </div>
              <div className="absolute top-3 right-3 font-mono text-[10px] tracking-[0.15em] px-2.5 py-1 rounded-full bg-black/60 border border-white/15 text-amber uppercase z-10 backdrop-blur-md flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse"></span>
                TELEM_OK
              </div>

              {/* Data-Reveal Slide-Up Liquid Glass Hover Overlay */}
              <div className="absolute inset-x-0 bottom-0 z-30 translate-y-full group-hover/img:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] p-3 sm:p-4">
                <div className="fluid-glass rounded-xl p-3.5 sm:p-4 border border-[var(--border-strong)] bg-[var(--surface-overlay)] backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
                  <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-[var(--border)]">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse"></span>
                      QUICK-GLANCE TELEMETRY
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[var(--text-dim)]">
                      LIVE SPEC
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 font-mono">
                    <div className="flex flex-col">
                      <span className="text-[9px] text-[var(--text-muted)] tracking-wider uppercase">MOTOR SPEC</span>
                      <span className="font-bold text-amber text-xs sm:text-[13px] tracking-wide mt-0.5">
                        A2212 1400KV Motor
                      </span>
                    </div>
                    <div className="flex flex-col border-l border-[var(--border)] pl-3">
                      <span className="text-[9px] text-[var(--text-muted)] tracking-wider uppercase">DIMENSIONS</span>
                      <span className="font-bold text-amber text-xs sm:text-[13px] tracking-wide mt-0.5">
                        116 cm Wingspan
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-4 font-mono text-[10px] tracking-[0.2em] text-[var(--text-muted)] uppercase flex justify-between">
              <span>OPTICAL PAYLOAD GIMBAL</span>
              <span>WAYPOINT RECON // FIELD TESTED</span>
            </div>
          </div>

          {/* Right Specification Data Sheet */}
          <div className="lg:col-span-6 p-8 md:p-14 flex flex-col justify-between">
            <div>
              <div className="font-mono text-[11px] tracking-[0.2em] uppercase mb-2 pulsing-gold-tag">
                REG // 01.01 — AEROSPACE DIVISION
              </div>
              <h3 className="font-sans text-2xl md:text-3xl font-bold uppercase tracking-tight text-[var(--text)] mb-4">
                AERIAL // RESCUE UAV &amp; FIXED-WING TRAINER
              </h3>
              <p className="font-body text-xs md:text-sm text-[var(--text-muted)] font-light leading-relaxed mb-8">
                Dual flight envelope architecture developed for emergency aerial
                reconnaissance and aerodynamic efficiency validation. Custom
                carbon-fiber airframe, autonomous flight stabilization, and
                long-range telemetry integration.
              </p>
            </div>

            <details>
              <summary className="font-mono text-[11px] tracking-[0.2em] text-[var(--text-muted)] uppercase cursor-pointer hover:text-amber transition-colors py-3 select-none">
                TECHNICAL SPECIFICATIONS ↓
              </summary>
              <div className="pt-4 pb-2 border-t border-hairline">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 font-mono text-[11px] uppercase tracking-[0.15em]">
                  <div className="flex justify-between border-b border-hairline pb-2">
                    <span className="text-[var(--text-muted)]">MCU</span>
                    <span className="text-[var(--text)]">DUAL TELEMETRY AUTOPILOT</span>
                  </div>
                  <div className="flex justify-between border-b border-hairline pb-2">
                    <span className="text-[var(--text-muted)]">AIRFRAME</span>
                    <span className="text-[var(--text)]">CARBON COMPOSITE MONOCOQUE</span>
                  </div>
                  <div className="flex justify-between border-b border-hairline pb-2">
                    <span className="text-[var(--text-muted)]">PROPULSION</span>
                    <span className="text-[var(--text)]">RC BRUSHLESS OUTRUNNER</span>
                  </div>
                  <div className="flex justify-between border-b border-hairline pb-2">
                    <span className="text-[var(--text-muted)]">STATUS</span>
                    <span className="text-amber">DEPLOYED / FIELD TESTED</span>
                  </div>
                </div>
              </div>
            </details>
          </div>
        </ManifestRow>

        {/* ========================================================================= */}
        {/* 2. LFR // HIGH-SPEED TRACKER                                              */}
        {/* ========================================================================= */}
        <ManifestRow>
          <span className="absolute top-0 left-0 text-[var(--text-dim)] font-mono text-xs p-1 select-none z-10">
            +
          </span>

          {/* Left: Giant Designation */}
          <div className="lg:col-span-5 p-8 md:p-14 border-b lg:border-b-0 lg:border-r border-hairline flex flex-col justify-between">
            <div>
              <div className="font-mono text-[11px] tracking-[0.2em] uppercase mb-2 pulsing-gold-tag">
                REG // 01.02 — OPTICAL KINETICS
              </div>
              <h3 className="font-sans text-2xl md:text-4xl font-bold uppercase tracking-tight text-[var(--text)] leading-none mb-3">
                LFR // HIGH-SPEED TRACKER
              </h3>
              <p className="font-body text-xs md:text-sm text-[var(--text-muted)] font-light leading-relaxed">
                Ultra-low latency line-tracking platform optimized for microsecond
                sensor polling, high-speed closed-loop PID control, and aggressive
                switchback turns at maximum linear velocity.
              </p>
            </div>
            <div className="font-mono text-[10px] text-[var(--text-dim)] tracking-[0.2em] uppercase pt-6">
              SUBSYSTEM // LFS 16A OPTICAL STACK
            </div>
          </div>

          {/* Right: Technical Blueprint & Compact Datasheet */}
          <div className="lg:col-span-7 p-8 md:p-14 flex flex-col justify-between gap-6 overflow-hidden">
            {/* Parallax Blueprint Schematic graphic */}
            <div className="w-full h-36 bg-[var(--surface-card)] border border-hairline relative z-20 flex items-center justify-between p-6 overflow-hidden">
              <div
                ref={(el) => {
                  parallaxRefs.current[1] = el;
                }}
                className="absolute inset-0 flex items-center justify-around opacity-20 pointer-events-none transform-gpu will-change-transform"
              >
                <div className="w-24 h-24 border border-dashed border-[var(--text)]"></div>
                <div className="w-32 h-16 border border-[var(--text-dim)]"></div>
                <div className="w-20 h-20 rounded-full border border-[var(--text-dim)]"></div>
              </div>
              <div className="relative z-10 font-mono text-[11px] text-[var(--text)] tracking-[0.2em] uppercase">
                // TELEMETRY: 600 RPM N20 GEARED // PID CALIBRATED
              </div>
              <div className="relative z-10 font-mono text-[10px] text-amber uppercase px-2 py-1 border border-amber/30">
                FASTEST LAP REGISTERED
              </div>
            </div>

            <details>
              <summary className="font-mono text-[11px] tracking-[0.2em] text-[var(--text-muted)] uppercase cursor-pointer hover:text-amber transition-colors py-3 select-none">
                TECHNICAL SPECIFICATIONS ↓
              </summary>
              <div className="pt-4 pb-2 border-t border-hairline">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 font-mono text-[11px] uppercase tracking-[0.15em]">
                  <div className="flex justify-between border-b border-hairline pb-2">
                    <span className="text-[var(--text-muted)]">MCU</span>
                    <span className="text-[var(--text)]">ATMEGA328P / ARDUINO NANO</span>
                  </div>
                  <div className="flex justify-between border-b border-hairline pb-2">
                    <span className="text-[var(--text-muted)]">SENSOR</span>
                    <span className="text-[var(--text)]">LFS 16A MULTIPLEXED ARRAY</span>
                  </div>
                  <div className="flex justify-between border-b border-hairline pb-2">
                    <span className="text-[var(--text-muted)]">ACTUATION</span>
                    <span className="text-[var(--text)]">N20 12V 600RPM MICRO GEAR</span>
                  </div>
                  <div className="flex justify-between border-b border-hairline pb-2">
                    <span className="text-[var(--text-muted)]">WHEELS</span>
                    <span className="text-[var(--text)]">43MM HIGH-TRACTION RUBBER</span>
                  </div>
                  <div className="flex justify-between border-b border-hairline pb-2">
                    <span className="text-[var(--text-muted)]">POWER</span>
                    <span className="text-[var(--text)]">11.1V GNB LIPO (LM2596 BUCK)</span>
                  </div>
                  <div className="flex justify-between border-b border-hairline pb-2">
                    <span className="text-[var(--text-muted)]">STATUS</span>
                    <span className="text-amber">ACTIVE ARSENAL</span>
                  </div>
                </div>
              </div>
            </details>
          </div>
        </ManifestRow>

        {/* ========================================================================= */}
        {/* 3. ATR // ALL-TERRAIN RACER & CIRCUIT SPRINT                              */}
        {/* ========================================================================= */}
        <ManifestRow>
          <span className="absolute top-0 left-0 text-[var(--text-dim)] font-mono text-xs p-1 select-none z-10">
            +
          </span>

          {/* Left: Giant Designation */}
          <div className="lg:col-span-5 p-8 md:p-14 border-b lg:border-b-0 lg:border-r border-hairline flex flex-col justify-between">
            <div>
              <div className="font-mono text-[11px] tracking-[0.2em] uppercase mb-2 pulsing-gold-tag">
                REG // 01.03 — HIGH-TORQUE TRACTION
              </div>
              <h3 className="font-sans text-2xl md:text-4xl font-bold uppercase tracking-tight text-[var(--text)] leading-none mb-3">
                ATR // ALL-TERRAIN RACER
              </h3>
              <p className="font-body text-xs md:text-sm text-[var(--text-muted)] font-light leading-relaxed">
                High-clearance chassis engineered for aggressive obstacle
                negotiation, rock ballast crossings, water basin navigation, and
                sprint switchbacks under heavy shock loading.
              </p>
            </div>
            <div className="font-mono text-[10px] text-[var(--text-dim)] tracking-[0.2em] uppercase pt-6">
              SUBSYSTEM // DUAL HIGH-TORQUE MATRIX
            </div>
          </div>

          {/* Right: Technical Blueprint & Compact Datasheet */}
          <div className="lg:col-span-7 p-8 md:p-14 flex flex-col justify-between gap-6 overflow-hidden">
            <div className="w-full h-36 bg-[var(--surface-card)] border border-hairline relative z-20 flex items-center justify-between p-6 overflow-hidden">
              <div
                ref={(el) => {
                  parallaxRefs.current[2] = el;
                }}
                className="absolute inset-0 flex items-center justify-around opacity-20 pointer-events-none transform-gpu will-change-transform"
              >
                <div className="w-40 h-20 border border-[var(--text-dim)]"></div>
                <div className="w-24 h-24 border border-dashed border-amber"></div>
              </div>
              <div className="relative z-10 font-mono text-[11px] text-[var(--text)] tracking-[0.2em] uppercase">
                // SUSPENSION: HIGH-CLEARANCE ARTICULATED
              </div>
              <div className="relative z-10 font-mono text-[10px] text-amber uppercase px-2 py-1 border border-amber/30">
                NATIONAL PODIUM VERIFIED
              </div>
            </div>

            <details>
              <summary className="font-mono text-[11px] tracking-[0.2em] text-[var(--text-muted)] uppercase cursor-pointer hover:text-amber transition-colors py-3 select-none">
                TECHNICAL SPECIFICATIONS ↓
              </summary>
              <div className="pt-4 pb-2 border-t border-hairline">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 font-mono text-[11px] uppercase tracking-[0.15em]">
                  <div className="flex justify-between border-b border-hairline pb-2">
                    <span className="text-[var(--text-muted)]">CHASSIS</span>
                    <span className="text-[var(--text)]">REINFORCED PERIMETER BUMPER</span>
                  </div>
                  <div className="flex justify-between border-b border-hairline pb-2">
                    <span className="text-[var(--text-muted)]">SUSPENSION</span>
                    <span className="text-[var(--text)]">HIGH-CLEARANCE CUSTOM ATR</span>
                  </div>
                  <div className="flex justify-between border-b border-hairline pb-2">
                    <span className="text-[var(--text-muted)]">DRIVETRAIN</span>
                    <span className="text-[var(--text)]">DUAL HIGH-TORQUE MOTOR MATRIX</span>
                  </div>
                  <div className="flex justify-between border-b border-hairline pb-2">
                    <span className="text-[var(--text-muted)]">STATUS</span>
                    <span className="text-amber">VERIFIED RACER</span>
                  </div>
                </div>
              </div>
            </details>
          </div>
        </ManifestRow>

        {/* ========================================================================= */}
        {/* 4. AUTONOMOUS MAZE SOLVER                                                 */}
        {/* ========================================================================= */}
        <ManifestRow>
          <span className="absolute top-0 left-0 text-[var(--text-dim)] font-mono text-xs p-1 select-none z-10">
            +
          </span>

          {/* Left: Giant Designation */}
          <div className="lg:col-span-5 p-8 md:p-14 border-b lg:border-b-0 lg:border-r border-hairline flex flex-col justify-between">
            <div>
              <div className="font-mono text-[11px] tracking-[0.2em] uppercase mb-2 pulsing-gold-tag">
                REG // 01.04 — LABYRINTH RESOLUTION
              </div>
              <h3 className="font-sans text-2xl md:text-4xl font-bold uppercase tracking-tight text-[var(--text)] leading-none mb-3">
                AUTONOMOUS MAZE SOLVER
              </h3>
              <p className="font-body text-xs md:text-sm text-[var(--text-muted)] font-light leading-relaxed">
                Real-time enclosed labyrinth environment mapping, dead-reckoning
                odometer integration, and deterministic graph-search decision
                trees for optimal route resolution.
              </p>
            </div>
            <div className="font-mono text-[10px] text-[var(--text-dim)] tracking-[0.2em] uppercase pt-6">
              SUBSYSTEM // ONBOARD PATH SEARCH &amp; SOLVE
            </div>
          </div>

          {/* Right: Technical Blueprint & Compact Datasheet */}
          <div className="lg:col-span-7 p-8 md:p-14 flex flex-col justify-between gap-6 overflow-hidden">
            <div className="w-full h-36 bg-[var(--surface-card)] border border-hairline relative z-20 flex items-center justify-between p-6 overflow-hidden">
              <div
                ref={(el) => {
                  parallaxRefs.current[3] = el;
                }}
                className="absolute inset-0 flex items-center justify-around opacity-20 pointer-events-none transform-gpu will-change-transform"
              >
                <div className="grid grid-cols-4 gap-2 w-48 h-24">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="border border-[var(--text-dim)]"></div>
                  ))}
                </div>
              </div>
              <div className="relative z-10 font-mono text-[11px] text-[var(--text)] tracking-[0.2em] uppercase">
                // FLOODFILL &amp; DIJKSTRA PATH SOLVER
              </div>
              <div className="relative z-10 font-mono text-[10px] text-amber uppercase px-2 py-1 border border-amber/30">
                GRAPH MAPPING VERIFIED
              </div>
            </div>

            <details>
              <summary className="font-mono text-[11px] tracking-[0.2em] text-[var(--text-muted)] uppercase cursor-pointer hover:text-amber transition-colors py-3 select-none">
                TECHNICAL SPECIFICATIONS ↓
              </summary>
              <div className="pt-4 pb-2 border-t border-hairline">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 font-mono text-[11px] uppercase tracking-[0.15em]">
                  <div className="flex justify-between border-b border-hairline pb-2">
                    <span className="text-[var(--text-muted)]">MAPPING</span>
                    <span className="text-[var(--text)]">REAL-TIME DECISION-TREE</span>
                  </div>
                  <div className="flex justify-between border-b border-hairline pb-2">
                    <span className="text-[var(--text-muted)]">SENSORS</span>
                    <span className="text-[var(--text)]">ULTRASONIC &amp; INFRARED ARRAY</span>
                  </div>
                  <div className="flex justify-between border-b border-hairline pb-2">
                    <span className="text-[var(--text-muted)]">ODOMETRY</span>
                    <span className="text-[var(--text)]">REAL-TIME DEAD-RECKONING</span>
                  </div>
                  <div className="flex justify-between border-b border-hairline pb-2">
                    <span className="text-[var(--text-muted)]">STATUS</span>
                    <span className="text-amber">DEPLOYED PLATFORM</span>
                  </div>
                </div>
              </div>
            </details>
          </div>
        </ManifestRow>

        {/* ========================================================================= */}
        {/* 5. IIT-B // E-YANTRA ROBOTICS TESTBED                                     */}
        {/* ========================================================================= */}
        <ManifestRow>
          <span className="absolute top-0 left-0 text-[var(--text-dim)] font-mono text-xs p-1 select-none z-10">
            +
          </span>

          {/* Left: Giant Designation */}
          <div className="lg:col-span-5 p-8 md:p-14 border-b lg:border-b-0 lg:border-r border-hairline flex flex-col justify-between">
            <div>
              <div className="font-mono text-[11px] tracking-[0.2em] uppercase mb-2 pulsing-gold-tag">
                REG // 01.05 — RESEARCH TESTBED
              </div>
              <h3 className="font-sans text-2xl md:text-4xl font-bold uppercase tracking-tight text-[var(--text)] leading-none mb-3">
                IIT-B E-YANTRA TESTBED
              </h3>
              <p className="font-body text-xs md:text-sm text-[var(--text-muted)] font-light leading-relaxed">
                National robotics research platform sponsored by IIT Bombay.
                Dedicated hardware-in-the-loop (HIL) verification, kinematic
                telemetry, and embedded systems prototyping.
              </p>
            </div>
            <div className="font-mono text-[10px] text-[var(--text-dim)] tracking-[0.2em] uppercase pt-6">
              AFFILIATION // IIT BOMBAY E-YANTRA
            </div>
          </div>

          {/* Right: Technical Blueprint & Compact Datasheet */}
          <div className="lg:col-span-7 p-8 md:p-14 flex flex-col justify-between gap-6 overflow-hidden">
            <div className="w-full h-36 bg-[var(--surface-card)] border border-hairline relative z-20 flex items-center justify-between p-6 overflow-hidden">
              <div
                ref={(el) => {
                  parallaxRefs.current[4] = el;
                }}
                className="absolute inset-0 flex items-center justify-around opacity-20 pointer-events-none transform-gpu will-change-transform"
              >
                <div className="w-48 h-20 border border-[var(--text-dim)] flex items-center justify-center font-mono text-xs">
                  HIL // VERIFICATION
                </div>
              </div>
              <div className="relative z-10 font-mono text-[11px] text-[var(--text)] tracking-[0.2em] uppercase">
                // IIT BOMBAY NATIONAL INITIATIVE
              </div>
              <div className="relative z-10 font-mono text-[10px] text-amber uppercase px-2 py-1 border border-amber/30">
                ACTIVE RESEARCH
              </div>
            </div>

            <details>
              <summary className="font-mono text-[11px] tracking-[0.2em] text-[var(--text-muted)] uppercase cursor-pointer hover:text-amber transition-colors py-3 select-none">
                TECHNICAL SPECIFICATIONS ↓
              </summary>
              <div className="pt-4 pb-2 border-t border-hairline">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 font-mono text-[11px] uppercase tracking-[0.15em]">
                  <div className="flex justify-between border-b border-hairline pb-2">
                    <span className="text-[var(--text-muted)]">HARDWARE</span>
                    <span className="text-[var(--text)]">IN-THE-LOOP EMBEDDED SYSTEM</span>
                  </div>
                  <div className="flex justify-between border-b border-hairline pb-2">
                    <span className="text-[var(--text-muted)]">LAB</span>
                    <span className="text-[var(--text)]">B-321 FOUNDRY WING</span>
                  </div>
                  <div className="flex justify-between border-b border-hairline pb-2">
                    <span className="text-[var(--text-muted)]">PROTOCOL</span>
                    <span className="text-[var(--text)]">HIL VERIFICATION STACK</span>
                  </div>
                  <div className="flex justify-between border-b border-hairline pb-2">
                    <span className="text-[var(--text-muted)]">STATUS</span>
                    <span className="text-amber">ACTIVE RESEARCH</span>
                  </div>
                </div>
              </div>
            </details>
          </div>
        </ManifestRow>

        {/* ========================================================================= */}
        {/* 6. ROBO WAR // COMBAT PROTOTYPE [COMING SOON]                             */}
        {/* ========================================================================= */}
        <ManifestRow>
          <span className="absolute top-0 left-0 text-[var(--text-dim)] font-mono text-xs p-1 select-none z-10">
            +
          </span>

          {/* Left: Giant Designation & Warning Banner */}
          <div className="lg:col-span-5 p-8 md:p-14 border-b lg:border-b-0 lg:border-r border-hairline flex flex-col justify-between">
            <div>
              <div className="font-mono text-[11px] tracking-[0.2em] uppercase mb-2 pulsing-gold-tag">
                REG // 01.06 — KINETIC IMPACT PROTOTYPE
              </div>
              <h3 className="font-sans text-2xl md:text-4xl font-bold uppercase tracking-tight text-[var(--text)] leading-none mb-4">
                ROBO WAR // COMBAT PROTOTYPE
              </h3>

              {/* Bracketed Industrial Warning */}
              <div className="font-mono text-[11px] tracking-[0.2em] text-amber uppercase border border-amber/40 p-3 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-amber animate-ping inline-block"></span>
                [ COMING SOON // STATUS: R&amp;D EARLY FABRICATION ]
              </div>

              <p className="font-body text-xs md:text-sm text-[var(--text-muted)] font-light leading-relaxed mb-6">
                Heavyweight kinetic combat platform undergoing structural welding
                and bench testing. Engineered for devastating energy transfer in
                full-contact arena conditions with Hardox 500 armor bulkheads and a
                high-RPM kinetic drum weapon.
              </p>
            </div>

            {/* Compact Datasheet */}
            <details>
              <summary className="font-mono text-[11px] tracking-[0.2em] text-[var(--text-muted)] uppercase cursor-pointer hover:text-amber transition-colors py-3 select-none">
                TECHNICAL SPECIFICATIONS ↓
              </summary>
              <div className="pt-4 pb-2 border-t border-hairline">
                <div className="flex flex-col gap-3 font-mono text-[11px] uppercase tracking-[0.15em]">
                  <div className="flex justify-between border-b border-hairline pb-2">
                    <span className="text-[var(--text-muted)]">BALLISTIC CHASSIS</span>
                    <span className="text-[var(--text)]">HARDOX 500 / AR600 BULKHEADS</span>
                  </div>
                  <div className="flex justify-between border-b border-hairline pb-2">
                    <span className="text-[var(--text-muted)]">WEAPON</span>
                    <span className="text-[var(--text)]">HIGH-RPM TUNGSTEN DRUM MODULE</span>
                  </div>
                  <div className="flex justify-between border-b border-hairline pb-2">
                    <span className="text-[var(--text-muted)]">WEIGHT CLASS</span>
                    <span className="text-[var(--text)]">HEAVYWEIGHT COMBAT</span>
                  </div>
                  <div className="flex justify-between border-b border-hairline pb-2">
                    <span className="text-[var(--text-muted)]">DEPLOYMENT</span>
                    <span className="text-amber">[COMING SOON // 2025-26]</span>
                  </div>
                </div>
              </div>
            </details>
          </div>

          {/* Right: Full Image Integration with Scrubbed Parallax */}
          <div className="lg:col-span-7 p-8 md:p-14 flex flex-col justify-between overflow-hidden">
            <div className="w-full aspect-[16/10] relative z-20 overflow-hidden rounded-2xl border border-hairline shadow-[0_8px_24px_rgba(0,0,0,0.5)] group/img cursor-pointer">
              <div
                ref={(el) => {
                  parallaxRefs.current[5] = el;
                }}
                className="relative w-full h-[125%] -top-[12%] transform-gpu will-change-transform"
              >
                <GlitchImage src="/images/robo-war.png" alt="AIRBOTS Combat Prototype Robo War" className="object-cover filter grayscale contrast-125 transition-all duration-700 group-hover/img:filter-none group-hover/img:scale-105" />
              </div>
              <div className="absolute top-3 left-3 font-mono text-[10px] tracking-[0.2em] px-2.5 py-1 rounded-full bg-black/60 border border-white/15 text-[var(--text)] uppercase z-10 backdrop-blur-md">
                FIG 01.06 // HARDOX MONOCOQUE BENCH RIG
              </div>
              <div className="absolute top-3 right-3 font-mono text-[10px] tracking-[0.15em] px-2.5 py-1 rounded-full bg-black/60 border border-white/15 text-amber uppercase z-10 backdrop-blur-md flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse"></span>
                ACTIVE_R&D
              </div>

              {/* Data-Reveal Slide-Up Liquid Glass Hover Overlay */}
              <div className="absolute inset-x-0 bottom-0 z-30 translate-y-full group-hover/img:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] p-3 sm:p-4">
                <div className="fluid-glass rounded-xl p-3.5 sm:p-4 border border-[var(--border-strong)] bg-[var(--surface-overlay)] backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
                  <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-[var(--border)]">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse"></span>
                      QUICK-GLANCE TELEMETRY
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[var(--text-dim)]">
                      COMBAT SPEC
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 font-mono">
                    <div className="flex flex-col">
                      <span className="text-[9px] text-[var(--text-muted)] tracking-wider uppercase">ARMOR BULKHEAD</span>
                      <span className="font-bold text-amber text-xs sm:text-[13px] tracking-wide mt-0.5">
                        HARDOX AR500/AR600
                      </span>
                    </div>
                    <div className="flex flex-col border-l border-[var(--border)] pl-3">
                      <span className="text-[9px] text-[var(--text-muted)] tracking-wider uppercase">KINETIC WEAPON</span>
                      <span className="font-bold text-amber text-xs sm:text-[13px] tracking-wide mt-0.5">
                        6500 RPM DRUM
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-4 font-mono text-[10px] tracking-[0.2em] text-[var(--text-muted)] uppercase flex justify-between">
              <span>HIGH-ENERGY ROTATING MASS</span>
              <span className="text-amber">CHASSIS FABRICATION // IN PROGRESS</span>
            </div>
          </div>
        </ManifestRow>
      </div>
    </section>
  );
}
