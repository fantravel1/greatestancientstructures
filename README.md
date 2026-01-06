# 🏛️ Greatest Ancient Structures

> **The definitive global resource for humanity's most mysterious and awe-inspiring ancient constructions**

[![GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-blue?logo=github)](https://greatestancientstructures.com)
[![Mobile First](https://img.shields.io/badge/Design-Mobile%20First-green)](/)
[![SEO Optimized](https://img.shields.io/badge/SEO-Optimized-orange)](/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A mobile-first, blazing-fast static mega-site built for GitHub Pages. Covers 500+ ancient structures across 80+ countries—from rock-cut temples carved into cliffsides to megalithic mysteries that defy conventional explanation.

---

## 📋 Table of Contents

- [Vision & Mission](#-vision--mission)
- [Technical Architecture](#-technical-architecture)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Content Architecture](#-content-architecture)
- [Mobile-First Design System](#-mobile-first-design-system)
- [SEO & AEO Optimization](#-seo--aeo-optimization)
- [Interactive Features](#-interactive-features)
- [Internationalization](#-internationalization-i18n)
- [Performance Budget](#-performance-budget)
- [Content Workflow](#-content-workflow)
- [Deployment](#-deployment)
- [Analytics & Tracking](#-analytics--tracking)
- [Monetization Integration](#-monetization-integration)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)

---

## 🎯 Vision & Mission

### The Opportunity
The $640 billion heritage tourism market lacks a single authoritative, engaging, mobile-optimized resource for ancient structures. Current competitors either:
- Dry academic sites with poor UX
- Pseudoscience-heavy "mystery" sites lacking credibility
- Fragmented travel blogs with incomplete coverage

### Our Position
**Greatest Ancient Structures** fills the gap with:
- 🔬 **Scientific rigor** — Balanced coverage respecting genuine mysteries while avoiding speculation
- 🗺️ **Global coverage** — First comprehensive English resource for Korean dolmens, African megaliths, Pacific sites
- 📱 **Mobile-first UX** — Designed for travelers researching on-the-go
- ⚡ **Blazing performance** — Sub-2-second loads on 3G networks
- 🎮 **Interactive tools** — Comparison calculators, filterable maps, visual timelines
- 🌍 **Multilingual** — Arabic, Portuguese, Spanish, French, German, Chinese expansions

### Target Audiences
| Persona | Age | Needs | Content Style |
|---------|-----|-------|---------------|
| Educated Explorer | 35-55 | Trip planning, deep dives | Long-form guides |
| Student Researcher | 16-28 | Sourced facts, citations | Academic-friendly |
| Mystery Seeker | 25-45 | Unexplained phenomena | Balanced intrigue |
| Casual Browser | 18-40 | Quick, visual, shareable | Snackable content |

---

## 🏗️ Technical Architecture

### Stack Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    GitHub Pages (CDN)                        │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │
│  │   Astro 4   │  │  Tailwind   │  │   Alpine.js         │  │
│  │   (SSG)     │  │    CSS      │  │   (Interactivity)   │  │
│  └─────────────┘  └─────────────┘  └─────────────────────┘  │
│                                                              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │
│  │  MDX        │  │  Sharp      │  │   Pagefind          │  │
│  │  (Content)  │  │  (Images)   │  │   (Search)          │  │
│  └─────────────┘  └─────────────┘  └─────────────────────┘  │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│              GitHub Actions (Build Pipeline)                 │
└─────────────────────────────────────────────────────────────┘
```

### Why This Stack?

| Technology | Purpose | Why Chosen |
|------------|---------|------------|
| **Astro 4** | Static Site Generator | Zero JS by default, island architecture, MDX support, fastest build times |
| **Tailwind CSS** | Styling | Mobile-first utilities, tiny production CSS, design system ready |
| **Alpine.js** | Interactivity | 15kb, no build step, perfect for progressive enhancement |
| **MDX** | Content | Markdown + components, easy for content writers |
| **Sharp** | Images | Automatic WebP/AVIF, responsive srcsets, blur placeholders |
| **Pagefind** | Search | Static search index, works offline, <100kb |
| **GitHub Actions** | CI/CD | Free, native integration, automatic deployments |

### GitHub Pages Constraints & Solutions

| Constraint | Solution |
|------------|----------|
| Static files only | Astro SSG pre-renders everything at build time |
| No server-side code | Alpine.js + client-side APIs for interactivity |
| 1GB repo limit | Git LFS for images, external CDN for video |
| No databases | JSON data files, Pagefind for search |
| Single domain | Subdirectory-based i18n (`/es/`, `/pt/`, `/ar/`) |

---

## 📁 Project Structure

```
greatestancientstructures/
├── .github/
│   └── workflows/
│       ├── deploy.yml           # Main deployment pipeline
│       ├── lighthouse.yml       # Performance audits
│       └── links-check.yml      # Broken link detection
│
├── src/
│   ├── components/
│   │   ├── global/
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   ├── MobileNav.astro
│   │   │   └── SkipLink.astro
│   │   │
│   │   ├── structure/
│   │   │   ├── StructureCard.astro
│   │   │   ├── StructureHero.astro
│   │   │   ├── FactSheet.astro
│   │   │   ├── Timeline.astro
│   │   │   ├── PhotoGallery.astro
│   │   │   └── TravelInfo.astro
│   │   │
│   │   ├── interactive/
│   │   │   ├── WorldMap.astro          # Filterable SVG map
│   │   │   ├── ComparisonTool.astro    # Side-by-side comparisons
│   │   │   ├── SizeCalculator.astro    # "X Great Pyramids" visualizer
│   │   │   ├── TimelineSlider.astro    # Animated history timeline
│   │   │   └── QuizWidget.astro        # Engagement quizzes
│   │   │
│   │   ├── seo/
│   │   │   ├── SchemaOrg.astro         # JSON-LD structured data
│   │   │   ├── OpenGraph.astro
│   │   │   ├── FAQSchema.astro
│   │   │   └── BreadcrumbSchema.astro
│   │   │
│   │   └── travel/
│   │       ├── BookingWidget.astro     # Viator/GYG affiliate
│   │       ├── NearbyStructures.astro
│   │       ├── VisitorTips.astro
│   │       └── WeatherWidget.astro
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro            # Core HTML shell
│   │   ├── StructureLayout.astro       # Individual structure pages
│   │   ├── ListingLayout.astro         # Category/region listings
│   │   ├── GuideLayout.astro           # Long-form guides
│   │   └── ComparisonLayout.astro      # X vs Y pages
│   │
│   ├── pages/
│   │   ├── index.astro                 # Homepage
│   │   ├── structures/
│   │   │   └── [slug].astro            # Dynamic structure pages
│   │   ├── regions/
│   │   │   └── [region].astro          # Geographic listings
│   │   ├── categories/
│   │   │   ├── rock-cut.astro
│   │   │   ├── megalithic.astro
│   │   │   ├── impossible.astro
│   │   │   └── disputed.astro
│   │   ├── compare/
│   │   │   └── [...slugs].astro        # Comparison pages
│   │   ├── guides/
│   │   │   └── [guide].astro           # Travel guides
│   │   ├── tools/
│   │   │   ├── world-map.astro
│   │   │   ├── timeline.astro
│   │   │   └── quiz.astro
│   │   ├── about.astro
│   │   ├── 404.astro
│   │   └── [...lang]/                  # i18n subdirectories
│   │
│   ├── content/
│   │   ├── structures/                 # MDX files per structure
│   │   │   ├── gobekli-tepe.mdx
│   │   │   ├── puma-punku.mdx
│   │   │   ├── korean-dolmens.mdx
│   │   │   └── ...
│   │   ├── guides/
│   │   │   ├── visiting-petra.mdx
│   │   │   └── ...
│   │   └── comparisons/
│   │       ├── petra-vs-hegra.mdx
│   │       └── ...
│   │
│   ├── data/
│   │   ├── structures.json             # Master structure database
│   │   ├── regions.json                # Geographic taxonomy
│   │   ├── categories.json             # Category definitions
│   │   ├── translations/               # i18n strings
│   │   │   ├── en.json
│   │   │   ├── es.json
│   │   │   ├── pt.json
│   │   │   ├── ar.json
│   │   │   ├── fr.json
│   │   │   ├── de.json
│   │   │   └── zh.json
│   │   └── faqs/                       # FAQ data for schema
│   │       └── [structure].json
│   │
│   ├── styles/
│   │   ├── global.css                  # Base styles + Tailwind
│   │   ├── typography.css              # Prose styling
│   │   └── components.css              # Component-specific
│   │
│   └── utils/
│       ├── seo.ts                      # SEO helpers
│       ├── dates.ts                    # Date formatting
│       ├── geo.ts                      # Geographic calculations
│       └── affiliates.ts               # Affiliate link builders
│
├── public/
│   ├── images/
│   │   └── structures/                 # Optimized images
│   ├── icons/
│   ├── fonts/                          # Self-hosted fonts
│   ├── robots.txt
│   ├── sitemap.xml                     # Auto-generated
│   └── _headers                        # Netlify/Cloudflare headers
│
├── scripts/
│   ├── generate-sitemap.js
│   ├── optimize-images.js
│   ├── validate-content.js
│   └── generate-social-images.js       # OG image generation
│
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm 9+ or pnpm 8+
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/greatestancientstructures.git
cd greatestancientstructures

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run check` | Run Astro diagnostics |
| `npm run lint` | Lint code with ESLint |
| `npm run format` | Format with Prettier |
| `npm run images` | Optimize all images |
| `npm run lighthouse` | Run Lighthouse audit |
| `npm run validate` | Validate all content files |

### Environment Variables

Create `.env` file:

```env
# Analytics
PUBLIC_GA_ID=G-XXXXXXXXXX
PUBLIC_PLAUSIBLE_DOMAIN=greatestancientstructures.com

# Affiliate Programs
PUBLIC_VIATOR_PID=your_viator_id
PUBLIC_GYG_PARTNER_ID=your_gyg_id

# APIs (optional enhancements)
PUBLIC_MAPBOX_TOKEN=your_token
PUBLIC_WEATHER_API_KEY=your_key
```

---

## 📚 Content Architecture

### Structure Data Model

Each ancient structure has a comprehensive data model stored in `src/data/structures.json`:

```typescript
interface Structure {
  // Identity
  id: string;                          // "gobekli-tepe"
  name: string;                        // "Göbekli Tepe"
  alternateNames: string[];            // ["Potbelly Hill", "Girê Mirazan"]
  slug: string;                        // URL-safe identifier
  
  // Classification
  category: Category;                  // "megalithic" | "rock-cut" | "impossible" | "disputed"
  subcategories: string[];             // ["temple", "astronomical"]
  civilization: string;                // "Pre-Pottery Neolithic"
  
  // Location
  location: {
    country: string;                   // "Turkey"
    countryCode: string;               // "TR"
    region: string;                    // "Şanlıurfa Province"
    coordinates: [number, number];     // [37.2233, 38.9225]
    nearestCity: string;               // "Şanlıurfa"
    nearestAirport: string;            // "Şanlıurfa GAP Airport (GNY)"
  };
  
  // Chronology
  dates: {
    constructionStart: number;         // -9500 (BCE as negative)
    constructionEnd: number;           // -8000
    discoveryYear: number;             // 1963
    excavationStart: number;           // 1995
    period: string;                    // "Pre-Pottery Neolithic A-B"
    dateConfidence: "confirmed" | "estimated" | "disputed";
  };
  
  // Physical Attributes
  physical: {
    area: number;                      // Square meters
    height: number;                    // Meters (tallest element)
    largestStone: number;              // Metric tons
    numberOfStructures: number;        // Individual elements
    materials: string[];               // ["limestone", "flint"]
    constructionMethod: string;        // Description
  };
  
  // Content
  content: {
    summary: string;                   // 1-2 sentence hook
    description: string;               // Full description (MDX path)
    significance: string[];            // Why it matters
    mysteries: string[];               // Unanswered questions
    theories: Theory[];                // Scientific explanations
    misconceptions: string[];          // Common myths debunked
  };
  
  // Media
  media: {
    heroImage: string;                 // Path to hero image
    gallery: Image[];                  // Photo gallery
    videos: Video[];                   // YouTube/Vimeo embeds
    virtualTour: string | null;        // 360° tour URL
  };
  
  // Travel
  travel: {
    unescoStatus: "inscribed" | "tentative" | null;
    unescoYear: number | null;
    visitorNumbers: number;            // Annual visitors
    bestTimeToVisit: string[];         // ["March", "April", "October"]
    entryFee: Money;
    openingHours: string;
    accessibility: "easy" | "moderate" | "difficult" | "extreme";
    nearbyStructures: string[];        // Related structure IDs
    tourOptions: TourOption[];         // Affiliate data
  };
  
  // SEO
  seo: {
    title: string;                     // Custom title tag
    description: string;               // Meta description
    keywords: string[];                // Target keywords
    faqs: FAQ[];                       // For FAQ schema
    lastUpdated: string;               // ISO date
  };
  
  // Engagement
  engagement: {
    comparableStructures: string[];    // For comparison tool
    relatedGuides: string[];           // Guide IDs
    quizQuestions: QuizQuestion[];     // Trivia
  };
}
```

### Content Categories

```
┌────────────────────────────────────────────────────────────────┐
│                    CONTENT TAXONOMY                             │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│  BY CATEGORY                      BY REGION                     │
│  ├── Rock-Cut Architecture        ├── Africa                    │
│  │   ├── Petra                    │   ├── Egypt                 │
│  │   ├── Lalibela                 │   ├── Ethiopia              │
│  │   ├── Ellora Caves             │   ├── Sudan                 │
│  │   ├── Abu Simbel               │   └── Zimbabwe              │
│  │   ├── Ajanta Caves             ├── Americas                  │
│  │   ├── Lycian Tombs             │   ├── Peru                  │
│  │   └── Cappadocia               │   ├── Bolivia               │
│  │                                │   ├── Mexico                │
│  ├── Megalithic Sites             │   └── Easter Island         │
│  │   ├── Stonehenge               ├── Asia                      │
│  │   ├── Carnac Stones            │   ├── Turkey                │
│  │   ├── Korean Dolmens           │   ├── India                 │
│  │   ├── Newgrange                │   ├── Indonesia             │
│  │   └── Malta Temples            │   ├── Japan                 │
│  │                                │   ├── Korea                 │
│  ├── "Impossible" Construction    │   └── China                 │
│  │   ├── Great Pyramid            ├── Europe                    │
│  │   ├── Sacsayhuamán             │   ├── UK & Ireland          │
│  │   ├── Baalbek                  │   ├── France                │
│  │   ├── Puma Punku               │   ├── Malta                 │
│  │   └── Göbekli Tepe             │   └── Greece                │
│  │                                └── Pacific                   │
│  └── Disputed (Natural vs Man-Made)   ├── Micronesia            │
│      ├── Yonaguni Monument            └── Polynesia             │
│      ├── Gunung Padang                                          │
│      ├── Bosnian Pyramids                                       │
│      └── Richat Structure                                       │
│                                                                 │
└────────────────────────────────────────────────────────────────┘
```

### MDX Content Template

```mdx
---
# src/content/structures/gobekli-tepe.mdx
id: "gobekli-tepe"
title: "Göbekli Tepe: The Temple That Rewrote History"
description: "Explore the world's oldest known temple complex, built 11,500 years ago—6,000 years before Stonehenge and the Egyptian pyramids."
pubDate: 2024-01-15
updatedDate: 2024-06-20
heroImage: "/images/structures/gobekli-tepe/hero.webp"
category: "megalithic"
region: "middle-east"
country: "Turkey"
---

import { FactSheet, Timeline, PhotoGallery, TravelInfo, FAQAccordion, CompareButton } from '@components/structure';
import { BookingWidget } from '@components/travel';

## The Discovery That Changed Everything

In 1994, German archaeologist Klaus Schmidt recognized something extraordinary in the hills of southeastern Turkey...

<FactSheet 
  built="-9500 to -8000"
  discoveredBy="Klaus Schmidt"
  discoveredYear={1994}
  largestStone="50 tons"
  pillars={200}
  status="UNESCO World Heritage (2018)"
/>

## What Makes Göbekli Tepe Impossible?

The site challenges everything we thought we knew about the Neolithic Revolution...

<Timeline events={[
  { year: -9500, event: "Construction begins" },
  { year: -8000, event: "Deliberately buried" },
  { year: 1963, event: "First survey" },
  { year: 1994, event: "Schmidt begins excavation" },
  { year: 2018, event: "UNESCO inscription" }
]} />

## The T-Shaped Pillars

The iconic T-shaped limestone pillars, some weighing up to 50 tons...

<PhotoGallery 
  images={[
    { src: "/images/structures/gobekli-tepe/pillars.webp", alt: "T-shaped pillars at Göbekli Tepe", caption: "Pillar 18 in Enclosure D" },
    { src: "/images/structures/gobekli-tepe/carvings.webp", alt: "Animal carvings on pillars", caption: "Fox and crane carvings" }
  ]}
/>

## Visiting Göbekli Tepe

<TravelInfo
  location="37.2233° N, 38.9225° E"
  nearestCity="Şanlıurfa (12 km)"
  nearestAirport="Şanlıurfa GAP Airport (GNY)"
  entryFee={{ amount: 220, currency: "TRY", usd: 7 }}
  hours="8:00 AM - 7:00 PM (summer), 8:00 AM - 5:00 PM (winter)"
  bestMonths={["April", "May", "September", "October"]}
  tips={[
    "Visit early morning to avoid tour groups",
    "Combine with Şanlıurfa Archaeological Museum",
    "Bring water—no shade on site"
  ]}
/>

<BookingWidget 
  viatorSearch="gobekli tepe tour"
  gygSearch="gobekli tepe"
/>

## Compare With Similar Sites

<CompareButton 
  structures={["stonehenge", "karahan-tepe", "nevali-cori"]} 
/>

## Frequently Asked Questions

<FAQAccordion faqs={[
  {
    question: "Who built Göbekli Tepe?",
    answer: "Hunter-gatherers of the Pre-Pottery Neolithic period, challenging the assumption that monumental architecture required settled agricultural societies."
  },
  {
    question: "Why was Göbekli Tepe buried?",
    answer: "Around 8000 BCE, the site was deliberately filled in with debris. Theories include ritual closure or protection, but the true reason remains unknown."
  },
  {
    question: "How much of Göbekli Tepe has been excavated?",
    answer: "Less than 5% of the site has been excavated. Ground-penetrating radar suggests at least 20 enclosures remain buried."
  }
]} />
```

---

## 📱 Mobile-First Design System

### Design Principles

1. **Touch-First Interaction** — All interactive elements minimum 44×44px touch targets
2. **Thumb-Zone Optimization** — Primary actions in bottom 40% of screen
3. **Progressive Disclosure** — Show essentials first, details on demand
4. **Offline Consideration** — Core content works without JavaScript
5. **Reduced Motion** — Respect `prefers-reduced-motion`

### Breakpoints

```css
/* Tailwind config - Mobile First */
screens: {
  'xs': '375px',    /* Small phones */
  'sm': '640px',    /* Large phones / small tablets */
  'md': '768px',    /* Tablets */
  'lg': '1024px',   /* Laptops */
  'xl': '1280px',   /* Desktops */
  '2xl': '1536px',  /* Large screens */
}
```

### Typography Scale

```css
/* Fluid typography - scales with viewport */
:root {
  --font-size-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
  --font-size-sm: clamp(0.875rem, 0.8rem + 0.35vw, 1rem);
  --font-size-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);
  --font-size-lg: clamp(1.125rem, 1rem + 0.6vw, 1.25rem);
  --font-size-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);
  --font-size-2xl: clamp(1.5rem, 1.25rem + 1.25vw, 2rem);
  --font-size-3xl: clamp(1.875rem, 1.5rem + 1.875vw, 2.5rem);
  --font-size-4xl: clamp(2.25rem, 1.75rem + 2.5vw, 3.5rem);
}
```

### Color System

```css
:root {
  /* Primary - Ancient Stone */
  --color-stone-50: #fafaf9;
  --color-stone-100: #f5f5f4;
  --color-stone-200: #e7e5e4;
  --color-stone-300: #d6d3d1;
  --color-stone-400: #a8a29e;
  --color-stone-500: #78716c;
  --color-stone-600: #57534e;
  --color-stone-700: #44403c;
  --color-stone-800: #292524;
  --color-stone-900: #1c1917;
  
  /* Accent - Desert Gold */
  --color-gold-400: #facc15;
  --color-gold-500: #eab308;
  --color-gold-600: #ca8a04;
  
  /* Semantic */
  --color-mystery: #7c3aed;    /* Disputed sites */
  --color-verified: #059669;   /* Confirmed dates */
  --color-travel: #0284c7;     /* Travel info */
}
```

### Component Examples

#### Mobile Navigation

```astro
---
// src/components/global/MobileNav.astro
---
<nav 
  x-data="{ open: false }" 
  class="fixed bottom-0 left-0 right-0 z-50 bg-stone-900 safe-area-inset-bottom md:hidden"
>
  <!-- Bottom Tab Bar -->
  <div class="flex justify-around py-2">
    <a href="/" class="flex flex-col items-center p-2 min-w-[64px]">
      <svg class="w-6 h-6"><!-- home icon --></svg>
      <span class="text-xs mt-1">Home</span>
    </a>
    <a href="/structures" class="flex flex-col items-center p-2 min-w-[64px]">
      <svg class="w-6 h-6"><!-- structures icon --></svg>
      <span class="text-xs mt-1">Explore</span>
    </a>
    <a href="/tools/world-map" class="flex flex-col items-center p-2 min-w-[64px]">
      <svg class="w-6 h-6"><!-- map icon --></svg>
      <span class="text-xs mt-1">Map</span>
    </a>
    <button 
      @click="open = !open" 
      class="flex flex-col items-center p-2 min-w-[64px]"
    >
      <svg class="w-6 h-6"><!-- menu icon --></svg>
      <span class="text-xs mt-1">More</span>
    </button>
  </div>
  
  <!-- Slide-up Menu -->
  <div 
    x-show="open" 
    x-transition:enter="transition ease-out duration-200"
    x-transition:enter-start="translate-y-full"
    x-transition:enter-end="translate-y-0"
    class="absolute bottom-full left-0 right-0 bg-stone-800 rounded-t-2xl p-4"
  >
    <!-- Full menu content -->
  </div>
</nav>
```

#### Structure Card

```astro
---
// src/components/structure/StructureCard.astro
interface Props {
  structure: Structure;
  variant?: 'compact' | 'full';
}

const { structure, variant = 'full' } = Astro.props;
---
<article class="group relative overflow-hidden rounded-xl bg-stone-100 dark:bg-stone-800">
  <!-- Image with lazy loading -->
  <div class="aspect-[4/3] overflow-hidden">
    <img 
      src={structure.media.heroImage}
      alt={structure.name}
      loading="lazy"
      decoding="async"
      class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
    
    <!-- Category Badge -->
    <span class="absolute top-3 left-3 px-2 py-1 text-xs font-medium rounded-full bg-stone-900/80 text-white">
      {structure.category}
    </span>
  </div>
  
  <!-- Content -->
  <div class="p-4">
    <h3 class="text-lg font-bold text-stone-900 dark:text-stone-100 line-clamp-1">
      {structure.name}
    </h3>
    
    <p class="mt-1 text-sm text-stone-600 dark:text-stone-400 flex items-center gap-1">
      <svg class="w-4 h-4"><!-- location icon --></svg>
      {structure.location.country}
    </p>
    
    {variant === 'full' && (
      <p class="mt-2 text-sm text-stone-700 dark:text-stone-300 line-clamp-2">
        {structure.content.summary}
      </p>
      
      <!-- Quick Stats -->
      <div class="mt-3 flex gap-4 text-xs text-stone-500">
        <span>{formatDate(structure.dates.constructionStart)}</span>
        <span>{structure.physical.largestStone}t stones</span>
      </div>
    )}
  </div>
  
  <!-- Full-card Link -->
  <a 
    href={`/structures/${structure.slug}`}
    class="absolute inset-0"
    aria-label={`Read more about ${structure.name}`}
  />
</article>
```

---

## 🔍 SEO & AEO Optimization

### On-Page SEO Checklist

| Element | Implementation |
|---------|----------------|
| **Title Tags** | `{Structure Name}: {Hook} | Greatest Ancient Structures` (50-60 chars) |
| **Meta Description** | Compelling summary with primary keyword (150-160 chars) |
| **URL Structure** | `/structures/{slug}` — clean, descriptive, lowercase |
| **H1 Tags** | One per page, matches title intent |
| **Image Alt Text** | Descriptive, includes location/context |
| **Internal Linking** | 3-5 contextual links per article |
| **External Links** | Cite sources, link to UNESCO/official sites |

### Structured Data (Schema.org)

Every structure page includes comprehensive JSON-LD:

```astro
---
// src/components/seo/SchemaOrg.astro
const { structure } = Astro.props;
---
<script type="application/ld+json" set:html={JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TouristAttraction",
      "@id": `https://greatestancientstructures.com/structures/${structure.slug}#attraction`,
      "name": structure.name,
      "description": structure.content.summary,
      "url": `https://greatestancientstructures.com/structures/${structure.slug}`,
      "image": structure.media.heroImage,
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": structure.location.coordinates[0],
        "longitude": structure.location.coordinates[1]
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": structure.location.countryCode,
        "addressRegion": structure.location.region
      },
      "isAccessibleForFree": structure.travel.entryFee.amount === 0,
      "openingHours": structure.travel.openingHours,
      "touristType": ["Cultural tourism", "Archaeological tourism"]
    },
    {
      "@type": "Article",
      "headline": structure.seo.title,
      "description": structure.seo.description,
      "image": structure.media.heroImage,
      "datePublished": structure.pubDate,
      "dateModified": structure.seo.lastUpdated,
      "author": {
        "@type": "Organization",
        "name": "Greatest Ancient Structures"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Greatest Ancient Structures",
        "logo": {
          "@type": "ImageObject",
          "url": "https://greatestancientstructures.com/logo.png"
        }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://greatestancientstructures.com" },
        { "@type": "ListItem", "position": 2, "name": structure.category, "item": `https://greatestancientstructures.com/categories/${structure.category}` },
        { "@type": "ListItem", "position": 3, "name": structure.name }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": structure.seo.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  ]
})} />
```

### Answer Engine Optimization (AEO)

Optimize for AI assistants (ChatGPT, Perplexity, Google SGE):

1. **FAQ Sections** — Every structure page has 5-10 FAQs with Schema markup
2. **Direct Answers** — First paragraph directly answers "What is X?"
3. **Structured Data Tables** — Facts in scannable format for extraction
4. **Question-Based Headers** — H2s phrased as questions users ask
5. **Concise Summaries** — TL;DR at top of long-form content

```mdx
{/* AEO-Optimized Content Structure */}

## What is Göbekli Tepe?

Göbekli Tepe is the world's oldest known temple complex, built approximately 11,500 years ago in southeastern Turkey. Constructed by hunter-gatherers 6,000 years before Stonehenge, it fundamentally challenges our understanding of prehistoric societies.

| Quick Facts | |
|-------------|--|
| **Location** | Şanlıurfa Province, Turkey |
| **Built** | ~9500-8000 BCE |
| **Age** | 11,500+ years |
| **Largest Stone** | 50 tons |
| **UNESCO Status** | World Heritage Site (2018) |
| **Excavated** | Less than 5% |

## Why is Göbekli Tepe important?

Göbekli Tepe rewrote the timeline of human civilization because...
```

### Technical SEO

```yaml
# astro.config.mjs
export default defineConfig({
  site: 'https://greatestancientstructures.com',
  
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/draft/'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
    
    robotsTxt({
      policy: [
        { userAgent: '*', allow: '/', disallow: ['/api/', '/draft/'] },
        { userAgent: 'GPTBot', allow: '/' },      // Allow AI crawlers
        { userAgent: 'ChatGPT-User', allow: '/' },
        { userAgent: 'Google-Extended', allow: '/' },
      ],
    }),
  ],
});
```

### Core Web Vitals Targets

| Metric | Target | Strategy |
|--------|--------|----------|
| **LCP** | < 2.5s | Preload hero images, inline critical CSS |
| **FID** | < 100ms | Defer non-critical JS, use Alpine.js |
| **CLS** | < 0.1 | Set explicit image dimensions, font-display: swap |
| **TTFB** | < 200ms | GitHub Pages CDN, aggressive caching |
| **INP** | < 200ms | Debounce handlers, optimize event listeners |

---

## 🎮 Interactive Features

### World Map (Filterable SVG)

```astro
---
// src/components/interactive/WorldMap.astro
import structures from '@data/structures.json';
---
<div 
  x-data="worldMap()" 
  class="relative w-full aspect-[2/1] bg-stone-100 rounded-xl overflow-hidden"
>
  <!-- Filter Controls -->
  <div class="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
    <button 
      @click="filter = 'all'"
      :class="filter === 'all' ? 'bg-gold-500' : 'bg-stone-700'"
      class="px-3 py-1 rounded-full text-sm text-white"
    >
      All Sites
    </button>
    <button 
      @click="filter = 'megalithic'"
      :class="filter === 'megalithic' ? 'bg-gold-500' : 'bg-stone-700'"
      class="px-3 py-1 rounded-full text-sm text-white"
    >
      Megalithic
    </button>
    <button 
      @click="filter = 'rock-cut'"
      :class="filter === 'rock-cut' ? 'bg-gold-500' : 'bg-stone-700'"
      class="px-3 py-1 rounded-full text-sm text-white"
    >
      Rock-Cut
    </button>
    <button 
      @click="filter = 'impossible'"
      :class="filter === 'impossible' ? 'bg-gold-500' : 'bg-stone-700'"
      class="px-3 py-1 rounded-full text-sm text-white"
    >
      "Impossible"
    </button>
    <button 
      @click="filter = 'disputed'"
      :class="filter === 'disputed' ? 'bg-gold-500' : 'bg-stone-700'"
      class="px-3 py-1 rounded-full text-sm text-white"
    >
      Disputed
    </button>
  </div>
  
  <!-- SVG Map -->
  <svg viewBox="0 0 1000 500" class="w-full h-full">
    <!-- World outline paths -->
    <g class="fill-stone-300 stroke-stone-400">
      <!-- Continent paths here -->
    </g>
    
    <!-- Structure Markers -->
    <template x-for="structure in filteredStructures" :key="structure.id">
      <g 
        :transform="`translate(${geoToSvg(structure.location.coordinates)})`"
        @click="selected = structure"
        class="cursor-pointer"
      >
        <circle r="6" class="fill-gold-500 stroke-stone-900 stroke-2" />
        <circle r="12" class="fill-gold-500/20 animate-ping" />
      </g>
    </template>
  </svg>
  
  <!-- Info Panel -->
  <div 
    x-show="selected" 
    x-transition
    class="absolute bottom-4 left-4 right-4 md:left-auto md:w-80 bg-white dark:bg-stone-800 rounded-xl p-4 shadow-xl"
  >
    <template x-if="selected">
      <div>
        <img :src="selected.media.heroImage" class="w-full h-32 object-cover rounded-lg mb-3" />
        <h3 x-text="selected.name" class="font-bold text-lg"></h3>
        <p x-text="selected.location.country" class="text-sm text-stone-500"></p>
        <a :href="`/structures/${selected.slug}`" class="mt-3 block text-center py-2 bg-gold-500 rounded-lg font-medium">
          Explore Site →
        </a>
      </div>
    </template>
  </div>
</div>

<script>
  document.addEventListener('alpine:init', () => {
    Alpine.data('worldMap', () => ({
      structures: [], // Loaded from JSON
      filter: 'all',
      selected: null,
      
      get filteredStructures() {
        if (this.filter === 'all') return this.structures;
        return this.structures.filter(s => s.category === this.filter);
      },
      
      geoToSvg([lat, lon]) {
        // Mercator projection conversion
        const x = (lon + 180) * (1000 / 360);
        const y = (90 - lat) * (500 / 180);
        return `${x},${y}`;
      },
      
      init() {
        this.structures = window.__STRUCTURES_DATA__;
      }
    }));
  });
</script>
```

### Size Comparison Calculator

```astro
---
// src/components/interactive/SizeCalculator.astro
---
<div x-data="sizeCalculator()" class="bg-stone-100 dark:bg-stone-800 rounded-xl p-6">
  <h3 class="text-xl font-bold mb-4">How Big Is That?</h3>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <!-- Structure Selector -->
    <div>
      <label class="block text-sm font-medium mb-2">Select a Structure</label>
      <select 
        x-model="selectedStructure" 
        class="w-full p-3 rounded-lg bg-white dark:bg-stone-700"
      >
        <option value="">Choose...</option>
        <template x-for="s in structures" :key="s.id">
          <option :value="s.id" x-text="s.name"></option>
        </template>
      </select>
    </div>
    
    <!-- Comparison Unit -->
    <div>
      <label class="block text-sm font-medium mb-2">Compare to</label>
      <select 
        x-model="comparisonUnit" 
        class="w-full p-3 rounded-lg bg-white dark:bg-stone-700"
      >
        <option value="pyramid">Great Pyramids of Giza</option>
        <option value="statue-liberty">Statues of Liberty</option>
        <option value="football">Football Fields</option>
        <option value="blue-whale">Blue Whales</option>
        <option value="bus">Double-Decker Buses</option>
        <option value="elephant">African Elephants</option>
      </select>
    </div>
  </div>
  
  <!-- Result Display -->
  <div x-show="result" class="mt-6 text-center">
    <div class="text-4xl font-bold text-gold-500" x-text="result.count"></div>
    <div class="text-lg" x-text="result.description"></div>
    
    <!-- Visual Representation -->
    <div class="mt-4 flex justify-center flex-wrap gap-1">
      <template x-for="i in Math.min(result.count, 20)">
        <span x-text="result.emoji" class="text-2xl"></span>
      </template>
      <span x-show="result.count > 20" class="text-lg">+<span x-text="result.count - 20"></span> more</span>
    </div>
  </div>
</div>
```

### Timeline Slider

```astro
---
// src/components/interactive/TimelineSlider.astro
import structures from '@data/structures.json';

const timelineData = structures
  .filter(s => s.dates.constructionStart)
  .sort((a, b) => a.dates.constructionStart - b.dates.constructionStart)
  .map(s => ({
    id: s.id,
    name: s.name,
    year: s.dates.constructionStart,
    image: s.media.heroImage,
    slug: s.slug
  }));
---
<div 
  x-data="{ currentYear: -10000 }"
  class="relative py-8"
>
  <!-- Timeline Track -->
  <div class="relative h-2 bg-stone-300 rounded-full mx-8">
    <!-- Era Markers -->
    <div class="absolute -top-6 left-0 text-xs text-stone-500">10,000 BCE</div>
    <div class="absolute -top-6 left-1/4 text-xs text-stone-500">7,500 BCE</div>
    <div class="absolute -top-6 left-1/2 text-xs text-stone-500">5,000 BCE</div>
    <div class="absolute -top-6 left-3/4 text-xs text-stone-500">2,500 BCE</div>
    <div class="absolute -top-6 right-0 text-xs text-stone-500">0 CE</div>
    
    <!-- Structure Dots -->
    {timelineData.map(s => (
      <button
        data-year={s.year}
        style={`left: ${((s.year + 10000) / 10000) * 100}%`}
        class="absolute -top-1 w-4 h-4 rounded-full bg-gold-500 border-2 border-white transform -translate-x-1/2 hover:scale-150 transition-transform"
        @click={`currentYear = ${s.year}; $dispatch('show-structure', '${s.id}')`}
      />
    ))}
    
    <!-- Slider Handle -->
    <input 
      type="range" 
      min="-10000" 
      max="0" 
      x-model="currentYear"
      class="absolute inset-0 w-full opacity-0 cursor-pointer"
    />
    <div 
      class="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-gold-500 rounded-full shadow-lg pointer-events-none"
      :style="`left: ${((currentYear + 10000) / 10000) * 100}%`"
    ></div>
  </div>
  
  <!-- Year Display -->
  <div class="text-center mt-8">
    <span class="text-3xl font-bold" x-text="Math.abs(currentYear).toLocaleString() + ' BCE'"></span>
  </div>
  
  <!-- Structures at Current Era -->
  <div class="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
    <template x-for="structure in getStructuresNear(currentYear)" :key="structure.id">
      <a :href="`/structures/${structure.slug}`" class="block">
        <img :src="structure.image" class="w-full aspect-square object-cover rounded-lg" />
        <p x-text="structure.name" class="mt-2 text-sm font-medium text-center"></p>
      </a>
    </template>
  </div>
</div>
```

### Static Search with Pagefind

```bash
# Install Pagefind
npm install -D @pagefind/default-ui

# Build search index (run after Astro build)
npx pagefind --site dist --output-path dist/pagefind
```

```astro
---
// src/components/global/Search.astro
---
<div id="search" class="relative">
  <button 
    id="search-button"
    class="p-2 rounded-full hover:bg-stone-200 dark:hover:bg-stone-700"
    aria-label="Search"
  >
    <svg class="w-6 h-6"><!-- search icon --></svg>
  </button>
</div>

<dialog id="search-dialog" class="w-full max-w-2xl rounded-xl p-0 backdrop:bg-black/50">
  <div id="pagefind-container" class="p-4"></div>
</dialog>

<script>
  import { PagefindUI } from '@pagefind/default-ui';
  
  const dialog = document.getElementById('search-dialog');
  const button = document.getElementById('search-button');
  const container = document.getElementById('pagefind-container');
  
  let searchUI;
  
  button.addEventListener('click', () => {
    dialog.showModal();
    if (!searchUI) {
      searchUI = new PagefindUI({ 
        element: container,
        showImages: true,
        showSubResults: true
      });
    }
    container.querySelector('input')?.focus();
  });
  
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) dialog.close();
  });
</script>
```

---

## 🌍 Internationalization (i18n)

### Language Strategy

| Language | Priority | Market Opportunity | Content Approach |
|----------|----------|-------------------|------------------|
| English | P0 | Baseline | Full site |
| Spanish | P1 | Latin America tourism | Top 50 structures + guides |
| Portuguese | P1 | Brazil outbound boom | Top 50 structures + guides |
| Arabic | P1 | MENA heritage tourism | Top 30 + regional focus |
| French | P2 | Francophone Africa | Top 40 structures |
| German | P2 | High-value travelers | Top 40 structures |
| Chinese | P3 | Future expansion | Top 30 structures |

### URL Structure

```
greatestancientstructures.com/
├── /                           # English (default)
├── /structures/gobekli-tepe
├── /es/                        # Spanish
├── /es/estructuras/gobekli-tepe
├── /pt/                        # Portuguese
├── /pt/estruturas/gobekli-tepe
├── /ar/                        # Arabic
├── /ar/المواقع/غوبكلي-تبه
├── /fr/                        # French
├── /fr/structures/gobekli-tepe
├── /de/                        # German
├── /de/strukturen/gobekli-tepe
└── /zh/                        # Chinese
    /zh/古迹/哥贝克力石阵
```

### Astro i18n Configuration

```typescript
// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'pt', 'ar', 'fr', 'de', 'zh'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
```

### Translation Files

```json
// src/data/translations/es.json
{
  "site": {
    "title": "Las Mayores Estructuras Antiguas",
    "tagline": "Explora los monumentos más misteriosos de la humanidad"
  },
  "nav": {
    "home": "Inicio",
    "explore": "Explorar",
    "map": "Mapa",
    "guides": "Guías",
    "about": "Acerca de"
  },
  "structure": {
    "built": "Construido",
    "location": "Ubicación",
    "largestStone": "Piedra más grande",
    "visitors": "Visitantes anuales",
    "bestTime": "Mejor época para visitar",
    "bookTour": "Reservar tour"
  },
  "categories": {
    "megalithic": "Sitios Megalíticos",
    "rock-cut": "Arquitectura Tallada en Roca",
    "impossible": "Construcción 'Imposible'",
    "disputed": "Origen Disputado"
  }
}
```

### RTL Support (Arabic)

```css
/* src/styles/global.css */
[dir="rtl"] {
  --flow-direction: rtl;
}

[dir="rtl"] .flip-rtl {
  transform: scaleX(-1);
}

/* Logical properties for automatic RTL */
.content {
  padding-inline-start: 1rem;
  padding-inline-end: 1rem;
  margin-block-start: 2rem;
}
```

---

## ⚡ Performance Budget

### Targets

| Metric | Budget | Measurement |
|--------|--------|-------------|
| **Total Page Weight** | < 500KB | First load, including images |
| **JavaScript** | < 50KB | Compressed, all pages |
| **CSS** | < 30KB | Compressed, includes Tailwind |
| **Hero Image** | < 100KB | WebP, responsive srcset |
| **Time to Interactive** | < 3s | 3G connection |
| **Lighthouse Score** | > 95 | All categories |

### Image Optimization Pipeline

```javascript
// scripts/optimize-images.js
import sharp from 'sharp';
import { glob } from 'glob';
import path from 'path';

const SIZES = [320, 640, 960, 1280, 1920];
const FORMATS = ['webp', 'avif'];

async function optimizeImages() {
  const images = await glob('src/assets/images/**/*.{jpg,jpeg,png}');
  
  for (const imagePath of images) {
    const image = sharp(imagePath);
    const metadata = await image.metadata();
    const baseName = path.basename(imagePath, path.extname(imagePath));
    const outputDir = path.dirname(imagePath).replace('src/assets', 'public');
    
    for (const format of FORMATS) {
      for (const width of SIZES.filter(w => w <= metadata.width)) {
        await image
          .resize(width)
          .toFormat(format, { quality: 80 })
          .toFile(`${outputDir}/${baseName}-${width}.${format}`);
      }
    }
    
    // Generate blur placeholder
    const placeholder = await image
      .resize(20)
      .blur()
      .toBuffer();
    
    // Base64 encode for inline use
    const base64 = `data:image/jpeg;base64,${placeholder.toString('base64')}`;
    // Save to JSON for component use
  }
}
```

### Responsive Image Component

```astro
---
// src/components/global/Image.astro
interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  loading?: 'lazy' | 'eager';
  class?: string;
}

const { 
  src, 
  alt, 
  width, 
  height, 
  sizes = '100vw',
  loading = 'lazy',
  class: className 
} = Astro.props;

const baseName = src.replace(/\.[^.]+$/, '');
const widths = [320, 640, 960, 1280, 1920].filter(w => w <= width);
---
<picture>
  <source
    type="image/avif"
    srcset={widths.map(w => `${baseName}-${w}.avif ${w}w`).join(', ')}
    {sizes}
  />
  <source
    type="image/webp"
    srcset={widths.map(w => `${baseName}-${w}.webp ${w}w`).join(', ')}
    {sizes}
  />
  <img
    src={`${baseName}-${widths[widths.length - 1]}.webp`}
    {alt}
    {width}
    {height}
    {loading}
    decoding="async"
    class:list={[className, 'bg-stone-200']}
    style={`background-image: url(${baseName}-placeholder.jpg); background-size: cover;`}
  />
</picture>
```

### Critical CSS Inlining

```javascript
// astro.config.mjs
import critters from 'astro-critters';

export default defineConfig({
  integrations: [
    critters({
      // Inline critical CSS, defer non-critical
      preload: 'swap',
      pruneSource: true,
    }),
  ],
});
```

---

## 📝 Content Workflow

### Content Creation Process

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Research  │ ──▶ │    Draft    │ ──▶ │   Review    │ ──▶ │   Publish   │
│             │     │   (MDX)     │     │   (PR)      │     │  (Merge)    │
└─────────────┘     └─────────────┘     └─────────────┘     └─────────────┘
      │                   │                   │                   │
      ▼                   ▼                   ▼                   ▼
 - Primary sources   - Frontmatter      - Fact check        - Auto deploy
 - Academic papers   - Body content     - SEO review        - Index update
 - UNESCO data       - Media assets     - Mobile preview    - Sitemap gen
 - Travel info       - FAQs             - Lighthouse        - Social images
```

### Branch Naming Convention

```
content/add-gobekli-tepe
content/update-petra-travel-info
feature/world-map-filter
fix/mobile-nav-overflow
i18n/spanish-top-50
```

### Pull Request Template

```markdown
## Content Addition/Update

### Structure(s) Affected
- [ ] Göbekli Tepe
- [ ] Petra
- [ ] Other: ___________

### Checklist
- [ ] Frontmatter complete (all required fields)
- [ ] Sources cited (academic/official where possible)
- [ ] Images optimized and attributed
- [ ] FAQs added (minimum 5)
- [ ] Internal links added (3-5 per article)
- [ ] Mobile preview tested
- [ ] Lighthouse score > 95

### SEO Review
- Title tag (50-60 chars): 
- Meta description (150-160 chars): 
- Primary keyword: 
- Secondary keywords: 

### Screenshots
[Mobile screenshot]
[Desktop screenshot]
```

### Content Validation Script

```javascript
// scripts/validate-content.js
import { glob } from 'glob';
import matter from 'gray-matter';
import { z } from 'zod';

const StructureSchema = z.object({
  id: z.string(),
  title: z.string().min(10).max(70),
  description: z.string().min(120).max(160),
  pubDate: z.string().datetime(),
  heroImage: z.string().startsWith('/images/'),
  category: z.enum(['megalithic', 'rock-cut', 'impossible', 'disputed']),
  region: z.string(),
  country: z.string(),
});

async function validate() {
  const files = await glob('src/content/structures/*.mdx');
  const errors = [];
  
  for (const file of files) {
    const content = await fs.readFile(file, 'utf-8');
    const { data } = matter(content);
    
    const result = StructureSchema.safeParse(data);
    if (!result.success) {
      errors.push({ file, issues: result.error.issues });
    }
  }
  
  if (errors.length > 0) {
    console.error('Validation errors:', JSON.stringify(errors, null, 2));
    process.exit(1);
  }
  
  console.log(`✓ Validated ${files.length} content files`);
}
```

---

## 🚀 Deployment

### GitHub Actions Workflow

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          lfs: true
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      
      - name: Install dependencies
        run: npm ci
      
      - name: Optimize images
        run: npm run images
      
      - name: Build site
        run: npm run build
      
      - name: Build search index
        run: npx pagefind --site dist
      
      - name: Generate social images
        run: npm run social-images
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Lighthouse CI

```yaml
# .github/workflows/lighthouse.yml
name: Lighthouse CI

on:
  pull_request:
    branches: [main]

jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
      
      - name: Install and Build
        run: |
          npm ci
          npm run build
      
      - name: Run Lighthouse
        uses: treosh/lighthouse-ci-action@v10
        with:
          configPath: ./lighthouserc.json
          uploadArtifacts: true
          temporaryPublicStorage: true
```

```json
// lighthouserc.json
{
  "ci": {
    "collect": {
      "staticDistDir": "./dist",
      "url": [
        "/",
        "/structures/gobekli-tepe",
        "/tools/world-map"
      ]
    },
    "assert": {
      "assertions": {
        "categories:performance": ["error", { "minScore": 0.95 }],
        "categories:accessibility": ["error", { "minScore": 0.95 }],
        "categories:best-practices": ["error", { "minScore": 0.95 }],
        "categories:seo": ["error", { "minScore": 0.95 }]
      }
    }
  }
}
```

### Custom Domain Setup

1. Add `CNAME` file to `public/`:
   ```
   greatestancientstructures.com
   ```

2. Configure DNS:
   ```
   Type  Name  Value
   A     @     185.199.108.153
   A     @     185.199.109.153
   A     @     185.199.110.153
   A     @     185.199.111.153
   AAAA  @     2606:50c0:8000::153
   AAAA  @     2606:50c0:8001::153
   AAAA  @     2606:50c0:8002::153
   AAAA  @     2606:50c0:8003::153
   CNAME www   yourusername.github.io
   ```

3. Enable HTTPS in repository Settings → Pages

---

## 📊 Analytics & Tracking

### Privacy-First Analytics Stack

```astro
---
// src/components/global/Analytics.astro
---
<!-- Plausible (privacy-friendly, no cookies) -->
<script 
  defer 
  data-domain="greatestancientstructures.com" 
  src="https://plausible.io/js/script.js"
></script>

<!-- Optional: Google Analytics 4 (with consent) -->
<script
  is:inline
  x-data
  x-init="
    if (localStorage.getItem('analytics-consent') === 'granted') {
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${import.meta.env.PUBLIC_GA_ID}`;
      document.head.appendChild(script);
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', import.meta.env.PUBLIC_GA_ID);
    }
  "
></script>
```

### Event Tracking

```javascript
// src/utils/analytics.ts
export function trackEvent(name: string, props?: Record<string, string>) {
  // Plausible
  if (window.plausible) {
    window.plausible(name, { props });
  }
  
  // GA4
  if (window.gtag) {
    window.gtag('event', name, props);
  }
}

// Usage examples
trackEvent('structure_view', { structure: 'gobekli-tepe', category: 'megalithic' });
trackEvent('tour_click', { provider: 'viator', structure: 'petra' });
trackEvent('comparison_made', { structures: 'petra,hegra' });
trackEvent('map_filter', { category: 'rock-cut' });
```

### Key Metrics Dashboard

| Metric | Goal (Month 6) | Goal (Month 12) |
|--------|----------------|-----------------|
| Monthly Sessions | 25,000 | 100,000 |
| Avg. Session Duration | 3:00 min | 4:00 min |
| Pages per Session | 2.5 | 3.5 |
| Bounce Rate | < 60% | < 50% |
| Organic Traffic % | 50% | 70% |
| Affiliate Click Rate | 2% | 4% |
| Return Visitors | 15% | 25% |

---

## 💰 Monetization Integration

### Affiliate Setup

```typescript
// src/utils/affiliates.ts
const VIATOR_PID = import.meta.env.PUBLIC_VIATOR_PID;
const GYG_PARTNER_ID = import.meta.env.PUBLIC_GYG_PARTNER_ID;

export function buildViatorLink(search: string, destination?: string): string {
  const params = new URLSearchParams({
    pid: VIATOR_PID,
    mcid: '42383',
    medium: 'link',
    campaign: 'greatestancientstructures'
  });
  
  if (destination) {
    return `https://www.viator.com/searchResults/all?text=${encodeURIComponent(search)}&destId=${destination}&${params}`;
  }
  
  return `https://www.viator.com/searchResults/all?text=${encodeURIComponent(search)}&${params}`;
}

export function buildGYGLink(search: string): string {
  return `https://www.getyourguide.com/s/?q=${encodeURIComponent(search)}&partner_id=${GYG_PARTNER_ID}`;
}
```

### Booking Widget Component

```astro
---
// src/components/travel/BookingWidget.astro
import { buildViatorLink, buildGYGLink } from '@utils/affiliates';

interface Props {
  structureName: string;
  viatorSearch?: string;
  gygSearch?: string;
}

const { structureName, viatorSearch, gygSearch } = Astro.props;
const search = viatorSearch || gygSearch || structureName;
---
<div class="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 my-8">
  <h3 class="text-lg font-bold mb-4 flex items-center gap-2">
    <svg class="w-5 h-5"><!-- ticket icon --></svg>
    Book Tours & Tickets
  </h3>
  
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <a 
      href={buildViatorLink(search)}
      target="_blank"
      rel="noopener sponsored"
      class="flex items-center justify-center gap-2 py-3 px-4 bg-[#00AA6C] text-white rounded-lg font-medium hover:bg-[#009960] transition-colors"
      @click="trackEvent('tour_click', { provider: 'viator', structure: structureName })"
    >
      <img src="/icons/viator.svg" alt="" class="h-5" />
      View on Viator
    </a>
    
    <a 
      href={buildGYGLink(search)}
      target="_blank"
      rel="noopener sponsored"
      class="flex items-center justify-center gap-2 py-3 px-4 bg-[#FF5533] text-white rounded-lg font-medium hover:bg-[#E64A2E] transition-colors"
      @click="trackEvent('tour_click', { provider: 'gyg', structure: structureName })"
    >
      <img src="/icons/getyourguide.svg" alt="" class="h-5" />
      View on GetYourGuide
    </a>
  </div>
  
  <p class="text-xs text-stone-500 mt-3">
    * We may earn a commission from bookings at no extra cost to you.
  </p>
</div>
```

### Ad Placement Strategy

```astro
---
// src/components/ads/AdSlot.astro
interface Props {
  slot: 'header' | 'sidebar' | 'in-content' | 'footer';
}

const { slot } = Astro.props;

// Only show ads on production
const showAds = import.meta.env.PROD;
---
{showAds && (
  <div 
    class:list={[
      'ad-slot',
      {
        'h-[90px] md:h-[250px]': slot === 'header',
        'w-[300px] h-[250px]': slot === 'sidebar',
        'my-8 mx-auto max-w-[728px]': slot === 'in-content',
        'h-[90px]': slot === 'footer'
      }
    ]}
    data-ad-slot={slot}
  >
    <!-- Ad network code injected here -->
    <div class="bg-stone-200 dark:bg-stone-700 w-full h-full flex items-center justify-center text-stone-400 text-sm">
      Advertisement
    </div>
  </div>
)}
```

---

## 🗺️ Roadmap

### Phase 1: Foundation (Months 1-3)
- [ ] Core site architecture and design system
- [ ] 25 launch structures (high-opportunity sites)
- [ ] Mobile-first responsive layouts
- [ ] Basic SEO implementation
- [ ] Viator/GYG affiliate integration
- [ ] Pagefind search
- [ ] GitHub Pages deployment

### Phase 2: Expansion (Months 4-6)
- [ ] 75 additional structures (100 total)
- [ ] Interactive world map
- [ ] Comparison tool
- [ ] Spanish content (top 50)
- [ ] Portuguese content (top 50)
- [ ] Timeline slider
- [ ] Mediavine/Journey application

### Phase 3: Authority (Months 7-12)
- [ ] 200+ structures
- [ ] Arabic content launch
- [ ] French/German content
- [ ] Size calculator tool
- [ ] Quiz system with leaderboards
- [ ] Virtual tour embeds
- [ ] Tourism board partnerships
- [ ] Premium membership tier

### Phase 4: Scale (Year 2+)
- [ ] 500+ structures
- [ ] Chinese content
- [ ] Native mobile apps
- [ ] AI-powered trip planner
- [ ] Original photography expeditions
- [ ] Documentary partnerships
- [ ] Educational licensing

---

## 🤝 Contributing

### How to Contribute

1. **Content contributions**: Research and write structure profiles
2. **Translations**: Help translate content to new languages
3. **Code**: Improve components, fix bugs, add features
4. **Design**: Enhance UI/UX, create illustrations
5. **Photography**: Contribute CC-licensed images

### Getting Started

```bash
# Fork the repository
# Clone your fork
git clone https://github.com/YOUR_USERNAME/greatestancientstructures.git

# Create a branch
git checkout -b content/add-nan-madol

# Make changes and commit
git add .
git commit -m "Add Nan Madol structure profile"

# Push and create PR
git push origin content/add-nan-madol
```

### Content Guidelines

- **Accuracy first**: Cite academic sources where possible
- **Balanced perspective**: Present mysteries fairly without pseudoscience
- **Engaging writing**: Make it fun—these sites are incredible!
- **SEO aware**: Include target keywords naturally
- **Mobile friendly**: Test on mobile devices

---

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

Content is licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).

---

## 🙏 Acknowledgments

- UNESCO World Heritage Centre for site data
- Academic archaeologists whose research makes this possible
- Open-source community for the incredible tooling
- All contributors who help build this resource

---

<p align="center">
  <strong>Built with 🏛️ for lovers of ancient mysteries</strong>
</p>

<p align="center">
  <a href="https://greatestancientstructures.com">greatestancientstructures.com</a>
</p>
