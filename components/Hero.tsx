"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import FloodButton from "@/components/pear/FloodButton";
import Magnetic from "@/components/Magnetic";
import KineticText from "@/components/KineticText";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the masked typography
      gsap.fromTo(
        lineRefs.current,
        {
          yPercent: 120,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.6,
          ease: "power3.out",
          stagger: 0.3,
          delay: 0.15,
        }
      );

      // Animate upper and lower telemetry lines
      gsap.fromTo(
        ".hero-telemetry",
        {
          opacity: 0,
          y: 15,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: "power2.out",
          stagger: 0.25,
          delay: 0.8,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full border-b border-hairline px-6 md:px-12 pt-16 md:pt-20 pb-12 md:pb-16 relative overflow-hidden"
    >
      {/* Pear.no 4-Point Star Corner Emblems */}
      <div className="relative z-10">
        <span className="absolute top-0 left-0 text-amber w-3.5 h-3.5 m-2 opacity-60 select-none">
          <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" className="w-full h-full block">
            <path d="M12 0Q13.1 10.9 24 12Q13.1 13.1 12 24Q10.9 13.1 0 12Q10.9 10.9 12 0Z" />
          </svg>
        </span>
        <span className="absolute top-0 right-0 text-amber w-3.5 h-3.5 m-2 opacity-60 select-none">
          <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" className="w-full h-full block">
            <path d="M12 0Q13.1 10.9 24 12Q13.1 13.1 12 24Q10.9 13.1 0 12Q10.9 10.9 12 0Z" />
          </svg>
        </span>
        <span className="absolute bottom-0 left-0 text-amber w-3.5 h-3.5 m-2 opacity-60 select-none">
          <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" className="w-full h-full block">
            <path d="M12 0Q13.1 10.9 24 12Q13.1 13.1 12 24Q10.9 13.1 0 12Q10.9 10.9 12 0Z" />
          </svg>
        </span>
        <span className="absolute bottom-0 right-0 text-amber w-3.5 h-3.5 m-2 opacity-60 select-none">
          <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" className="w-full h-full block">
            <path d="M12 0Q13.1 10.9 24 12Q13.1 13.1 12 24Q10.9 13.1 0 12Q10.9 10.9 12 0Z" />
          </svg>
        </span>
      </div>

      {/* Monumental Typography with Overflow-Hidden Mask Reveal */}
      <div className="relative z-10 py-12 md:py-20 lg:py-28 select-none">
        <h1 className="font-sans font-bold text-[14.5vw] md:text-[13.8vw] lg:text-[12.5vw] leading-[0.84] tracking-[-0.04em] uppercase text-[var(--text)] m-0 p-0">
          <span className="block overflow-hidden pb-1 md:pb-2 lg:pb-3">
            <span
              ref={(el) => {
                lineRefs.current[0] = el;
              }}
              className="inline-block transform-gpu will-change-transform"
            >
              WE BUILD.
            </span>
          </span>
          <span className="block overflow-hidden pb-1 md:pb-2 lg:pb-3">
            <span
              ref={(el) => {
                lineRefs.current[1] = el;
              }}
              className="inline-block transform-gpu will-change-transform"
            >
              WE COMPETE.
            </span>
          </span>
          <span className="block overflow-hidden pb-1 md:pb-2 lg:pb-3">
            <span
              ref={(el) => {
                lineRefs.current[2] = el;
              }}
              className="inline-block transform-gpu will-change-transform"
            >
              WE{" "}
              <span className="font-serif italic font-normal tracking-tight text-amber">
                <KineticText fillColor="var(--amber, #FFB800)">DOMINATE.</KineticText>
              </span>
            </span>
          </span>
        </h1>
      </div>

      {/* Hero Baseline Technical Breakdown & Fluid Glass Pod */}
      <div className="hero-telemetry relative z-10 w-full grid grid-cols-1 md:grid-cols-12 gap-8 p-8 md:p-12 fluid-glass rounded-3xl md:rounded-[36px] items-start mt-8">
        <div className="md:col-span-5 font-body text-xs md:text-sm leading-relaxed text-[var(--text-muted)] font-light flex flex-col justify-between">
          <p>
            Competitive robotics research &amp; combat engineering division.
            Department of Electronics &amp; Instrumentation Engineering (EIE),
            VNRVJIET. Uncompromising hardware architecture, deterministic motion
            control, and high-energy impact kinetics.
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <Magnetic radius={40}>
              <FloodButton href="#fleet">
                ENTER MANIFEST
              </FloodButton>
            </Magnetic>
            <Magnetic radius={40}>
              <FloodButton href="/cadre-intake">
                JOIN CADRE
              </FloodButton>
            </Magnetic>
          </div>
        </div>

        <div className="md:col-span-4 font-mono text-[11px] tracking-[0.18em] text-[var(--text-muted)] uppercase flex flex-col gap-2 border-l border-hairline pl-4 md:pl-8">
          <span className="text-[var(--text)] font-semibold border-b border-hairline pb-1 text-amber">
            01. OPERATIONAL DOMAIN
          </span>
          <span className="hover:text-[var(--text)] transition-colors">→ PRECISION LFR &amp; MAZE SOLVERS</span>
          <span className="hover:text-[var(--text)] transition-colors">→ AUTONOMOUS UAV / AEROSPACE</span>
          <span className="hover:text-[var(--text)] transition-colors">→ ALL-TERRAIN HIGH-SPEED RACERS</span>
          <span className="hover:text-[var(--text)] transition-colors">→ HARDOX HEAVYWEIGHT COMBAT</span>
        </div>

        <div className="md:col-span-3 font-mono text-[11px] tracking-[0.18em] text-[var(--text-muted)] uppercase flex flex-col gap-2 border-l border-hairline pl-4 md:pl-8">
          <span className="text-[var(--text)] font-semibold border-b border-hairline pb-1 text-amber">
            WIN RATIO // 82.4%
          </span>
          <span>PODIUMS // 30+ NATIONAL</span>
          <span>DEPLOYMENTS // 5+ STATES</span>
          <span>CYCLE // 2023 — 2025</span>
          <span className="text-amber">FOUNDRY // B-321 READY</span>
        </div>
      </div>
    </section>
  );
}
