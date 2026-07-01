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
- **Services**: Painting and decorating, plastering, carpentry, tiling, bathroom refurbishment, property repair and maintenance. Kitchen fitting was offered previously but has been **discontinued** (a full kitchen project is too much for a single tradesperson) — it has been removed from all customer-facing copy, metadata, structured data, and the public gallery. See "Kitchen Work Removal" below.
- **Rating**: 5.0/5 stars from 16 reviews
- **Trusted Trader**: Member since 2024, certificate valid until 26/07/2026
- **Social**: Facebook: m.s.renovationaberdeen, Instagram: m.s_renovation (both confirmed real
  and linked live as icon buttons in `Contact.tsx` — Instagram added in the "Final Polish"
  round below, alongside the pre-existing WhatsApp/Facebook icons)

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (strict mode, `noUnusedLocals`/`noUnusedParameters` enabled)
- **Hosting**: Vercel
- **Styling**: CSS modules (no frameworks like Tailwind)
- **Fonts**: System fonts (avoid ampersands - use "and" text instead)
- **Icons**: React Icons (WhatsApp, Facebook, and Instagram logos)
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
│   │   ├── gallery/
│   │   │   ├── page.tsx (Gallery page)
│   │   │   └── page.module.css
│   │   ├── painting-and-decorating-aberdeen/page.tsx (service page)
│   │   ├── plastering-aberdeen/page.tsx (service page)
│   │   ├── carpentry-and-joinery-aberdeen/page.tsx (service page)
│   │   ├── bathroom-renovation-aberdeen/page.tsx (service page)
│   │   ├── property-repairs-aberdeen/page.tsx (service page)
│   │   ├── sitemap.ts (homepage, gallery, and the 5 service pages)
│   │   └── schema.json (LocalBusiness, BreadcrumbList, 8-question FAQPage)
│   ├── components/
│   │   ├── layout/Navigation/ + layout/GalleryNavigation/ (homepage-only full nav vs gallery-only simplified nav, both shrink/darken on scroll)
│   │   ├── FadeInSection.tsx (generic scroll fade-in wrapper for server-component pages, e.g. the gallery page)
│   │   ├── Hero.tsx + Hero.module.css
│   │   ├── Services.tsx + Services.module.css (5 services, flexbox card row so the last row centers as a pair — Kitchen Fitting was removed, see "Kitchen Work Removal" below)
│   │   ├── WhyChooseUs.tsx + WhyChooseUs.module.css
│   │   ├── Certificate.tsx + Certificate.module.css
│   │   ├── Reviews.tsx + Reviews.module.css
│   │   ├── ServiceAreas.tsx + ServiceAreas.module.css (confirmed town list, pill layout)
│   │   ├── FAQ.tsx + FAQ.module.css
│   │   ├── Contact.tsx + Contact.module.css
│   │   ├── BeforeAfterGallery.tsx + BeforeAfterGallery.module.css (real client photos, side-by-side Before/After carousels on desktop: see "Photo Organization" section below)
│   │   ├── Footer.tsx + Footer.module.css (includes a row of links to the 5 service pages)
│   │   ├── ServicePage.tsx + ServicePage.module.css (reusable layout for the 5 service pages)
│   │   └── ServiceFeatureGrid.tsx + ServiceFeatureGrid.module.css (animated "what's included" hover cards)
│   ├── data/services.ts (single source of truth for the 5 service-page links)
│   ├── types/index.ts (shared interfaces)
│   └── utils/ (useScrollAnimation.ts Intersection Observer hook; useCarousel.ts shared carousel slide/timer logic)
├── public/
│   ├── certificate.jpg
│   ├── robots.txt
│   ├── photos/ (empty - real WhatsApp photos have been sorted out of here, see below)
│   └── images/projects/msrenovation/before-after/
│       ├── before/ (10 real photos, in-progress/unfinished work — all 10 rendered)
│       └── after/ (13 real photos, finished work — 11 rendered; 2 kitchen photos are on
│           disk but excluded from BeforeAfterGallery.tsx, see "Kitchen Work Removal" below)
├── tsconfig.json
├── README.md (Project overview - updated with each change)
├── AGENTS.md (This file)
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
- Services grid (6 cards) with hover effects, visible borders, capability bullet lists
- Why Choose Us section (6 reason cards)
- Gallery CTA section
- Certificate section with image
- Reviews carousel (5 reviews, auto-rotate 5 seconds, manual navigation)
- Service Areas section (confirmed town list, wrapped pill layout, no keyword-stuffing)
- FAQ accordion (8 questions, one open at a time, smooth grid-row transition)
- Contact form with WhatsApp integration
- Navigation with active section highlighting (7 links: Services, Why Choose Us, Our Work,
  Reviews, Areas, FAQ, Contact)

