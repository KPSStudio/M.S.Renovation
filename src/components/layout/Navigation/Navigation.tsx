'use client';

import { useEffect, useState, type ReactElement } from 'react';
import Link from 'next/link';
import type { NavLink } from '@/types';
import styles from './Navigation.module.css';

/*
  Navigation Component
  Full header shown only on the homepage (the gallery page uses the
  simpler GalleryNavigation instead). Shows the business logo on the
  left and anchor links on the right for every major homepage section
  — Services, Why Choose Us, Our Work, Reviews, Areas, FAQ, Contact —
  all of which scroll to a section on this page.

  Two independent scroll-driven behaviors:
  - Darken-and-shrink effect: once window.scrollY passes 50px, the
    header swaps from a flat white background to a gradient with a
    heavier stone-dark border and a shadow, and its padding and
    logo/link font-size shrink slightly (isScrolled state). All of
    this is driven by CSS transitions on the .headerScrolled class in
    Navigation.module.css, not inline styles, so it stays GPU-cheap
    and doesn't fight the header's position: sticky layout.
  - Active-section tracking: whichever section is currently scrolled
    into view gets the active underline, tracked by checking each
    section's offsetTop (activeSection state).

  On mobile, the links collapse behind a toggle button.
*/
const NAVIGATION_LINKS: NavLink[] = [
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'Why Choose Us', href: '#why-choose-us', id: 'why-choose-us' },
  { label: 'Our Work', href: '#our-work', id: 'our-work' },
  { label: 'Reviews', href: '#reviews', id: 'reviews' },
  { label: 'Areas', href: '#service-areas', id: 'service-areas' },
  { label: 'FAQ', href: '#faq', id: 'faq' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

const SECTION_IDS = NAVIGATION_LINKS.map((link) => link.id);

const Navigation = (): ReactElement => {
  /* True once the page has scrolled past 50px, drives the header darken effect */
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  /* Tracks which section id is currently active while scrolling */
  const [activeSection, setActiveSection] = useState<string>('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);

      let currentSection = '';

      SECTION_IDS.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element && window.scrollY >= element.offsetTop - 100) {
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Closes the mobile menu whenever a link is clicked
  const handleLinkClick = (): void => {
    setIsMobileMenuOpen(false);
  };

  const headerClassName = `${styles.header} ${isScrolled ? styles.headerScrolled : styles.headerAtTop}`;

  return (
    <header className={headerClassName}>
      <nav className={styles.navigationBar}>
        {/* Logo links back to the top of the homepage */}
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
            const isActive = activeSection === link.id;

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
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
