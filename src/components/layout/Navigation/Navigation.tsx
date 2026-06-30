'use client';

import { useEffect, useState, type ReactElement } from 'react';
import Link from 'next/link';
import type { NavLink } from '@/types';
import { SERVICE_PAGES } from '@/data/services';
import styles from './Navigation.module.css';

/*
  Navigation Component
  Full header shown only on the homepage (the gallery and service pages
  use the simpler GalleryNavigation instead). Logo on the left, links on
  the right: a "Services" dropdown that links out to the dedicated
  service pages, followed by anchor links for the homepage sections
  (Why Choose Us, Our Work, Reviews, Areas, FAQ, Contact).

  Behaviors, each in its own effect:
  - Darken-and-shrink: once window.scrollY passes 50px the header swaps
    to a gradient with a heavier border and shadow and shrinks slightly.
    Reading scrollY is cheap and does not force layout, so a passive
    scroll listener is fine.
  - Active-section tracking: an IntersectionObserver scroll-spy marks
    the section currently in view, instead of measuring every section's
    offset on every scroll frame.
  - Escape-to-close: Escape closes the open mobile menu and/or the
    Services dropdown.

  The Services dropdown opens on hover or keyboard focus on desktop (via
  CSS) and on tap on mobile (via the isServicesOpen state).
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

/* The plain anchor links shown after the Services dropdown. The
   "services" entry is handled by the dropdown, so it is excluded here. */
const ANCHOR_LINKS = NAVIGATION_LINKS.filter((link) => link.id !== 'services');

const Navigation = (): ReactElement => {
  /* True once the page has scrolled past 50px, drives the header darken effect */
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  /* Tracks which section id is currently active while scrolling */
  const [activeSection, setActiveSection] = useState<string>('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isServicesOpen, setIsServicesOpen] = useState<boolean>(false);

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

  // Close the mobile menu and the Services dropdown on Escape.
  useEffect(() => {
    if (!isMobileMenuOpen && !isServicesOpen) return;

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setIsServicesOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen, isServicesOpen]);

  // Closes the mobile menu and Services dropdown whenever a link is clicked
  const handleLinkClick = (): void => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  const headerClassName = `${styles.header} ${isScrolled ? styles.headerScrolled : styles.headerAtTop}`;

  return (
    <header className={headerClassName}>
      <nav className={styles.navigationBar}>
        {/* Logo links back to the top of the homepage */}
        <Link href="/" className={styles.logoLink}>
          M.S. Renovation
        </Link>

        {/* Mobile menu toggle button, only visible below the breakpoint */}
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
          {/* Services dropdown, linking out to the dedicated service pages */}
          <li className={styles.dropdown}>
            <button
              type="button"
              className={`${styles.navigationLink} ${styles.dropdownToggle}`}
              onClick={() => setIsServicesOpen((open) => !open)}
              aria-expanded={isServicesOpen}
              aria-haspopup="true"
            >
              Services <span aria-hidden="true">▾</span>
            </button>
            <ul
              className={`${styles.dropdownMenu} ${
                isServicesOpen ? styles.dropdownMenuOpen : ''
              }`}
            >
              {SERVICE_PAGES.map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    onClick={handleLinkClick}
                    className={styles.dropdownLink}
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {ANCHOR_LINKS.map((link) => {
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
