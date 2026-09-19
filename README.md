# Mitanshi Khandelwal — Research Docket

A production-focused portfolio for Mitanshi Khandelwal, designed as an interactive editorial research record rather than a conventional legal website.

## Design concept

**Research Docket** uses a 2D spatial research map, layered case-file-inspired depth, expandable experience records, and restrained interaction. It deliberately avoids generic legal visual clichés. The site is mobile-first, keyboard-accessible, and respects `prefers-reduced-motion`.

## Public profile and résumé content

The site contains owner-supplied résumé details and selected public LinkedIn information:

- BBA. LL.B at Symbiosis Law School, Noida; expected 2027; 7.4/10 GPA listed on the supplied résumé
- Current direction: exploring cyber law and aiming toward corporate law; open to learning
- Experience across Khaitan & Co., GAIL (India) Ltd., Circle of Counsels, Rahul & Jayshri Associates & Co., Chambers of Hon’ble Shalinder Kaur, and Chambers of Mr. Raj Deepak Rastogi
- Publications on RTI/data protection and algorithmic cartels/blockchain
- Legal-awareness workshops, Moot Court Society/Court Master work, Legal Ararth, competitions, and academic recognitions
- Public contact email supplied by the owner: `khandelwalmitanshi@gmail.com`

The full profile content is typed and centralised in `src/content/site.ts`. Review every public claim before launch and remove any item that should remain private or confidential.

## Hosting instructions

See [`HOSTING.md`](./HOSTING.md) for Netlify, Cloudflare Pages, Render Static Site, GitHub Pages, and local deployment instructions. The current build is hosting-neutral and writes a static site to `out/`.

## Public preview deployment

The portfolio is configured for static export and can be published through GitHub Pages at:

`https://cartoonyt40-dotcom.github.io/mitanshi-research-docket/`

The MCP scaffold remains a separate server module and is not exposed by the static site.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run typecheck
npm run lint
npm run build
```

## Content updates

Edit `src/content/site.ts` to update name, positioning, focus areas, education, experience, publications, activities, achievements, contact information, and the interactive map. Keep confidential matter details, client identities, unpublished work product, and sensitive case facts out of the public site.

## Safe Portfolio Guide MCP scaffold

`src/mcp/server.ts` defines a deliberately limited MCP server. It exposes public portfolio information only:

- `get_public_profile_summary`
- `search_public_portfolio(query)`

It must not provide legal advice, assess legal cases, read private contact requests, access confidential documents, run raw SQL, execute shell commands, or send external messages without explicit confirmation. For deployment, host MCP behind a secure backend boundary with authentication, rate limits, input validation, audit logging, and least-privilege access.

## Production prerequisites

Before public launch, confirm:

- Portrait and usage rights, when available
- Final contact email and phone visibility
- Résumé facts, dates, case names, publication metadata, and organisation names
- Permission to describe any confidential or sensitive work; default to high-level summaries
- Privacy policy relevant to the deployment jurisdiction
- Final site URL and social metadata

## Environment variables

Copy `.env.example` to `.env.local` once a contact form is implemented. Never commit real secrets.
