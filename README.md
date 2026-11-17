# GrowForge Website

A React + TypeScript website for GrowForge, an independent digital studio.

## Design direction

Premium neon-violet glassmorphism built on the official GrowForge logo — **Build what matters.**

- **Palette** (Tailwind tokens in `src/index.css`, e.g. `bg-gf-ink`, `text-gf-muted`): midnight `#05030B`, deep purple `#10051F`, dark violet `#19082F`, electric `#7800FF`, neon violet `#A020F0`, magenta accent `#E040FB`, lavender `#C5A3FF`, white `#F8F5FF`, muted `#AAA1BC`.
- **Type**: Sora (display) + Manrope (body), loaded in `index.html`.
- **Reusable classes** (`@layer components` in `src/index.css`): `glass`, `glass-soft`, `glass-strong`, `glass-card` (+ `glass-card--lift`), `border-gradient`, `btn` + `btn-primary` / `btn-glass` / `btn-ghost`, `chip`, `filter-pill`, `icon-tile`, `field`, `eyebrow`, `text-gradient`, `divider-glow`.
- **Backgrounds**: `<SiteBackground />` (global fixed layers: radial light, faint grid, drifting orbs) and `<SectionGlow />` for local section lighting — both in `src/components/layout/Background.tsx`.
- **Motion**: Framer Motion reveals/staggers (`ScrollReveal`), all honouring `prefers-reduced-motion`.

## Brand assets

`public/brand/growforge-neon-horizontal.png` is the official supplied logo (kept untouched). Display derivatives in the same folder are crops of it, with the black canvas converted to transparency so the glow sits on any dark surface:

| File | Use |
| --- | --- |
| `growforge-logo-header.{webp,png}` | Navbar — emblem + wordmark |
| `growforge-logo-full.{webp,png}` | Footer — emblem + wordmark + tagline |
| `growforge-icon.{webp,png}` | GF emblem only (404 page, hero) |
| `growforge-og.png` | Social share image |
| `/favicon-32.png`, `/favicon-64.png`, `/apple-touch-icon.png` | Browser / home-screen icons |

Render the logo through `<GrowForgeLogo variant="header | full | icon" />` (`src/components/ui/Logo.tsx`). Only place it on dark backgrounds.

## Development

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev
```

## Type checking and production build

```bash
npm run typecheck
npm run build
```

The build command runs TypeScript checking before creating the production bundle. The `dist` directory is generated locally and should not be treated as source.

## Main stack

- React and TypeScript
- Vite
- Tailwind CSS v4
- Framer Motion
- React Router
- Lucide React
