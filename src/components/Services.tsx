'use client';

import type { ReactElement } from 'react';
import useScrollAnimation from '@/utils/useScrollAnimation';
import type { Service } from '@/types';
import styles from './Services.module.css';

/* The six services offered, in display order */
const SERVICES_LIST: Service[] = [
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

interface ServiceCardProps {
  service: Service;
}

/*
  ServiceCard
  A single card in the services grid. Uses useScrollAnimation so each
  card fades in independently as it scrolls into view. Pairs with the
  global "scroll-animate"/"scroll-animate-stagger" utility classes from
  globals.css, which stagger the animation-delay by nth-child position.
*/
const ServiceCard = ({ service }: ServiceCardProps): ReactElement => {
  const [cardRef, isVisible] = useScrollAnimation();

  return (
    <div
      ref={cardRef}
      className={`${styles.serviceCard} scroll-animate scroll-animate-stagger ${
        isVisible ? 'visible' : ''
      }`}
    >
      <h3 className={styles.serviceCardTitle}>{service.title}</h3>
      <p className={styles.serviceCardDescription}>{service.description}</p>
    </div>
  );
};

/*
  Services Component
  Displays a grid of 6 service cards with hover effects.
  Each card shows a service title and description, and animates in
  on scroll with staggered timing.
*/
const Services = (): ReactElement => {
  return (
    <section id="services" className={styles.servicesSection}>
      <h2 className={styles.sectionHeading}>What We Do</h2>
      <div className={styles.servicesGrid}>
        {SERVICES_LIST.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
