# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Personal portfolio for Swoyam Suwal (Django developer), built with Nuxt 4 and deployed as a fully static site to GitHub Pages. Raw career notes this content was written from live in `notes/`, which is gitignored and must never be published.

## Commands

Package manager is **pnpm** (version pinned in `package.json` → `packageManager`).

```bash
pnpm install                     # postinstall runs `nuxt prepare`
pnpm dev                         # http://localhost:3000
pnpm generate                    # static build → .output/public (what CI deploys)
pnpm preview                     # serve .output/public
NUXT_APP_BASE_URL=/repo-name/ pnpm generate   # reproduce a GitHub Pages project-repo build
```

No linter or test suite is configured. `pnpm generate` is the verification step: prerendering uses `failOnError: true`, so a broken page or link fails the build.

`pnpm-workspace.yaml` holds `allowBuilds: { esbuild: true }`. pnpm blocks dependency install scripts by default, and Nuxt needs esbuild's. CI runs `pnpm install --frozen-lockfile`, so `pnpm-lock.yaml` must be committed and kept in sync with `package.json`.

## Static hosting constraints

- `nitro.preset: 'github_pages'`, `ssr: true`. Pages are prerendered by crawling links from `/` and `/projects`. A new page is only generated if something links to it, or it is added to `nitro.prerender.routes` in `nuxt.config.ts`. No server routes, API endpoints or runtime server features: GitHub Pages serves files only. Contact uses `mailto:`.
- **Base URL:** `.github/workflows/deploy.yml` sets `NUXT_APP_BASE_URL` (`/` for a `<user>.github.io` repo, `/<repo>/` otherwise). `NuxtLink` handles it automatically, but raw `href`/`src` pointing into `public/` must go through `useAsset()` (`app/composables/useAsset.ts`), which prefixes the base. The favicon link in `nuxt.config.ts` builds its URL from `baseURL` for the same reason.
- `buildAssetsDir` is `/_assets/`.

## Architecture

**All content lives in `app/data/*.ts`, typed by `app/types/portfolio.ts`.** Components only render data, so content changes should not require touching components. `app/pages/index.vue` is just an ordered list of `sections/*Section.vue` components. Each section's `SectionHeader` has a hardcoded `index` ("01", "02"…), so reordering sections means renumbering them.

Cross-file links between data:
- `experience[].projects` holds project slugs, resolved with `projectBySlug()` from `data/projects.ts`. Each project gets a page at `/projects/[slug]`. An unknown slug throws a 404 (`createError`).
- `companyId` (on experience, projects and journey milestones) is a key of `companies` in `data/companies.ts`, which holds the display names, logo paths (`public/images/logos/`) and website URLs. `CompanyLogo` renders a logo on a white tile. Its `link` prop wraps it in an `<a>`; leave `link` off inside elements that are already links or buttons (project cards, experience tabs).
- `certificates[].featured` splits certificates into large cards and the filterable "Courses & learning badges" grid in `CredentialsSection`.

**Placeholder convention:** any data string containing the literal `(this is demo)` is placeholder data. Render data strings with `<DText :text="…" />`, which turns the marker into an amber "this is demo" badge. In attributes, `<title>`/meta, or anywhere a badge can't render, use `stripDemo()` (and `isDemo()`) from `composables/useAsset.ts`. `profile.showDemoNotice` toggles the dismissible banner. List every remaining placeholder with `grep -rn "this is demo" app/data`.

**Components** are registered with `pathPrefix: false`, so component names must be unique across `components/*` subfolders (`<HeroSection>`, not `<SectionsHeroSection>`).

**Styling:** Tailwind CSS v4 (via `@tailwindcss/vite`) handles layout: `app/assets/css/tailwind.css` is the CSS entry, defines the fluid `.site-container` (full width, capped at 1600px), and imports `main.css`. Responsive grids and column counts are Tailwind classes in templates (`sm:`/`lg:`/`2xl:`); don't use Tailwind's own `container` class. Design tokens (colors, type scale, radii) and shared classes (`.btn`, `.chip`, `.card`, `.container`, `.section`, `.demo`) are in `app/assets/css/main.css`. Components use scoped styles. Colors come from CSS variables only, defined for both `[data-theme='dark']` and `[data-theme='light']`.
- Gotcha: Vue applies a parent's scoped styles to a child component's **root element**. `SectionHeader`'s root is a `<header>`, so an element selector like `header { … }` in a section component restyles the section heading. Use class selectors in section components.

**Theme and animation bootstrap:** an inline script in `nuxt.config.ts` `app.head` runs before paint. It sets `data-theme` on `<html>` (from localStorage, falling back to `prefers-color-scheme`) and adds the `js` class. `useTheme()` toggles the theme and saves it. The `v-reveal` directive (`plugins/reveal.ts`, with `getSSRProps` so it works in SSR) fades elements in on scroll. Elements are only hidden under `.js`, and `prefers-reduced-motion` disables the effect. Headless screenshots therefore show unrevealed content as blank unless reduced motion is forced (e.g. Chromium `--force-prefers-reduced-motion`).

**Images:** the hero cover is `public/images/banner.webp` (made from `design/Main.png`; `design/` holds the source files and isn't published). Tech logos are in `public/images/tech/`, listed in `data/tech.ts`. `techIcon()` adds a logo to a skill when the skill's name in `skills.ts` matches a key in its map. The default theme is light; dark is used only after the visitor toggles it.

**Icons** are inline SVG paths in `components/ui/Icon.vue`. Adding an icon means adding its path there **and** its name to the `IconName` union in `types/portfolio.ts`.

## Content guidelines (owner preferences)

- Position the owner as a **Django developer**: Django + DRF backend, Nuxt frontend. Laravel/PHP is the earlier stack (2024 internship and traineeship). Keep it out of featured projects and in the "Earlier stack" skills stage.
- Write at junior/intern level: plain "built / added / worked on". Avoid senior-sounding claims ("architected", "engineered", "optimised system strategies").
- Never invent personal facts (dates, titles, employers, awards). If something is unknown, add a clearly marked `(this is demo)` placeholder instead.
- Client project code is private. Project pages list exactly what was built, rather than linking to source.
