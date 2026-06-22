# M.S. Renovation

Premium brochure website for M.S. Renovation, a 5-star rated home improvement and
renovation business serving Aberdeen, Scotland. Built with Next.js (App Router) and
CSS Modules, deployed on Vercel.

## Status

Production-ready. Homepage and gallery page are built, styled, and verified working on
desktop and mobile. The HTML design demos (`demo/index.html`, `demo/gallery.html`) have
been removed now that the Next.js build matches them.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: CSS Modules only (no Tailwind/Bootstrap)
- **Icons**: react-icons (WhatsApp, Facebook)
- **Hosting**: Vercel

## Project Structure

```
app/
├── layout.js                 Root layout: Navigation + Footer wrapper
├── page.js                   Homepage
├── gallery/page.js           Gallery ("Our Work") page
├── components/                Hero, Services, Certificate, Reviews, Contact, Navigation, Footer
├── hooks/useScrollAnimation.js  Shared Intersection Observer hook for scroll fade-ins
└── styles/                   One CSS Module per component, plus globals.css
public/
├── certificate.jpg           Aberdeen Trusted Trader certificate
└── photos/                   Before/after project photos (empty — gallery currently uses placeholders)
```

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start         # serve the production build
```

## Notes

- The gallery page uses gradient placeholder blocks for before/after photos. Drop real
  project photos into `public/photos/` and swap them into `app/gallery/page.js` when
  available.
- The contact form builds a pre-filled WhatsApp message and opens WhatsApp directly —
  there is no backend, by design.
- No ampersands anywhere in copy ("and" is used instead), per the client's brand style.
