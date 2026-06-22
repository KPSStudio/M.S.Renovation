import Link from 'next/link';
import type { ReactElement } from 'react';
import styles from './GalleryNavigation.module.css';

/*
  GalleryNavigation Component
  Simplified header shown only on the gallery page: the logo (linking
  home) and a single "Back to Main Page" button. No link menu, no
  active-section tracking, no scroll-darken effect — the gallery page
  is meant to feel focused rather than a full site section. Has no
  client-side state, so it stays a server component.
*/
const GalleryNavigation = (): ReactElement => {
  return (
    <header className={styles.galleryNavigation}>
      <div className={styles.navigationContainer}>
        <Link href="/" className={styles.logoLink}>
          M.S. Renovation
        </Link>

        <Link href="/" className={styles.backButton}>
          ← Back to Main Page
        </Link>
      </div>
    </header>
  );
};

export default GalleryNavigation;
