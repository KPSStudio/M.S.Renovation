import Link from 'next/link';
import type { ReactElement } from 'react';
import Navigation from '@/components/layout/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Certificate from '@/components/Certificate';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';
import homeStyles from './page.module.css';

/*
  Homepage
  Assembles the full brochure page: the full Navigation header, Hero,
  Services, the "Our Work" call-to-action section (linking through to
  the full gallery page), the Trusted Trader Certificate, the Reviews
  carousel, and the Contact form, in that order.
*/
export default function HomePage(): ReactElement {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Services />

        {/* "Our Work" section: the nav's "Our Work" link scrolls here.
            Its button links through to the full gallery page. */}
        <section id="our-work" className={homeStyles.galleryCallToActionSection}>
          <h2 className={homeStyles.galleryCallToActionHeading}>See Our Work</h2>
          <p className={homeStyles.galleryCallToActionText}>
            Explore our portfolio of completed projects. From water damage repairs to full
            bathroom renovations, we showcase the quality and attention to detail that sets us
            apart.
          </p>
          <Link href="/gallery" className={homeStyles.galleryCallToActionButton}>
            View Gallery →
          </Link>
        </section>

        <Certificate />
        <Reviews />
        <Contact />
      </main>
    </>
  );
}
