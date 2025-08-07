import { ESP_projects } from "../Español/ESP_projects"
import { EN_projects } from "../English/projects"
import { PT_projects } from "../Portugues/PORT_projects"

export const projectsTranslations = {
  es: ESP_projects,
  en: EN_projects,
  pt: PT_projects,
} as const

export type ProjectsLang = keyof typeof projectsTranslations
