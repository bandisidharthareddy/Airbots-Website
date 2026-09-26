"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasFinePointer) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    dot.style.opacity = "1";
    ring.style.opacity = "1";

    const dotX = gsap.quickTo(dot, "x", { duration: 0.15, ease: "power2.out" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.15, ease: "power2.out" });
    const ringX = gsap.quickTo(ring, "x", { duration: 0.5, ease: "power3.out" });
    const ringY = gsap.quickTo(ring, "y", { duration: 0.5, ease: "power3.out" });

    const onMouseMove = (e: MouseEvent) => {
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
    };

    const onMouseEnterInteractive = () => {
      gsap.to(dot, { scale: 0.5, duration: 0.3, ease: "power2.out" });
      gsap.to(ring, { 
        scale: 1.6, 
        borderColor: "#FFB800", // Amber pulse
        backgroundColor: "rgba(255, 184, 0, 0.1)", // Slight amber fill
        duration: 0.4, 
        ease: "power2.out" 
      });
    };

    const onMouseLeaveInteractive = () => {
      gsap.to(dot, { scale: 1, duration: 0.3, ease: "power2.out" });
      gsap.to(ring, { 
        scale: 1, 
        borderColor: "var(--cursor-border)", 
        backgroundColor: "var(--cursor-ring)", 
        duration: 0.4, 
        ease: "power2.out" 
      });
    };

    const onMouseDown = () => {
      gsap.to(ring, { scale: 0.85, duration: 0.15, ease: "power2.out" });
    };

    const onMouseUp = () => {
      gsap.to(ring, { scale: 1, duration: 0.3, ease: "power2.out" });
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    const interactives = document.querySelectorAll("a, button, [role='button'], details summary");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnterInteractive);
      el.addEventListener("mouseleave", onMouseLeaveInteractive);
    });

    const observer = new MutationObserver(() => {
      const newInteractives = document.querySelectorAll("a, button, [role='button'], details summary");
      newInteractives.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterInteractive);
        el.removeEventListener("mouseleave", onMouseLeaveInteractive);
        el.addEventListener("mouseenter", onMouseEnterInteractive);
        el.addEventListener("mouseleave", onMouseLeaveInteractive);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterInteractive);
        el.removeEventListener("mouseleave", onMouseLeaveInteractive);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none opacity-0"
        style={{
          width: 8,
          height: 8,
          marginLeft: -4,
          marginTop: -4,
          borderRadius: "50%",
          backgroundColor: "var(--cursor-dot)",
          willChange: "transform",
        }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none opacity-0"
        style={{
          width: 36,
          height: 36,
          marginLeft: -18,
          marginTop: -18,
          borderRadius: "50%",
          backgroundColor: "var(--cursor-ring)",
          border: "1px solid var(--cursor-border)",
          willChange: "transform, background-color, border-color",
        }}
      />
    </>
  );
}
