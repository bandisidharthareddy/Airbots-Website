"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GridOverlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Subtle rotation and breath on scroll for the crosshairs
      starsRef.current.forEach((star) => {
        if (!star) return;
        gsap.to(star, {
          rotation: "+=360",
          ease: "none",
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 2,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-40 overflow-hidden select-none"
    >
      {/* Vertical Hairline Guides (pear.no style .gv) */}
      <div className="absolute top-0 bottom-0 left-6 md:left-12 w-[1px] bg-[var(--text)]/[0.06]" />
      <div className="absolute top-0 bottom-0 right-6 md:right-16 w-[1px] bg-[var(--text)]/[0.06]" />

      {/* Horizontal Hairline Guides (pear.no style .gh) */}
      <div className="absolute left-0 right-0 top-14 h-[1px] bg-[var(--text)]/[0.06]" />
      <div className="absolute left-0 right-0 bottom-12 h-[1px] bg-[var(--text)]/[0.06]" />

      {/* Four-Point Star Crosshair Intersection Glyphs (pear.no style .gx) */}
      {/* Top Left */}
      <span
        ref={(el) => {
          starsRef.current[0] = el;
        }}
        className="absolute top-14 left-6 md:left-12 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-amber opacity-60 transition-transform"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0Q13.1 10.9 24 12Q13.1 13.1 12 24Q10.9 13.1 0 12Q10.9 10.9 12 0Z" />
        </svg>
      </span>

      {/* Top Right */}
      <span
        ref={(el) => {
          starsRef.current[1] = el;
        }}
        className="absolute top-14 right-6 md:right-16 translate-x-1/2 -translate-y-1/2 w-4 h-4 text-amber opacity-60 transition-transform"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0Q13.1 10.9 24 12Q13.1 13.1 12 24Q10.9 13.1 0 12Q10.9 10.9 12 0Z" />
        </svg>
      </span>

      {/* Bottom Left */}
      <span
        ref={(el) => {
          starsRef.current[2] = el;
        }}
        className="absolute bottom-12 left-6 md:left-12 -translate-x-1/2 translate-y-1/2 w-4 h-4 text-amber opacity-60 transition-transform"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0Q13.1 10.9 24 12Q13.1 13.1 12 24Q10.9 13.1 0 12Q10.9 10.9 12 0Z" />
        </svg>
      </span>

      {/* Bottom Right */}
      <span
        ref={(el) => {
          starsRef.current[3] = el;
        }}
        className="absolute bottom-12 right-6 md:right-16 translate-x-1/2 translate-y-1/2 w-4 h-4 text-amber opacity-60 transition-transform"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0Q13.1 10.9 24 12Q13.1 13.1 12 24Q10.9 13.1 0 12Q10.9 10.9 12 0Z" />
        </svg>
      </span>
    </div>
  );
}
