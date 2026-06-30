'use client';

import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import type { ReactElement } from 'react';
import useScrollAnimation from '@/utils/useScrollAnimation';
import useCarousel from '@/utils/useCarousel';
import beforeLivingRoomPlastered from '../../public/images/projects/msrenovation/before-after/before/msrenovation-before-living-room-plastered-01.jpg';
import beforeStructuralOpeningOne from '../../public/images/projects/msrenovation/before-after/before/msrenovation-before-structural-opening-01.jpg';
import beforePlasteredAlcove from '../../public/images/projects/msrenovation/before-after/before/msrenovation-before-plastered-alcove-01.jpg';
import beforeStructuralOpeningTwo from '../../public/images/projects/msrenovation/before-after/before/msrenovation-before-structural-opening-02.jpg';
import beforeHallwayPlastered from '../../public/images/projects/msrenovation/before-after/before/msrenovation-before-hallway-plastered-01.jpg';
import beforeStructuralTimberDetail from '../../public/images/projects/msrenovation/before-after/before/msrenovation-before-structural-timber-detail-01.jpg';
import beforePlasteredRoom from '../../public/images/projects/msrenovation/before-after/before/msrenovation-before-plastered-room-01.jpg';
import beforeExtensionShellOne from '../../public/images/projects/msrenovation/before-after/before/msrenovation-before-extension-shell-01.jpg';
import beforeExtensionShellTwo from '../../public/images/projects/msrenovation/before-after/before/msrenovation-before-extension-shell-02.jpg';
import beforeLivingRoomSeaView from '../../public/images/projects/msrenovation/before-after/before/msrenovation-before-living-room-sea-view-01.jpg';
import afterPaintedRoomGreenOne from '../../public/images/projects/msrenovation/before-after/after/msrenovation-after-painted-room-green-01.jpg';
import afterPaintedRoomGreenTwo from '../../public/images/projects/msrenovation/before-after/after/msrenovation-after-painted-room-green-02.jpg';
import afterBathroomFitOut from '../../public/images/projects/msrenovation/before-after/after/msrenovation-after-bathroom-fit-out-01.jpg';
import afterStaircaseRunner from '../../public/images/projects/msrenovation/before-after/after/msrenovation-after-staircase-runner-01.jpg';
import afterHallwayOne from '../../public/images/projects/msrenovation/before-after/after/msrenovation-after-hallway-01.jpg';
import afterHallwayLanding from '../../public/images/projects/msrenovation/before-after/after/msrenovation-after-hallway-landing-01.jpg';
import afterHallwayTwo from '../../public/images/projects/msrenovation/before-after/after/msrenovation-after-hallway-02.jpg';
import afterDiningArea from '../../public/images/projects/msrenovation/before-after/after/msrenovation-after-dining-area-01.jpg';
import afterStaircaseFinish from '../../public/images/projects/msrenovation/before-after/after/msrenovation-after-staircase-finish-01.jpg';
import afterLivingRoom from '../../public/images/projects/msrenovation/before-after/after/msrenovation-after-living-room-01.jpg';
import afterEntranceHallway from '../../public/images/projects/msrenovation/before-after/after/msrenovation-after-entrance-hallway-01.jpg';
import styles from './BeforeAfterGallery.module.css';

/* afterOpenPlanKitchenLiving and afterOldKitchen (both kitchen photos)
   are intentionally not imported here. Kitchen fitting is no longer a
   service this business offers, so kitchen photos are excluded from
   the public gallery to avoid inviting kitchen renovation enquiries.
   The original files remain in before-after/after/ on disk. */

/*
  BeforeAfterGallery Component
  Real, unstaged client photos shown as two independent, interactive
  photo carousels: Before and After. No project titles, scope
  details, or claimed pairing between any specific before photo and
  after photo — the supplied photos have no EXIF data (WhatsApp
  strips it) and no reliable way to confirm which before and after
  photos belong to the same job, so each photo is presented only for
  what it visibly shows, never as part of a named project or a
  matched pair.
*/

interface GalleryPhoto {
  image: StaticImageData;
  alt: string;
}

const BEFORE_PHOTOS: GalleryPhoto[] = [
  {
    image: beforeLivingRoomPlastered,
    alt: 'Living room with bare plastered walls and ceiling, ready for painting',
  },
  {
    image: beforeStructuralOpeningOne,
    alt: 'Exposed ceiling joists and a brick pier during a structural wall opening',
  },
  {
    image: beforePlasteredAlcove,
    alt: 'Freshly plastered alcove, walls not yet painted',
  },
  {
    image: beforeStructuralOpeningTwo,
    alt: 'Exposed brickwork and ceiling joists during a structural wall opening',
  },
  {
    image: beforeHallwayPlastered,
    alt: 'Hallway with bare plastered walls and ceiling, ready for painting',
  },
  {
    image: beforeStructuralTimberDetail,
    alt: 'Close-up of a timber beam repair during structural work',
  },
  {
    image: beforePlasteredRoom,
    alt: 'Room with bare plastered walls and ceiling, ready for painting',
  },
  {
    image: beforeExtensionShellOne,
    alt: 'Extension shell with bare plaster and a bare concrete floor',
  },
  {
    image: beforeExtensionShellTwo,
    alt: 'Extension shell with windows fitted, prior to flooring',
  },
  {
    image: beforeLivingRoomSeaView,
    alt: 'Living room mid-decorating, furniture covered in dust sheets and skirting boards masked with tape',
  },
];

