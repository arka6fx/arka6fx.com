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
| Package    | bun                            |
| Lint/Fmt   | ESLint + Prettier             |

---

## Commands

```bash
bun dev                # start dev server
bun build              # production build
bun lint               # run ESLint
bun format             # format with Prettier
bun type-check         # tsc --noEmit
bun preview            # OpenNext Cloudflare preview
bun deploy             # build + deploy to Cloudflare
bun cf-typegen         # regenerate Cloudflare env types
```

No test suite exists.

---

## Route structure (`src/app/`)

| Route        | Description                                    |
| ------------ | ---------------------------------------------- |
| `/`          | Homepage — header, blog links, contact links   |
| `/blog`      | Blog list                                      |
| `/blog/:slug`| Individual blog post                           |
| `/contact`   | Contact links with copy-to-clipboard email     |

---

## Architecture

- **Data layer** (`src/lib/`): Inline blog post data in `posts-data.ts`. Add content by editing this file — no CMS or database.
- **Components** (`src/components/`): Shared UI
- **Theming**: Tailwind CSS v4 with `@theme inline` in `globals.css`. Background: `#111`, foreground: `#d1d5db`, accent: `#ff6b35` (orange).
- **Font**: JetBrains Mono via `next/font/google` — applied globally via `font-mono` on `<body>`. No other fonts.
- **Animations**: `animate-fade-in-up` and `animate-fade-in`. Respect `prefers-reduced-motion`.
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
