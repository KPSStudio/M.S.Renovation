import { useEffect, useRef, useState } from 'react';

interface UseCarouselResult {
  /* Index of the currently shown slide (0-based) */
  currentSlide: number;
  /* Jump straight to a specific slide (used by the dot indicators) */
  goToSlide: (slideIndex: number) => void;
  /* Advance to the next slide, wrapping back to the first after the last */
  goToNext: () => void;
  /* Go to the previous slide, wrapping to the last from the first */
  goToPrevious: () => void;
}

/*
  useCarousel
  Shared slide logic for the auto-rotating carousels on the site
  (the Reviews testimonial carousel and the Before/After photo
  carousels). Holds the current slide index and an auto-rotate timer
  that advances every `autoRotateIntervalMs`. The timer is recreated
  whenever the slide changes, whether the change came from the timer
  itself or from a manual click, so any manual interaction resets the
  countdown instead of letting it fire again immediately.

  The auto-advance uses a functional state update rather than calling
  goToNext, so the effect does not depend on a function recreated each
  render and there is no stale-closure footgun.
*/
export default function useCarousel(
  totalSlides: number,
  autoRotateIntervalMs: number
): UseCarouselResult {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const autoRotateTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goToSlide = (slideIndex: number): void => {
    setCurrentSlide(slideIndex);
  };

  const goToNext = (): void => {
    setCurrentSlide((slide) => (slide + 1) % totalSlides);
  };

  const goToPrevious = (): void => {
    setCurrentSlide((slide) => (slide - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    autoRotateTimerRef.current = setInterval(() => {
      setCurrentSlide((slide) => (slide + 1) % totalSlides);
    }, autoRotateIntervalMs);

    return () => {
      if (autoRotateTimerRef.current) clearInterval(autoRotateTimerRef.current);
    };
  }, [currentSlide, totalSlides, autoRotateIntervalMs]);

  return { currentSlide, goToSlide, goToNext, goToPrevious };
}
