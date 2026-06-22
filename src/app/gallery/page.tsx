import Link from 'next/link';
import type { ReactElement } from 'react';
import GalleryGrid from '@/components/GalleryGrid';
import styles from './page.module.css';

/*
  Gallery Page
  Showcases completed projects as before/after pairs with a scope
  details box for each (rendered by GalleryGrid), framed by a page
  header and a closing call-to-action linking back to the homepage
  contact form.
*/
export default function GalleryPage(): ReactElement {
  return (
    <main>
      <section className={styles.pageHeader}>
        <h1 className={styles.pageHeaderTitle}>Our Work</h1>
        <p className={styles.pageHeaderText}>
          A portfolio of transformation. Each project showcases our commitment to quality,
          attention to detail, and customer satisfaction.
        </p>
      </section>

      <GalleryGrid />

      <section className={styles.galleryCallToActionSection}>
        <h2 className={styles.galleryCallToActionHeading}>Ready to Transform Your Space?</h2>
        <p className={styles.galleryCallToActionText}>
          Every project starts with a conversation. Contact us for a free quote and consultation
          about your renovation needs.
        </p>
        <Link href="/#contact" className={styles.galleryCallToActionButton}>
          Get Your Quote
        </Link>
      </section>
    </main>
  );
}
