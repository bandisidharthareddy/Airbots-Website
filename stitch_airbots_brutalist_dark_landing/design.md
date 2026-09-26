# Design System & Specification: AIRBOTS
## 1. Brand Identity & Vision
- **Product Name:** AIRBOTS — Competitive Robotics Club of VNRVJIET
- **Design Philosophy:** Minimalist, brutalist-refined, industrial high-tech.
- **Core Mood:** Confident, dark, architectural, and weightless ("anti-gravity"). Heavy contrast inspired by bleibtgleich.dev and pear.no.
- **Primary Messaging:** "WE BUILD. WE COMPETE. WE DOMINATE."
---
## 2. Color System
- **Background Primary:** `#0A0A0A` (Deep Void Black)
- **Background Secondary / Cards:** `#121212` (Subtle dark surface)
- **Card Borders:** `rgba(255, 255, 255, 0.08)` (Ultra-thin hairline borders)
- **Text Primary:** `#F5F5F7` (High-contrast off-white)
- **Text Secondary (Muted):** `#8E8E93` (Subdued technical gray)
- **Accent / Highlight:** `#FFFFFF` (Pure white for focal points) or subtle industrial amber `#FFB800` for badges/status indicators.
---
## 3. Typography & Hierarchy
- **Primary Typeface:** Clean geometric sans-serif (Inter, PP Neue Montreal, or Space Grotesk).
- **Hero Display Header:** Massive viewport-relative sizing (`clamp(3.5rem, 8vw, 9rem)`), tight tracking (`-0.04em`), uppercase, bold weight.
- **Section Headers:** Structural numbering syntax (e.g., `01 // THE FLEET`, `02 // THE ARENA`, `03 // THE FOUNDATION`).
- **Body Copy:** Compact, legible, high line-height (`1.6`), relaxed tracking (`-0.01em`).
---
## 4. Layout Architecture
### Global Structure
- Single-page fluid experience with smooth scrolling behavior.
- Generous outer margins (minimum 64px padding on desktop) to preserve negative space.
- Floating bottom bar or minimal fixed corner navigation instead of a traditional heavy top navbar.
### Section Breakdown
1. **Hero Section:**
   - Full-viewport height (`100vh`).
   - Gigantic typographic lockup: "WE BUILD. WE COMPETE. WE DOMINATE."
   - Floating central focal area with depth layering for 3D robot renders.
   - Micro-stats bar pinned at the base: "30+ Members | 5+ States | ₹200K+ Funded".
2. **The Fleet (Bento Grid Layout):**
   - High-contrast multi-span grid:
     - **Card A (Span 2x2):** Robo War (Heavyweight combat bot in fabrication, Hardox armor specs).
     - **Card B (Span 2x1):** Aerospace Division (RC Trainer Plane developed with Kaksya Sastra & Rescue Drones).
     - **Card C (Span 1x1):** Autonomous Systems (High-speed Line Follower Robots & Maze Solvers).
     - **Card D (Span 1x1):** e-Yantra Kit (IIT Bombay platform for embedded systems).
   - Card Styling: Frosted dark surface, 1px perimeter border, subtle scale (`scale-102`) and float effect on cursor hover.
3. **The Arena (Competitions & Hall of Fame):**
   - Editorial, chapter-style clean table or bordered row list.
   - Minimalist divider lines (`rgba(255, 255, 255, 0.1)`).
   - Key entries:
     - 1st Place: Yukthi Hackathon (BVRIT)
     - 1st Place: Robotec LFR Competition (MLRIT)
     - 1st Place: EMERGE National Hackathon
     - 1st Place: Elan & nVision (IIT Hyderabad)
     - 2nd Place: Infinitus LFR & Robo Race (SRM AP)
     - 2nd Place: Vasavi College Robotics Events
     - National Deployment: TechnoXian Championships (SRM Chennai / Kolkata)
4. **Home Turf Flagship:**
   - Feature spotlight: "Convergence — Robo Arena" co-hosted with IEEE RAS.
   - Display tracks: LFR, Robo Soccer (2v2), All-Terrain Robo Race (ATR), Circuit Race.
5. **Footer / Terminal:**
   - Minimal architectural footer.
   - Workshop Location: PG 409, VNRVJIET.
   - Student Coordinator: Riteesh Dath | Founder: Sharath | Faculty Coordinator: Dr. Senthil Kumar Selvaraj.
   - External links: Instagram (`@airbots_vnrvjiet`).
---
## 5. Motion & Interaction Specifications
- **Scroll Physics:** Smooth inertia scroll behavior (Lenis-style weightless gliding).
- **Parallax:** Multi-layer parallax on images and floating technical schematics during scroll.
- **Micro-Interactions:** Subtle border glow or dimming of surrounding content when hovering over bento cards.
- **Transitions:** Ease-out cubic bezier curves (`cubic-bezier(0.16, 1, 0.3, 1)`) for all hover and reveal states.