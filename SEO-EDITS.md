# Tectostack SEO: edits to make in existing files

The two new files (app/robots.ts, app/sitemap.ts) are drop-in. If your project uses a `src/` folder, put them in `src/app/` instead.
The edits below change files you already have, so copy them in by hand.

## 1. app/layout.tsx: add/replace the metadata export
```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://tectostack.com"),
  title: {
    default: "Tectostack | Vancouver Software Contracting, Remote-First & AI-Forward",
    template: "%s | Tectostack",
  },
  description:
    "Vancouver-based software contracting. Remote-first, AI-forward engineers for web, backend, AI/ML and cloud projects across Canada and worldwide.",
  robots: { index: true, follow: true },
  openGraph: { type: "website", siteName: "Tectostack", url: "https://tectostack.com", locale: "en_CA" },
};
```
Remove any `robots: { index: false }` or `<meta name="robots" content="noindex">` anywhere in the project.

## 2. Every page: unique title, description and canonical
```tsx
export const metadata: Metadata = {
  title: "Software Development Services",
  description: "150-160 characters, unique to this page.",
  alternates: { canonical: "/services" },
};
```
Pages: / , /services, /ai-integration, /prices, /why-vancouver, /about, /contact (canonical for home is "/").

## 3. next.config.js (or .mjs / .ts): add trailingSlash and redirects
```js
const nextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
      { source: "/work/", destination: "/services", permanent: true },
      { source: "/projects/", destination: "/services", permanent: true },
      { source: "/industries/", destination: "/services", permanent: true },
      { source: "/services/data-dashboards/", destination: "/services", permanent: true },
      { source: "/services/content-creation/", destination: "/services", permanent: true },
      { source: "/blog/", destination: "/", permanent: true },
      { source: "/terms/", destination: "/", permanent: true },
    ];
  },
};
module.exports = nextConfig;
```
Merge into your existing config rather than replacing it.

## 4. Vercel dashboard
- Domains: make tectostack.com primary, redirect www to it.
- Check vercel.json / next.config headers for any X-Robots-Tag: noindex.

## 5. After deploying
Search Console: test the live homepage, submit sitemap.xml, click Validate fix on all three reasons, request indexing for the 7 pages.
