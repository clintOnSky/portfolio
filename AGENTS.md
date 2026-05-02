# Portfolio — Next.js single-page site

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Stack

- **Next.js 16** (App Router) + **React 19**
- **yarn** (lockfile present, `.yarn/` tracked via Yarn 4)
- **Tailwind CSS v4** via `@tailwindcss/postcss` — but styles are plain CSS in `globals.css`, not Tailwind utility classes
- **framer-motion** for scroll-triggered animations (`src/components/FadeIn.tsx`)
- **TypeScript strict**, ESLint flat config (`eslint.config.mjs`)

## Commands

```
yarn dev      # dev server on :3000
yarn build    # production build
yarn start    # serve production build
yarn lint     # eslint only (no typecheck script)
```

No test framework is configured. Do not invent one.

## Architecture

- Single page. All content lives in `src/app/page.tsx` (~530 lines).
- Layout at `src/app/layout.tsx` — `<html className="dark">` is hardcoded.
- Path alias: `@/*` → `src/*`
- Static assets in `public/`: `profile.jpeg`, `totum.jpeg`, `belarush.jpeg`, `supplya.jpeg`, `Clinton Onaiwu Resume.pdf`
- Root-level `clinton_onaiwu_portfolio.html` is a standalone static export (separate artifact, not used by Next.js).

## Styling

- All styles are vanilla CSS in `src/app/globals.css` using CSS custom properties (`--bg`, `--accent`, etc.).
- Tailwind v4 is installed but not actively used. Do not convert CSS to Tailwind utilities unless explicitly asked.
- Dark mode only — no light theme toggle.

## Gotchas

- `eslint` replaces `next lint` — the config is flat config format, not legacy `.eslintrc`.
- No separate `tsc` or typecheck script. Run `npx tsc --noEmit` manually if needed.
- The site is a static portfolio — no API routes, no database, no auth.

