import Image from 'next/image';
import type { ReactElement } from 'react';
import styles from './Certificate.module.css';

/*
  Certificate Component
  Displays the Aberdeen Trusted Trader certificate image from the
  public folder, along with a caption explaining the scheme and the
  certificate's validity date. Uses next/image for automatic
  optimization and responsive sizing. The intrinsic width/height
  (1448x2048) match the source file so the aspect ratio is preserved
  when CSS scales it down to 100% width.
*/
const Certificate = (): ReactElement => {
  return (
    <section className={styles.certificateSection}>
      <h2 className={styles.sectionHeading}>Trusted and Certified</h2>
      <div className={styles.certificateContainer}>
        <div className={styles.certificateImageWrapper}>
          <Image
            src="/certificate.jpg"
            alt="Aberdeen Trusted Trader Certificate"
            width={1448}
            height={2048}
            className={styles.certificateImage}
            sizes="(max-width: 768px) 90vw, 480px"
          />
        </div>
        <p className={styles.certificateCaption}>
          Member of Aberdeen Trusted Trader scheme, supported by Police Scotland and Aberdeen
          City Council. <strong>Certificate valid until 26/07/2026.</strong>
        </p>
      </div>
    </section>
  );
};

export default Certificate;
