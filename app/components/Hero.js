import Link from 'next/link';
import styles from '../styles/Hero.module.css';

/*
  Hero Component
  The first thing visitors see: headline, subheading, a 5-star rating
  badge, and two call-to-action buttons (Get Your Quote, View Our Work).
  All entrance animation is handled in CSS via animation-delay, so this
  component itself has no client-side logic and can stay a server component.
*/
const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroHeadline}>Quality Renovation and Home Improvement</h1>
        <p className={styles.heroSubheading}>
          Trusted by families across Aberdeen. 5-star rated for attention to detail.
        </p>

        {/* Rating badge: filled stars plus the aggregate review count */}
        <div className={styles.ratingBadge}>
          <span className={styles.ratingStars} aria-hidden="true">
            ★★★★★
          </span>
          <span className={styles.ratingText}>5.0 from 16 reviews</span>
        </div>

        <div className={styles.callToActionButtons}>
          <Link href="#contact" className={`${styles.callToActionButton} ${styles.primaryButton}`}>
            Get Your Quote
          </Link>
          <Link href="/gallery" className={`${styles.callToActionButton} ${styles.secondaryButton}`}>
            View Our Work
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
