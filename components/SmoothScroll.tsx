"use client";

import React, { useEffect, useRef, useState } from "react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function ScrollVelocity() {
  // Typography and panels stay perfectly flat and parallel to the screen without skew distortion
  return null;
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<any>(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
      ScrollTrigger.update();
    }

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis
      ref={lenisRef}
      root
      options={{
        lerp: 0.05,
        duration: 1.5,
        smoothWheel: true,
        wheelMultiplier: 0.8,
        touchMultiplier: 1.5,
        infinite: false,
      }}
    >
      <ScrollVelocity />
      {children}
    </ReactLenis>
  );
}
