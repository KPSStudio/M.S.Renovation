import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './styles/globals.css';

export const metadata = {
  title: 'M.S. Renovation | Premium Home Improvement Aberdeen',
  description:
    'M.S. Renovation is a 5-star rated home improvement and renovation business serving Aberdeen, Scotland. Painting, plastering, carpentry, bathroom and kitchen fitting, and property repair.',
};

/*
  Root Layout
  Wraps every page with the shared Navigation header and Footer, and
  loads the global stylesheet (resets, color palette, fonts, and the
  shared scroll-animation classes used across components).
*/
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
