# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
pnpm dev        # start dev server
pnpm build      # production build
pnpm lint       # run ESLint
```

No test suite exists in this project.

## Architecture

Personal portfolio site. Next.js 16 App Router with TypeScript, Tailwind CSS v4, and React 19.

**Route structure** (`src/app/`):

- `/` — homepage with profile, GitHub activity chart, projects preview, blogs preview, contact links
- `/projects` — full projects list
- `/blog` — full blog list (posts link out to external Notion pages)
- `/work` — work experience (currently "coming soon")
- `/contact` — contact links with copy-to-clipboard email; this page is `"use client"`, so page-level metadata lives in `src/app/contact/layout.tsx`

**Data layer** (`src/data/`): Static arrays in `blogs.ts` and `projects.ts`. Adding content means editing these files — there is no CMS or database.

**Components** (`src/components/`): Shared UI — `Container` (max-width wrapper), `Navigation`, `Footer`, `ProfileImage`, `ProjectCard`, `BlogCard`, `CalendarDate`.

**Theming**: CSS variables are defined in `globals.css` and bridged to Tailwind via `@theme inline`. Use semantic color tokens (`text-foreground`, `text-secondary`, `text-accent`, `bg-surface`, `border-divider`) rather than raw Tailwind colors. The accent color is `#99d98c` (green).

**Fonts**: Four Google Fonts loaded in `layout.tsx` as CSS variables — `--font-sans-ui` (Manrope), `--font-display-ui` (Fraunces), `--font-mono-ui` (JetBrains Mono), `--font-signature-ui` (Style Script). Reference them via `font-sans`, `font-display`, `font-mono`, `font-signature` Tailwind classes.

**Animations**: Two patterns defined in `globals.css`:

- `content-reveal` + `content-item` — staggered fade-in on page load; add `animationDelay` style prop to control order
- `scroll-reveal` + `is-visible` — triggered on scroll via IntersectionObserver
- `route-fade-in` — applied in `template.tsx` for page transitions

All animations respect `prefers-reduced-motion`.

**SEO**: Metadata lives in each page's `metadata` export (or a co-located `layout.tsx` for client pages). The root layout uses a title template `"%s | Arka Garai"`. Sitemap and robots are auto-generated via `src/app/sitemap.ts` and `src/app/robots.ts`.

**Images**: External images require allowlisting in `next.config.ts` under `remotePatterns`. Currently only `ghchart.rshah.org` is allowed.
