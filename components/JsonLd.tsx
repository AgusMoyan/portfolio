import { siteConfig } from "@/content/site";

/**
 * Structured data (schema.org Person) para que buscadores entiendan el perfil.
 * No incluye el email a propósito (se mantiene fuera del HTML, anti-scraping).
 */
export function JsonLd({ locale }: { locale: string }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: `${siteConfig.url}/${locale}`,
    image: `${siteConfig.url}/foto-perfil.png`,
    jobTitle: "Full Stack Developer",
    sameAs: [siteConfig.linkedin, siteConfig.github],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
