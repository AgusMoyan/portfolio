import type { ExperienceItem } from "./types";

/** Experiencia laboral, de más reciente a más antigua. Foco en impacto. */
export const experience: ExperienceItem[] = [
  {
    company: "Luz Consulting",
    role: {
      es: "Full Stack Developer — Web & Mobile",
      en: "Full Stack Developer — Web & Mobile",
    },
    period: { es: "Sep 2023 – Actualidad", en: "Sep 2023 – Present" },
    location: "La Plata, Argentina",
    employmentType: { es: "Part-time", en: "Part-time" },
    summary: {
      es: "Desarrollo aplicaciones web y mobile para clientes reales, participando en frontend, mobile, backend, integraciones, dashboards, despliegues y decisiones técnicas.",
      en: "I build web and mobile apps for real clients, working across frontend, mobile, backend, integrations, dashboards, deployments and technical decisions.",
    },
    achievements: [
      {
        es: "Llevé 3 productos a producción (web y mobile), de punta a punta, para clientes reales.",
        en: "Shipped 3 products to production (web and mobile), end to end, for real clients.",
      },
      {
        es: "Construí dashboards de administración, un motor de precios dinámico e integraciones (mapas, pagos, autenticación).",
        en: "Built admin dashboards, a dynamic pricing engine and integrations (maps, payments, authentication).",
      },
      {
        es: "Publiqué una app mobile en Google Play con EAS Build y actualizaciones OTA.",
        en: "Published a mobile app on Google Play with EAS Build and OTA updates.",
      },
      {
        es: "Participo en decisiones técnicas de arquitectura, tooling, despliegue y escalabilidad.",
        en: "Take part in technical decisions around architecture, tooling, deployment and scalability.",
      },
    ],
    relatedProjects: ["TrustRide", "2Mmudanzas", "RCP Fundación UDEC"],
  },
  {
    company: "Freelance",
    role: {
      es: "Soporte Técnico Freelance",
      en: "Freelance Tech Support",
    },
    period: { es: "Ago 2017 – Actualidad", en: "Aug 2017 – Present" },
    location: "Buenos Aires, Argentina",
    employmentType: { es: "Freelance", en: "Freelance" },
    summary: {
      es: "Soporte técnico preventivo y correctivo para clientes, resolviendo problemas de hardware, software, sistemas operativos, rendimiento y configuración de dispositivos.",
      en: "Preventive and corrective tech support for clients, solving hardware, software, OS, performance and device configuration issues.",
    },
    achievements: [
      {
        es: "Diagnóstico y resolución de problemas en Windows y macOS.",
        en: "Diagnosis and troubleshooting on Windows and macOS.",
      },
      {
        es: "Configuración de dispositivos, sistemas y entornos de trabajo.",
        en: "Setup of devices, systems and work environments.",
      },
      {
        es: "Atención directa a clientes.",
        en: "Direct client support.",
      },
      {
        es: "Desarrollo de habilidades de comunicación, análisis y resolución de problemas.",
        en: "Developed communication, analysis and problem-solving skills.",
      },
    ],
  },
];
