"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/content/site";

type EmailLinkProps = {
  className?: string;
  /** Texto a mostrar antes de montar (cuando se renderiza el address como texto). */
  fallback?: string;
  /** Si se pasa (ej: un ícono), se renderiza en vez del address en texto. */
  children?: React.ReactNode;
  "aria-label"?: string;
};

/**
 * Email anti-scraping: el href (y, si no hay children, el texto visible) se
 * arman en cliente tras montar, así no quedan como texto plano en el HTML
 * servido. La mayoría de los bots de scraping no ejecutan JS.
 */
export function EmailLink({
  className,
  fallback,
  children,
  "aria-label": ariaLabel,
}: EmailLinkProps) {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    // Intencional: el address solo debe materializarse en cliente (anti-scraping).
    const [user, domain] = siteConfig.email.split("@");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEmail(`${user}@${domain}`);
  }, []);

  return (
    <a
      className={className}
      aria-label={ariaLabel}
      href={email ? `mailto:${email}` : undefined}
    >
      {children ?? email ?? fallback}
    </a>
  );
}
