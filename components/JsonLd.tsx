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
    knowsAbout: [
      "Software Development",
      "Full Stack Development",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "React Native",
      "Technical Project Coordination",
      "IT Project Coordination",
      "Project Planning",
      "Requirements Analysis",
      "Stakeholder Communication",
      "Risk Management",
      "Asana",
      "Kanban",
    ],
    sameAs: [siteConfig.linkedin, siteConfig.github],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
