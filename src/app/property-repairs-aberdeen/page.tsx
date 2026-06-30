import type { Metadata } from 'next';
import type { ReactElement } from 'react';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Property Repairs and Maintenance in Aberdeen | Aberdeenshire',
  description:
    'Property repairs and ongoing maintenance across Aberdeen and Aberdeenshire, from damage repairs to general upkeep. Trusted Trader, 5-star rated.',
  alternates: {
    canonical: '/property-repairs-aberdeen',
  },
  openGraph: {
    title: 'Property Repairs and Maintenance in Aberdeen | M.S. Renovation',
    description:
      'Repairs and ongoing property upkeep across Aberdeen and Aberdeenshire. 5-star Trusted Trader. Free, no-obligation quotes.',
    url: '/property-repairs-aberdeen',
    images: [
      '/images/projects/msrenovation/before-after/after/msrenovation-after-entrance-hallway-01.jpg',
    ],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Property Repairs and Maintenance in Aberdeen',
  serviceType: 'Property Repair and Maintenance',
  provider: { '@id': 'https://msrenovation.co.uk/#business' },
  areaServed: [
    { '@type': 'City', name: 'Aberdeen' },
    { '@type': 'Region', name: 'Aberdeenshire' },
  ],
  url: 'https://msrenovation.co.uk/property-repairs-aberdeen',
};

/* Property Repairs and Maintenance service page. Targets "property
   repairs Aberdeen" through its title, H1, and URL. */
export default function PropertyRepairsPage(): ReactElement {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServicePage
        headline="Property Repairs and Maintenance in Aberdeen"
        tagline="Repairs and ongoing property upkeep across Aberdeen and Aberdeenshire."
        introParagraphs={[
          'Need property repairs or maintenance in Aberdeen? M.S. Renovation takes on damage repairs and general property upkeep across Aberdeenshire, large or small. We are a member of the Aberdeen Trusted Trader scheme, supported by Police Scotland and Aberdeen City Council, with a 5.0 star rating from 16 verified reviews.',
          'From a single repair to ongoing maintenance, every job begins with a clear look at the work needed so nothing is a surprise later.',
        ]}
        includesHeading="What property repairs and maintenance includes"
        includes={[
          'Damage repair',
          'General property maintenance',
          'Honest, upfront quotes',
          'Coverage across Aberdeenshire',
        ]}
        detailParagraphs={[
          'Small jobs matter as much as big ones. Repairs are assessed properly, done correctly the first time, and left clean, so you are not chasing the same problem again. If a repair turns out to need more than expected, you hear about it before any extra work goes ahead.',
        ]}
        callout="Every repair starts with a clear assessment and an honest, no-obligation quote. There is never a charge for the quote itself, and we give you a realistic timeframe with it."
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
