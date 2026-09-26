import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Manifest from "@/components/Manifest";
import Arena from "@/components/Arena";
import Cadre from "@/components/Cadre";
import Footer from "@/components/Footer";
import GridOverlay from "@/components/pear/GridOverlay";
import ChapterRail from "@/components/pear/ChapterRail";
import TelemetryRuler from "@/components/pear/TelemetryRuler";
import InkDropCanvas from "@/components/pear/InkDropCanvas";

export default function Home() {
  return (
    <>
      {/* Persistent Global Background Video */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <video
          src="/videos/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover filter contrast-110 brightness-95 opacity-80 dark:opacity-80 light:opacity-15 transition-opacity duration-500"
        ></video>
      </div>

      {/* Interactive Ink-Drop Canvas */}
      <InkDropCanvas />
      <GridOverlay />

      {/* Pear.no Right Side Chapter Navigation Rail */}
      <ChapterRail />

      {/* Pear.no Left Side Telemetry Measurement Ruler */}
      <TelemetryRuler />

      <Header />
      <main className="w-full relative z-10 flex flex-col pt-[84px]">
        <Hero />
        <Manifest />
        <Arena />
        <Cadre />
      </main>
      <Footer />
    </>
  );
}
