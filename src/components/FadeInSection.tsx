'use client';

import type { ReactElement, ReactNode } from 'react';
import useScrollAnimation from '@/utils/useScrollAnimation';

interface FadeInSectionProps {
  children: ReactNode;
}

/*
  FadeInSection
  Generic scroll fade-in wrapper for server-component pages that
  can't use the useScrollAnimation hook directly (a page exporting
  `metadata` can't also be a client component). Wraps its children in
  a div that fades in via the existing global "scroll-animate"
  utility classes from globals.css once it scrolls into view.
*/
const FadeInSection = ({ children }: FadeInSectionProps): ReactElement => {
  const [sectionRef, isVisible] = useScrollAnimation();

  return (
    <div ref={sectionRef} className={`scroll-animate ${isVisible ? 'visible' : ''}`}>
      {children}
    </div>
  );
};

export default FadeInSection;
