# M.S. Renovation - Project Agent

## Project Overview
M.S. Renovation is a premium brochure website for a home improvement and renovation business based in Aberdeen, Scotland. The business is owned and operated by Maciej (Matt), a highly-rated tradesman with a perfect 5-star rating on Trusted Trader.

## Current Status
- **Phase**: Production-ready. Migrated to TypeScript with a `src/` directory structure.
- **Demo**: HTML demos and the original JavaScript prototype have been removed; see README.md.
- **Target Deployment**: Vercel

## Business Information
- **Company**: M.S. Renovation
- **Owner**: Maciej (Matt)
- **Location**: Aberdeen, Scotland (9 Oldtown Place, Aberdeen, AB16 7LR)
- **Phone**: 07572 916190
- **Services**: Painting and decorating, plastering, carpentry, tiling, bathroom refurbishment, kitchen fitting, property repair and maintenance
- **Rating**: 5.0/5 stars from 16 reviews
- **Trusted Trader**: Member since 2024, certificate valid until 26/07/2026
- **Social**: Facebook: m.s.renovationaberdeen, Instagram: m.s_renovation

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (strict mode, `noUnusedLocals`/`noUnusedParameters` enabled)
- **Hosting**: Vercel
- **Styling**: CSS modules (no frameworks like Tailwind)
- **Fonts**: System fonts (avoid ampersands - use "and" text instead)
- **Icons**: React Icons (WhatsApp and Facebook logos)
- **Responsiveness**: Mobile-first, desktop optimized

## Project Structure
```
M.S.Renovation/
├── src/
│   ├── app/
│   │   ├── layout.tsx (Main layout with header/footer)
│   │   ├── page.tsx (Homepage)
│   │   ├── page.module.css
│   │   ├── globals.css (palette, reset, base typography, scroll-animate utilities)
│   │   └── gallery/
│   │       ├── page.tsx (Gallery page)
│   │       └── page.module.css
│   ├── components/
│   │   ├── Navigation.tsx + Navigation.module.css (includes scroll-darken effect)
│   │   ├── Hero.tsx + Hero.module.css
│   │   ├── Services.tsx + Services.module.css
│   │   ├── Certificate.tsx + Certificate.module.css
│   │   ├── Reviews.tsx + Reviews.module.css
│   │   ├── Contact.tsx + Contact.module.css
│   │   ├── GalleryGrid.tsx + GalleryGrid.module.css
│   │   └── Footer.tsx + Footer.module.css
│   ├── types/index.ts (shared interfaces)
│   └── utils/useScrollAnimation.ts (Intersection Observer hook)
├── public/
│   ├── certificate.jpg
│   └── photos/ (before/after images when available)
├── tsconfig.json
├── README.md (Project overview - updated with each change)
├── agent.md (This file)
└── package.json
```

## Design Specifications

### Color Palette
- **Stone**: #8B7355
- **Gold**: #D4A574
- **Dark**: #3E3E3E
- **Muted**: #C4B5A0
- **Light/Background**: #F8F3ED (warm cream)
- **White**: #FFFFFF

### Typography
- **Headings**: Serif font (system-ui serif fallback, NO ampersands)
- **Body**: Serif font (system-ui serif fallback)
- **Size Scale**: 
  - h1: 3.8rem (desktop), 2.2rem (mobile)
  - h2: 3rem (desktop), 2rem (mobile)
  - Body: 1rem
  - Small: 0.9rem

### Spacing
- Section padding: 6rem (desktop), 3rem (mobile)
- Card gaps: 2.5rem
- Margin bottom sections: 4rem

### Animations
- Scroll fade-in: `fadeInUp` (opacity 0 to 1, translateY 40px to 0)
- Hover effects: Lift cards (translateY -8px), scale buttons
- Staggered delays: 0.1s, 0.2s, 0.3s for multiple elements

## Key Features to Implement

### Homepage
- Hero section with headline, subheading, rating badge, CTA buttons
- Services grid (6 cards) with hover effects, visible borders
- Gallery CTA section
- Certificate section with image
- Reviews carousel (5 reviews, auto-rotate 5 seconds, manual navigation)
- Contact form with WhatsApp integration
- Navigation with active section highlighting

### Gallery Page
- Side-by-side before/after layout
- 3 project pairs with descriptions
- Project details box with scope information
- Same header/footer as homepage
- CTA to contact form

### Navigation
- Sticky header with logo
- Navigation links with animated underline on active/hover
- Active section highlighting as user scrolls
- Mobile-responsive menu

### Responsive Design
- **Desktop**: Full layout as designed
- **Tablet**: Adjusted spacing, stacked elements where needed
- **Mobile**: Single column layouts, reduced font sizes, full-width cards, simplified header, touch-friendly buttons (min 48px)

## Development Guidelines

### Code Comments
- Add extensive comments in every component
- Explain what each section does
- Document prop usage
- Include TODOs for future enhancements
- Comment on complex logic

### No Shortcuts
- Full class names in CSS modules
- Clear, descriptive div structure
- No abbreviated class names
- Semantic HTML where possible
- Clear prop names in React components

### File Organization
- One component per file
- CSS modules in same directory as components
- Clear naming conventions: ComponentName.js to ComponentName.module.css
- Utility functions in separate utils folder if needed

### WhatsApp and Facebook Integration
- WhatsApp: Use React Icon or SVG logo with WhatsApp link (pre-filled message)
- Facebook: Use React Icon or SVG logo with link to Facebook page
- Replace "WhatsApp Us" text with icon
- Replace "Facebook" text with icon
- Keep tooltips/aria-labels for accessibility

### Certificate Image
- Located at: public/certificate.jpeg
- Display in Certificate section
- Responsive sizing (max-width with aspect ratio)
- Add hover animation

## Current Demo Files
- index.html - Homepage demo
- gallery.html - Gallery demo
- These should be deleted once components are built and working
- Use these as design reference/inspiration only

## Next Steps
1. Drop real before/after project photos into `public/photos/` and wire them into
   `src/components/GalleryGrid.tsx`, replacing the gradient placeholders
2. Deploy to Vercel

## Notes
- Certificate file is `public/certificate.jpg` (.jpg, not .jpeg)
- Font ampersand issue: Avoid using "&" character - use "and" text instead
- Photos folder structure ready but currently empty (use placeholders)
- All links and contact information verified from Trusted Trader listing
- Mobile-first responsive approach required
