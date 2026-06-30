import type { Metadata } from 'next';
import type { ReactElement } from 'react';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Carpenter and Joiner in Aberdeen | Bespoke Joinery',
  description:
    'Bespoke carpentry and joinery in Aberdeen, from door frames and skirting to custom-built fittings. Trusted Trader, 5-star rated. Free quotes.',
  alternates: {
    canonical: '/carpentry-and-joinery-aberdeen',
  },
  openGraph: {
    title: 'Carpentry and Joinery in Aberdeen | M.S. Renovation',
    description:
      'Bespoke joinery and carpentry across Aberdeen and Aberdeenshire, finished to a high standard. 5-star Trusted Trader. Free quotes.',
    url: '/carpentry-and-joinery-aberdeen',
    images: [
      '/images/projects/msrenovation/before-after/after/msrenovation-after-staircase-finish-01.jpg',
    ],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Carpentry and Joinery in Aberdeen',
  serviceType: 'Carpentry and Joinery',
  provider: { '@id': 'https://msrenovation.co.uk/#business' },
  areaServed: [
    { '@type': 'City', name: 'Aberdeen' },
    { '@type': 'Region', name: 'Aberdeenshire' },
  ],
  url: 'https://msrenovation.co.uk/carpentry-and-joinery-aberdeen',
};

/* Carpentry and Joinery service page. Targets "carpenter joiner
   Aberdeen" through its title, H1, and URL. */
export default function CarpentryAndJoineryPage(): ReactElement {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServicePage
        headline="Carpentry and Joinery in Aberdeen"
        tagline="Bespoke joinery and carpentry, fitted to the same high standard as the rest of the job."
        introParagraphs={[
          'Need a carpenter or joiner in Aberdeen? M.S. Renovation takes on bespoke joinery and carpentry for solutions that fit your home perfectly, from door frames and skirting through to custom-built fittings. We are a member of the Aberdeen Trusted Trader scheme and hold a 5.0 star rating from 16 verified reviews.',
          'Carpentry is finished to the same high standard as everything else we do, so it sits neatly alongside any painting, plastering, or refurbishment work.',
        ]}
        includesHeading="What carpentry and joinery includes"
        includes={[
          'Bespoke joinery',
          'Door and frame fitting',
          'Skirting and trim work',
          'Custom-built fittings',
        ]}
        detailParagraphs={[
          'Good joinery is measured carefully, cut accurately, and fitted so the joints are tight and the lines are clean. Whether it is a one-off fitting or trim throughout a room, the work is done to last and to look right once it is painted.',
        ]}
        callout="Every carpentry job starts with a clear assessment and an honest, no-obligation quote. There is never a charge for the quote itself, and we give you a realistic timeframe with it."
        areasHeading="Areas we cover"
        areas={[
          'Aberdeen',
          'Bridge of Don',
          'Dyce',
          'Cove Bay',
          'Bucksburn',
          'Westhill',
          'Portlethen',
          'Aberdeenshire',
        ]}
      />
    </>
  );
}
