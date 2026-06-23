import type { MetadataRoute } from "next";

const SITE_URL = "https://msrenovation.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date("2026-06-22"),
    },
    {
      url: `${SITE_URL}/gallery`,
      lastModified: new Date("2026-06-22"),
    },
  ];
}
