import type { Locale } from "@/i18n/routing";

/** Un texto que existe en cada idioma del sitio. */
export type LocalizedString = Record<Locale, string>;

/** Devuelve la variante del texto para el locale activo. */
export function localize(value: LocalizedString, locale: Locale): string {
  return value[locale];
}

export type Pillar = {
  /** Numeral mostrado (ej: "01"). */
  number: string;
  title: LocalizedString;
  description: LocalizedString;
};

export type Skill = {
  name: string;
  /** Slug de icono de https://simpleicons.org (ej: "react"). "" = sin icono. */
  icon: string;
};

export type EducationItem = {
  degree: LocalizedString;
  institution: LocalizedString;
  /** Estado tal como está confirmado (sin fechas ni materias no verificadas). */
  status: LocalizedString;
};

export type SkillGroup = {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  skills: Skill[];
};

export type SpokenLanguage = {
  name: LocalizedString;
  level: LocalizedString;
};

/** Caso breve de negocio: qué problema había, qué hice y qué se logró. */
export type CaseStudy = {
  problem: LocalizedString;
  solution: LocalizedString;
  result: LocalizedString;
};

export type Project = {
  slug: string;
  name: string;
  /** Qué es / problema que resuelve (foco del card). */
  description: LocalizedString;
  role: LocalizedString;
  stack: string[];
  /** Puntos clave de lo construido (opcional). */
  highlights?: LocalizedString[];
  /** Caso Problema → Intervención → Resultado. Sin métricas no documentadas. */
  caseStudy?: CaseStudy;
  /** Una o más capturas. Si hay más de una, la card muestra un slider. */
  images: string[];
  /** "cover" (default) recorta a 16:9; "contain" muestra completa (ej: capturas mobile). */
  imageFit?: "cover" | "contain";
  demoUrl?: string;
  repoUrl?: string;
  /** Si nació dentro de un empleo: se detalla acá y en Experiencia solo se nombra. */
  company?: string;
};

/** Logros agrupados por tipo de responsabilidad (ej: desarrollo, coordinación). */
export type AchievementGroup = {
  title: LocalizedString;
  items: LocalizedString[];
};

export type ExperienceItem = {
  company: string;
  role: LocalizedString;
  /** Período ya formateado por idioma (ej: "Sep 2023 – Actualidad" / "...– Present"). */
  period: LocalizedString;
  location?: string;
  /** Modalidad (ej: Part-time, Freelance). */
  employmentType?: LocalizedString;
  /** Resumen breve del puesto. */
  summary?: LocalizedString;
  /** Logros en una sola lista (puestos con un único tipo de responsabilidad). */
  achievements?: LocalizedString[];
  /** Logros separados por bloque (puestos con rol mixto). */
  achievementGroups?: AchievementGroup[];
  /** Nombres de proyectos detallados en la sección Proyectos (regla de no-solape). */
  relatedProjects?: string[];
};

/** Etapas de un flujo de trabajo mostradas como pasos en línea (ej: columnas Kanban). */
export type CoordinationFlow = {
  label: LocalizedString;
  steps: LocalizedString[];
};

/** Bloque de la sección "Cómo gestiono los proyectos". */
export type CoordinationBlock = {
  id: string;
  title: LocalizedString;
  /** Aclaración previa a la lista (ej: con quién se comparte la tarea). */
  lead?: LocalizedString;
  flow?: CoordinationFlow;
  items: LocalizedString[];
};

export type FreelanceService = {
  title: LocalizedString;
  description: LocalizedString;
  icon: string;
};

export type Testimonial = {
  quote: LocalizedString;
  author: string;
  context: LocalizedString;
};