### Gallery Page
- Two independent, auto-rotating photo carousels: Before and After
- No project titles, descriptions, or claimed pairing between photos
- Same simplified header/footer as the rest of the gallery page
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

## Photo Organization (WhatsApp Photos Sorted Into the Gallery)

23 WhatsApp photos were dropped into `public/photos/` by the client. They have been
inspected (visual content, dimensions, no EXIF — WhatsApp strips it on send), organized,
renamed, and moved out of `public/photos/` (now empty again except `.gitkeep`) into:

```
public/images/projects/msrenovation/before-after/
├── before/   (10 photos: in-progress/unfinished work)
└── after/    (13 photos: finished work)
```

**Naming convention**: lowercase kebab-case, `msrenovation-before-<descriptor>-<number>.jpg`
or `msrenovation-after-<descriptor>-<number>.jpg`.

**Revision history on this**: an earlier pass tried to pair specific before and after photos
into named "projects" (e.g. a `before-after/hallway-renovation-01/` folder claiming 1 before +
3 after photos were the same hallway). That pairing was **wrong** — on review, 2 of the 3
"after" photos showed a flush modern door style that didn't match the traditional 6-panel
door in the "before" photo at all, meaning they were different properties that happened to
share a similar generic flooring/skirting/downlight style. That whole grouping has been
dissolved.

**Current approach**: every photo is now classified independently as **Before** or **After**
only, based on visible construction stage (bare plaster/exposed structure/dated fixtures vs.
painted/floored/fitted). No photo is claimed to be paired with any other specific photo, and
no project names, scopes, durations, or budgets are attached to any of them — matching
individual before/after photos reliably from phone snapshots with no EXIF and no client input
isn't something that can be done with real confidence, so the gallery doesn't pretend
otherwise. This is rendered by `BeforeAfterGallery.tsx` on `/gallery`: two independent,
auto-rotating photo carousels (arrow buttons + dot indicators, same interaction pattern as the
homepage Reviews carousel) — a "Before" carousel (10 photos) and an "After" carousel (13
photos) — with only honest, visually-descriptive alt text per photo.

The original `GalleryGrid.tsx` (3 gradient-placeholder case studies: "Water-Damaged Ceiling
Repair", "Bedroom Transformation", "Bathroom Refurbishment") has since been **deleted
entirely** at the client's request, since none of the real photos could be confidently tied to
those invented scope descriptions. `/gallery` now shows only the real-photo carousels.

## SEO and Content Pass (Meta Tags, Services, Why Choose Us, FAQ)

- **Meta tags/H1 tightened** for SERP display: homepage `<title>` is now an absolute
  62-character string ("Painter and Decorator in Aberdeen | Home Improvements | 5-Star"),
  descriptions trimmed to ~125-145 characters, and the Hero `<h1>` now reads "Expert Painter,
  Decorator and Home Improvements in Aberdeen" (keyword + location, no ampersand per house
  style).
- **Services.tsx** descriptions expanded to 2-3 sentences each, plus a short capability bullet
  list per card (`Service.details?: string[]` in `src/types/index.ts`). The unused
  `Project`/`ProjectDetail` types were removed along with `GalleryGrid.tsx`.
- **WhyChooseUs.tsx** (new) and **FAQ.tsx** (new) added to the homepage, between
  Services/"Our Work" and Reviews/Contact respectively.
