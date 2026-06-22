'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../styles/Navigation.module.css';

/*
  Navigation Component
  Sticky header shown on every page. Shows the business logo on the
  left and four links on the right: Services, Our Work, Reviews, Contact.

  Active state logic:
  - On the gallery page, "Our Work" is always highlighted.
  - On the homepage, the link for whichever section is currently
    scrolled into view gets the active underline, tracked via a
    scroll listener that checks each section's offsetTop.
  - On mobile, the links collapse behind a toggle button.
*/
const NAVIGATION_LINKS = [
  { label: 'Services', sectionId: 'services' },
  { label: 'Our Work', href: '/gallery' },
  { label: 'Reviews', sectionId: 'reviews' },
  { label: 'Contact', sectionId: 'contact' },
];

const Navigation = () => {
  const pathname = usePathname();
  const isGalleryPage = pathname === '/gallery';

  // Tracks which homepage section id is currently active while scrolling
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Active-section-on-scroll tracking only applies to the homepage,
    // since the gallery page has no in-page sections to track.
    if (isGalleryPage) return;

    const handleScroll = () => {
      const sectionIds = ['services', 'reviews', 'contact'];
      let currentSection = '';

      sectionIds.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element && window.scrollY >= element.offsetTop - 100) {
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isGalleryPage]);

  // Closes the mobile menu whenever a link is clicked
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navigationBar}>
        {/* Logo links back to the homepage */}
        <Link href="/" className={styles.logoLink}>
          M.S. Renovation
        </Link>

        {/* Mobile menu toggle button, only visible below 768px */}
        <button
          type="button"
          className={styles.mobileMenuButton}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>

        <ul
          className={`${styles.navigationLinksList} ${
            isMobileMenuOpen ? styles.mobileMenuOpen : ''
          }`}
        >
          {NAVIGATION_LINKS.map((link) => {
            // "Our Work" is a real page link, the rest are homepage anchors
            if (link.href) {
              const isActive = isGalleryPage;
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={handleLinkClick}
                    className={
                      isActive
                        ? `${styles.navigationLink} ${styles.navigationLinkActive}`
                        : styles.navigationLink
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              );
            }

            const anchorHref = isGalleryPage ? `/#${link.sectionId}` : `#${link.sectionId}`;
            const isActive = !isGalleryPage && activeSection === link.sectionId;

            return (
              <li key={link.label}>
                <Link
                  href={anchorHref}
                  onClick={handleLinkClick}
                  className={
                    isActive
                      ? `${styles.navigationLink} ${styles.navigationLinkActive}`
                      : styles.navigationLink
                  }
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
