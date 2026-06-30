"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";

/**
 * Alterna entre ES y EN. Usa una navegación completa (anchor nativo) en vez de
 * routing SPA: así el <html lang> y el contenido se regeneran por SSR y se evita
 * que next-themes re-renderice su script en cliente. La cookie de idioma la
 * guarda el middleware al servir la ruta del otro locale.
 */
export function LocaleSwitcher() {
  const t = useTranslations("Nav");
  const locale = useLocale();
  const pathname = usePathname();

  const other = locale === "es" ? "en" : "es";
  const href = `/${other}${pathname === "/" ? "" : pathname}`;

  return (
    <a
      href={href}
      aria-label={other === "en" ? t("switchToEnglish") : t("switchToSpanish")}
      className="inline-flex h-9 min-w-9 items-center justify-center rounded-md border border-border px-2 text-sm font-medium text-foreground transition-colors hover:bg-card"
    >
      {other.toUpperCase()}
    </a>
  );
}
