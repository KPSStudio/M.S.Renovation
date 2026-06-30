import Link from 'next/link';
import type { ReactElement } from 'react';
import { SERVICE_PAGES } from '@/data/services';
import styles from './Footer.module.css';

/*
  Footer Component
  Dark footer shown on every page: a row of links to the dedicated
  service pages, a copyright notice, a link to the Trusted Trader
  listing where the verified review count can be seen, and a small,
  deliberately understated developer credit line.
*/
const Footer = (): ReactElement => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <nav className={styles.servicesNav} aria-label="Services">
        {SERVICE_PAGES.map((page) => (
          <Link key={page.href} href={page.href} className={styles.serviceLink}>
            {page.label}
          </Link>
        ))}
      </nav>

      <p className={styles.footerLine}>
        © {currentYear} M.S. Renovation. Premium home improvement serving Aberdeen and
        surrounding areas.
      </p>
      <p className={styles.footerLine}>
        <a
          href="https://www.trustedtrader.scot/Aberdeen/MSRenovation-0001955.html"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerLink}
        >
          Verified on Trusted Trader
        </a>
      </p>
      <p className={styles.creditLine}>
        Designed and Developed by{' '}
        <a
          href="https://www.linkedin.com/in/kamil-szynklewski-917786297"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.creditLink}
        >
          KPS Studio
        </a>
      </p>
    </footer>
  );
};

export default Footer;
