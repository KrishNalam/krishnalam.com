# Krish Nalam — Portfolio (v4)

A clean, minimalist, single-page portfolio with a Swiss / editorial aesthetic.
Built to be readable at a glance for recruiters and professors, responsive from
phones to ultrawide monitors and TVs, and easy to maintain.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (CSS-first, design tokens in `app/globals.css`)
- **Framer Motion** — scroll reveals, staggered hero, theme-toggle micro-interactions
- **lucide-react** + **react-icons** — iconography
- Fonts via `next/font`: Space Grotesk (display), Inter (body), JetBrains Mono (labels)

## Sections

1. **Hero** — animated intro, availability badge, social links, skills marquee
2. **Experience** — vertical timeline (4 internships)
3. **Projects** — alternating editorial rows with award badges
4. **About** — editorial bento: bio, education, stats, full tech stack
5. **Contact** — large CTA, email, socials, footer

## Architecture

- `data/config.ts` — **single source of truth** for all content. Edit here.
- `components/` — `Nav`, `ThemeProvider`/`ThemeToggle`, `Reveal`, `Section`, `ScrollProgress`
- `components/sections/` — one file per page section
- `app/globals.css` — design tokens (`--bg`, `--ink`, `--accent`, …) mapped to
  Tailwind via `@theme inline`. Dark is the default (`:root`); `[data-theme='light']`
  overrides. A no-flash inline script in `app/layout.tsx` sets the theme before paint.

### Theming

Theme is stored in `localStorage` and reflected on `<html data-theme>`, which is the
source of truth read via `useSyncExternalStore` (no hydration flash, no setState-in-effect).

### Accessibility & responsiveness

- Fluid type with `clamp()`; layout capped at `--container-page` (90rem) so it never
  stretches on ultrawide/TV.
- `prefers-reduced-motion` disables animations.
- Scroll-spy nav, focus-visible outlines, semantic landmarks.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # eslint
```
