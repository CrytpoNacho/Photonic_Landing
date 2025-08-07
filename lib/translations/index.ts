import { EN_nav } from "./English/Navbar"
import { EN_hero } from "./English/hero"
import { EN_services } from "./English/services"
import { EN_technologies } from "./English/technologies"
import { EN_projects } from "./English/projects"
import { EN_testimonials } from "./English/testimonials"
import { EN_process } from "./English/process"
import { EN_contact } from "./English/contact"
import { EN_footer } from "./English/footer"

import { ESP_nav } from "./Español/ESP_Navbar"
import { ESP_hero } from "./Español/ESP_hero"
import { ESP_services } from "./Español/ESP_services"
import { ESP_technologies } from "./Español/ESP_technologies"
import { ESP_projects } from "./Español/ESP_projects"
import { ESP_testimonials } from "./Español/ESP_testimonials"
import { ESP_process } from "./Español/ESP_process"
import { ES_contact } from "./Español/ESP_contact"
import { ESP_footer } from "./Español/ESP_footer"

import { PT_nav } from "./Portugues/PORT_Navbar"
import { PORT_hero } from "./Portugues/PORT_hero"
import { PT_services } from "./Portugues/PORT_services"
import { PT_technologies } from "./Portugues/PORT_technologies"
import { PT_projects } from "./Portugues/PORT_projects"
import { PT_testimonials } from "./Portugues/PORT_testimonials"
import { PT_process } from "./Portugues/PORT_process"
import { PT_contact } from "./Portugues/PORT_contact"
import { PT_footer } from "./Portugues/PORT_footer"

export const translations = {
  es: {
    nav: ESP_nav,
    hero: ESP_hero,
    services: ESP_services,
    technologies: ESP_technologies,
    projects: ESP_projects,
    testimonials: ESP_testimonials,
    process: ESP_process,
    contact: ES_contact,
    footer: ESP_footer,
  },
  en: {
    nav: EN_nav,
    hero: EN_hero,
    services: EN_services,
    technologies: EN_technologies,
    projects: EN_projects,
    testimonials: EN_testimonials,
    process: EN_process,
    contact: EN_contact,
    footer: EN_footer,
  },
  pt: {
    nav: PT_nav,
    hero: PORT_hero,
    services: PT_services,
    technologies: PT_technologies,
    projects: PT_projects,
    testimonials: PT_testimonials,
    process: PT_process,
    contact: PT_contact,
    footer: PT_footer,
  },
} as const

export type Language = keyof typeof translations
export type TranslationKey = keyof typeof translations.es
