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

export type Project = {
  slug: string;
  name: string;
  /** Qué es / problema que resuelve (foco del card). */
  description: LocalizedString;
  role: LocalizedString;
  stack: string[];
  /** Puntos clave de lo construido (opcional). */
  highlights?: LocalizedString[];
  /** Una o más capturas. Si hay más de una, la card muestra un slider. */
  images: string[];
  /** "cover" (default) recorta a 16:9; "contain" muestra completa (ej: capturas mobile). */
  imageFit?: "cover" | "contain";
  demoUrl?: string;
  repoUrl?: string;
  /** Si nació dentro de un empleo: se detalla acá y en Experiencia solo se nombra. */
  company?: string;
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
  achievements: LocalizedString[];
  /** Nombres de proyectos detallados en la sección Proyectos (regla de no-solape). */
  relatedProjects?: string[];
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
