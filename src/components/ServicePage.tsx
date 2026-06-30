import Link from 'next/link';
import type { ReactElement } from 'react';
import GalleryNavigation from '@/components/layout/GalleryNavigation';
import FadeInSection from '@/components/FadeInSection';
import ServiceFeatureGrid from '@/components/ServiceFeatureGrid';
import styles from './ServicePage.module.css';

export interface ServicePageProps {
  /* H1 heading, e.g. "Bathroom Refurbishment in Aberdeen" */
  headline: string;
  /* One-line subheading shown under the H1 in the header banner */
  tagline: string;
  /* Body paragraphs. The first is rendered larger and darker as a lead. */
  introParagraphs: string[];
  /* Heading above the card grid, e.g. "What's included" */
  includesHeading: string;
  /* The items shown as animated hover cards (ServiceFeatureGrid) */
  includes: string[];
  /* Closing paragraph(s): process, quality, and so on */
  detailParagraphs: string[];
  /* Optional highlighted promise box (the free-quote line, for example) */
  callout?: string;
  /* Optional heading above the area chips, e.g. "Areas we cover" */
  areasHeading?: string;
  /* Optional list of covered locations, shown as rounded hover chips */
  areas?: string[];
}

/*
  ServicePage
  Reusable layout for every individual service page. Each service
  route supplies only its own words and metadata, then renders this
  component, so all the service pages share one consistent structure
  and stylesheet.

  Life and motion match the homepage: the header text fades up while a
  star rating badge scales in; each body block fades in on scroll; the
  "what's included" items are a grid of cards that lift and glow on
  hover; the opening line is a larger lead; the free-quote promise sits
  in a highlighted box that nudges on hover; and the covered areas are
  rounded chips that lift on hover. Uses the simplified
  GalleryNavigation rather than the homepage anchor menu, and the
  shared Footer is added by the root layout.
*/
const ServicePage = ({
  headline,
  tagline,
  introParagraphs,
  includesHeading,
  includes,
  detailParagraphs,
  callout,
  areasHeading,
  areas,
}: ServicePageProps): ReactElement => {
  const [leadParagraph, ...remainingIntro] = introParagraphs;

  return (
    <>
      <GalleryNavigation />
      <main>
        <section className={styles.pageHeader}>
          <FadeInSection>
            <h1 className={styles.pageHeaderTitle}>{headline}</h1>
            <p className={styles.pageHeaderText}>{tagline}</p>
            <div className={styles.ratingBadge}>
              <span className={styles.ratingStars} aria-hidden="true">
                ★★★★★
              </span>
              <span className={styles.ratingText}>5.0 from 16 reviews</span>
            </div>
          </FadeInSection>
        </section>

        <section className={styles.content}>
          <FadeInSection>
            {leadParagraph && <p className={styles.lead}>{leadParagraph}</p>}
            {remainingIntro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </FadeInSection>

          <FadeInSection>
            <h2 className={styles.includesHeading}>{includesHeading}</h2>
          </FadeInSection>

          <ServiceFeatureGrid items={includes} />

          <FadeInSection>
            {detailParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </FadeInSection>

          {callout && (
            <FadeInSection>
              <div className={styles.callout}>
                <span className={styles.calloutIcon} aria-hidden="true">
                  ✓
                </span>
                <p className={styles.calloutText}>{callout}</p>
              </div>
            </FadeInSection>
          )}

          {areasHeading && areas && areas.length > 0 && (
            <FadeInSection>
              <h2 className={styles.areasHeading}>{areasHeading}</h2>
              <div className={styles.areasList}>
                {areas.map((area) => (
                  <span key={area} className={styles.areaTag}>
                    {area}
                  </span>
                ))}
              </div>
            </FadeInSection>
          )}
        </section>

        <section className={styles.callToActionSection}>
          <FadeInSection>
            <h2 className={styles.callToActionHeading}>Ready to Get Started?</h2>
            <p className={styles.callToActionText}>
              Tell us about your project for a free, no-obligation quote. There is no charge for
              the quote, and no pressure to commit.
            </p>
            <Link href="/#contact" className={styles.callToActionButton}>
              Get a Free Quote
            </Link>
          </FadeInSection>
        </section>
      </main>
    </>
  );
};

export default ServicePage;
