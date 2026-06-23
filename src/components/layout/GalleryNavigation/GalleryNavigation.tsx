'use client';

import Link from 'next/link';
import { useEffect, useState, type ReactElement } from 'react';
import styles from './GalleryNavigation.module.css';

/*
  GalleryNavigation Component
  Simplified header shown only on the gallery page: the logo (linking
  home) and a single "Back to Main Page" button. No link menu, no
  active-section tracking — the gallery page is meant to feel focused
  rather than a full site section — but it does shrink and darken on
  scroll past 50px, the same as the homepage's Navigation, so the
  gallery page doesn't feel like a separate, less-polished experience.
*/
const GalleryNavigation = (): ReactElement => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClassName = isScrolled
    ? `${styles.galleryNavigation} ${styles.galleryNavigationScrolled}`
    : styles.galleryNavigation;

  return (
    <header className={headerClassName}>
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
