'use client';

import { useEffect, useRef, useState } from 'react';

/*
  useScrollAnimation
  Reusable Intersection Observer hook for the scroll fade-in effect.
  Returns a ref to attach to the element and a boolean that flips to
  true once the element has scrolled into view (10% visible).
  The observer unobserves itself after triggering once, so the
  animation only ever plays a single time per element.
*/
export default function useScrollAnimation(threshold = 0.1) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return [elementRef, isVisible];
}
