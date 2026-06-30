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

  Three independent scroll/keyboard behaviors, each in its own effect:
  - Darken-and-shrink effect: once window.scrollY passes 50px, the
    header swaps from a flat white background to a gradient with a
    heavier stone-dark border and a shadow, and its padding and
    logo/link font-size shrink slightly (isScrolled state). The CSS
    transitions live on the .headerScrolled class in
    Navigation.module.css. Reading window.scrollY is cheap and does
    not force layout, so a passive scroll listener is fine here.
  - Active-section tracking: whichever section is currently scrolled
    into view gets the active underline. This uses an
    IntersectionObserver scroll-spy rather than reading every
    section's offsetTop on every scroll event, which previously
    forced a layout recalculation on each scroll frame and could
    stutter on mobile.
  - Escape-to-close: pressing Escape closes the open mobile menu.

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

  // Header darken effect. Reading scrollY does not trigger layout, so a
  // plain passive listener is cheap enough without throttling.
  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active-section scroll-spy. The observer fires only when a section
  // crosses a thin band roughly a third of the way down the viewport,
  // so we never measure section positions on every scroll frame.
  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (element): element is HTMLElement => element !== null
    );

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const nearestToTop = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];

        if (nearestToTop) {
          setActiveSection(nearestToTop.target.id);
        }
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu when Escape is pressed (only while it is open).
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') setIsMobileMenuOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

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
