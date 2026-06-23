import type { Metadata, Viewport } from "next";
import type { ReactElement, ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/Footer";
import schema from "./schema.json";
import "./globals.css";

const SITE_URL = "https://msrenovation.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "M.S. Renovation | Painter and Decorator in Aberdeen",
    template: "%s | M.S. Renovation",
  },
  description:
    "Professional painter, decorator and home improvements in Aberdeen, Scotland. Trusted Trader certified, 5-star rated. Free quotes on 07572 916190.",
  keywords: [
    "painter decorator Aberdeen",
    "painter Aberdeen",
    "decorator Aberdeen",
    "home improvements Aberdeen",
    "bathroom renovation Aberdeen",
    "painting services Scotland",
    "trusted trader painter",
    "property repairs Aberdeen",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: "M.S. Renovation",
    title: "M.S. Renovation | Painter and Decorator in Aberdeen",
    description:
      "Quality home improvement and renovation services in Aberdeen. 5-star rated, Trusted Trader certified. Painting, decorating, bathrooms, repairs, and more.",
  },
  twitter: {
    card: "summary",
    title: "M.S. Renovation | Painter and Decorator in Aberdeen",
    description:
      "Professional home improvements and renovation services in Aberdeen, Scotland.",
  },
  verification: {
    google: "ig_KRNjnOxjAzocFMJUgKAliHFSck74VCABBnj7uQ2o",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

/*
  Root Layout
  Wraps every page with the shared Footer, the LocalBusiness/FAQ
  structured data, and Vercel Analytics, and loads the global
  stylesheet (resets, color palette, fonts, and the shared
  scroll-animation classes used across components). The header is
  page-specific rather than shared here: the homepage uses the full
  Navigation, the gallery page uses the simplified GalleryNavigation.
*/
export default function RootLayout({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body>
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
