# jmayeur.dev

Personal website and resume for Jeff Mayeur.

## Stack

- React 19 + TypeScript
- Vite 8
- TanStack Router
- Tailwind CSS v4

## Local Development

This project is pinned to Node 22 via `.nvmrc`.

```bash
source ~/.nvm/nvm.sh
nvm use
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output is generated in `dist/`.

## Deployment

Hosted on Azure Static Web Apps and connected to GitHub Actions for continuous deployment from `main`.

- Static Web App name: `jmayeur-dev-site`
- Resource group: `jmayeur-dev-site-rg`
- Azure default hostname: `ashy-plant-00666f610.7.azurestaticapps.net`
- Custom domains: `jmayeur.dev`, `www.jmayeur.dev`

## Domain Notes

- Canonical host is `https://jmayeur.dev`.
- `www.jmayeur.dev` is normalized to apex in the app shell.

## Content Update Checklist

Use this quick flow whenever you update resume or profile content.

1. Edit resume page content in `src/App.tsx` and deep-dive page content in `src/pageContent.ts`.
2. If title/SEO text changed, update `index.html` (`<title>`, description, canonical URL if needed).
3. Run local checks:

```bash
source ~/.nvm/nvm.sh
nvm use
npm run build
```

4. Commit and push to `main`.
5. Confirm deployment in GitHub Actions.
6. Smoke test production:
   - https://jmayeur.dev
   - https://www.jmayeur.dev (should redirect to apex)

If deployment fails, review the latest workflow logs in GitHub Actions first, then rerun after fixing.

## Release Note Template

Copy, fill in, and paste this into commit messages, PR descriptions, or deployment notes.

```text
Release Date: YYYY-MM-DD
Version/Tag: <optional>

Summary
- <one-line overview of this update>

Content Changes
- <what changed in resume/profile copy>
- <what changed in links/contact/details>

UI/UX Changes
- <layout/style/accessibility updates>

Technical Changes
- <routing/build/config/dependency updates>

Validation
- [ ] npm run build completed locally
- [ ] GitHub Actions deployment succeeded
- [ ] https://jmayeur.dev loads correctly
- [ ] https://www.jmayeur.dev redirects to apex

Rollback Plan
- Revert commit: <sha>
- Confirm previous deployment is healthy
```
