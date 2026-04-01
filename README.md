# McCloud's Collision and Customs

Frontend marketing site for McCloud's Collision and Customs in Cookeville, Tennessee.

Production URL: `https://www.mccloudscollision.com`

## Overview

This project is a Next.js + React + TypeScript marketing site for a local collision and custom paint shop. It is focused on:

- presenting shop services and finished work
- driving direct contact by phone, email, Facebook, and maps
- supporting basic local SEO and social sharing metadata

The site is currently static on the frontend. Backend-driven booking is intentionally disabled.

## Tech Stack

- React
- TypeScript
- Next.js App Router
- Tailwind CSS
- npm as the standard package manager

## Project Structure

- `src/app/HomePage.tsx`
  Main page composition and top-level interaction state for the landing page.
- `app/layout.tsx`
  Next.js root layout, metadata, fonts, and structured data shell.
- `app/page.tsx`
  Next.js homepage route that renders the landing page component.
- `src/components/`
  Reusable UI components such as cards, spotlight, gallery modal, FAQ, and contact panel.
- `src/data/siteContent.ts`
  Primary content source for services, gallery items, before/after cases, and FAQ content.
- `public/`
  Static assets, metadata files, favicon, sitemap, and robots directives.

## Local Development

Package manager:

```text
npm
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Default local URL:

```text
http://localhost:3000
```

## Available Scripts

Start the production server locally after a build:

```bash
npm start
```

Create a production build:

```bash
npm run build
```

## Current Feature Set

- responsive landing page for desktop, tablet, and mobile
- hero section with direct contact actions
- specialties and shop standards sections
- before/after case studies
- finished-work gallery modal
- image spotlight viewer for enlarged asset previews
- clickable phone, maps, email, and Facebook actions
- custom favicon aligned to site branding

## Content Model

Most editable marketing content lives in:

- [src/data/siteContent.ts](src/data/siteContent.ts)

That file drives:

- specialties cards
- standards/project cards
- before/after entries
- gallery items
- FAQ entries

## SEO Implementation

The codebase currently includes the main frontend SEO foundations:

- canonical tag
- `robots.txt`
- `sitemap.xml`
- Open Graph metadata
- Twitter card metadata
- local business structured data
- FAQ structured data

Relevant files:

- [app/layout.tsx](app/layout.tsx)
- [public/robots.txt](public/robots.txt)
- [public/sitemap.xml](public/sitemap.xml)
- [public/manifest.json](public/manifest.json)

## Deployment Notes

- production URLs and metadata are configured for:
  `https://www.mccloudscollision.com`
- production assets are generated through the Next.js build output
- after deploy, verify indexing and sitemap submission in Google Search Console:
  `https://www.mccloudscollision.com/sitemap.xml`

## Known Constraints

- booking is not connected to a backend and is currently disabled in the UI
- the gallery and shop content are maintained manually through local data files
- backend auth/admin tooling is intentionally out of scope in this migration pass
- SEO setup in the repo is complete on the frontend side, but Search Console, Business Profile, citations, and review strategy remain operational concerns outside this codebase