- **ServiceAreas section was not built.** The source prompt's entire premise for that section
  was a specific list of named towns (Bridge of Don, Cults, Banchory, Westhill, Stonehaven,
  etc.) that isn't established anywhere and includes places 15-20+ miles from Aberdeen —
  publishing an unconfirmed coverage area is a real customer-expectation/business risk, not
  just a content nitpick, so it was skipped rather than built with invented towns.
- **Several other specific claims from the source prompt were deliberately omitted** for the
  same reason (not verifiable from anything already established about the business):
  - Being "fully insured" (only Trusted Trader certification is established)
  - A specific "24-48 hour" emergency response time
  - "Serving the local community since 2024" (2024 is when Trusted Trader membership started,
    not necessarily when the business itself started trading)
  - Specific £ price ranges and day/week durations in the FAQ (these were the same invented
    numbers from the now-deleted `GalleryGrid.tsx` placeholders) — the FAQ answers these
    generically ("we'll give you a clear, honest quote") instead.
- The source prompt's "before/after slider" idea (drag-to-reveal a single image pair) was
  replaced with two separate carousels (no claimed before/after pairing) per direct client
  instruction, since the photos can't be honestly matched into pairs (see "Photo Organization"
  above) and the prompt's own example slider implementation didn't actually render images —
  it rendered emoji placeholders as plain text.

`npx tsc --noEmit` and `npm run build` both pass with all of the above. `npm run lint` still
cannot run — `next lint` was removed in Next.js 16 and this project has never had a standalone
ESLint config; pre-existing gap, not introduced by this change. Verified visually via a
scripted Playwright check (desktop 1280px and mobile 375px) against the dev server: no console
errors, no failed/4xx-5xx requests, no horizontal overflow on mobile, the FAQ accordion
expands/collapses correctly, and the two gallery carousels advance independently of each
other.

## Services Grid Take 2, and Gallery Page Premium Pass

The Services grid fix from the previous round (centered CSS Grid with a capped `minmax()`)
still wasn't right — the client flagged the last row still looked off. The actual problem:
CSS Grid's `auto-fit`/`justify-content: center` centers the grid's overall track as a whole,
but doesn't center an *individual incomplete row* within that track — row 2's two cards were
still left-aligned within the (now-centered) 3-column track, leaving empty space specifically
on the right side of that row. Switched `.servicesGrid` from CSS Grid to **flexbox**
(`display: flex; flex-wrap: wrap; justify-content: center`) with `flex: 0 1 320px` cards
instead — flexbox centers each wrapped row's leftover space independently, so the last row's 2
cards now center as their own pair. Also tightened `.serviceCardTitle`'s margin-bottom
(`--spacing-sm` to `--spacing-xs`) and `.serviceCardDetailsList`'s margin-top (`--spacing-md`
to `--spacing-sm`), and reduced description `line-height` (1.8 to 1.6) and card padding
(`--spacing-xl` to `--spacing-lg`) — the client felt there was too much dead space between
each title and its description.

The gallery page (`/gallery`) was flagged as feeling "slapped on" compared to the rest of the
site. Concrete causes, fixed one by one:

