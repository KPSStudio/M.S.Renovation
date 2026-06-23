'use client';

import { useEffect, useRef, useState, type ReactElement } from 'react';
import type { Review } from '@/types';
import styles from './Reviews.module.css';

/* The 5 reviews shown in the carousel, taken from Trusted Trader */
const REVIEWS_LIST: Review[] = [
  {
    text:
      'Repair to ceilings after leak, and redecoration. Absolutely delighted with the quality and finish of the work done. Maciej was very helpful, and his skill and attention to detail was excellent. Definitely highly recommend him!',
    author: 'Zoe',
    budget: '£1,001 - £5,000',
  },
  {
    text:
      'We had storm damage repair on our property. Matt has done an excellent job he is a perfectionist. I can highly recommend him for any kind of repair work.',
    author: 'Mrs Linda Argo',
    budget: '£5,001 - £25,000',
  },
  {
    text:
      'Matt helped me plaster, paint and insulate three bedrooms as well as installed new lighting. He is very meticulous and his attention to detail is incredible. Will not trust anyone else to work on my house!',
    author: 'Houry Kevorkian',
    budget: '£5,001 - £25,000',
  },
  {
    text:
      'Excellent service, great value for the money, extra touch to details. I would definitely recommend this service to everyone.',
    author: 'Victoria Argo',
    budget: '£1 - £1,000',
  },
  {
    text:
      "We were so pleased with the standard of work. Rooms were cleaned and tidied on completion. Real attention to detail and high standard. We wouldn't hesitate to recommend.",
    author: 'Malcolm',
    budget: '£1,001 - £5,000',
  },
];

const AUTO_ROTATE_INTERVAL_MS = 5000;
const TOTAL_SLIDES = REVIEWS_LIST.length;

/*
  Reviews Component
  Auto-rotating testimonial carousel. Advances every 5 seconds, can be
  navigated manually with the prev/next arrow buttons or by clicking a
  dot indicator. Any manual interaction resets the auto-rotate timer
  so it doesn't immediately jump again right after a manual change.
*/
const Reviews = (): ReactElement => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const autoRotateTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goToSlide = (slideIndex: number): void => {
    setCurrentSlide(slideIndex);
  };

  const goToNextSlide = (): void => {
    setCurrentSlide((slide) => (slide + 1) % TOTAL_SLIDES);
  };

  const goToPreviousSlide = (): void => {
    setCurrentSlide((slide) => (slide - 1 + TOTAL_SLIDES) % TOTAL_SLIDES);
  };

  // Restarts the auto-rotate timer whenever the slide changes, whether
  // that change came from the timer itself or a manual click
  useEffect(() => {
    autoRotateTimerRef.current = setInterval(goToNextSlide, AUTO_ROTATE_INTERVAL_MS);
    return () => {
      if (autoRotateTimerRef.current) clearInterval(autoRotateTimerRef.current);
    };
  }, [currentSlide]);

  return (
    <section className={styles.reviewsSection} id="reviews">
      <h2 className={styles.sectionHeading}>What Clients Say</h2>
      <p className={styles.sectionSubtext}>
        Real feedback from real projects. 5.0 star rated on Trusted Trader from 16 reviews.
      </p>

      <div className={styles.carouselContainer}>
        {/* Track shifts left by 100% per slide to reveal the active review */}
        <div
          className={styles.carouselTrack}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {REVIEWS_LIST.map((review) => (
            <div className={styles.reviewCard} key={review.author}>
              <div>
                <div className={styles.reviewStars} aria-hidden="true">
                  ★★★★★
                </div>
                <p className={styles.reviewText}>&quot;{review.text}&quot;</p>
              </div>
              <div>
                <div className={styles.reviewAuthor}>{review.author}</div>
                <div className={styles.reviewBudgetValue}>{review.budget}</div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.carouselControls}>
          <button
            type="button"
            className={styles.carouselArrowButton}
            onClick={goToPreviousSlide}
            aria-label="Previous review"
          >
            ‹
          </button>

          <div className={styles.carouselDotsWrapper}>
            {REVIEWS_LIST.map((review, index) => (
              <button
                type="button"
                key={review.author}
                onClick={() => goToSlide(index)}
                aria-label={`Go to review ${index + 1}`}
                className={
                  index === currentSlide
                    ? `${styles.carouselDot} ${styles.carouselDotActive}`
                    : styles.carouselDot
                }
              />
            ))}
          </div>

          <button
            type="button"
            className={styles.carouselArrowButton}
            onClick={goToNextSlide}
            aria-label="Next review"
          >
            ›
          </button>
        </div>

        <div className={styles.slideCounter}>
          {currentSlide + 1} of {TOTAL_SLIDES}
        </div>
      </div>

      <a
        href="https://www.trustedtrader.scot/Aberdeen/MSRenovation-0001955.html"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.trustedTraderLink}
      >
        See all 16 reviews on Trusted Trader →
      </a>
    </section>
  );
};

export default Reviews;
