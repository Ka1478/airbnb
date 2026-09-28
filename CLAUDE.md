# Airbnb Clone — Project Conventions

This file is read automatically by Claude Code at the start of a session in this repo.

## Stack
Next.js 14 (App Router) + TypeScript + Tailwind CSS. No backend — all listing data is
mocked in `src/data/mock-listings.ts`.

## Structure
- `src/app/` — routes (App Router). Listing detail lives at `src/app/listing/[id]/page.tsx`.
- `src/components/layout/` — site chrome (Navbar, Footer).
- `src/components/listing/` — everything specific to the listing detail page.
- `src/lib/` — pure helper functions (`cn`, pricing math). No React here.
- `src/hooks/` — shared React hooks (focus trap, scroll spy, inert background).
- `src/types/` — shared TypeScript interfaces.

## Design tokens (do not invent new ones ad hoc — see .claude/skills/design-tokens)
- Primary red: `bg-airbnb` (#FF385C), Reserve CTA uses the gradient
  `bg-gradient-to-r from-[#E61E4D] via-[#E31C5F] to-[#D70466]` — match this exactly,
  don't fall back to flat `bg-airbnb` on new CTAs meant to mirror the reference.
- Text: `text-charcoal` (#222222) is the default body/heading color, not `text-black`.
- Every interactive element needs `focus-visible:outline-none focus-visible:ring-2
  focus-visible:ring-charcoal` (or `ring-white` on dark backgrounds like the lightbox).

## Conventions
- One component per file, default export, PascalCase filename matching the export.
- Client components (`'use client'`) only where state/effects/browser APIs are needed —
  keep everything else as a server component.
- Full-screen overlays (photo tour, lightbox) MUST use `useFocusTrap` and
  `useInertBackground` from `src/hooks/` — don't hand-roll a new trap per overlay.
- Icons: `lucide-react` only, `aria-hidden="true"` on every icon that sits next to a
  text label; a real `aria-label` on the control when the icon is the only label.
- Never introduce a new dependency for something two lines of Tailwind/vanilla JS can do.

## When matching the reference site
The reference (https://airbnb-clone-umber-two.vercel.app) is the source of truth for
layout, spacing, and motion — but its literal content (host name, reviewer names, real
photos) must NOT be copied verbatim; use structurally-equivalent mock data instead.
See `.claude/agents/pixel-fidelity-reviewer.md` for the review process before marking
any section "done."
