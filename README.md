# AIRBOTS Robotics Division Website

The official website for **AIRBOTS**, the competitive robotics division in the Department of Electronics & Instrumentation Engineering (EIE) at **VNR Vignana Jyothi Institute of Engineering and Technology (VNRVJIET)**.

## Overview

AIRBOTS designs, develops, and deploys autonomous and remote-controlled robotic systems for national-level competitions, hackathons, and research testbeds.

This website serves as the central platform for the division, highlighting hardware specifications for competition robots, cataloging verified competition and hackathon podium records, displaying facility telemetry, and hosting recruitment intake.

## Features

- **Hardware Fleet Manifest**: Telemetry breakdowns for competitive hardware platforms, including Aerial Rescue UAVs, Line Follower Robots (LFR), All-Terrain Racers (ATR), and Combat Prototypes.
- **3D Dossier Carousel**: Interactive 360-degree CSS 3D ring carousel with inertial drag, swipe, and scroll physics for exploring robot specifications.
- **Competition Ledger (The Arena)**: Verified record table cataloging 27 national hackathons, hardware robotics competitions, and collaborative research projects with era and category filtering.
- **Theme Inversion**: Dynamic Dark/Light mode theme switching with automatic high-contrast institutional logo swapping.
- **Interactive Animations**: Smooth scroll interpolation powered by Lenis and GSAP ScrollTrigger integrations.
- **Recruitment Intake (`/cadre-intake`)**: Dedicated recruitment intake page designed with an Art Deco / Metropolis aesthetic.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation & Physics**: GSAP (ScrollTrigger), Lenis Smooth Scroll
- **Theme**: `next-themes`
- **Icons**: Lucide React
- **Graphics**: Three.js

## Project Structure

```text
Airbots-Website/
├── app/
│   ├── cadre-intake/
│   │   └── page.tsx               # Dedicated recruit intake poster page
│   ├── globals.css                # Global theme tokens, glassmorphism & styles
│   ├── layout.tsx                 # Root layout & theme providers
│   └── page.tsx                   # Main landing page
├── components/
│   ├── pear/                      # UI micro-components
│   │   ├── ChapterRail.tsx        # Chapter navigation indicator
│   │   ├── CylindricalCarousel.tsx# 3D viewport carousel
│   │   ├── FloodButton.tsx        # Interactive button components
│   │   ├── GridOverlay.tsx        # Blueprint grid overlay
│   │   ├── InkDropCanvas.tsx      # Canvas particle background
│   │   └── TelemetryRuler.tsx     # Scroll percentage telemetry ruler
│   ├── Arena.tsx                  # Competition records table
│   ├── Cadre.tsx                  # Team leadership & lab details
│   ├── CustomCursor.tsx           # Custom pointer crosshair
│   ├── Footer.tsx                 # Footer with theme-aware logo switching
│   ├── GlitchImage.tsx            # Hardware graphic presentation module
│   ├── Header.tsx                 # Floating navigation bar
│   ├── Hero.tsx                   # Kinetic typography & domain breakdown
│   ├── Manifest.tsx               # Technical fleet hardware catalog
│   ├── SmoothScroll.tsx           # Lenis smooth scroll provider
│   └── ThemeToggle.tsx            # Light/Dark mode switcher
├── public/
│   ├── assets/logos/              # Division & college branding logos
│   ├── images/                    # Robot blueprints & hardware photos
│   └── videos/
│       └── hero.mp4               # Background video loop
├── next.config.mjs
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## Installation & Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.17.0 or higher recommended)
- `npm`, `yarn`, or `pnpm`

### 1. Clone the repository

```bash
git clone https://github.com/bandisidharthareddy/Airbots-Website.git
cd Airbots-Website
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production

```bash
npm run build
npm start
```

## Institutional Affiliation

- **Division**: AIRBOTS Robotics Division
- **Department**: Electronics & Instrumentation Engineering (EIE)
- **Institution**: VNR Vignana Jyothi Institute of Engineering & Technology (VNRVJIET), Hyderabad, Telangana, India

## Author

Bandi Sidhartha Reddy  
- GitHub: [bandisidharthareddy](https://github.com/bandisidharthareddy)  
- LinkedIn: [Bandi Sidhartha Reddy](https://www.linkedin.com/in/bandisidharthareddy/)