- **No scroll-fade-in anywhere on the page.** Every homepage section fades in via
  `useScrollAnimation` + the global `scroll-animate`/`visible` utility classes; the gallery
  page had none of that — content just appeared statically. Since `gallery/page.tsx` exports
  `metadata` and therefore can't itself be a client component, a small reusable
  `FadeInSection.tsx` wrapper (`'use client'`, wraps `children` in a div using the hook) was
  added and used around the page header and closing CTA content. `BeforeAfterGallery.tsx` got
  its own `CarouselColumn` sub-component using the same hook directly, so each carousel fades
  in independently (mirroring `ServiceCard`/`ReasonCard`'s pattern elsewhere).
- **`GalleryNavigation` had no scroll-shrink/darken behavior**, unlike the homepage's
  `Navigation`, and started with more padding than `Navigation` does even at rest — it read as
  a different, plainer header. Converted it to a client component with the same `isScrolled`
  state/CSS-transition approach as `Navigation.tsx` (padding/font-size shrink past 50px
  scroll), and reduced its base padding (`--spacing-lg` to `--spacing-sm`).
- **The before/after carousels were small relative to the page.** `.carouselContainer` had a
  hardcoded `max-width: 560px` and the two carousels (Before, then After) were stacked one
  above the other — on a ~1136px-wide section that left huge unused side margins and made the
  whole thing look like a small floating box rather than a deliberate layout. Restructured
  `BeforeAfterGallery.tsx`/`.module.css` so the two carousels sit **side by side** in a flex
  row on desktop (each now roughly 540px wide, using the section's full width) and stack
  vertically below 900px. Also added a hover lift + shadow on `.carouselContainer` (it had
  none before, unlike nearly every other card on the site) and bumped the slide transition
  from 0.5s to 0.6s for a slightly smoother feel.

Also added a small, deliberately understated developer credit line to `Footer.tsx`/
`Footer.module.css` — "Designed and Developed by KPS Studio", linking to the developer's
LinkedIn profile. Styled smaller and more muted (`rgba(255,255,255,0.4-0.55)`) than the
business's own copyright/Trusted Trader lines above it, so it reads as a quiet credit rather
than competing with them, brightening to `--gold` on hover like the other footer link.

`npx tsc --noEmit` and `npm run build` both pass. Verified visually via Playwright: the
Services last row now centers as a pair, the gallery's two carousels render side by side and
visibly larger on desktop, stack correctly on mobile (375px), the gallery nav header measures
67px tall once scrolled (down from its un-scrolled height, confirming the shrink works), and
there are no console errors or failed requests on either page.

## Final Polish: Certificate Hover, Contact Redesign, Services Grid, Spacing

A "final polish" prompt asked for 6 things: Certificate hover effects, a Contact redesign,
fixing the Services grid's unbalanced last row, reducing dead space between sections,
humanizing `README.md`, and creating an `AGENTS.md` change log. Two of these directly risked
fabricated content, so they were raised with the client before writing anything (see below).
The other four were implemented directly:

- **Certificate hover**: `Certificate.tsx` already had the 3 trust badges the prompt wanted to
  add (Trusted Trader Member / 5.0 from 16 Reviews / Backed by Police Scotland) from an earlier
  round — they just had no hover state. Added a lift + border/background highlight on
  `.trustBadge:hover` in `Certificate.module.css`, matching the rest of the site's card hover
  pattern. The certificate image itself already had a hover lift from the same earlier round.
- **Contact redesign**: restructured `Contact.tsx`'s JSX into two columns inside the existing
  stone-dark gradient card — a "Quick Contact" column (WhatsApp/Facebook/Instagram icons plus
  phone/location/membership info) on the left, the quote form on the right (stacks to
  form-then-contact-info on mobile, since mobile visitors are more likely ready to fill in the
  form directly). Kept all existing form logic, types (`ContactFormValues`, `BudgetOption`),
  and the `FaWhatsapp`/`FaFacebook` icon convention untouched — this was a layout/CSS change,
  not a rewrite. **Did not add** the prompt's "Response Time: 24-48 hours" line — that's the
  same unverified response-time claim that's been deliberately omitted twice already this
  project (see "SEO and Content Pass" above).
- **Instagram icon added**: the client confirmed `instagram.com/m.s_renovation` is real and
  current (this was raised while resolving the README/AGENTS.md question below), so a third
  icon button (`FaInstagram`) was added next to WhatsApp/Facebook in `Contact.tsx`'s Quick
  Contact column.
- **Services grid fix**: 5 cards in a 3-column `auto-fit` grid left an unbalanced last row (2
  cards, left-aligned, with empty space on the right — confirmed visually via screenshot before
  changing anything). Fixed by capping the column's max width and centering the grid
  (`justify-content: center` plus `minmax(300px, 320px)` instead of `minmax(300px, 1fr)`), so
  the incomplete last row centers itself. Note: capping at 360px first collapsed the layout to
  2 columns instead of 3 — the browser's `auto-fit` column-count calculation uses the *upper*
  bound of `minmax()`, not the lower one, so the cap has to stay low enough that 3 columns at
  that max width still fit the section's content width. 320px was confirmed visually to hold 3
  columns.
- **Spacing reduction**: `--spacing-2xl` (used as the `padding` for nearly every section —
  Services, WhyChooseUs, Certificate, Reviews, ServiceAreas, FAQ, Contact, BeforeAfterGallery)
  was 6rem, contributing real, measurable dead space across a one-page-style homepage with 8+
  stacked sections. Reduced to 4.5rem as a single token change in `globals.css`, rather than
  editing every section's padding individually (the prompt suggested per-file edits with
  spacing-token values that didn't match this project's actual token scale at all).

### README.md and AGENTS.md: fabrication flagged before writing

The prompt's suggested `README.md` rewrite included specific Lighthouse/SEO scores, Google
ranking positions, and a month-by-month ranking trajectory ("Position 15-20" in May trending to
"#1 by July-Aug") that were never measured or tracked anywhere in this project — and its
`AGENTS.md` template invented a full fictional session history (dates back to "May 2026",
specific prompt filenames never seen, a "Session 5: Review Integration" plan never discussed).
Both were flagged to the client directly rather than publishing invented metrics or a fake
project history. Resolved as:

- `README.md` was humanized in tone (first-person, conversational) but kept to only verified
  facts — no invented scores, rankings, or timelines.
- The prompt's suggested personal GitHub/LinkedIn attribution was dropped (unconfirmed); the
  client instead provided the business's real Facebook, Instagram, and Trusted Trader links,
  now in a "Links" section in `README.md`.
- Rather than creating a new `AGENTS.md` with a fabricated history, the client clarified that
  this file (`agent.md`) was always meant to be the project's actual change log, just misnamed —
  the standard convention is `AGENTS.md`, not `agent.md`. It was renamed (`git mv agent.md
  AGENTS.md`) and all references to the old filename updated (`README.md`, this file's own
  self-reference, `.gitignore`). Its content was not rewritten or fictionalized — it already is
  the real, accurate round-by-round history, which is what gets added to going forward.

`npx tsc --noEmit` and `npm run build` both pass. Verified visually via Playwright: the
Services grid renders as a centered 3-2 layout (no lopsided gap), the Certificate badge hover
states apply correctly, and the Contact two-column layout renders correctly on both desktop
(1280px) and mobile (375px, form-first order).

## Navbar Shrink-on-Scroll and Reviews Redesign

- **Navigation shrink**: `Navigation.module.css`'s `.headerScrolled` modifier (already applied
  once `window.scrollY > 50`, see `isScrolled` in `Navigation.tsx`) now also reduces the
  header's vertical padding and the logo/nav-link font-size slightly, with a CSS transition.
  A request for this used `transform: scale()` tied to a continuous scroll-position value, but
  that was not implemented as-is: the header is `position: sticky`, and `transform` does not
  change an element's reserved box size in the layout, so scaling it down would leave a visible
  gap between the visually-shrunk header and the content below it. Animating `padding` and
  `font-size` directly achieves the same "shrinks as you scroll" feel without that bug.
