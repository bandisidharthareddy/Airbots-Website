"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface KineticTextProps {
  children: React.ReactNode;
  className?: string;
  fillColor?: string;
}

export default function KineticText({
  children,
  className = "",
  fillColor = "var(--amber, #FFB800)",
}: KineticTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (!containerRef.current || !fillRef.current) return;

    // Scroll-based fill (clip-path animation from left to right - triggers earlier and fills swiftly)
    const ctx = gsap.context(() => {
      gsap.fromTo(
        fillRef.current,
        { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          ease: "power1.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 95%",
            end: "center 65%",
            scrub: 0.2,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={`relative inline-block ${className}`}>
      {/* Outlined text (Base) */}
      <span
        className="block text-transparent"
        style={{ WebkitTextStroke: "1px var(--text-muted)", opacity: 0.5 }}
      >
        {children}
      </span>
      {/* Filled text (Overlay) */}
      <span
        ref={fillRef}
        className="absolute top-0 left-0 text-transparent"
        style={{
          color: fillColor,
          WebkitTextStroke: "0px",
          willChange: "clip-path",
        }}
      >
        {children}
      </span>
    </div>
  );
}
