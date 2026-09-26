import React from "react";

export default function Ticker() {
  const content =
    "AIRBOTS // VNRVJIET // DEPT. B-321 // 30+ PODIUMS // 5+ STATES // HARDWARE FOUNDRY // 17.5385° N, 78.3868° E // ACTIVE KINETICS // ";

  return (
    <div className="w-full border-b border-hairline overflow-hidden bg-[var(--bg)]/80 backdrop-blur-sm py-2.5 flex items-center select-none">
      <div className="animate-marquee whitespace-nowrap font-mono text-[14px] font-medium uppercase tracking-[0.25em] text-[#FFFFFF]">
        <span>{content}</span>
        <span>{content}</span>
        <span>{content}</span>
        <span>{content}</span>
      </div>
    </div>
  );
}
