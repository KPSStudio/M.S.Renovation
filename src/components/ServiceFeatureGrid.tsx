'use client';

import type { ReactElement } from 'react';
import useScrollAnimation from '@/utils/useScrollAnimation';
import styles from './ServiceFeatureGrid.module.css';

interface FeatureCardProps {
  label: string;
}

/*
  FeatureCard
  A single "what's included" card. Uses useScrollAnimation so each card
  fades in independently as it scrolls into view, paired with the global
  "scroll-animate"/"scroll-animate-stagger" utility classes that stagger
  the delay by nth-child position, exactly like the homepage cards.
*/
const FeatureCard = ({ label }: FeatureCardProps): ReactElement => {
  const [cardRef, isVisible] = useScrollAnimation();

  return (
    <div
      ref={cardRef}
      className={`${styles.featureCard} scroll-animate scroll-animate-stagger ${
        isVisible ? 'visible' : ''
      }`}
    >
      <span className={styles.featureIcon} aria-hidden="true">
        ✓
      </span>
      <span className={styles.featureLabel}>{label}</span>
    </div>
  );
};

interface ServiceFeatureGridProps {
  items: string[];
}

/*
  ServiceFeatureGrid
  The "what's included" list shown as a grid of cards that lift, glow
  with a diagonal light sweep, and gain a stone-dark border on hover,
  and fade in with staggered timing on scroll. This is what makes the
  service pages feel as alive as the homepage rather than a flat block
  of text.
*/
const ServiceFeatureGrid = ({ items }: ServiceFeatureGridProps): ReactElement => {
  return (
    <div className={styles.featureGrid}>
      {items.map((item) => (
        <FeatureCard key={item} label={item} />
      ))}
    </div>
  );
};

export default ServiceFeatureGrid;
