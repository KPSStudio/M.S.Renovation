'use client';

import useScrollAnimation from '../hooks/useScrollAnimation';
import styles from '../styles/Services.module.css';

/* The six services offered, in display order */
const SERVICES_LIST = [
  {
    title: 'Painting and Decorating',
    description:
      'Expert interior and exterior painting with premium finishes and meticulous attention to detail.',
  },
  {
    title: 'Plastering and Taping',
    description:
      'Professional drywall, artex, and ames taping for flawless, smooth finishes every time.',
  },
  {
    title: 'Carpentry and Joinery',
    description: 'Bespoke joinery work and carpentry for custom solutions that fit perfectly.',
  },
  {
    title: 'Bathroom Refurbishment',
    description: 'Complete bathroom renovations with professional tiling and installations.',
  },
  {
    title: 'Kitchen Fitting',
    description:
      'Professional kitchen installation and finishing work to your exact specifications.',
  },
  {
    title: 'Property Repair and Maintenance',
    description: 'Rapid response to damage, repairs, and ongoing maintenance work.',
  },
];

/*
  ServiceCard
  A single card in the services grid. Uses useScrollAnimation so each
  card fades in independently as it scrolls into view, with a stagger
  delay based on its position (1st/2nd/3rd column pattern repeats).
  props: { title: string, description: string, delayIndex: number }
*/
const ServiceCard = ({ title, description, delayIndex }) => {
  const [cardRef, isVisible] = useScrollAnimation();
  const delayClassName = `scrollAnimateDelay${(delayIndex % 3) + 1}`;

  return (
    <div
      ref={cardRef}
      className={`${styles.serviceCard} scrollAnimate ${delayClassName} ${
        isVisible ? 'visible' : ''
      }`}
    >
      <h3 className={styles.serviceCardTitle}>{title}</h3>
      <p className={styles.serviceCardDescription}>{description}</p>
    </div>
  );
};

/*
  Services Component
  Displays a grid of 6 service cards with hover effects.
  Each card shows a service title and description, and animates in
  on scroll with staggered timing.
*/
const Services = () => {
  return (
    <section id="services" className={styles.servicesSection}>
      <h2 className={styles.sectionHeading}>What We Do</h2>
      <div className={styles.servicesGrid}>
        {SERVICES_LIST.map((service, index) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            delayIndex={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
