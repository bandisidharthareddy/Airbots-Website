"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

interface FAQItem {
  id: string;
  tag: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-01",
    tag: "DISCLOSURE // 01",
    question: "What is the fabrication cycle for heavyweight combat bots?",
    answer:
      "Platforms like the Robo War prototype utilize waterjet-cut Hardox 500 / AR600 ballistic armor plates, CNC-turned high-tensile steel weapon drums, and high-discharge LiHV battery matrices. Structural weld testing occurs under impact blast shields in B-321.",
  },
  {
    id: "faq-02",
    tag: "DISCLOSURE // 02",
    question: "How does the LFR achieve deterministic sub-second lap times?",
    answer:
      "A multiplexed LFS 16A optical emitter-receiver array is polled at 20kHz directly into an ATmega328P core running an integer-based discrete PID loop. N20 12V 600RPM micro gearmotors deliver instantaneous rotational correction on 43mm rubber compounds.",
  },
  {
    id: "faq-03",
    tag: "DISCLOSURE // 03",
    question: "What disciplines are featured in ROBO ARENA 2.0?",
    answer:
      "Held on September 18th & 19th, 2026, and co-organized by AIRBOTS and IEEE, ROBO ARENA 2.0 stages 4 action-packed tracks: Line Follower Robot (LFR), Multi-Terrain Racer (ATR), 2v2 Robo Soccer, and Circuit Racing.",
  },
  {
    id: "faq-04",
    tag: "DISCLOSURE // 04",
    question: "Who is eligible to join the AIRBOTS hardware cadre?",
    answer:
      "Recruitment is open to all engineering disciplines at VNRVJIET across our 6 core domains: Robotics, Research, Mechanical Design, Embedded Systems & Firmware, Documentation, and Media Cadre.",
  },
  {
    id: "faq-05",
    tag: "DISCLOSURE // 05",
    question: "How are national research testbeds and industry projects conducted?",
    answer:
      "AIRBOTS collaborates on national projects like IIT Bombay e-Yantra, industrial 6-axis robotic arm fine-tuning with Xairo Tech, and conducts foundational robotics workshop series for budding engineers.",
  },
];

