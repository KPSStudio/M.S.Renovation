import type { Metadata } from 'next';
import type { ReactElement } from 'react';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Painter and Decorator in Aberdeen | Interior and Exterior',
  description:
    'Professional painting and decorating in Aberdeen, interior and exterior. Trusted Trader certified, 5-star rated. Free quotes on 07572 916190.',
  alternates: {
    canonical: '/painting-and-decorating-aberdeen',
  },
  openGraph: {
    title: 'Painting and Decorating in Aberdeen | M.S. Renovation',
    description:
      'Interior and exterior painting and decorating across Aberdeen and Aberdeenshire. 5-star Trusted Trader. Free, no-obligation quotes.',
    url: '/painting-and-decorating-aberdeen',
    images: [
      '/images/projects/msrenovation/before-after/after/msrenovation-after-painted-room-green-01.jpg',
    ],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Painting and Decorating in Aberdeen',
  serviceType: 'Painting and Decorating',
  provider: { '@id': 'https://msrenovation.co.uk/#business' },
  areaServed: [
    { '@type': 'City', name: 'Aberdeen' },
    { '@type': 'Region', name: 'Aberdeenshire' },
  ],
  url: 'https://msrenovation.co.uk/painting-and-decorating-aberdeen',
};

/* Painting and Decorating service page. Targets "painter and decorator
   Aberdeen" through its title, H1, and URL. */
export default function PaintingAndDecoratingPage(): ReactElement {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServicePage
        headline="Painting and Decorating in Aberdeen"
        tagline="Interior and exterior painting and decorating across Aberdeen and Aberdeenshire."
        introParagraphs={[
          'Need a painter and decorator in Aberdeen? M.S. Renovation covers everything from a single freshly painted room to a full house redecoration, preparing every surface properly so the finish is premium and long-lasting. We are a member of the Aberdeen Trusted Trader scheme, supported by Police Scotland and Aberdeen City Council, with a 5.0 star rating from 16 verified reviews.',
          'Whether you want to refresh one wall, change the colour throughout, or repaint the outside of your home, the work is carried out cleanly and tidily with meticulous attention to detail.',
        ]}
        includesHeading="What painting and decorating includes"
        includes={[
          'Interior and exterior painting',
          'Wall colour changes and full redecoration',
          'Surface preparation and repairs',
          'Premium, long-lasting finishes',
        ]}
        detailParagraphs={[
          'A good finish is mostly about preparation. Surfaces are filled, sanded, and primed where needed before any topcoat goes on, edges are cut in cleanly, and the space is protected and left tidy at the end of each day. The attention to detail our customers mention in their reviews is exactly what goes into the painting work.',
        ]}
        callout="Every painting and decorating job starts with a clear assessment and an honest, no-obligation quote. There is never a charge for the quote itself, and we give you a realistic timeframe with it."
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
