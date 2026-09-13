# Kondara

Marketing website for Kondara, an aerospace startup developing an onboard module for spacecraft guidance, navigation, control, and computing.

Live at https://kondara.space (Cloudflare Workers static assets).

## Run locally

Requirements: Node.js 20+.

    npm install
    npm run dev

## Deploy

    npm run deploy

Builds to `dist/` and uploads with Wrangler. The `kondara.space` and `www.kondara.space` custom domains are configured in `wrangler.jsonc`. First time on a machine, run `npx wrangler login`.
