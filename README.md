## Tech Stack

The original version of [resfactanova.pl](https://resfactanova.pl) was built in **PHP**.
In **November 2023**, the site was rewritten using **Svelte 4** and **SvelteKit**.

Although the project has since been bumped to **Svelte 5**, the core implementation still relies on Svelte 4 conventions.
For styling, the project uses **TailwindCSS v3**.

## CMS and Infrastructure

The project uses **Contentful** as its CMS.
To avoid excessive API calls, a **Redis** caching layer has been added.

- The Redis cache can be cleared via a webhook at:
  `POST /api/clear-cache`
- Contentful is currently running on the **free plan**.
- Hosting is provided by **Vercel**.
- Redis is also hosted on **Vercel**.

Currently, the application is deployed under a private Vercel account, but it can be migrated to another account without issues.
The only requirement is to configure **Vercel Redis** and provide all environment variables listed in `.env.example`.

### Environment Variables

- `CONTENTFUL_ACCESS_TOKEN` – found in Contentful under **Settings → API Keys**
- `CONTENTFUL_PREVIEW_ACCESS_TOKEN` – found in Contentful under **Settings → API Keys**
- `CONTENTFUL_SPACE_ID` – found in Contentful under **Settings → General Settings**
- `FONTAWESOME_NPM_AUTH_TOKEN` – currently linked to a private Font Awesome account, but can be switched to any other paid account
- `REDIS_URL` – configure through Vercel Redis
- `PRERENDER_REVALIDATE_KEY` – arbitrary webhook key, can be found in **Contentful → Clear Redis Cache webhook settings**
