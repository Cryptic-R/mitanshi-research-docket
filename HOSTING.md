# Hosting guide

This project is a Next.js static export. The production build is written to `out/`.

## 1. Local verification

```bash
npm ci
npm run typecheck
npm run lint
npm run build
```

The generated site is in `out/`. Preview it locally with:

```bash
npx serve out
```

Do not use the old GitHub Pages `basePath`. The current `next.config.ts` is hosting-neutral and works at the root of Netlify, Cloudflare Pages, Render Static Site, or another static host.

## 2. Netlify — manual upload, no Git required

1. Sign in at `https://app.netlify.com`.
2. Choose **Add new project** / **Deploy manually**.
3. Run `npm ci && npm run build` locally.
4. Drag the **contents of `out/`** into Netlify’s manual deploy area.
5. Do not upload the source folder or the `out` folder as a nested directory. Netlify must see `index.html` at the deployment root.
6. Netlify provides a `*.netlify.app` URL.

For continuous deployment:

1. Choose **Add new project → Import an existing project**.
2. Select GitHub and this repository.
3. Build command: `npm run build`
4. Publish directory: `out`
5. Node version: `22` (optional; add `NODE_VERSION=22` in site environment variables if needed).

## 3. Cloudflare Pages — Git integration

1. Open `https://dash.cloudflare.com`.
2. Go to **Workers & Pages → Create application → Pages → Connect to Git**.
3. Select this GitHub repository.
4. Framework preset: **Next.js (Static HTML Export)**, or choose **None**.
5. Build command: `npm run build`
6. Build output directory: `out`
7. Deploy.

## 4. Render — Static Site

1. Open `https://dashboard.render.com`.
2. Choose **New → Static Site**.
3. Connect this GitHub repository.
4. Build command: `npm ci && npm run build`
5. Publish directory: `out`
6. Create the site.

## 5. GitHub Pages — optional

GitHub Pages may be unavailable for private repositories on some plans. If enabled for this repository:

1. Open repository **Settings → Pages**.
2. Set source to **GitHub Actions**.
3. The workflow in `.github/workflows/deploy-pages.yml` builds and deploys `out/`.

If the repository is hosted at a project subpath rather than a root domain, add a matching `basePath` in `next.config.ts` before using Pages. For Netlify, Cloudflare Pages, and Render, leave `basePath` empty as it is now.

## 6. GitHub Actions quality checks

`.github/workflows/quality.yml` runs type checking, linting, and the production build on pushes and pull requests.

## 7. Source deployment from a fresh computer

```bash
git clone https://github.com/cartoonyt40-dotcom/mitanshi-research-docket.git
cd mitanshi-research-docket
npm ci
npm run build
```

Then deploy the `out/` directory using any static host above.

## 8. Important public-content review

Before publishing, review `src/content/site.ts`. Remove anything that should not be public, including confidential matter details, client identities, unpublished work product, private contact data, or claims that have not been approved.

The portrait is not included yet. Add it under `public/` only after confirming usage rights, then update the page/content reference.

## 9. MCP scaffold

`src/mcp/server.ts` is a safe public-content scaffold. It is not mounted as an HTTP endpoint by the static site. If deployed separately, use authentication, rate limiting, input validation, audit logging, and least privilege. Do not expose private documents, legal advice, case assessment, shell execution, raw SQL, or autonomous outbound communication.
