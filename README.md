# Maiar Emam — CV

A single-page CV for Maiar Emam (Software Engineer · Full Stack Developer). It includes the Addadak graduation-project infographic.

Built with **Next.js 15 (App Router)**, **React 19**, **TypeScript** and plain CSS.

## Run locally

```bash
npm install
npm run dev
```

## Structure

- `app/page.tsx`: page composition (sections in order)
- `app/globals.css`: design tokens and all styles
- `components/`: `ProfileHero`, `PersonalInfo`, `CvOptions`, `ProjectInfographic`, `SocialLinks`, `Icon`
- `lib/profile.ts`: all page content and links (edit here)
- `public/images/`: portrait and the infographic rendered from the original PDF
- `public/files/addadak-infographic.pdf`: the original infographic, unchanged
