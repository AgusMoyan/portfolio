import type { ExperienceItem, MilestoneItem } from "../types/portfolio";

export const experience: ExperienceItem[] = [
  {
    id: "luz-consulting",
    role: "Full Stack Developer — Web & Mobile",
    company: "Luz Consulting",
    location: "La Plata, Argentina",
    mode: "Part-time",
    period: "Sep 2023 – Actualidad",
    summary:
      "Desarrollo aplicaciones web y mobile para clientes reales, participando en frontend, mobile, backend, integraciones, dashboards, despliegues y decisiones técnicas.",
    bullets: [
      "Desarrollo interfaces, flujos de aplicación, dashboards y componentes reutilizables.",
      "Trabajo en aplicaciones web y mobile usando React, Next.js, React Native, Expo y TypeScript.",
      "Participo en decisiones técnicas relacionadas con arquitectura, tooling, despliegue y escalabilidad.",
      "Integro servicios externos como mapas, geocoding, email, analítica, pagos y autenticación.",
      "Colaboro en productos que llegan a producción y requieren mantenimiento real.",
    ],
    tags: ["web", "mobile", "full-stack", "production", "integrations"],
  },
  {
    id: "freelance-technical-support",
    role: "Soporte Técnico Freelance",
    company: "Freelance",
    location: "Buenos Aires, Argentina",
    period: "Ago 2017 – Actualidad",
    summary:
      "Soporte técnico preventivo y correctivo para clientes, resolviendo problemas de hardware, software, sistemas operativos, rendimiento y configuración de dispositivos.",
    bullets: [
      "Diagnóstico y resolución de problemas en Windows y macOS.",
      "Configuración de dispositivos, sistemas y entornos de trabajo.",
      "Atención directa a clientes.",
      "Desarrollo de habilidades de comunicación, análisis y resolución de problemas.",
    ],
    tags: ["support", "troubleshooting", "clients", "systems"],
  },
];

export const experienceMilestones: MilestoneItem[] = [
  {
    id: "google-play-release",
    title: "Published Android app to Google Play",
    period: "2026",
    summary:
      "Configuré Expo, EAS Build, Android package, updates y flujo de publicación para llevar una app mobile real a Google Play.",
    tags: ["mobile", "expo", "google-play"],
  },
  {
    id: "offline-first-mobile",
    title: "Built offline-first mobile workflows",
    period: "2025",
    summary:
      "Implementé borradores locales, SQLite y cola de sincronización para una aplicación clínica mobile-first.",
    tags: ["mobile", "offline-first", "sqlite"],
  },
  {
    id: "quotation-platform",
    title: "Built production quotation platform",
    period: "2025",
    summary:
      "Desarrollé una plataforma de cotización con mapas, validación de direcciones, reglas de cálculo, reservas y dashboard administrativo.",
    tags: ["web", "maps", "dashboard", "pricing"],
  },
  {
    id: "booking-admin-dashboard",
    title: "Built booking platform with admin dashboard",
    period: "2025",
    summary:
      "Construí un flujo de reservas con autenticación, confirmaciones por email, cancelación por token y panel administrativo.",
    tags: ["booking", "auth", "dashboard", "production"],
  },
];
