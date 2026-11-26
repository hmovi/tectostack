import type { MetadataRoute } from "next";

const base = "https://tectostack.com";
const paths = ["", "/services", "/ai-integration", "/prices", "/why-vancouver", "/about", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((p) => ({ url: base + p, lastModified: new Date() }));
}
