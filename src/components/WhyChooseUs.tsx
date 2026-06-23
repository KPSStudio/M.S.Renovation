'use client';

import type { ReactElement } from 'react';
import useScrollAnimation from '@/utils/useScrollAnimation';
import styles from './WhyChooseUs.module.css';

interface Reason {
  icon: string;
  title: string;
  description: string;
}

/* Each reason restates a fact already established elsewhere on the
   site (Trusted Trader membership, the review rating, the services
   list, the free-quote process) rather than a new, unverifiable
   claim such as a response-time guarantee or a trading start date. */
const REASONS_LIST: Reason[] = [
  {
    icon: '✓',
    title: 'Trusted Trader Certified',
    description:
      'Member of the Aberdeen Trusted Trader scheme, supported by Police Scotland and Aberdeen City Council.',
  },
  {
    icon: '★',
    title: '5.0 Star Rating from 16 Reviews',
    description: 'A verified rating built on real, completed jobs for real customers.',
  },
  {
    icon: '◆',
    title: 'Meticulous Attention to Detail',
    description: 'Every surface is prepared properly before any finishing work begins.',
  },
  {
    icon: '✦',
    title: 'Free, No-Obligation Quotes',
    description: "Get a clear, honest quote for your project before committing to anything.",
  },
  {
    icon: '⌂',
    title: 'Local to Aberdeen',
    description: 'Based in Aberdeen and serving the surrounding Aberdeenshire area.',
  },
  {
    icon: '▣',
    title: 'A Wide Range of Services',
    description:
      'Painting, plastering, carpentry, bathroom refurbishment, and property repair, all from one contractor.',
  },
];

interface ReasonCardProps {
  reason: Reason;
}

/*
  ReasonCard
  A single card in the reasons grid. Uses useScrollAnimation so each
  card fades in independently as it scrolls into view, matching the
  same pattern as ServiceCard in Services.tsx.
*/
const ReasonCard = ({ reason }: ReasonCardProps): ReactElement => {
  const [cardRef, isVisible] = useScrollAnimation();

  return (
    <div
      ref={cardRef}
      className={`${styles.reasonCard} scroll-animate scroll-animate-stagger ${
        isVisible ? 'visible' : ''
      }`}
    >
      <div className={styles.reasonIcon} aria-hidden="true">
        {reason.icon}
      </div>
      <h3 className={styles.reasonTitle}>{reason.title}</h3>
      <p className={styles.reasonDescription}>{reason.description}</p>
    </div>
  );
};

/*
  WhyChooseUs Component
  Six short reasons to choose M.S. Renovation, each fading in
  independently on scroll. Sits between Services and the "Our Work"
  call-to-action on the homepage.
*/
const WhyChooseUs = (): ReactElement => {
  return (
    <section className={styles.whyChooseUsSection} id="why-choose-us">
      <h2 className={styles.sectionHeading}>Why Choose M.S. Renovation</h2>
      <p className={styles.sectionSubtext}>
        Professional certification, a proven reputation, and meticulous craftsmanship on
        every job.
      </p>

      <div className={styles.reasonsGrid}>
        {REASONS_LIST.map((reason) => (
          <ReasonCard key={reason.title} reason={reason} />
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
