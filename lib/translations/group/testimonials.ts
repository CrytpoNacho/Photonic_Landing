import { ESP_testimonials } from "../Español/ESP_testimonials"
import { EN_testimonials } from "../English/testimonials"
import { PT_testimonials } from "../Portugues/PORT_testimonials"

export const testimonialsTranslations = {
  es: ESP_testimonials,
  en: EN_testimonials,
  pt: PT_testimonials,
} as const

export type TestimonialsLang = keyof typeof testimonialsTranslations