- **Reviews redesign**: `Reviews.module.css` was reworked to a dark gradient background with a
  glassmorphic carousel card (frosted/blurred translucent panel), gold star ratings with a
  text-shadow, a gradient budget badge, and a quote with a gold left border — kept the existing
  `Reviews.tsx` carousel logic and class names rather than rewriting the component, since the
  logic already met the brief (auto-rotate, manual arrows/dots, slide counter, Trusted Trader
  link). Added one new line of copy: "Real feedback from real projects. 5.0 star rated on
  Trusted Trader from 16 reviews." — built only from already-established facts.

## Kitchen Work Removal

M.S. Renovation no longer takes on kitchen work (a full kitchen project is too much for one
person to handle). Every customer-facing reference to kitchen fitting/installation/renovation
was removed or replaced:

- `Services.tsx`: deleted the "Kitchen Fitting" service card entirely (6 services to 5).
- `WhyChooseUs.tsx`: removed "and kitchen fitting" from the "Wide Range of Services" reason.
- `FAQ.tsx`: removed "kitchen fitting" from the "Do you work on full home renovation projects?"
  answer.
- `src/app/layout.tsx`: removed the "kitchen fitting Aberdeen" keyword and reworded the
  OpenGraph description (was "...bathrooms, kitchens, and more.", now "...bathrooms, repairs,
  and more.").
- `src/app/schema.json`: removed "Kitchen Fitting" from the LocalBusiness `knowsAbout` array.
- `BeforeAfterGallery.tsx`: the gallery had two real photos of completed kitchen jobs
  (`msrenovation-after-old-kitchen-01.jpg`, `msrenovation-after-open-plan-kitchen-living-01.jpg`).
  These were **not deleted from disk** (they are real client photos, deleting them is a more
  destructive and harder-to-reverse action than just not displaying them), but their imports
  and `AFTER_PHOTOS` entries were removed so they no longer render in the public carousel —
  showing completed kitchen work would visually suggest an active service the business has
  stopped offering, which is a stronger signal than any wording. The `afterDiningArea` photo's
  alt text ("...opening through to a fitted kitchen") was softened to "Freshly painted dining
  area" since a kitchen is incidentally visible in the background of that shot.
- Historical references in this file's "Business Information" and "Project Structure" sections
  were updated to note the discontinuation rather than deleted outright, so the change has a
  record.

Re-grepped the codebase for "kitchen" after these changes — the only remaining matches are in
code comments explaining why kitchen photos/imports were intentionally excluded, not in any
customer-facing text.

## Bug Fix: Swapped Before/After Photos

The client manually moved two photos between the `before/` and `after/` folders to correct
a misclassification, but `BeforeAfterGallery.tsx` has hardcoded static imports pointing at
exact file paths, so the move broke the build (module not found). Fixed by renaming the two
files to match their corrected folder (`msrenovation-before-living-room-sea-view-01.jpg` and
`msrenovation-after-old-kitchen-01.jpg`), updating the imports, moving each photo's entry into
the matching `BEFORE_PHOTOS`/`AFTER_PHOTOS` array, and rewriting their alt text to honestly
describe what's visible given the new classification (no claim of "renovated" for the kitchen
photo, since no renovation work is visible in it — alt text stays neutral on cabinetry/flooring
only).

