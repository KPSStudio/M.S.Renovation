'use client';

import { useState, type ChangeEvent, type FormEvent, type ReactElement } from 'react';
import { FaWhatsapp, FaFacebook } from 'react-icons/fa';
import type { BudgetOption, ContactFormValues } from '@/types';
import styles from './Contact.module.css';

const WHATSAPP_PHONE_NUMBER = '447572916190';

const BUDGET_OPTIONS: BudgetOption[] = [
  { value: '1-1000', label: '£1 - £1,000' },
  { value: '1001-5000', label: '£1,001 - £5,000' },
  { value: '5001-25000', label: '£5,001 - £25,000' },
  { value: '25000+', label: '£25,000+' },
];

const INITIAL_FORM_VALUES: ContactFormValues = {
  name: '',
  email: '',
  phone: '',
  budget: '',
  message: '',
};

/*
  Contact Component
  Quote request form plus direct WhatsApp and Facebook icon buttons.
  Submitting the form builds a pre-filled WhatsApp message from the
  entered details and redirects the visitor to WhatsApp to send it,
  since there is no backend to receive form submissions.
*/
const Contact = (): ReactElement => {
  const [formValues, setFormValues] = useState<ContactFormValues>(INITIAL_FORM_VALUES);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    const { name, value } = event.target;
    setFormValues((previousValues) => ({ ...previousValues, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const budgetLabel =
      BUDGET_OPTIONS.find((option) => option.value === formValues.budget)?.label ??
      formValues.budget;

    const whatsappMessage =
      `Hi M.S. Renovation, I'd like a quote:\n\n` +
      `Name: ${formValues.name}\n` +
      `Email: ${formValues.email}\n` +
      `Phone: ${formValues.phone}\n` +
      `Budget: ${budgetLabel}\n\n` +
      `Project:\n${formValues.message}`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE_NUMBER}&text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.sectionHeading}>Get Started</h2>

      <div className={styles.contactContent}>
        <h3 className={styles.contactContentTitle}>Let&apos;s Transform Your Space</h3>
        <p className={styles.contactContentIntro}>
          Tell us about your project and your budget. We&apos;ll provide a professional quote and
          timeline.
        </p>

        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.formGroupLabel}>
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Smith"
              className={styles.formGroupInput}
              value={formValues.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formGroupLabel}>
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="john@example.com"
              className={styles.formGroupInput}
              value={formValues.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone" className={styles.formGroupLabel}>
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="07700 123456"
              className={styles.formGroupInput}
              value={formValues.phone}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="budget" className={styles.formGroupLabel}>
              Budget Range
            </label>
            <select
              id="budget"
              name="budget"
              className={styles.formGroupSelect}
              value={formValues.budget}
              onChange={handleInputChange}
              required
            >
              <option value="">Select a range</option>
              {BUDGET_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.formGroupLabel}>
              Describe Your Project
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us what work you need done..."
              className={styles.formGroupTextarea}
              value={formValues.message}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Submitting redirects to WhatsApp with the message pre-filled */}
          <button type="submit" className={styles.formSubmitButton}>
            Send via WhatsApp
          </button>
        </form>

        <div className={styles.contactButtons}>
          <a
            href={`https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE_NUMBER}&text=${encodeURIComponent(
              "Hi M.S. Renovation, I'd like to discuss a project. Please call me back."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactIconButton}
            aria-label="Message us on WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.facebook.com/m.s.renovationaberdeen"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactIconButton}
            aria-label="Visit our Facebook page"
          >
            <FaFacebook />
          </a>
        </div>

        <div className={styles.contactInfo}>
          <p className={styles.contactInfoLine}>
            <strong>Call us:</strong> <a href="tel:07572916190">07572 916190</a>
          </p>
          <p className={styles.contactInfoLine}>
            <strong>Location:</strong> Aberdeen, Scotland
          </p>
          <p className={styles.contactInfoLine}>
            <strong>Trusted Trader Member Since:</strong> 2024
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
