# Kelly's Ice Cream — Website & Digital Landmark

> **"Homemade here. Worth the stop."**  
> Route 611 • Mount Bethel, Pennsylvania

The official Next.js (App Router) website for **Kelly's Ice Cream**, an authentic roadside landmark in Mount Bethel, PA near the Delaware River, Delaware Water Gap National Recreation Area, and the historic Slate Belt corridor.

---

## 1. Tech Stack & Tools

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack, React 19)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom Modern Farmhouse design tokens
- **Type Safety**: [TypeScript](https://www.typescriptlang.org/)
- **Icons**: [Lucide React](https://lucide.dev/) (Cones, food, directions, river, trail, phone, etc.)
- **Deployment & Optimizations**: Configured for Vercel deployment with image optimization (AVIF/WebP), DNS prefetching, strict security headers (CSP, HSTS, frame protection), and zero-friction builds.

---

## 2. Modern Farmhouse Design System

The visual language blends clean utility with natural materials and tones native to the Delaware River and Slate Belt landscape:

| Token | Hex | Role |
| :--- | :--- | :--- |
| **River Green** | `#2F5748` | Primary brand accent, nature, navigation highlights |
| **Slate** | `#43504C` | Structural text, slate quarry stone, disciplining rules |
| **Warm Wood** | `#888958` / `#B88958` | Warm roadside timber, signage accents |
| **Barn Rust** | `#9B4D35` | Secondary call-to-actions, alerts, kitchen food tags |
| **Cream** | `#F4EFE4` / `#FAF7F0` | Parchment/paper backgrounds, generous whitespace |

- **Typography**:
  - **Headlines**: Sturdy editorial serif (`Fraunces` via `next/font/google`)
  - **UI / Navigation / Menu**: Clean, scannable sans-serif (`Plus Jakarta Sans` via `next/font/google`)
- **Shapes**: Practical square foundations with softened scoop-inspired corners (`rounded-scoop` / `1.25rem+`).

---

## 3. Site Architecture & Base Components

### Primary Pages
- **Home (`/`)**: Task-first hero answering what, where, when, and why in under 30 seconds, live status, cravings grid, craft proof, and regional itineraries.
- **Menu (`/menu`)**: Authoritative structured live food and parlor menu with pricing and allergen disclaimers.
- **Flavors (`/flavors`)**: 50+ hard ice cream flavors churned on-site across categories (Local Signatures, Decadence, Nuts, Classics, Dietary).
- **Cakes (`/cakes`)**: Custom ice cream cake sizes (8", 10", Half-Sheet), serving guide, and 48–72h lead time ordering info.
- **Visit (`/visit`)**: Route 611 location, regular hours, parking, outdoor picnic bench seating, and pup-friendly amenities.
- **Explore (`/explore`)**: Regional tourism hub pairing Kelly's with Delaware River paddling, Delaware Water Gap hiking (Mt. Minsi/AT), scenic Route 611 drives, and Slate Belt heritage.
- **Our Story (`/story`)**: Small-batch ice cream process, local heritage, and hospitality standards.
- **Accessibility & Privacy (`/accessibility`, `/privacy`)**: WCAG 2.2 AA statement and privacy policy.

### Core Reusable Components
- **`Header.tsx`**: Editorial branding, full navigation, "Open Today / Closed" live indicator badge, phone and directions triggers, plus a responsive mobile drawer.
- **`MobileUtilityBar.tsx`**: Persistent bottom bar for mobile devices providing one-tap access to **Menu**, **Directions (Route 611)**, and **Call**.
- **`StatusBadge.tsx`**: Dynamic time-aware status badge showing live store operating hours.
- **`Footer.tsx`**: Address, phone, complete weekly hours, social links, accessibility link, privacy link, and authoritative menu freshness stamp.

---

## 4. Getting Started

### Install Dependencies
```bash
npm install
```

### Run Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production
```bash
npm run build
```
Starts Turbopack static pre-rendering with zero build errors.
