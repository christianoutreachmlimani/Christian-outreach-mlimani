# Christian Outreach Ministries Worldwide – Mlimani

This is the rebuilt multi-page church website. It uses the Next.js App Router API through [vinext](https://github.com/cloudflare/vinext), with a Cloudflare Workers deployment configuration.

## Pages

Home, About, Leadership, Ministries, Programs, Sermons, Watch Live, Gallery, Giving and Contact each have their own route. The seven named ministries also have individual detail pages at `/ministries/[slug]`.

## Run locally

Use Node.js 22 or newer (required by the installed vinext packages).

```bash
npm install
npm run dev
```

## Build and deploy to Cloudflare

```bash
npm run build
npx wrangler login
npm run deploy
```

Set `CLOUDFLARE_ACCOUNT_ID` in your environment or add your account ID to `wrangler.jsonc` before deploying. The Worker name is `christian-outreach-mlimani`. Cloudflare authentication and account selection are required for the first deployment.

For Cloudflare Workers Builds connected to this repository, set **Root directory** to `site`, **Build command** to `npm run build`, and **Deploy command** to `npm run deploy`. The site dependencies and `wrangler.jsonc` are in `site/`. If the Cloudflare build root remains at the repository root, `npm run build` installs the site dependencies when missing before building, and the deploy command must still be `npm run deploy`.

## Update content

- Edit contact details, links, ministries and weekly times in `lib/content.ts`.
- Edit the homepage in `app/page.tsx` and the other main pages in `app/[section]/page.tsx`.
- Edit ministry detail layout in `app/ministries/[slug]/page.tsx`.
- Replace the three images in `public/` while retaining the filenames, or update their paths in the page components.
- Edit colors and layout in `app/globals.css`.

The Sermons and Gallery pages use only the content and images provided with the original website. Add real sermons and more photographs when available.
