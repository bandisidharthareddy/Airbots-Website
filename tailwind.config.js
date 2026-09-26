/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#0A0A0A",
        paper: "#EDEDED",
        dim: "#737373",
        faint: "#383838",
        hairline: "var(--border)",
        "hairline-strong": "var(--border-strong)",
        amber: {
          DEFAULT: "#FFB800",
          glow: "rgba(255, 184, 0, 0.15)",
          focus: "rgba(255, 184, 0, 0.6)",
        },
        surface: {
          base: "var(--bg)",
          card: "var(--surface-card)",
          elevated: "var(--surface-elevated)",
        },
      },
      fontFamily: {
        sans: ["'Space Grotesk'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
        body: ["'Inter'", "sans-serif"],
        serif: ["'Playfair Display'", "Georgia", "serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.02em",
        widest: "0.25em",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
