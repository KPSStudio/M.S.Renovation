import Link from 'next/link';
import type { Metadata } from 'next';
import type { ReactElement } from 'react';
import GalleryNavigation from '@/components/layout/GalleryNavigation';
import BeforeAfterGallery from '@/components/BeforeAfterGallery';
import FadeInSection from '@/components/FadeInSection';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Before and After Photos',
  description:
    'Real photos from recent painting, decorating, and home improvement jobs in Aberdeen. Get a free quote from M.S. Renovation.',
  alternates: {
    canonical: '/gallery',
  },
  openGraph: {
    title: 'M.S. Renovation Gallery - Before and After Home Improvement Photos',
    description: 'Browse our recent renovation and improvement projects with before and after photos.',
    url: '/gallery',
  },
};

/*
  Gallery Page
  Shows real client photos via BeforeAfterGallery (two independent,
  interactive photo carousels, Before and After, with no project
  titles, descriptions, or claimed pairing between photos, since they
  can't be confidently tied to specific named jobs), framed by a page
  header and a closing call-to-action linking back to the homepage
  contact form. Uses the simplified GalleryNavigation instead of the
  full Navigation, since this page is reached as a deliberate "view
  full gallery" step rather than top-level site navigation.
*/
export default function GalleryPage(): ReactElement {
  return (
    <>
      <GalleryNavigation />
      <main>
        <section className={styles.pageHeader}>
          <FadeInSection>
            <h1 className={styles.pageHeaderTitle}>Our Work</h1>
            <p className={styles.pageHeaderText}>
              Real photos from recent jobs, showing our commitment to quality, attention to
              detail, and customer satisfaction.
            </p>
          </FadeInSection>
        </section>

        <BeforeAfterGallery />

        <section className={styles.galleryCallToActionSection}>
          <FadeInSection>
            <h2 className={styles.galleryCallToActionHeading}>Ready to Transform Your Space?</h2>
            <p className={styles.galleryCallToActionText}>
              Every project starts with a conversation. Contact us for a free quote and
              consultation about your renovation needs.
            </p>
            <Link href="/#contact" className={styles.galleryCallToActionButton}>
              Get Your Quote
            </Link>
          </FadeInSection>
        </section>
      </main>
    </>
  );
}
