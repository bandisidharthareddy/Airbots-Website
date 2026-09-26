"use client";

import React, { useEffect, useRef } from "react";

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  opacity: number;
  speed: number;
}

export default function InkDropCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const ripples: Ripple[] = [];
    let reqId: number;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const addRipple = (x: number, y: number) => {
      // Don't add too many ripples too fast
      if (ripples.length > 20) ripples.shift();
      ripples.push({
        x,
        y,
        radius: 0,
        maxRadius: Math.random() * 150 + 100,
        opacity: 0.15, // Low opacity as requested (0.12 - 0.18)
        speed: Math.random() * 2 + 1,
      });
    };

    const onPointerMove = (e: PointerEvent) => {
      // Only spawn occasionally on drag
      if (e.buttons > 0 && Math.random() > 0.7) {
        addRipple(e.clientX, e.clientY);
      }
    };

    const onPointerDown = (e: PointerEvent) => {
      addRipple(e.clientX, e.clientY);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerdown", onPointerDown);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Determine theme color from body background (or just use CSS variables)
      // We will draw it with Amber as default tint, or read from computed style
      const isLightMode = document.documentElement.classList.contains("light");
      const r = isLightMode ? 10 : 255;
      const g = isLightMode ? 10 : 184;
      const b = isLightMode ? 10 : 0; // Graphite for light, Amber for dark

      for (let i = 0; i < ripples.length; i++) {
        const p = ripples[i];
        
        ctx.beginPath();
        // Turbulent edge effect simulated with multiple layered circles
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        
        const gradient = ctx.createRadialGradient(p.x, p.y, p.radius * 0.5, p.x, p.y, p.radius);
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${p.opacity})`);
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.fill();

        p.radius += p.speed;
        p.opacity -= 0.002;
      }

      // Remove dead ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        if (ripples[i].opacity <= 0) {
          ripples.splice(i, 1);
        }
      }

      reqId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      cancelAnimationFrame(reqId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[1] pointer-events-none"
    />
  );
}
