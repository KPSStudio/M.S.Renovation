import type { Metadata } from 'next';
import type { ReactElement } from 'react';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Plastering and Taping in Aberdeen | Drywall and Smooth Finishes',
  description:
    'Professional plastering, drywall, artex, and ames taping in Aberdeen for smooth, flawless walls. Trusted Trader, 5-star rated. Free quotes.',
  alternates: {
    canonical: '/plastering-aberdeen',
  },
  openGraph: {
    title: 'Plastering and Taping in Aberdeen | M.S. Renovation',
    description:
      'Drywall, artex, and ames taping for smooth, flawless walls across Aberdeen and Aberdeenshire. 5-star Trusted Trader. Free quotes.',
    url: '/plastering-aberdeen',
    images: [
      '/images/projects/msrenovation/before-after/after/msrenovation-after-living-room-01.jpg',
    ],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Plastering and Taping in Aberdeen',
  serviceType: 'Plastering',
  provider: { '@id': 'https://msrenovation.co.uk/#business' },
  areaServed: [
    { '@type': 'City', name: 'Aberdeen' },
    { '@type': 'Region', name: 'Aberdeenshire' },
  ],
  url: 'https://msrenovation.co.uk/plastering-aberdeen',
};

/* Plastering and Taping service page. Targets "plasterer Aberdeen"
   through its title, H1, and URL. */
export default function PlasteringPage(): ReactElement {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServicePage
        headline="Plastering and Taping in Aberdeen"
        tagline="Drywall, artex, and ames taping for smooth, flawless walls across Aberdeen and Aberdeenshire."
        introParagraphs={[
          'Looking for a plasterer in Aberdeen? M.S. Renovation handles drywall, artex, and ames taping to give you flawless, smooth finishes, whether that means repairing damaged plasterboard or finishing a brand new wall. We are a member of the Aberdeen Trusted Trader scheme and hold a 5.0 star rating from 16 verified reviews.',
          'Plastering is the foundation of a good paint finish, so every surface is prepared to a high standard before any decoration goes on top.',
        ]}
        includesHeading="What plastering and taping includes"
        includes={[
          'Drywall installation and repair',
          'Artex and ames taping',
          'Surface preparation for painting',
          'Smooth, flawless finishes',
        ]}
        detailParagraphs={[
          'Smooth walls do not happen by accident. Joints are taped and filled properly, surfaces are floated flat, and everything is checked before it is signed off, so the walls are ready to take paint without flaws showing through. If you are having other work done, the plastering ties straight into it.',
        ]}
        callout="Every plastering job starts with a clear assessment and an honest, no-obligation quote. There is never a charge for the quote itself, and we give you a realistic timeframe with it."
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
