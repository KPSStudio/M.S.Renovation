# M.S. Renovation

Premium brochure website for M.S. Renovation, a 5-star rated home improvement and
renovation business serving Aberdeen, Scotland. Built with Next.js (App Router),
TypeScript, and CSS Modules, deployed on Vercel.

## Status

Production-ready. Homepage and gallery page are built, styled, and verified working on
desktop and mobile. The project has been fully migrated to TypeScript with a `src/`
directory structure, a darker premium color palette, and a scroll-darkening navigation
header. The original HTML design demos and the JavaScript prototype have been removed.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (strict mode, `noUnusedLocals`/`noUnusedParameters` enabled)
- **Styling**: CSS Modules + `src/app/globals.css` (no Tailwind/Bootstrap)
- **Icons**: react-icons (WhatsApp, Facebook)
- **Hosting**: Vercel

## Project Structure

```
src/
├── app/
│   ├── layout.tsx                Root layout: Navigation + Footer wrapper
│   ├── page.tsx                  Homepage
│   ├── page.module.css           Homepage-only styles (gallery CTA banner)
│   ├── globals.css               Color palette, reset, base typography, scroll-animate utility classes
│   └── gallery/
│       ├── page.tsx              Gallery ("Our Work") page
│       └── page.module.css       Gallery page-only styles (header + closing CTA)
├── components/                   Navigation, Hero, Services, Certificate, Reviews, Contact,
│                                 GalleryGrid, Footer — each with a co-located .module.css
├── types/index.ts                Shared TypeScript interfaces (Service, Review, Project, etc.)
└── utils/useScrollAnimation.ts   Intersection Observer hook for scroll fade-ins
public/
├── certificate.jpg                Aberdeen Trusted Trader certificate
└── photos/                        Before/after project photos (empty — gallery currently uses placeholders)
```

Path aliases are configured in `tsconfig.json`: `@/*`, `@/components/*`, `@/types/*`,
`@/utils/*`, `@/app/*`.

## Color Palette

Darker, more premium tokens than the original demo, defined in `src/app/globals.css`:

- `--stone-dark` `#6B5344` — primary accent (buttons, borders, active nav links)
- `--stone` `#7A5F4E` — secondary accent
- `--stone-darker` `#54402F` — hover state for stone-dark elements (project-specific addition)
- `--gold` `#C99548` — highlights (stars, footer links)
- `--dark` `#2C2C2C` — body text
- `--muted` `#8B7355` — secondary warm-brown text
- `--text-gray` `#707070` — neutral gray body copy (project-specific addition, not gray enough
  in `--muted` for use on white cards)
- `--light` / `--background` — warm cream section backgrounds

## Navigation Scroll Effect

`Navigation.tsx` tracks `window.scrollY` and swaps between two header styles once the
page scrolls past 50px: a flat white header at the top, and a gradient header with a
heavier `--stone-dark` border and a shadow once scrolled. This runs independently of the
existing active-section-highlighting logic for the nav links.

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000 (or next available port)
npm run build    # production build
npm start         # serve the production build
npx tsc --noEmit  # type-check only
```

## Notes

- The gallery page uses gradient placeholder blocks for before/after photos. Drop real
  project photos into `public/photos/` and swap them into `src/components/GalleryGrid.tsx`
  when available.
- The contact form builds a pre-filled WhatsApp message and opens WhatsApp directly —
  there is no backend, by design.
- No ampersands anywhere in copy ("and" is used instead), per the client's brand style.
- The scroll fade-in animations use a typed React hook (`useScrollAnimation`) rather than
  a single global `document.querySelectorAll` pass, since each card/section needs its own
  independent Intersection Observer instance as React mounts them.
