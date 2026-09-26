"use client";

import React, { useEffect, useRef, cloneElement, ReactElement } from "react";
import gsap from "gsap";

interface MagneticProps {
  children: ReactElement;
  radius?: number;
}

export default function Magnetic({ children, radius = 40 }: MagneticProps) {
  const magneticRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only apply on devices with fine pointer (no touch)
    if (typeof window === "undefined") return;
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasFinePointer || !magneticRef.current) return;

    const el = magneticRef.current;
    
    // GSAP quickTo for smooth performance
    const xTo = gsap.quickTo(el, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
    const yTo = gsap.quickTo(el, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = el.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      const distanceX = clientX - centerX;
      const distanceY = clientY - centerY;
      
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

      // If within magnetic radius, pull it
      if (distance < radius) {
        xTo(distanceX * 0.4);
        yTo(distanceY * 0.4);
      } else {
        xTo(0);
        yTo(0);
      }
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    // Attach listeners to window for proximity pull, but usually it's better to attach to a parent or the element itself.
    // If we want it to pull when the cursor is *near*, we must listen to the window or a padded container.
    window.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [radius]);

  return (
    <div ref={magneticRef} className="inline-block relative z-50">
      {children}
    </div>
  );
}
