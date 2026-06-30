import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["es", "en"],
  // Idioma por defecto cuando no se puede detectar el del visitante.
  defaultLocale: "es",
  // Ambos idiomas viven bajo prefijo (/es, /en). La raíz "/" redirige
  // al idioma detectado (cookie -> Accept-Language -> defaultLocale).
  localePrefix: "always",
});

export type Locale = (typeof routing.locales)[number];