## FAQ Animation and Navigation Update

- `FAQ.tsx`/`FAQ.module.css`: replaced the abrupt conditional mount/unmount of each answer with
  a CSS grid-template-rows transition (`0fr` to `1fr`, always rendered in the DOM) plus a fading
  opacity and a 45-degree icon rotation (the `+` rotates into an `×` instead of swapping
  characters), so opening/closing is smooth regardless of answer length.
- `Navigation.tsx`/`Navigation.module.css`: added nav links for each new homepage section as
  they were introduced (Why Choose Us, Areas, FAQ). Link gap was tightened (3rem to 1.75rem)
  and the mobile-menu breakpoint moved up (768px to 980px) so all 7 links fit on one line down
  to tablet/small-laptop widths.

## Second Prompt Pass: Conflicting Instructions Resolved With the Client

A later "build-safe" improvement prompt asked for several things already covered by the round
above (metadata, Services bullets, FAQ, WhyChooseUs) — those needed no changes. Two parts of it
directly conflicted with the client's own earlier decisions in the same conversation, so they
were raised as direct questions rather than silently overridden or silently re-applied:

- **Gallery pairing**: the prompt wanted a `BeforeAfterSlider` component with specific
  before/after image pairs and project titles ("Interior Painting Transformation"). The client
  had already explicitly ruled this out earlier (the photos cannot be honestly paired) in favor
  of two independent carousels. Client confirmed: **keep the existing carousels**, no paired
  slider was built.
