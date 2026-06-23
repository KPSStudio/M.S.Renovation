import Link from 'next/link';
import type { Metadata } from 'next';
import type { ReactElement } from 'react';
import Navigation from '@/components/layout/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Certificate from '@/components/Certificate';
import Reviews from '@/components/Reviews';
import ServiceAreas from '@/components/ServiceAreas';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import homeStyles from './page.module.css';

export const metadata: Metadata = {
  title: {
    absolute: 'Painter and Decorator in Aberdeen | Home Improvements | 5-Star',
  },
  description:
    'Professional painter and decorator in Aberdeen, Scotland. Trusted Trader certified, 5-star rated. Free quotes on 07572 916190.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'M.S. Renovation - Professional Home Improvements in Aberdeen',
    description:
      'Quality painting, decorating, and home renovation services. 5-star Trusted Trader. Free consultations available.',
    url: '/',
  },
};

/*
  Homepage
  Assembles the full brochure page: the full Navigation header, Hero,
  Services, Why Choose Us, the "Our Work" call-to-action section
  (linking through to the full gallery page), the Trusted Trader
  Certificate, the Reviews carousel, Service Areas, the FAQ accordion,
  and the Contact form, in that order.
*/
export default function HomePage(): ReactElement {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />

        {/* "Our Work" section: the nav's "Our Work" link scrolls here.
            Its button links through to the full gallery page. */}
        <section id="our-work" className={homeStyles.galleryCallToActionSection}>
          <h2 className={homeStyles.galleryCallToActionHeading}>See Our Work</h2>
          <p className={homeStyles.galleryCallToActionText}>
            Explore real photos from our completed jobs, showcasing the quality and attention
            to detail that sets us apart.
          </p>
          <Link href="/gallery" className={homeStyles.galleryCallToActionButton}>
            View Gallery →
          </Link>
        </section>

        <Certificate />
        <Reviews />
        <ServiceAreas />
        <FAQ />
        <Contact />
      </main>
    </>
  );
}
