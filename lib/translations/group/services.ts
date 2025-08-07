import { ESP_services as es } from "../Español/ESP_services"
import { EN_services as en } from "../English/services"
import { PT_services as pt } from "../Portugues/PORT_services"

export const servicesTranslations = {
  es,
  en,
  pt,
} as const

export type ServicesLang = keyof typeof servicesTranslations
