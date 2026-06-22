'use client';

import { useEffect, useState, type ReactElement } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { NavLink } from '@/types';
import styles from './Navigation.module.css';

/*
  Navigation Component
  Sticky header shown on every page. Shows the business logo on the
  left and four links on the right: Services, Our Work, Reviews, Contact.

  Two independent scroll-driven behaviors:
  - Darken effect: once window.scrollY passes 50px, the header swaps
    from a flat white background to a gradient with a heavier
    stone-dark border and a shadow (isScrolled state).
  - Active-section tracking: on the homepage, whichever section is
    currently scrolled into view gets the active underline, tracked
    by checking each section's offsetTop (activeSection state). The
    gallery page has no in-page sections, so "Our Work" is always
    shown active there instead.

  On mobile, the links collapse behind a toggle button.
*/
const NAVIGATION_LINKS: NavLink[] = [
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'Our Work', href: '/gallery', id: 'gallery' },
  { label: 'Reviews', href: '#reviews', id: 'reviews' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

const Navigation = (): ReactElement => {
  const pathname = usePathname();
  const isGalleryPage = pathname === '/gallery';

  /* True once the page has scrolled past 50px, drives the header darken effect */
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  /* Tracks which homepage section id is currently active while scrolling */
  const [activeSection, setActiveSection] = useState<string>('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);

      // Active-section-on-scroll tracking only applies to the homepage,
      // since the gallery page has no in-page sections to track.
      if (isGalleryPage) return;

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
  const handleLinkClick = (): void => {
    setIsMobileMenuOpen(false);
  };

  const headerClassName = `${styles.header} ${isScrolled ? styles.headerScrolled : styles.headerAtTop}`;

  return (
    <header className={headerClassName}>
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
            if (link.id === 'gallery') {
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={handleLinkClick}
                    className={
                      isGalleryPage
                        ? `${styles.navigationLink} ${styles.navigationLinkActive}`
                        : styles.navigationLink
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              );
            }

            const anchorHref = isGalleryPage ? `/${link.href}` : link.href;
            const isActive = !isGalleryPage && activeSection === link.id;

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
