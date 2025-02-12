# Newsletter template

A modern template designed for newsletter a mobile-friendly interface and an integrated flow for verifying the sign-up
emails.

## Showcase

A simple and sleek UI allowing users to sign up to your newsletters.

## Highlight

## Useful links

- Env setup: [.env.example](.env.example), rename to `.env`
- Site Header: [src/routes/Header.svelte](src/routes/Header.svelte)
- Site footer: [src/routes/Footer.svelte](src/routes/Footer.svelte)
- Email template: [src/lib/server/templates/confirm.ejs](src/lib/server/templates/confirm.ejs)
- Logo: [static/logo.svg](./static/logo.svg) and [static/favicon.png](./static/favicon.png)
- OG image (preview thumbnail): [static/newsletter-og.png](./static/newsletter-og.png)

## Technologies

We use [Svelte](https://svelte.dev/docs/svelte/overview) and [SvelteKit](https://svelte.dev/docs/kit/introduction) as a
web framework with [TypeScript](https://www.typescriptlang.org/) codebase.

CSS framework [TailwindCSS](https://tailwindcss.com/) is used for all styling needs.

Financial and payments infrastructure [Stripe](https://stripe.com/en-cz) to collect (not only) card payments, generate
invoices, send receipt, calculate VAT, make reports, and much more.

All the backend needs such as saving the newsletter sign-ups, or email verification is covered
by [Appwrite](https://appwrite.io/).

## Tips and tricks

- Convert product images to `.webp` or `.avif` formats for best loading speed of your site
- Never use images with resolution greater than 1080p
- Before production use, connect to logging tools like [Sentry](https://sentry.io/) or analytics tool such
  as [Plausible](https://plausible.io/) or [Google Analytics](https://marketingplatform.google.com/about/analytics/)

## Local development

1. Install dependencies with `npm install` (or `pnpm install` or `yarn`)
2. Start a development server with `npm run dev` (or `pnpm dev` or `yarn dev`)
3. Visit [localhost:5173](http://localhost:5173/)

## Deploy to production

When used with Appwrite, all changes to `main` branch are automatically deployed to production.

Otherwise, use `npm run build` (or `pnpm build` or `yarn build`), and deploy as Node.js server with build folder as
`./build`.
