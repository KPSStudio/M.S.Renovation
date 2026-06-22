import styles from '../styles/Footer.module.css';

/*
  Footer Component
  Dark footer shown on every page: copyright notice and a link to the
  Trusted Trader listing where the verified review count can be seen.
*/
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
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
    </footer>
  );
};

export default Footer;
