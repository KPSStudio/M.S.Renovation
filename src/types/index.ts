/*
  Centralized TypeScript types for the M.S. Renovation site.
  Component prop types, data shapes, and shared option types live here
  so every component imports from one place via the "@/types" alias.
*/

/* A single link in the main navigation menu */
export interface NavLink {
  label: string;
  href: string;
  id: string;
}

/* A single service shown in the Services grid */
export interface Service {
  title: string;
  description: string;
}

/* A single client testimonial shown in the Reviews carousel */
export interface Review {
  author: string;
  text: string;
  budget: string;
}

/* One line item in a gallery project's "Project Scope" details box */
export interface ProjectDetail {
  label: string;
  value: string;
}

/* A single before/after project shown on the gallery page */
export interface Project {
  title: string;
  description: string;
  details: ProjectDetail[];
}

/* The contact form's editable field values */
export interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  budget: string;
  message: string;
}

/* A budget range option in the contact form's dropdown */
export interface BudgetOption {
  value: string;
  label: string;
}
