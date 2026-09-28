# Prompt Log — AI-Assisted Development Session

This is the literal, unedited sequence of prompts used to build this project in a
single conversation with Claude. Each prompt built on the output of the previous
one; nothing here was regenerated or cherry-picked after the fact.

---

**1. Project setup**
> You are a senior frontend engineer. Set up a Next.js project with TailwindCSS
> and TypeScript for building a pixel-perfect Airbnb listing clone. Configure
> ESLint + Prettier for code quality. Provide the exact commands and initial
> file structure.

**2. Global layout**
> Generate the global layout for the Airbnb clone. Include:
> - Header with logo, search bar (Anywhere, Anytime, Add guests), and Become a
>   Host button
> - Footer with links
> - Use TailwindCSS for spacing, typography, and colors
> Match Airbnb's design system exactly.

**3. Listing page structure**
> Create the main listing page component in Next.js. Structure it with:
> - Hero section with property title, share/save buttons
> - Photo grid with "Show all photos" button
> - Property details (guests, bedrooms, bathrooms)
> - Reviews section
> - Amenities section
> - Location map placeholder
> Ensure semantic HTML and accessibility.

**4. Photo tour overlay**
> Implement a full-screen photo tour overlay. Requirements:
> - Opens when "Show all photos" is clicked
> - Grid of all photos with scroll
> - Close button (ESC key support)
> - Smooth fade-in/out animation

**5. Lightbox**
> Build a lightbox component for single-photo viewing:
> - Opens when any photo is clicked
> - Prev/Next arrows
> - Keyboard navigation (←/→)
> - Animated transitions between photos
> - Accessible focus management

**6. Reviews section**
> Implement the reviews section:
> - Overall rating + category breakdown (Cleanliness, Accuracy, etc.)
> - Individual reviews with avatar, name, date, and text
> - "Show more" expansion
> Match typography and spacing exactly.

**7. Amenities grid**
> Create the amenities grid:
> - Icons + labels (Wifi, Pool, Hot tub, etc.)
> - Responsive grid layout
> - Accessibility: screen reader labels

**8. Reservation widget**
> Build the reservation widget:
> - Price per stay
> - Date picker (check-in/check-out)
> - Guest selector
> - Reserve button with hover animation
> - Free cancellation notice
> Ensure keyboard navigation works.

**9. Accessibility audit**
> Audit the Airbnb clone for accessibility:
> - Add aria-labels, roles, alt text
> - Ensure keyboard navigation works for overlays
> - Add hover/focus animations matching Airbnb
> Provide updated code snippets.

**10. Architecture diagram (first pass)**
> Generate a high-level architecture diagram for a production-scale vacation
> rental marketplace (Airbnb-like). Show:
> - Frontend (Next.js, CDN)
> - Backend (Node.js/Express, API Gateway)
> - Database (Postgres/MySQL)
> - Object storage (S3/Blob for photos)
> - Search service (ElasticSearch)
> - Deployment (Vercel/Kubernetes)
> Output in Mermaid or text format that I can paste into Lucid.app.

**11. Reference screenshots + consolidation request**
> [Uploaded a PDF of screenshots from https://airbnb-clone-umber-two.vercel.app —
> a real listing page walkthrough covering hero, photos, amenities, reviews,
> location, host section, and nearby listings.]
> now give complete code of clone website and also make sure the website look
> like this

**12. Full take-home assignment brief**
> [Pasted the complete take-home task description for an "Airbnb-Clone App"
> assignment: pixel-perfect clone of the same reference URL, three views
> (Listing Page, Photo Tour, Lightbox), desktop-only, free tech stack choice,
> required deliverables of zipped code + architecture diagram +
> sub-agent/skill configs + this prompt log.]

---

## What happened after prompt 12
- Attempted `web_fetch` on the reference URL directly — blocked by the site's
  `robots.txt` (`ROBOTS_DISALLOWED`). Continued working from the screenshots
  already provided in prompt 11 instead of attempting to bypass that.
- Refined visual fidelity details visible in the screenshots that hadn't been
  built yet: the Reserve button's three-stop gradient (`#E61E4D → #E31C5F →
  #D70466`), the sticky secondary tab nav (Photos/Amenities/Reviews/Location),
  the guest-favorite laurel badge, the inline two-month availability calendar,
  the review tag pill row, the full host section with co-hosts, "Things to
  know," and the "More stays nearby" carousel.
- Deliberately kept mock/placeholder content (host name, reviewer names,
  photos) rather than copying the reference's real host identity and real
  guests' names verbatim — matched structure/layout/behavior exactly instead.
- Generated the architecture diagram as an actual rendered image (PNG/PDF via
  Graphviz) rather than leaving it as Mermaid source, since the deliverable
  requires an image/PDF file.
- Wrote the three sub-agent configs in `.claude/agents/` and the project-level
  `CLAUDE.md` reflecting the conventions actually established over the course
  of the build (focus-trap/inert-background hooks, icon `aria-hidden` rules,
  focus-ring conventions, file structure).
