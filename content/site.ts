import type { Locale } from "@/i18n/routing";

/** Configuración global del sitio y datos de contacto. */
export const siteConfig = {
  name: "Agustín Moyano",
  url: "https://agusmoyano-portfolio.vercel.app",
  email: "moyano.agustin98@gmail.com",
  // Solo dígitos, formato internacional (sin '+'), para el link wa.me.
  whatsapp: "5493388488336",
  linkedin: "https://www.linkedin.com/in/agustinmoyano98/",
  linkedinHandle: "/in/agustinmoyano98",
  github: "https://github.com/AgusMoyan",
  githubHandle: "@AgusMoyan",
  // Repo público de este mismo portfolio (muestra de código).
  // TODO (owner): confirmar el nombre del repo al subirlo.
  repo: "https://github.com/AgusMoyan/portfolio",
} as const;

export const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}`;

/** Ruta del CV correspondiente al idioma activo. */
export function cvPath(locale: Locale): string {
  return `/cv/cv-agustin-moyano-${locale}.pdf`;
}
