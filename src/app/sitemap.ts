import type { MetadataRoute } from 'next';
import { SERVICE_PAGES } from '@/data/services';

const SITE_URL = 'https://msrenovation.co.uk';
const LAST_MODIFIED = new Date('2026-06-30');

/*
  Sitemap
  Lists every public page for search engines: the homepage, the gallery,
  and the five dedicated service pages (pulled from the shared
  SERVICE_PAGES list so this never falls out of sync with the menu).
*/
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: LAST_MODIFIED,
    },
    {
      url: `${SITE_URL}/gallery`,
      lastModified: LAST_MODIFIED,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = SERVICE_PAGES.map((page) => ({
    url: `${SITE_URL}${page.href}`,
    lastModified: LAST_MODIFIED,
  }));

  return [...staticPages, ...servicePages];
}