export default function CylindricalCarousel() {
  const total = FAQ_ITEMS.length;
  const angleStep = 360 / total;

  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [radius, setRadius] = useState(380);

  const targetAngleRef = useRef(0);
  const currentAngleRef = useRef(0);
  const isPointerDownRef = useRef(false);
  const startXRef = useRef(0);
  const dragStartAngleRef = useRef(0);
  const lastXRef = useRef(0);
  const velocityRef = useRef(0);
  const wheelTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Responsive radius calculation
  useEffect(() => {
    const updateRadius = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setRadius(260);
      } else if (w < 1024) {
        setRadius(330);
      } else {
        setRadius(390);
      }
    };
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  // RequestAnimationFrame loop for liquid-like heavy inertia & smooth damping
  useEffect(() => {
    let animId: number;
    const updatePhysics = () => {
      // Spring/Lerp physics factor (0.085 for smooth, heavy ferrofluid feel)
      const diff = targetAngleRef.current - currentAngleRef.current;
      currentAngleRef.current += diff * 0.085;
      setRotation(currentAngleRef.current);
      animId = requestAnimationFrame(updatePhysics);
    };

    animId = requestAnimationFrame(updatePhysics);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Active card index derived from continuous rotation
  const normalizedRotation = ((-rotation % 360) + 360) % 360;
  const activeCardIndex = Math.round(normalizedRotation / angleStep) % total;

  // Rotate to specific card smoothly on click or pill button click
  const scrollToCard = useCallback(
    (index: number) => {
      const current = targetAngleRef.current;
      const targetBase = -index * angleStep;
      const diff = (((targetBase - current) % 360) + 540) % 360 - 180;
      targetAngleRef.current = current + diff;
    },
    [angleStep]
  );

  // Pointer drag events
  const handlePointerDown = (e: React.PointerEvent) => {
    isPointerDownRef.current = true;
    setIsDragging(true);
    startXRef.current = e.clientX;
    lastXRef.current = e.clientX;
    dragStartAngleRef.current = targetAngleRef.current;
    velocityRef.current = 0;
    try {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    } catch {
      // fallback
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isPointerDownRef.current) return;
    const deltaX = e.clientX - startXRef.current;
    velocityRef.current = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;

    // Direct responsive spin during drag
    targetAngleRef.current = dragStartAngleRef.current + deltaX * 0.35;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isPointerDownRef.current) return;
    isPointerDownRef.current = false;
    setIsDragging(false);

    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }

    // Apply momentum throw and snap to nearest card
    const throwMomentum = velocityRef.current * 4.2;
    const projectedAngle = targetAngleRef.current + throwMomentum;
    const snappedAngle = Math.round(projectedAngle / angleStep) * angleStep;
    targetAngleRef.current = snappedAngle;
  };

  // Mouse wheel rotation
  const handleWheel = (e: React.WheelEvent) => {
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    targetAngleRef.current -= delta * 0.25;

    if (wheelTimeoutRef.current) {
      clearTimeout(wheelTimeoutRef.current);
    }

    wheelTimeoutRef.current = setTimeout(() => {
      targetAngleRef.current = Math.round(targetAngleRef.current / angleStep) * angleStep;
    }, 220);
  };

  return (
    <div className="w-full py-16 md:py-24 border-b border-hairline bg-[var(--bg-secondary)] relative overflow-hidden select-none">
      {/* Background blueprint grid watermark */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-40" />

      {/* Chapter Subheader */}
      <div className="px-6 md:px-12 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4 relative z-10">
        <div>
          <div className="flex items-center gap-2 font-mono text-[11px] text-amber tracking-[0.2em] uppercase mb-2 pulsing-gold-tag">
            <span className="w-1.5 h-1.5 bg-amber inline-block animate-pulse"></span>
            DISCLOSURES &amp; SPECIFICATION INQUIRY
          </div>
          <h2 className="font-sans text-2xl md:text-4xl font-bold uppercase tracking-tight text-[var(--text)]">
            TECHNICAL <span className="font-serif italic font-normal text-amber">Dossier</span> // FREQUENT INQUIRIES
          </h2>
        </div>

        {/* Live Active Index Indicator Badge */}
        <div className="font-mono text-xs text-[var(--text-muted)] tracking-[0.2em] uppercase flex items-center gap-2">
          <span>SPEC CALIBRATION:</span>
          <span className="text-amber font-bold">0{activeCardIndex + 1} / 0{total}</span>
        </div>
      </div>

      {/* 3D Cylindrical Orbit Viewport */}
      <div
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onWheel={handleWheel}
        style={{ touchAction: "pan-y" }}
        className={`relative w-full h-[390px] sm:h-[430px] flex items-center justify-center [perspective:1400px] ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
      >
        <div
          className="relative w-[310px] sm:w-[420px] md:w-[480px] h-[270px] sm:h-[300px] [transform-style:preserve-3d] will-change-transform"
          style={{
            transform: `rotateY(${rotation}deg)`,
          }}
        >
          {FAQ_ITEMS.map((item, index) => {
            // Calculate angular position relative to the camera
            const cardBaseAngle = index * angleStep;
            const totalAngle = (cardBaseAngle + rotation) % 360;
            const normalizedDiff = (((totalAngle + 180) % 360) + 360) % 360 - 180;
            const absDiff = Math.abs(normalizedDiff);

            // Active Center Card focus
            const isCenter = absDiff < 24;

            // Dynamic Depth & Focus:
            // Center is 100%, inactive cards scale down to ~86%
            const scale = Math.max(0.86, 1 - (absDiff / 180) * 0.2);

            // Opacity: fully opaque at center (1.0), dropping to 40-50% on sides, fading out at back
            let opacity = 1;
            if (absDiff > 24) {
              opacity = Math.max(0.35, 1 - ((absDiff - 24) / 100) * 0.65);
            }

            // Blur: 0px at center, scaling up to 5-6px for background cards to simulate depth of field
            const blur = absDiff < 20 ? 0 : Math.min(5.5, (absDiff - 20) * 0.08);

            const zIndex = Math.round(100 - absDiff);

            return (
              <div
                key={item.id}
                onClick={(e) => {
                  if (!isCenter) {
                    e.stopPropagation();
                    scrollToCard(index);
                  }
                }}
                className={`absolute inset-0 p-6 sm:p-8 rounded-3xl md:rounded-[32px] fluid-glass border transition-all duration-300 ease-out select-none flex flex-col justify-between ${
                  isCenter
                    ? "border-amber/80 shadow-[0_0_35px_rgba(255,184,0,0.32),inset_0_1px_2px_rgba(255,255,255,0.4)] ring-1 ring-amber/50"
                    : "border-[var(--border)] hover:border-amber/40 shadow-[0_12px_32px_rgba(0,0,0,0.25)]"
                }`}
                style={{
                  transform: `rotateY(${cardBaseAngle}deg) translateZ(${radius}px) scale(${scale})`,
                  opacity,
                  filter: blur > 0 ? `blur(${blur}px)` : "none",
                  zIndex,
                  backfaceVisibility: "visible",
                }}
              >
                {/* 4-point star corner emblems (pear.no style .st) */}
                <span
                  className={`absolute top-4 left-4 w-3.5 h-3.5 transition-colors duration-300 ${
                    isCenter ? "text-amber opacity-90" : "text-amber/40"
                  }`}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0Q13.1 10.9 24 12Q13.1 13.1 12 24Q10.9 13.1 0 12Q10.9 10.9 12 0Z" />
                  </svg>
                </span>
                <span
                  className={`absolute bottom-4 right-4 w-3.5 h-3.5 transition-colors duration-300 ${
                    isCenter ? "text-amber opacity-90" : "text-amber/40"
                  }`}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0Q13.1 10.9 24 12Q13.1 13.1 12 24Q10.9 13.1 0 12Q10.9 10.9 12 0Z" />
                  </svg>
                </span>

                <div>
                  <div className="font-mono text-[10px] tracking-[0.2em] uppercase mb-2.5 pl-4 text-amber font-semibold flex items-center gap-1.5">
                    <span
                      className={`w-1.5 h-1.5 rounded-full bg-amber ${
                        isCenter ? "animate-pulse" : "opacity-40"
                      }`}
                    ></span>
                    {item.tag}
                  </div>
                  <h3 className="font-sans text-base sm:text-lg md:text-xl font-bold uppercase tracking-tight text-[var(--text)] pl-4 leading-snug">
                    {item.question}
                  </h3>
                </div>

                <p className="font-body text-xs sm:text-[13px] text-[var(--text-muted)] leading-relaxed pl-4 border-l border-amber/30 mt-4">
                  {item.answer}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Subtle Indicator Text & Track Dots */}
      <div className="mt-8 flex flex-col items-center justify-center gap-3 relative z-10 select-none">
        <div className="flex items-center gap-2.5 font-mono text-[10px] sm:text-[11px] tracking-[0.25em] text-[var(--text-muted)] uppercase">
          <span className="text-amber animate-pulse">←</span>
          <span>DRAG OR SCROLL TO TUNE TRACKS</span>
          <span className="text-amber animate-pulse">→</span>
        </div>

        {/* Track Pagination Pills */}
        <div className="flex items-center gap-2 mt-1">
          {FAQ_ITEMS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToCard(i)}
              aria-label={`Jump to track 0${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                activeCardIndex === i
                  ? "w-8 bg-amber shadow-[0_0_12px_rgba(255,184,0,0.8)]"
                  : "w-2 bg-[var(--text)]/20 hover:bg-[var(--text)]/40 hover:w-4"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