- **Service Areas town list**: an earlier round had skipped this section because the town list
  in that prompt was unverified. This prompt supplied a specific list again (Aberdeen, Bridge of
  Don, Dyce, Cove Bay, Bucksburn, Danestone, Westhill, Portlethen, Kingswells, Aberdeenshire).
  Client confirmed this list **is** accurate this time, so `ServiceAreas.tsx` was built with it.

Also not adopted: restructuring components into nested `src/components/sections/<Name>/`
folders, since the existing flat `src/components/` layout already satisfies that same prompt's
own rule to "follow the existing structure," and restructuring working components for no
functional reason would be unnecessary churn.

## SEO Pass: Social Share Image, Structured Data, and Performance

A review of the whole project (already a strong foundation: canonicals, sitemap, robots,
metadata, structured data, descriptive alt text) surfaced a set of quick, high-value fixes,
applied directly:

- **Social share image (Open Graph / Twitter)**: the site had no preview image, so links
  shared on WhatsApp, Facebook, or X showed text only. A real finished-project photo (the
  open-plan kitchen and living room) is now the share image in `layout.tsx`, and is repeated on
  the home page and gallery `openGraph` (Next.js does not inherit `openGraph.images` into a
  child route that defines its own `openGraph`, so it has to be set on each). The Twitter card
  was switched from `summary` to `summary_large_image`. No logo exists yet, so a real photo was
  used rather than inventing a logo.
- **FAQ structured data now matches the page**: `schema.json`'s `FAQPage` previously listed
  only 3 questions, with wording that did not match the visible 8-question FAQ. Google wants
  these to match, so it was regenerated from the same 8 questions and answers in `FAQ.tsx`.
- **LocalBusiness structured data enriched**: added a business `image` (real project photo),
  added the real Instagram profile to `sameAs` (it was linked in `Contact.tsx` but missing from
  the schema), switched the type from generic `LocalBusiness` to the more specific
  `["GeneralContractor", "HousePainter"]`, and cleaned `priceRange` to the conventional
  "££".
- **Opening hours added (from client-supplied data, not invented)**: the client provided real
  hours (Monday to Friday 08:00 to 18:00, Saturday 09:00 to 17:00, Sunday closed), added as
  `openingHoursSpecification`. Hours were deliberately left out until the client supplied them,
  rather than guessed (the same honesty rule applied to insurance status and response times
  elsewhere in this project).
- **Navigation performance**: `Navigation.tsx` previously measured every homepage section's
  `offsetTop` on every scroll event, forcing a layout recalculation each frame. Replaced with
  an `IntersectionObserver` scroll-spy for the active section (a thin band roughly a third down
  the viewport), plus a cheap passive scroll listener only for the darken-past-50px state. Also
  added Escape-to-close for the mobile menu.
- **Shared carousel logic**: the Reviews carousel and the gallery Before/After carousels had
  near-identical slide/timer logic duplicated. Extracted into `src/utils/useCarousel.ts`
  (current slide, go to slide, next, previous, and an auto-rotate timer that resets on any
  slide change). `Reviews.tsx` and `BeforeAfterGallery.tsx` now both use it. The auto-advance
  uses a functional state update, removing the stale-closure/exhaustive-deps issue the
  originals had.
- **Contact WhatsApp reliability**: the quote form opened WhatsApp via
  `window.open(..., '_blank')`, which some mobile browsers block silently. Switched to
  `window.location.href` so the handoff is not blocked.

Deliberately not done: reformatting the codebase's quote-style inconsistency (purely cosmetic,
would produce a large noisy diff for no functional gain).

## Dedicated Service Pages, Clickable Cards, and Services Dropdown

The single biggest remaining SEO opportunity was that the whole site was only two pages, so it
could realistically rank for only one or two phrases. Five dedicated service pages were added,
each targeting one service-plus-location search:

- `/painting-and-decorating-aberdeen`
- `/plastering-aberdeen`
- `/carpentry-and-joinery-aberdeen`
- `/bathroom-renovation-aberdeen`
- `/property-repairs-aberdeen`

Structure and reuse:

- **`src/data/services.ts`** is the single source of truth for the service-page links (label,
  matching homepage card title, href). The nav dropdown, homepage cards, footer, and sitemap
  all read from it, so they cannot drift apart.
