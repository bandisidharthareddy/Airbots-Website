"use client";

import React from "react";

export default function Cadre() {
  return (
    <section id="cadre" className="w-full border-b border-hairline relative z-40 ">
      {/* Sticky Chapter Marker: 04 // CADRE */}
      <div className="sticky top-[72px] z-30 w-full px-6 md:px-12 py-4 md:py-5 glass border-b border-hairline flex flex-col md:flex-row md:items-baseline justify-between gap-3">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-xs font-semibold tracking-[0.2em] pulsing-gold-tag">
            04 // CADRE
          </span>
          <h2 className="font-sans text-xl md:text-3xl font-bold uppercase tracking-tight text-[var(--text)]">
            THE FOUNDATION // C-CADRE
          </h2>
        </div>
        <span className="font-mono text-[11px] text-[var(--text-muted)] uppercase tracking-[0.2em]">
          ORGANIZATIONAL ARCHITECTURE &amp; FACILITY
        </span>
      </div>

      {/* Leadership Split (3 Columns) */}
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
              FOUNDING PILLARS
            </div>
            <h3 className="font-sans text-2xl font-bold uppercase tracking-tight text-[var(--text)]">
              Sharath &amp; Karthikeya
            </h3>
            <p className="font-mono text-xs text-[var(--text-muted)] uppercase mt-1">
              Founders // AIRBOTS
            </p>
          </div>
          <p className="font-body text-xs text-[var(--text-muted)] font-light leading-relaxed pt-4 border-t border-hairline mt-4">
            Established the competitive robotics foundation at VNRVJIET;
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

      {/* Workshop HQ & Monospace Terminal Split wrapped in Fluid Glass */}
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
                  <span className="text-[var(--text)]">&gt;</span> REGISTRY: LFR / ATR / UAV / RC TRAINER / MAZE SOLVER
                </div>
                <div>
                  <span className="text-[var(--text)]">&gt;</span> PROTOCOL: HARDOX AR500/AR600 EXPERIMENTAL STAGE
                </div>
                <div>
                  <span className="text-[var(--text)]">&gt;</span> PROVING GROUND: ROBOARENA VNRVJIET
                </div>
                <div>
                  <span className="text-[var(--text)]">&gt;</span> WORKSHOP HQ: B-321, B-BLOCK READY FOR DISPATCH
                </div>
                <div>
                  <span className="text-[var(--text)]">&gt;</span> TOTAL FIELD PODIUMS: 30+ NATIONAL CIRCUITS
                </div>
                <div className="text-[var(--text)] mt-3">
                  &gt; SYS_READY // LISTENING ON 17.5385_78.3860{" "}
                  <span className="inline-block w-2 h-3.5 bg-amber animate-pulse align-middle ml-1"></span>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-hairline flex justify-between text-[10px] text-[var(--text-dim)] uppercase">
              <span>PORT // RAW_UART_57600</span>
              <span>CYCLE 2025 // OPERATIONAL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
