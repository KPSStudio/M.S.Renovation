'use client';

import { useState, type ReactElement } from 'react';
import styles from './FAQ.module.css';

interface FAQItem {
  question: string;
  answer: string;
}

/* Answers only state what is already established elsewhere on the
   site (Trusted Trader membership, the 5.0/16 review rating, service
   area, and the free-quote process) — no specific pricing, timelines,
   or response-time guarantees are claimed, since none of those can
   be confirmed without a real quote. */
const FAQ_LIST: FAQItem[] = [
  {
    question: 'How much does painting and decorating cost in Aberdeen?',
    answer:
      'Costs vary depending on the size and scope of the work. We will give you a clear, honest quote after discussing your project, with no charge for the quote itself.',
  },
  {
    question: 'Do you offer free quotes?',
    answer:
      'Yes, every quote is free and no-obligation. Contact us via WhatsApp, phone, or the contact form and we will get back to you.',
  },
  {
    question: 'Are you Trusted Trader certified?',
    answer:
      'Yes. We are a member of the Aberdeen Trusted Trader scheme, supported by Police Scotland and Aberdeen City Council, with a 5.0 star rating from 16 reviews.',
  },
  {
    question: 'Do you handle small repair jobs?',
    answer:
      'Yes. Property repair and general maintenance is one of our core services, so we take on small repair jobs alongside larger projects.',
  },
  {
    question: 'Do you work on full home renovation projects?',
    answer:
      'Yes. Alongside painting and decorating, we offer plastering, carpentry, bathroom refurbishment, and property repair, so we can take on a full renovation rather than just a single room.',
  },
  {
    question: 'What areas around Aberdeen do you cover?',
    answer:
      'We serve Aberdeen and Aberdeenshire. Get in touch and we will let you know if your project is in range.',
  },
  {
    question: 'How long will my project take?',
    answer:
      'Timelines depend on the size and scope of the work. We will give you a realistic timeframe as part of your quote.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Fill out the contact form, or message us directly on WhatsApp or by phone on 07572 916190. We will talk through your project and arrange a free quote.',
  },
];

/*
  FAQ Component
  Accordion-style frequently asked questions. Only one answer is
  expanded at a time. Answers are kept to facts already established
  elsewhere on the site rather than specific figures that can't be
  confirmed without a real quote.
*/
const FAQ = (): ReactElement => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={styles.faqSection} id="faq">
      <h2 className={styles.sectionHeading}>Frequently Asked Questions</h2>
      <p className={styles.sectionSubtext}>
        Answers to common questions about our services and how to get started.
      </p>

      <div className={styles.faqList}>
        {FAQ_LIST.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div className={styles.faqItem} key={item.question}>
              <button
                type="button"
                className={styles.faqQuestionButton}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                <span>{item.question}</span>
                <span
                  className={isOpen ? `${styles.faqIcon} ${styles.faqIconOpen}` : styles.faqIcon}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>

              <div
                className={
                  isOpen
                    ? `${styles.faqAnswerWrapper} ${styles.faqAnswerWrapperOpen}`
                    : styles.faqAnswerWrapper
                }
              >
                <div className={styles.faqAnswer}>
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
