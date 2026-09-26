import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import { ThemeProvider } from "next-themes";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "AIRBOTS // HARDWARE FOUNDRY & PROVING GROUND",
  description:
    "Competitive robotics research & combat engineering division. Department of Electronics & Instrumentation Engineering (EIE), VNRVJIET. Uncompromising hardware architecture, deterministic motion control, and high-energy impact kinetics.",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[var(--bg)] text-[var(--text)] font-body selection:bg-[var(--text)] selection:text-[var(--bg)] min-h-screen antialiased relative">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {/* Global Noise Overlay */}
          <div
            aria-hidden="true"
            className="fixed inset-0 pointer-events-none z-50 opacity-[0.04] bg-noise"
          />
          <CustomCursor />
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
