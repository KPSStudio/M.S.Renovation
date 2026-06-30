/*
  Service page links (single source of truth).
  The dedicated service pages, listed once here so the navigation
  dropdown, the homepage service cards, the footer, and the sitemap
  all stay in sync. Adding or renaming a service page means editing
  this one array.

  `title` must exactly match the matching Service.title in
  src/components/Services.tsx so the homepage cards can find their
  page. `label` is the shorter text shown in menus and the footer.
*/

export interface ServicePageLink {
  label: string;
  title: string;
  href: string;
}

export const SERVICE_PAGES: ServicePageLink[] = [
  {
    label: 'Painting and Decorating',
    title: 'Painting and Decorating',
    href: '/painting-and-decorating-aberdeen',
  },
  {
    label: 'Plastering and Taping',
    title: 'Plastering and Taping',
    href: '/plastering-aberdeen',
  },
  {
    label: 'Carpentry and Joinery',
    title: 'Carpentry and Joinery',
    href: '/carpentry-and-joinery-aberdeen',
  },
  {
    label: 'Bathroom Refurbishment',
    title: 'Bathroom Refurbishment',
    href: '/bathroom-renovation-aberdeen',
  },
  {
    label: 'Property Repairs',
    title: 'Property Repair and Maintenance',
    href: '/property-repairs-aberdeen',
  },
];
