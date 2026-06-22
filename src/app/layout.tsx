import type { Metadata } from 'next';
import type { ReactElement, ReactNode } from 'react';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'M.S. Renovation | Premium Home Improvement Aberdeen',
  description:
    'M.S. Renovation is a 5-star rated home improvement and renovation business serving Aberdeen, Scotland. Painting, plastering, carpentry, bathroom and kitchen fitting, and property repair.',
};

/*
  Root Layout
  Wraps every page with the shared Footer and loads the global
  stylesheet (resets, color palette, fonts, and the shared
  scroll-animation classes used across components). The header is
  page-specific rather than shared here: the homepage uses the full
  Navigation, the gallery page uses the simplified GalleryNavigation.
*/
export default function RootLayout({ children }: { children: ReactNode }): ReactElement {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
