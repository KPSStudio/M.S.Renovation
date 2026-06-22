import Image from 'next/image';
import type { ReactElement } from 'react';
import certificateImage from '../../public/certificate.jpg';
import styles from './Certificate.module.css';

/*
  Certificate Component
  Displays the Aberdeen Trusted Trader certificate image, along with a
  caption explaining the scheme and the certificate's validity date,
  plus a row of trust badges. The image is imported as a static asset
  (rather than referenced by string path) so Next.js can read its
  intrinsic dimensions and generate a blurDataURL automatically,
  giving a blur-up placeholder while the full image loads.
*/
const Certificate = (): ReactElement => {
  return (
    <section className={styles.certificateSection}>
      <h2 className={styles.sectionHeading}>Trusted and Certified</h2>
      <div className={styles.certificateContainer}>
        <div className={styles.certificateImageWrapper}>
          <Image
            src={certificateImage}
            alt="Aberdeen Trusted Trader Certificate"
            placeholder="blur"
            className={styles.certificateImage}
            sizes="(max-width: 768px) 90vw, 480px"
          />
        </div>
        <p className={styles.certificateCaption}>
          Member of Aberdeen Trusted Trader scheme, supported by Police Scotland and Aberdeen
          City Council. <strong>Certificate valid until 26/07/2026.</strong>
        </p>
        <div className={styles.trustBadgesRow}>
          <span className={styles.trustBadge}>✓ Trusted Trader Member</span>
          <span className={styles.trustBadge}>★ 5.0 from 16 Reviews</span>
          <span className={styles.trustBadge}>Backed by Police Scotland</span>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
