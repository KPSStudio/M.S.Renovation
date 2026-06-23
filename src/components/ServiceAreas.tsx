import type { ReactElement } from 'react';
import styles from './ServiceAreas.module.css';

/* Confirmed coverage areas. Aberdeen city plus the surrounding
   Aberdeenshire towns listed below. */
const SERVICE_AREAS_LIST: string[] = [
  'Aberdeen',
  'Bridge of Don',
  'Dyce',
  'Cove Bay',
  'Bucksburn',
  'Danestone',
  'Westhill',
  'Portlethen',
  'Kingswells',
  'Aberdeenshire',
];

/*
  ServiceAreas Component
  A plain, non-interactive section listing the towns and areas
  covered, rendered as a wrapped pill list rather than a long
  paragraph of place names. No client-side state, so it stays a
  server component.
*/
export default function ServiceAreas(): ReactElement {
  return (
    <section className={styles.serviceAreasSection} id="service-areas">
      <h2 className={styles.sectionHeading}>Areas We Cover</h2>
      <p className={styles.sectionSubtext}>
        Based in Aberdeen, we carry out painting, decorating, and home improvement work across
        the city and into the surrounding Aberdeenshire area, including:
      </p>

      <ul className={styles.areasList}>
        {SERVICE_AREAS_LIST.map((area) => (
          <li className={styles.areaPill} key={area}>
            {area}
          </li>
        ))}
      </ul>

      <p className={styles.sectionFootnote}>
        Do not see your area listed? Get in touch and we will let you know if your project is in
        range.
      </p>
    </section>
  );
}
