import { ESP_process } from "../Español/ESP_process"
import { EN_process } from "../English/process"
import { PT_process } from "../Portugues/PORT_process"

export const processTranslations = {
  es: ESP_process,
  en: EN_process,
  pt: PT_process,
} as const

export type ProcessLang = keyof typeof processTranslations
