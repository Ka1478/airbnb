---
name: design-tokens
description: Use whenever writing or reviewing Tailwind classNames in this project — for choosing a color, spacing value, shadow, or border radius. Encodes the small, fixed set of design tokens this clone uses so new code reaches for an existing token instead of introducing an arbitrary value that then has to be caught in review.
---

# Design tokens for the Airbnb listing clone

This project intentionally uses a **small, fixed** token set — not the full
Tailwind default palette — because the reference design uses a small, fixed
set of colors, spacing values, and shadows. Introducing more than what's below
is itself a fidelity bug, since it means the clone has *more* visual variety
than the thing it's cloning.

## Color
| Token | Value | Use for |
|---|---|---|
| `text-charcoal` / `bg-charcoal` | `#222222` | All primary text, and any solid dark surface (Lightbox background uses `bg-black` instead — see exception below) |
| `bg-airbnb` | `#FF385C` | Flat brand-red fills (badges, small accents) |
| `bg-airbnb-dark` | `#E31C5F` | Hover state for flat `bg-airbnb` fills |
| Reserve button gradient | `bg-gradient-to-r from-[#E61E4D] via-[#E31C5F] to-[#D70466]` | **Only** the primary Reserve/booking CTA. This is a specific three-stop gradient matching the reference exactly — do not simplify to a two-color gradient or flat fill, and do not reuse it on secondary buttons. |
| Tailwind `gray-*` scale | as-is | Borders (`gray-200`/`gray-300`), secondary text (`gray-500`/`gray-600`), disabled states |

**Exception**: the Lightbox overlay background is `bg-black`, not `bg-charcoal`
— it needs true black for the photo-viewing context, matching the reference's
darkened viewer chrome.

## Spacing
Use Tailwind's default scale (4px increments) exclusively. If a value doesn't
fit the scale, that's a signal to re-check the reference measurement rather
than reach for an arbitrary value like `p-[13px]`. The two spacing rhythms
that repeat throughout this project:
- Section vertical rhythm: `py-8` with `border-b border-gray-200` between
  major listing-page sections (Property Details, Highlights, Amenities,
  Reviews, Location, Host, Things to Know all follow this).
- Card internal padding: `p-6` for the booking card and any similar bordered
  card surface.

## Shadow
`shadow-card` (`0 6px 16px rgba(0,0,0,0.12)`) is the only custom shadow this
project defines. Use it for: the booking card, the photo-tour "Show all
photos" button, and any popover (date picker, guest selector). Do not use
Tailwind's default `shadow-md`/`shadow-lg`/`shadow-xl` scale — those are
visibly different softness/spread from what the reference uses.

## Border radius
Two sizes only:
- `rounded-lg` — buttons, input fields, small cards
- `rounded-xl` / `rounded-2xl` — photo containers, the booking card, popovers

## Typography
- Section headings: `text-xl font-semibold text-charcoal` — used identically
  across every major section (`Amenities`, `Reviews`, `Location`, `Meet your
  host`, `Things to know`). Don't vary heading weight/size per section.
- Body text: `text-charcoal` at the surrounding context's size (usually
  inherited, not set explicitly) with `leading-relaxed` for multi-line
  paragraphs (the description, review text).
- Secondary/meta text (dates, review counts, helper text): `text-sm
  text-gray-500`.

## Focus rings (see CLAUDE.md for the full rule; token values here)
- Default: `focus-visible:ring-charcoal`
- On dark backgrounds (Lightbox controls): `focus-visible:ring-white`
- On the gradient Reserve button: `focus-visible:ring-charcoal
  focus-visible:ring-offset-2` (offset needed so the ring is visible against
  the colored fill, not swallowed by it)
