'use client';

import type { ReactElement } from 'react';
import useScrollAnimation from '@/utils/useScrollAnimation';
import type { Project } from '@/types';
import styles from './GalleryGrid.module.css';

/* The 3 before/after project showcases displayed on the gallery page */
const PROJECTS_LIST: Project[] = [
  {
    title: 'Water-Damaged Ceiling Repair',
    description:
      'Complete removal of water-damaged plasterboard, new installation, artex matching, and full redecoration. Ceiling restored to pristine condition.',
    details: [
      { label: 'Work Type', value: 'Ceiling repair and redecoration' },
      { label: 'Duration', value: '3-5 days' },
      { label: 'Services', value: 'Drywall removal, installation, taping, artex, painting' },
      { label: 'Budget Range', value: '£1,001 - £5,000' },
    ],
  },
  {
    title: 'Bedroom Transformation',
    description:
      'Complete interior refresh with professional plastering, painting, and detailed finishing work. Every surface prepared to the highest standard for a flawless result.',
    details: [
      { label: 'Work Type', value: 'Full room decoration' },
      { label: 'Duration', value: '2-3 weeks' },
      { label: 'Services', value: 'Plastering, painting, finishing, cleanup' },
      { label: 'Budget Range', value: '£5,001 - £25,000' },
    ],
  },
  {
    title: 'Bathroom Refurbishment',
    description:
      'Full bathroom update including professional redecoration, heated underfloor system repair, and meticulous tiling installation. Luxury finish in every detail.',
    details: [
      { label: 'Work Type', value: 'Bathroom renovation' },
      { label: 'Duration', value: '2-4 weeks' },
      { label: 'Services', value: 'Repairs, tiling, painting, finishing' },
      { label: 'Budget Range', value: '£5,001 - £25,000' },
    ],
  },
];

interface ProjectShowcaseProps {
  project: Project;
}

/*
  ProjectShowcase
  A single before/after project block: heading and description,
  a before/after image pair (placeholder graphics until real photos
  are added to public/photos), and a project scope details box.
  Fades in on scroll using useScrollAnimation, paired with the global
  "scroll-animate"/"scroll-animate-stagger" utility classes.
*/
const ProjectShowcase = ({ project }: ProjectShowcaseProps): ReactElement => {
  const [projectRef, isVisible] = useScrollAnimation();

  return (
    <div
      ref={projectRef}
      className={`scroll-animate scroll-animate-stagger ${isVisible ? 'visible' : ''}`}
    >
      <div className={styles.projectHeader}>
        <h2 className={styles.projectHeaderTitle}>{project.title}</h2>
        <p className={styles.projectHeaderText}>{project.description}</p>
      </div>

      <div className={styles.beforeAfterWrapper}>
        <div className={styles.imageSide}>
          <span className={styles.imageLabel}>Before</span>
          {/* TODO: replace placeholder with a real "before" photo from public/photos once available */}
          <div className={`${styles.imageContainer} ${styles.imageContainerBefore}`}>
            <span className={styles.placeholderIcon} aria-hidden="true">
              📸
            </span>
          </div>
        </div>
        <div className={styles.imageSide}>
          <span className={styles.imageLabel}>After</span>
          {/* TODO: replace placeholder with a real "after" photo from public/photos once available */}
          <div className={`${styles.imageContainer} ${styles.imageContainerAfter}`}>
            <span className={styles.placeholderIcon} aria-hidden="true">
              ✓
            </span>
          </div>
        </div>
      </div>

      <div className={styles.projectDetails}>
        <h3 className={styles.projectDetailsTitle}>Project Scope</h3>
        <ul className={styles.projectDetailsList}>
          {project.details.map((detail) => (
            <li key={detail.label} className={styles.projectDetailsListItem}>
              <strong>{detail.label}:</strong> {detail.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

/*
  GalleryGrid Component
  Renders the stacked list of before/after project showcases used on
  the gallery page.
*/
const GalleryGrid = (): ReactElement => {
  return (
    <section className={styles.gallerySection}>
      <div className={styles.galleryGrid}>
        {PROJECTS_LIST.map((project) => (
          <ProjectShowcase key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default GalleryGrid;
