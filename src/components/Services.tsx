'use client';

import Link from 'next/link';
import type { ReactElement } from 'react';
import useScrollAnimation from '@/utils/useScrollAnimation';
import { SERVICE_PAGES } from '@/data/services';
import type { Service } from '@/types';
import styles from './Services.module.css';

/* The five services offered, in display order. Kitchen fitting was
   discontinued (a full kitchen project is too much for a single
   tradesperson) and removed from this list entirely. */
const SERVICES_LIST: Service[] = [
  {
    title: 'Painting and Decorating',
    description:
      'Expert interior and exterior painting throughout Aberdeen. From a single freshly painted room to a full house redecoration, we prepare every surface properly and deliver a premium, long-lasting finish with meticulous attention to detail.',
    details: [
      'Interior and exterior painting',
      'Wall colour changes and full redecoration',
      'Surface preparation and repairs',
      'Premium, long-lasting finishes',
    ],
  },
  {
    title: 'Plastering and Taping',
    description:
      'Professional drywall, artex, and ames taping for flawless, smooth finishes every time. Whether it is repairing damaged plasterboard or finishing a new wall, every surface is prepared to the highest standard before any paint goes on.',
    details: [
      'Drywall installation and repair',
      'Artex and ames taping',
      'Surface preparation for painting',
      'Smooth, flawless finishes',
    ],
  },
  {
    title: 'Carpentry and Joinery',
    description:
      'Bespoke joinery work and carpentry for custom solutions that fit perfectly. From door frames and skirting to custom-built fittings, carpentry work is finished to the same high standard as the rest of the job.',
    details: [
      'Bespoke joinery',
      'Door and frame fitting',
      'Skirting and trim work',
      'Custom-built fittings',
    ],
  },
  {
    title: 'Bathroom Refurbishment',
    description:
      'Complete bathroom renovations for Aberdeen homes, with professional tiling and installations. From a full retiling job to a complete refit, every stage is handled so your bathroom is finished to a high standard.',
    details: [
      'Full bathroom renovations',
      'Professional tiling',
      'Fixture and fitting installation',
      'Repairs and redecoration',
    ],
  },
  {
    title: 'Property Repair and Maintenance',
    description:
      'Repairs and ongoing maintenance work across Aberdeenshire, from damage repairs to general property upkeep. Every job starts with a clear assessment and an honest quote before any work begins.',
    details: [
      'Damage repair',
      'General property maintenance',
      'Honest, upfront quotes',
      'Coverage across Aberdeenshire',
    ],
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
  const servicePage = SERVICE_PAGES.find((page) => page.title === service.title);

  return (
    <div
      ref={cardRef}
      className={`${styles.serviceCard} scroll-animate scroll-animate-stagger ${
        isVisible ? 'visible' : ''
      }`}
    >
      <h3 className={styles.serviceCardTitle}>{service.title}</h3>
      <p className={styles.serviceCardDescription}>{service.description}</p>
      {service.details && (
        <ul className={styles.serviceCardDetailsList}>
          {service.details.map((detail) => (
            <li key={detail} className={styles.serviceCardDetailsListItem}>
              {detail}
            </li>
          ))}
        </ul>
      )}
      {servicePage && (
        <Link href={servicePage.href} className={styles.serviceCardCta}>
          {/* This link's ::after stretches over the whole card, so a click
              anywhere on the card navigates to the service page. */}
          <span className={styles.serviceCardCtaText}>Learn more →</span>
        </Link>
      )}
    </div>
  );
};

/*
  Services Component
  Displays a grid of 5 service cards with hover effects.
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
