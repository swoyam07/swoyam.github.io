# Developer Portfolio (Nuxt 4 → GitHub Pages)

Portfolio site for Swoyam Suwal, Django developer. Built with Nuxt 4, no UI library,
self-hosted fonts and inline SVG icons, so nothing loads from a third-party CDN.

## Run it

Uses [pnpm](https://pnpm.io) (`npm install -g pnpm` if you don't have it).

```bash
pnpm install
pnpm dev           # http://localhost:3000
pnpm generate      # static build in .output/public
pnpm preview       # serve the static build locally
```

`pnpm-workspace.yaml` allows esbuild's install script (pnpm blocks package scripts by default).

## Edit your content

All content lives in `app/data/`. You never need to touch components to update the site.

| File | What it holds |
| --- | --- |
| `companies.ts` | Companies and their logos |
| `profile.ts` | Name, role, intro, about text, location, email, socials, CV, stats |
| `journey.ts` | The career roadmap timeline (done / current / next) |
| `skills.ts` | Skills grouped as backend roadmap stages |
| `experience.ts` | Jobs and internship |
| `projects.ts` | Projects; each one gets a page at `/projects/<slug>` |
| `education.ts` | Degrees and schools |
| `certificates.ts` | Certificates, letters and other documents |
| `achievements.ts` | Awards, hackathons, etc. |
| `practices.ts` | "How I work" cards |

### Placeholder data

Every placeholder contains the text `(this is demo)` and shows on the site as an amber
**this is demo** badge. Find them all with:

```bash
grep -rn "this is demo" app/data
```

Replace each with real data or delete it. When none are left, set `showDemoNotice: false`
in `profile.ts` to hide the banner at the top. The contact email shows a demo badge while it
ends in `example.com`.

### Files (CV, certificates, photo)

- CV: `public/documents/cv.pdf`, then `cv: '/documents/cv.pdf'` in `profile.ts`
- Certificates: `public/documents/<name>.pdf`, then `file: '/documents/<name>.pdf'` in `certificates.ts`
- Photo: `public/images/avatar.jpg`, then `avatar: '/images/avatar.jpg'` in `profile.ts`
- Company logos: `public/images/logos/`, registered in `app/data/companies.ts` and linked with `companyId`
  in `experience.ts`, `projects.ts` and `journey.ts`

Paths are automatically prefixed with the GitHub Pages base URL.

### Sections

`app/pages/index.vue` lists the home page sections in order. Delete a line to hide a section.

## Structure

```
app/
  data/          content (edit these)
  types/         TypeScript types for the content
  components/
    layout/      header, footer
    sections/    one component per home page section
    projects/    project card + generated cover art
    ui/          Icon, DText (demo badge), SectionHeader, ThemeToggle, CvButton
  pages/         index, projects list, project detail
  plugins/       v-reveal scroll animation
  composables/   theme, asset path helper
  assets/css/    design tokens and base styles
public/          favicon, robots.txt, documents/, images/
.github/workflows/deploy.yml
```

## Deploy to GitHub Pages

1. Push this folder to a GitHub repository (branch `main`).
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Every push to `main` builds and deploys automatically.

The workflow sets the base URL for you:

- Repo named `<username>.github.io` → site at `https://<username>.github.io/`
- Any other name, e.g. `portfolio` → site at `https://<username>.github.io/portfolio/`

To test a project-repo build locally:

```bash
NUXT_APP_BASE_URL=/portfolio/ pnpm generate
```

Contact works with a `mailto:` link because GitHub Pages has no server. To add a contact form
later, use a form service (for example Formspree) instead of a backend route.
