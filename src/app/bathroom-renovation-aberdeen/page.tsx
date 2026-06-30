import type { Metadata } from 'next';
import type { ReactElement } from 'react';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Bathroom Refurbishment in Aberdeen | Tiling and Full Refits',
  description:
    'Complete bathroom refurbishment in Aberdeen, from retiling to full refits. Trusted Trader certified, 5-star rated. Free quotes on 07572 916190.',
  alternates: {
    canonical: '/bathroom-renovation-aberdeen',
  },
  openGraph: {
    title: 'Bathroom Refurbishment in Aberdeen | M.S. Renovation',
    description:
      'Professional bathroom renovations and tiling across Aberdeen and Aberdeenshire. 5-star Trusted Trader. Free, no-obligation quotes.',
    url: '/bathroom-renovation-aberdeen',
    images: [
      '/images/projects/msrenovation/before-after/after/msrenovation-after-bathroom-fit-out-01.jpg',
    ],
  },
};

/* Lightweight Service structured data for this page, linked back to the
   LocalBusiness defined in src/app/schema.json via its @id. Helps Google
   understand that this specific page is about one named service offered
   by the business, in a defined area. */
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Bathroom Refurbishment in Aberdeen',
  serviceType: 'Bathroom Refurbishment',
  provider: { '@id': 'https://msrenovation.co.uk/#business' },
  areaServed: [
    { '@type': 'City', name: 'Aberdeen' },
    { '@type': 'Region', name: 'Aberdeenshire' },
  ],
  url: 'https://msrenovation.co.uk/bathroom-renovation-aberdeen',
};

/*
  Bathroom Refurbishment service page.
  Supplies the page's words and metadata, then renders the shared
  ServicePage layout. Targets the search phrase "bathroom renovation
  Aberdeen" through its title, H1, and URL.
*/
export default function BathroomRenovationPage(): ReactElement {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServicePage
        headline="Bathroom Refurbishment in Aberdeen"
        tagline="Professional bathroom renovations, tiling, and refits across Aberdeen and Aberdeenshire."
        introParagraphs={[
          'Looking for a complete bathroom refurbishment in Aberdeen? M.S. Renovation takes on bathroom projects of every size, from a single retiling job to a full refit, with each stage carried out to a high and lasting standard. We are a member of the Aberdeen Trusted Trader scheme, supported by Police Scotland and Aberdeen City Council, and hold a 5.0 star rating from 16 verified reviews.',
          'Whether you are updating a tired family bathroom or fitting out a brand new space, we handle the tiling, the fixtures, and the finishing, and leave the room clean and tidy on completion.',
        ]}
        includesHeading="What a bathroom refurbishment includes"
        includes={[
          'Full bathroom renovations',
          'Professional wall and floor tiling',
          'Fixture and fitting installation',
          'Repairs and redecoration',
        ]}
        detailParagraphs={[
          'Bathrooms are unforgiving rooms to get wrong, so preparation matters. Surfaces are prepared properly before tiling, fittings are installed squarely and sealed correctly, and everything is checked over before the job is considered finished. The same attention to detail our customers mention in their reviews goes into every bathroom we work on.',
        ]}
        callout="Every bathroom project starts with a clear assessment and an honest, no-obligation quote. There is never a charge for the quote itself, and we give you a realistic timeframe with it."
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
