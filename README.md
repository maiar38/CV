# Maiar Emam — CV

A single-page, dark-themed CV for Maiar Emam (Software Engineer | Full Stack Developer). It has a CV download and a link to the Addadak graduation-project infographic.

Built with **Next.js 15 (App Router)**, **React 19**, **TypeScript** and plain CSS.

## Run locally

```bash
npm install
npm run dev
```

## Structure

- `app/page.tsx`: page composition (sections in order)
- `app/globals.css`: design tokens and all styles
- `components/`: `ProfileHero`, `PersonalInfo`, `CvDownload`, `ProjectInfographic`, `SocialLinks`, `Icon`
- `lib/profile.ts`: all page content and links (edit here)
- `public/images/portrait.webp`: profile portrait
