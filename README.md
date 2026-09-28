# Airbnb Listing Clone — Take-Home Submission

Desktop-only Next.js/TypeScript/Tailwind clone of the reference listing page,
its full-screen photo tour, and its single-photo lightbox.

## Setup

```bash
npm install
npm run dev
```

Visit http://localhost:3000 — it redirects to the demo listing at `/listing/1`.

## What's included in this submission

- `src/` — the full application (see structure below)
- `.claude/agents/` — three sub-agent configs used during development:
  `pixel-fidelity-reviewer`, `accessibility-auditor`, `component-scaffolder`
- `CLAUDE.md` — project conventions read automatically by Claude Code
- `PROMPTS.md` — the literal sequence of prompts used to build this, in order
- `../architecture-diagram.png` / `.pdf` — production-scale architecture diagram
  (one level up from this folder, alongside the zip's other top-level contents)

## Project structure

```
src/
  app/
    layout.tsx                 # root layout (Navbar + Footer wrapper)
    page.tsx                   # redirects to the demo listing
    listing/[id]/page.tsx      # the full listing detail page
  components/
    layout/                    # Navbar, Footer
    listing/                   # every listing-page component, incl. PhotoTourOverlay, Lightbox
  hooks/                       # useFocusTrap, useInertBackground, useActiveSection
  lib/                         # cn() helper, pricing math
  types/                       # shared TypeScript interfaces
  data/                        # mock listing data — swap this for a real API
```

## Design decisions worth flagging to a reviewer

- **Content is original, not scraped.** The reference page shows a real host's
  business identity, real guests' names and reviews, and real property photos.
  This clone matches that reference's *layout, spacing, typography, color
  system, iconography, and interaction/motion behavior* exactly, but uses
  placeholder content (different host name, invented reviews, stock photos)
  rather than reproducing another business's real identity and real
  customers' data verbatim.
- **Desktop only**, per the assignment scope — no mobile breakpoints were added.
- **No backend.** All data lives in `src/data/mock-listings.ts`, per the
  assignment's note that this is an acceptable simplification.
- **Accessibility is enforced structurally**, not bolted on: both full-screen
  overlays (Photo Tour, Lightbox) share `useFocusTrap` + `useInertBackground`
  hooks rather than each re-implementing focus management independently.

## Known gaps

- The location section uses a placeholder map div, not a real Mapbox/Google
  Maps embed.
- "More stays nearby" cards link to `#` — there's only one listing route in
  this project.
- `robots.txt` on the reference URL blocked automated fetching, so fine-grained
  values (exact hex colors, computed spacing) were derived from the provided
  screenshots rather than the live page's computed styles.
