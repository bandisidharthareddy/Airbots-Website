# AIRBOTS // HARDWARE FOUNDRY & PROVING GROUND

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.12-88CE02?style=for-the-badge&logo=greensock)](https://greensock.com/gsap/)

The official competitive robotics division website for **AIRBOTS**, Department of Electronics & Instrumentation Engineering (EIE) at **VNR Vignana Jyothi Institute of Engineering and Technology (VNRVJIET)**.

Built with modern **Fluid Cybernetics**, **Liquid Glassmorphism**, and industrial **High-Contrast Telemetry**, this platform showcases competitive autonomous robotics, national hackathon podium records, combat prototyping, and recruitment intake.

---

## ⚡ Key Architectural Features

- **Fluid Cybernetic Liquid Glassmorphism:** Heavy Gaussian refraction (`backdrop-filter: blur(24px)`), swooping organic curvatures, micro-thin hairline borders, and molten energetic gold accents (`#FFB800`).
- **Dynamic Light/Dark Theme Inversion:**
  - **Dark Mode:** Deep `rgba(0, 0, 0, 0.6)` obsidian glass panes with high-contrast white and gold typography.
  - **Light Mode:** Inverted frosted white glass panes (`rgba(255, 255, 255, 0.65)`) with crisp `#1A1A1A` dark charcoal typography for optimal readability in bright environments.
- **Contextual Brand Asset Swapping:** Intelligent theme-aware logo switching that renders the white-text VNR logo in Dark Mode and swaps automatically to the black-text VNR logo in Light Mode.
- **Technical Manifest (The Fleet Arsenal):** Precision telemetry specifications for competitive hardware:
  - Aerial Rescue UAV & Fixed-Wing Trainer
  - High-Speed Line Follower Robot (LFR)
  - All-Terrain Racer (ATR)
  - Autonomous Maze Solver
  - IIT Bombay e-Yantra Research Testbed
  - Hardox Heavyweight Combat Prototype
- **'Data-Reveal' Liquid Glass Hover Interaction:** Quick-glance technical HUD overlay sliding up smoothly over hardware imagery revealing powertrain (`A2212 1400KV Motor`) and chassis envelope (`116 cm Wingspan`).
- **3D Cylindrical Viewport Carousel (Technical Dossier):** A physical 360-degree CSS 3D ring rotating on the Y-axis. Features mouse-drag, touch-swipe, and wheel spin with smooth inertia damping (lerp physics), active center focus, and depth-of-field Gaussian blur.
- **Competitive Ledger (The Arena):** Editorial record table cataloging 27 verified national hackathons, hardware robotics competitions, and collaborative research projects with interactive era and domain filtering.
- **Retro-Futuristic Cadre Intake (`/cadre-intake`):** A dedicated 1920s–1930s Metropolis / Art Deco lithograph movie poster experience for new recruit intake.

---

## 🛠️ Technology Stack

| Domain | Technology |
|---|---|
| **Core Framework** | [Next.js 14](https://nextjs.org/) (App Router, Server & Client Components) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) (Strict mode) |
| **Styling** | [Tailwind CSS 3](https://tailwindcss.com/) & CSS Custom Properties |
| **Animation & Physics** | [GSAP](https://greensock.com/gsap/) (ScrollTrigger), RequestAnimationFrame Lerp Engine |
| **Smooth Scrolling** | [@studio-freight/react-lenis](https://github.com/darkroomengineering/lenis) |
| **Theme Management** | [next-themes](https://github.com/pacocoursey/next-themes) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Graphics** | [Three.js](https://threejs.org/) |

---

## 📁 Repository Structure

```text
airbots-website/
├── app/
│   ├── cadre-intake/        # 1920s Art Deco Metropolis recruit intake poster
│   │   └── page.tsx
│   ├── favicon.ico
│   ├── globals.css          # Theme tokens, liquid glass, keyframes & animations
│   ├── layout.tsx           # Root layout, viewport metadata & theme provider
│   └── page.tsx             # Main landing page assembling chapters 01-04
├── components/
│   ├── pear/                # Modular UI micro-components
│   │   ├── ChapterRail.tsx        # Fixed chapter indicator navigation
│   │   ├── CylindricalCarousel.tsx# 3D Cylindrical Viewport Carousel
│   │   ├── FloodButton.tsx        # Liquid fill interactive CTA buttons
│   │   ├── GridOverlay.tsx        # Engineering hairline blueprint overlay
│   │   ├── InkDropCanvas.tsx      # Interactive ripple particle canvas
│   │   └── TelemetryRuler.tsx     # Calibrated scroll percentage ruler
│   ├── Arena.tsx            # Competitive ledger & Home Turf proving grounds
│   ├── Cadre.tsx            # Leadership, founding pillars & facility telemetry
│   ├── CustomCursor.tsx     # Custom hardware crosshair pointer
│   ├── Footer.tsx           # Global footer with contextual VNR logo swapping
│   ├── GlitchImage.tsx      # Hardware graphic presentation module
│   ├── Header.tsx           # Floating glass navbar with theme toggle
│   ├── Hero.tsx             # Kinetic typography & operational domain breakdown
│   ├── Magnetic.tsx         # Physics-based magnetic cursor attraction
│   ├── Manifest.tsx         # Technical fleet arsenal & data-reveal hover HUDs
│   ├── SmoothScroll.tsx     # Lenis smooth scroll provider synced with GSAP
│   └── ThemeToggle.tsx      # Dark/Light mode theme switch
├── public/
│   ├── assets/logos/        # Official division & institutional logos
│   │   ├── airbots-logo.jpg
│   │   ├── vnr-logo-black.png  # High-contrast black text for Light Mode
│   │   └── vnr-logo-white.png  # High-contrast white text for Dark Mode
│   ├── images/              # High-resolution hardware photography & blueprints
│   │   ├── blueprint-manifest.png
│   │   ├── drone-trainer.png
│   │   ├── robo-war.png
│   │   ├── vnr-logo-black.png
│   │   └── vnr-logo-white.png
│   └── videos/
│       └── hero.mp4         # Background combat lab video loop
├── .gitignore
├── next.config.mjs
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version `18.17.0` or higher recommended)
- `npm`, `yarn`, or `pnpm`

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/airbots-website.git
   cd airbots-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. Build for production:
   ```bash
   npm run build
   npm start
   ```

---

## 📱 Cross-Device & Responsive Design

- **Viewport Configuration:** Strict `<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5">` configured via Next.js metadata.
- **Fluid Layouts:** 100% Flexbox and CSS Grid layout architecture without fixed pixel clipping.
- **Breakpoints:** Tested and styled across mobile (`< 640px`), tablet (`640px - 1024px`), desktop (`1024px - 1536px`), and ultra-wide screens (`> 1536px`).
- **Touch Gestures:** Native touch-pan support and inertia swipe navigation on touchscreens.

---

## 🏛️ Institutional Backing

- **Division:** AIRBOTS Robotics Foundry
- **Department:** Electronics & Instrumentation Engineering (EIE)
- **Institution:** VNR Vignana Jyothi Institute of Engineering & Technology (VNRVJIET), Hyderabad, India
- **Coordinates:** `17.5385° N, 78.3860° E` // Foundry Lab B-321