- **`src/components/ServicePage.tsx`** (plus `ServicePage.module.css`) is a reusable layout
  every service route renders, so each route file (`src/app/<slug>/page.tsx`) only supplies its
  own words, metadata, and a small `Service` structured-data block. It uses the simplified
  `GalleryNavigation` (the homepage anchor menu would not resolve on a separate route). The
  shared Footer comes from the root layout.
- **`src/components/ServiceFeatureGrid.tsx`** (plus its CSS) renders the "what's included"
  list as a grid of cards that lift, gain a stone border and shadow, show a light sweep on
  hover, and fade in with staggered timing, matching the homepage service cards.
- **Page content** is roughly 350 to 450 words each (focused, but not thin enough for Google to
  treat as low-value): a larger lead paragraph, a normal intro, the feature-card grid, a
  quality/process paragraph, a highlighted free-quote promise box (gold left accent, nudges on
  hover), and the covered areas as rounded chips that lift on hover. A star rating badge scales
  in in the header. All copy is built only from established facts (Trusted Trader, 5.0 from 16
  reviews, free no-obligation quotes, the confirmed areas). Each page uses a relevant real
  project photo as its share image.
- **Clickable homepage cards**: `Services.tsx` cards now link to their page via a "stretched
  link" (a real "Learn more" link whose `::after` covers the whole card), so the card keeps its
  scroll-animation ref and hover styles while being fully clickable and keyboard-accessible.
- **"Learn more" pinned to the bottom**: cards were made a flex column with the CTA at
  `margin-top: auto`, so "Learn more" sits in the same place on every card regardless of how
  much text is above it (cards in a row already stretch to equal height).
- **Services dropdown in the header**: the plain "Services" anchor link was replaced with a
  dropdown listing all five pages. It is driven entirely by click/tap state (not CSS hover),
  and closes on a second click, an outside click, Escape, choosing a link, or toggling the
  mobile menu. The arrow flips when open. An earlier version leaned on CSS `:hover`/
  `:focus-within`, which fought the click state: after clicking, the button kept focus so
  `:focus-within` held the menu open and clicking again appeared to do nothing, and on mobile
  it would not close. The state-driven version fixes both.
- **Footer**: a row of links to all five service pages was added above the copyright lines (on
  every page, so the service pages cross-link even though their simplified header has no
  dropdown).
- **Sitemap**: `sitemap.ts` now generates entries for all five service pages from
  `SERVICE_PAGES`.

Note: the Services dropdown appears on the homepage header only; the service and gallery pages
use the simpler `GalleryNavigation`, with the footer links providing cross-navigation. This can
be switched to show the full dropdown on every page if wanted.

After deploy: submit the sitemap in Google Search Console and request indexing for the five new
pages.

## Next Steps
1. ~~Drop real before/after project photos into `public/photos/` and wire them into the
   gallery~~ — Done; see "Photo Organization" above (shown as two independent Before/After
   carousels, not tied to named projects).
2. Deploy to Vercel, then submit the sitemap and request indexing for the 5 new service pages
   in Google Search Console
3. **Needs manual review/client input**:
   - If the client can identify which before photos match which after photos (and what each
     job actually was), `BeforeAfterGallery.tsx` can be upgraded to real paired case studies
     with honest captions.
   - Confirm whether the business is insured, what its actual emergency-response time is (if
     any), how long it has been trading, and which specific towns/areas it serves, so that
     information can be added honestly (currently omitted as unverified — see "SEO and
     Content Pass" above).
   - Consider setting up a standalone ESLint config so `npm run lint` is runnable again.

## Notes
- Certificate file is `public/certificate.jpg` (.jpg, not .jpeg)
- Font ampersand issue: Avoid using "&" character - use "and" text instead
- Real project photos now live under `public/images/projects/msrenovation/` (see "Photo
  Organization" above) — `public/photos/` is empty again
- All links and contact information verified from Trusted Trader listing
- Mobile-first responsive approach required
