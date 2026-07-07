# arka6fx.com — AGENTS.md

Personal portfolio site for Arka Garai. Built with Next.js + Cloudflare.

---

## Stack

| Layer      | Choice                        |
| ---------- | ----------------------------- |
| Framework  | Next.js (App Router)          |
| Language   | TypeScript                    |
| Styling    | Tailwind CSS v4               |
| Hosting    | Cloudflare (OpenNext)         |
| Package    | pnpm                          |
| Lint/Fmt   | ESLint + Prettier             |

---

## Commands

```bash
pnpm dev               # start dev server
pnpm build             # production build
pnpm lint              # run ESLint
pnpm format            # format with Prettier
pnpm type-check        # tsc --noEmit
pnpm preview           # OpenNext Cloudflare preview
pnpm deploy            # build + deploy to Cloudflare
pnpm cf-typegen        # regenerate Cloudflare env types
```

No test suite exists.

---

## Route structure (`src/app/`)

| Route        | Description                                      |
| ------------ | ------------------------------------------------ |
| `/`          | Homepage — profile, projects, blog, contact      |
| `/projects`  | Full projects list                               |
| `/blog`      | Blog list — posts link to external Notion pages  |
| `/blog/:slug`| Individual blog post                             |
| `/work`      | Work experience (coming soon)                    |
| `/contact`   | Contact links with copy-to-clipboard email       |

---

## Architecture

- **Data layer** (`src/data/`): Static arrays. Add content by editing these files — no CMS or database.
- **Components** (`src/components/`): Shared UI
- **Theming**: CSS variables in `globals.css`, bridged via `@theme inline`. Use semantic tokens (`text-foreground`, `text-secondary`, `text-accent`, `bg-surface`, `border-divider`). Accent: `#99d98c` (green).
- **Fonts**: 4 Google Fonts as CSS vars — `--font-sans-ui` (Manrope), `--font-display-ui` (Fraunces), `--font-mono-ui` (JetBrains Mono), `--font-signature-ui` (Style Script). Tailwind classes: `font-sans`, `font-display`, `font-mono`, `font-signature`.
- **Animations**: `content-reveal` (staggered fade-in), `scroll-reveal` (IntersectionObserver), `route-fade-in` (page transitions). All respect `prefers-reduced-motion`.
- **SEO**: Per-page metadata exports; root layout uses `"%s | Arka Garai"` title template.
- **Images**: External images need `remotePatterns` in `next.config.ts` allowlist.

---

## Code style

- One-liners on non-obvious logic only. No docstrings.
- Prefer semantic color tokens over raw Tailwind colors.
- Follow existing patterns in neighboring files.
- Conventional commits: `feat:`, `fix:`, `refactor:`, `style:`, `chore:`.
- Keep it simple — this is a personal portfolio, not a monolith.

---

## Cloudflare Workers note

This project deploys via OpenNext + Cloudflare. The Worker is auto-generated at `.open-next/worker.js`. Wrangler config is in `wrangler.jsonc`. No direct Worker code editing needed.
