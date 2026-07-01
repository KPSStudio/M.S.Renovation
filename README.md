# M.S. Renovation

A brochure website for M.S. Renovation, a painter/decorator and home improvement business
run by Maciej ("Matt") in Aberdeen, Scotland. He had a strong reputation and a perfect
5-star rating on Trusted Trader, but no website — the goal here was simply to get him
found online and make it easy for people to request a quote. Built with Next.js (App
Router), TypeScript, and CSS Modules, deployed on Vercel.

## Status

Production-ready. Homepage, gallery, and five dedicated service pages are built, styled, and
verified working on desktop and mobile. The project has been fully migrated to TypeScript with
a `src/`
directory structure, a darker premium color palette, and a scroll-darkening, shrinking
navigation header. The original HTML design demos and the JavaScript prototype have been
removed.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (strict mode, `noUnusedLocals`/`noUnusedParameters` enabled)
- **Styling**: CSS Modules + `src/app/globals.css` (no Tailwind/Bootstrap)
- **Icons**: react-icons (WhatsApp, Facebook, Instagram)
- **Hosting**: Vercel

## Links

- Website: [msrenovation.co.uk](https://msrenovation.co.uk)
- Facebook: [facebook.com/m.s.renovationaberdeen](https://www.facebook.com/m.s.renovationaberdeen)
- Instagram: [instagram.com/m.s_renovation](https://www.instagram.com/m.s_renovation/)
- Trusted Trader profile: [trustedtrader.scot/Aberdeen/MSRenovation-0001955](https://www.trustedtrader.scot/Aberdeen/MSRenovation-0001955.html)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx                Root layout: Navigation + Footer wrapper
│   ├── page.tsx                  Homepage
│   ├── page.module.css           Homepage-only styles (gallery CTA banner)
│   ├── globals.css               Color palette, reset, base typography, scroll-animate utility classes
│   ├── gallery/
│   │   ├── page.tsx              Gallery ("Our Work") page
│   │   └── page.module.css       Gallery page-only styles (header + closing CTA)
│   ├── painting-and-decorating-aberdeen/page.tsx   Service page
│   ├── plastering-aberdeen/page.tsx                Service page
│   ├── carpentry-and-joinery-aberdeen/page.tsx     Service page
│   ├── bathroom-renovation-aberdeen/page.tsx       Service page
│   ├── property-repairs-aberdeen/page.tsx          Service page
│   ├── sitemap.ts                Homepage, gallery, and the 5 service pages
│   └── schema.json               LocalBusiness + BreadcrumbList + 8-question FAQPage
├── components/                   layout/Navigation + layout/GalleryNavigation (both shrink +
│                                 darken on scroll), FadeInSection (generic scroll fade-in
│                                 wrapper for server-component pages), Hero, Services (5
│                                 services, flexbox card row), WhyChooseUs, Certificate
│                                 (hoverable trust badges), Reviews (dark/glassmorphic
│                                 carousel), ServiceAreas, FAQ (animated accordion), Contact
│                                 (two-column: quick contact + form), BeforeAfterGallery (two
│                                 independent before/after photo carousels, side by side on
│                                 desktop), Footer (with a row of service-page links),
│                                 ServicePage + ServiceFeatureGrid (reusable layout and animated
│                                 hover cards for the 5 service pages). Each has a co-located
│                                 .module.css.
├── data/services.ts              Single source of truth for the 5 service-page links
├── types/index.ts                Shared TypeScript interfaces (Service, Review, etc.)
└── utils/                        useScrollAnimation.ts (scroll fade-ins) and useCarousel.ts
                                  (shared carousel slide/timer logic for Reviews and the gallery)
public/
├── certificate.jpg                Aberdeen Trusted Trader certificate
├── photos/                        Empty (.gitkeep only) — real WhatsApp photos were sorted out of here
└── images/projects/msrenovation/before-after/
    ├── before/                    10 real photos: in-progress/unfinished work, all rendered
    └── after/                     13 real photos on disk, 11 rendered (2 kitchen photos are
                                    excluded from the gallery, see Notes below)
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

Section padding sitewide comes from one token, `--spacing-2xl` (4.5rem top/bottom). It was
trimmed down from 6rem after the site started to feel like it had too much dead air between
sections — one shared token instead of per-section hardcoded padding, so a single change
tightens the whole page consistently.

## Navigation Scroll Effect

`Navigation.tsx` tracks `window.scrollY` and swaps between two header styles once the
page scrolls past 50px: a flat white header at the top, and a gradient header with a
heavier `--stone-dark` border and a shadow once scrolled, which also reduces the header's
padding and the logo/nav-link font-size slightly (a CSS transition on `.headerScrolled` in
`Navigation.module.css`, not a `transform: scale()` — the header is `position: sticky`, so a
transform wouldn't shrink its reserved layout space and would leave a gap). This runs
independently of the existing active-section-highlighting logic for the nav links.

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000 (or next available port)
npm run build    # production build
npm start         # serve the production build
npx tsc --noEmit  # type-check only
```

## Notes

- `GalleryGrid.tsx` (the 3 placeholder case studies with gradient blocks and invented
  Duration/Budget figures) has been **deleted**. None of the real client photos could be
  confidently tied to those specific invented project names/scopes, and the client asked for
  the cards to be removed entirely rather than published with fabricated details.
- Real client photos (23 WhatsApp images) were organized into
  `public/images/projects/msrenovation/before-after/` and are rendered by a
  `BeforeAfterGallery.tsx` component on `/gallery`: two independent, auto-rotating carousels
  (arrow buttons + dot indicators) — a "Before" carousel and an "After" carousel. An earlier
  pass tried to pair specific before/after photos into a named "hallway" project — that
  pairing turned out to be wrong (two of the three "after" photos were a different property
  with a different door style) and has been undone. Photos are now classified independently
  by visible construction stage only, with no pairing, project names, or scope details
  claimed. See `AGENTS.md`'s "Photo Organization" section for the full breakdown and naming
  convention.
- A SEO/content pass tightened the homepage `<title>`/description and the Hero `<h1>` for
  length and keyword targeting, expanded `Services.tsx` with capability bullet lists, and
  added new homepage sections: `WhyChooseUs.tsx`, `ServiceAreas.tsx`, and `FAQ.tsx` (8
  questions, animated accordion). A "Service Areas" section was initially skipped because its
  proposed town list was unverified; it was added in a later round once the client confirmed
  the list (Aberdeen, Bridge of Don, Dyce, Cove Bay, Bucksburn, Danestone, Westhill,
  Portlethen, Kingswells, Aberdeenshire) was accurate. Several other claims (insurance status,
  a specific emergency-response time, a trading-since date, specific price/duration figures)
  remain deliberately omitted as unverifiable rather than invented. See `AGENTS.md`'s "SEO and
  Content Pass" and "Second Prompt Pass" sections for the full list of what was added, what
  was left out, and why.
- A later improvement prompt asked for a paired `BeforeAfterSlider` component with specific
  before/after image pairs and project titles — this was **not** built, since it directly
  conflicted with the client's own earlier decision that the photos cannot be honestly paired.
  The existing two-carousel `BeforeAfterGallery.tsx` (no pairing, no titles) was kept.
- `BeforeAfterGallery.tsx` uses static image imports with exact file paths, so moving a photo
  between the `before/`/`after/` folders without updating the corresponding import will break
  the build. If a photo needs reclassifying, update its import path, move its entry to the
  other `BEFORE_PHOTOS`/`AFTER_PHOTOS` array, and ideally rename the file to match (this
  happened once already — see `AGENTS.md`'s "Bug Fix: Swapped Before/After Photos").
- The FAQ accordion (`FAQ.tsx`/`FAQ.module.css`) animates open/closed with a CSS
  `grid-template-rows` transition rather than mounting/unmounting the answer, so it stays
  smooth regardless of answer length.
- `Reviews.module.css` uses a dark gradient background and a glassmorphic (frosted,
  translucent) carousel card, intentionally inverted from the white sections around it for
  visual separation. `Reviews.tsx`'s existing carousel logic/class names were kept as-is —
  only the CSS and one new line of copy changed.
- **Kitchen fitting is no longer offered** (a full kitchen project is too much for one
  tradesperson) and has been removed from `Services.tsx`, `WhyChooseUs.tsx`, `FAQ.tsx`, the
  homepage metadata/keywords in `layout.tsx`, and the `knowsAbout` list in `schema.json`. Two
  real photos of completed kitchen jobs were removed from `BeforeAfterGallery.tsx`'s rendered
  carousel (not deleted from disk — see `AGENTS.md`'s "Kitchen Work Removal" section) so the
  gallery doesn't visually suggest an active service that's been discontinued.
- `.servicesGrid` is flexbox (`flex-wrap` + `justify-content: center`), not CSS Grid — Grid's
  `auto-fit`/`justify-content: center` only centers the grid's overall track, not an
  individual incomplete last row, which still looked lopsided with 5 cards. Flexbox centers
  each wrapped row's leftover space independently.
- The gallery page (`/gallery`) now uses `FadeInSection.tsx` for scroll fade-ins, since
  `gallery/page.tsx` exports `metadata` and so can't itself be a client component to use
  `useScrollAnimation` directly. `GalleryNavigation.tsx` also shrinks/darkens on scroll now,
  matching the homepage `Navigation`, and `BeforeAfterGallery.tsx`'s two carousels sit side by
  side on desktop (stacked below 900px) instead of one narrow column stacked above the other.
- `Footer.tsx` has a small "Designed and Developed by KPS Studio" credit line linking to the
  developer's LinkedIn, styled deliberately quieter than the business's own footer lines.
- `Contact.tsx` is a two-column layout inside one stone-dark gradient card: WhatsApp/Facebook/
  Instagram icon buttons plus phone/location/membership details on the left, the quote form
  on the right (stacks to form-then-contact-info on mobile). `Certificate.tsx`'s trust badges
  (Trusted Trader Member / 5.0 from 16 Reviews / Backed by Police Scotland) now lift and
  highlight on hover, matching the rest of the site's card interactions.
- The contact form builds a pre-filled WhatsApp message and opens WhatsApp directly —
  there is no backend, by design.
- No ampersands anywhere in copy ("and" is used instead), per the client's brand style.
- The scroll fade-in animations use a typed React hook (`useScrollAnimation`) rather than
  a single global `document.querySelectorAll` pass, since each card/section needs its own
  independent Intersection Observer instance as React mounts them.
- `npm run lint` does not currently run — `next lint` was removed in Next.js 16 and this
  project has never had a standalone ESLint config set up. Pre-existing gap, not introduced
  by any specific change.
- There are 5 dedicated service pages (`/painting-and-decorating-aberdeen`,
  `/plastering-aberdeen`, `/carpentry-and-joinery-aberdeen`, `/bathroom-renovation-aberdeen`,
  `/property-repairs-aberdeen`), each targeting one service-plus-location search. They share a
  reusable `ServicePage.tsx` layout, so each route file only supplies its own words and
  metadata. Their links live once in `src/data/services.ts`, read by the nav dropdown, the
  homepage cards, the footer, and the sitemap, so those never fall out of sync. See
  `AGENTS.md`'s "Dedicated Service Pages" section.
- The homepage service cards are clickable (a "stretched link" so the whole card navigates,
  with "Learn more" pinned to the bottom of every card via a flex column), and the header has a
  "Services" dropdown listing all five pages. The dropdown is state-driven (click/tap), closing
  on a second click, an outside click, Escape, choosing a link, or toggling the mobile menu. The
  service and gallery pages use the simpler `GalleryNavigation`, so cross-navigation between
  service pages is via the footer links.
- An SEO pass added a social share image (a real project photo, used because there is no logo
  yet) across the layout, home, and gallery `openGraph`, switched the Twitter card to
  `summary_large_image`, made `schema.json`'s FAQ match the visible 8-question FAQ, enriched the
  LocalBusiness data (business image, real Instagram in `sameAs`, a more specific
  `["GeneralContractor", "HousePainter"]` type, tidied `priceRange`), and added real opening
  hours supplied by the client. See `AGENTS.md`'s "SEO Pass" section.
- Reviews and the Before/After gallery share one carousel hook, `src/utils/useCarousel.ts`,
  instead of duplicating slide/timer logic. `Navigation.tsx`'s active-section tracking uses an
  `IntersectionObserver` scroll-spy rather than measuring section offsets on every scroll frame.
  The contact form's WhatsApp handoff uses `window.location.href` rather than
  `window.open('_blank')`, which some mobile browsers block.
- This repo also has an `AGENTS.md` (previously `agent.md`) tracking the project's status,
  business facts, and a running log of changes round-by-round — useful if you want the fuller
  story behind any of the notes above.