const AFTER_PHOTOS: GalleryPhoto[] = [
  {
    image: afterPaintedRoomGreenOne,
    alt: 'Room freshly painted in deep green, with white coving',
  },
  {
    image: afterPaintedRoomGreenTwo,
    alt: 'The same green painted room from a different angle',
  },
  {
    image: afterBathroomFitOut,
    alt: 'Newly fitted bathroom with tiled flooring, vanity unit, and skylight',
  },
  {
    image: afterStaircaseRunner,
    alt: 'Staircase fitted with a stair carpet runner',
  },
  {
    image: afterHallwayOne,
    alt: 'Finished hallway with new flooring and downlights',
  },
  {
    image: afterHallwayLanding,
    alt: 'Finished hallway and stair landing',
  },
  {
    image: afterHallwayTwo,
    alt: 'Finished hallway with built-in storage',
  },
  {
    image: afterDiningArea,
    alt: 'Freshly painted dining area',
  },
  {
    image: afterStaircaseFinish,
    alt: 'A different staircase, finished with painted spindles and stair tread carpets',
  },
  {
    image: afterLivingRoom,
    alt: 'Living room with a painted feature wall and wall-mounted television',
  },
  {
    image: afterEntranceHallway,
    alt: 'Entrance hallway with built-in coat storage',
  },
];

const AUTO_ROTATE_INTERVAL_MS = 4000;

interface PhotoCarouselProps {
  photos: GalleryPhoto[];
  groupLabel: string;
}

/*
  PhotoCarousel
  A single auto-rotating carousel of photos with manual prev/next
  arrows and clickable dot indicators, modelled on the Reviews
  carousel. Two independent instances of this are rendered below
  (Before, After), each with its own slide state and timer.
*/
const PhotoCarousel = ({ photos, groupLabel }: PhotoCarouselProps): ReactElement => {
  const totalSlides = photos.length;
  const { currentSlide, goToSlide, goToNext, goToPrevious } = useCarousel(
    totalSlides,
    AUTO_ROTATE_INTERVAL_MS
  );

  return (
    <div className={styles.carouselContainer}>
      <div
        className={styles.carouselTrack}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {photos.map((photo) => (
          <div className={styles.carouselSlide} key={photo.alt}>
            <Image
              src={photo.image}
              alt={photo.alt}
              placeholder="blur"
              className={styles.photo}
              sizes="(max-width: 900px) 90vw, 560px"
            />
          </div>
        ))}
      </div>

      <div className={styles.carouselControls}>
        <button
          type="button"
          className={styles.carouselArrowButton}
          onClick={goToPrevious}
          aria-label={`Previous ${groupLabel} photo`}
        >
          ‹
        </button>

        <div className={styles.carouselDotsWrapper}>
          {photos.map((photo, index) => (
            <button
              type="button"
              key={photo.alt}
              onClick={() => goToSlide(index)}
              aria-label={`Go to ${groupLabel} photo ${index + 1}`}
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
          onClick={goToNext}
          aria-label={`Next ${groupLabel} photo`}
        >
          ›
        </button>
      </div>

      <div className={styles.slideCounter}>
        {currentSlide + 1} of {totalSlides}
      </div>
    </div>
  );
};

interface CarouselColumnProps {
  heading: string;
  photos: GalleryPhoto[];
  groupLabel: string;
}

/*
  CarouselColumn
  Pairs a group heading ("Before"/"After") with its PhotoCarousel and
  fades the whole column in independently on scroll, matching the
  fade-in treatment every other section on the site already has —
  the gallery page previously had none, which is why it read as
  bolted-on rather than part of the same site.
*/
const CarouselColumn = ({ heading, photos, groupLabel }: CarouselColumnProps): ReactElement => {
  const [columnRef, isVisible] = useScrollAnimation();

  return (
    <div
      ref={columnRef}
      className={`${styles.carouselColumn} scroll-animate scroll-animate-stagger ${
        isVisible ? 'visible' : ''
      }`}
    >
      <h3 className={styles.groupHeading}>{heading}</h3>
      <PhotoCarousel photos={photos} groupLabel={groupLabel} />
    </div>
  );
};

/*
  BeforeAfterGallery
  Renders the "Before" and "After" photo carousels side by side on
  desktop (stacked on mobile), each in its own CarouselColumn. No
  descriptions, titles, or budget/duration details are shown, since
  none of that can be honestly confirmed from the photos alone, and
  no before photo is presented as matching any particular after photo.
*/
const BeforeAfterGallery = (): ReactElement => {
  return (
    <section className={styles.beforeAfterGallerySection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionHeadingText}>Before and After</h2>
        <p className={styles.sectionHeadingSubtext}>
          A selection of real photos from recent jobs. These are not paired into specific
          before and after sets.
        </p>
      </div>

      <div className={styles.carouselsRow}>
        <CarouselColumn heading="Before" photos={BEFORE_PHOTOS} groupLabel="before" />
        <CarouselColumn heading="After" photos={AFTER_PHOTOS} groupLabel="after" />
      </div>
    </section>
  );
};

export default BeforeAfterGallery;
