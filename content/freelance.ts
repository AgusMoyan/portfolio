import type { FreelanceService, Skill, Testimonial } from "./types";

/**
 * Sección secundaria: soporte técnico freelance.
 * Acá SÍ van las herramientas de diagnóstico/mantenimiento de hardware.
 * TODO (owner): ajustar servicios, herramientas y testimonios reales.
 */
export const freelanceServices: FreelanceService[] = [
  {
    title: { es: "Mantenimiento de hardware", en: "Hardware maintenance" },
    description: {
      es: "Limpieza, cambio de pasta térmica, upgrades de RAM/SSD y diagnóstico de fallas.",
      en: "Cleaning, thermal paste replacement, RAM/SSD upgrades and fault diagnosis.",
    },
    icon: "cpu",
  },
  {
    title: { es: "Optimización de software", en: "Software optimization" },
    description: {
      es: "Puesta a punto del sistema, eliminación de malware y mejora de rendimiento.",
      en: "System tune-up, malware removal and performance improvements.",
    },
    icon: "gauge",
  },
  {
    title: { es: "Diagnóstico y soporte", en: "Diagnosis and support" },
    description: {
      es: "Detección de problemas y acompañamiento para mantener tu equipo a punto.",
      en: "Problem detection and ongoing support to keep your gear in top shape.",
    },
    icon: "wrench",
  },
];

/** Herramientas del rubro: el owner prefirió no listarlas. La sub-sección se oculta. */
export const freelanceTools: Skill[] = [];

/** Testimonios: vacío por ahora; la sub-sección se oculta sola. */
export const testimonials: Testimonial[] = [];
