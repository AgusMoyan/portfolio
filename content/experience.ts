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
      es: "Combino el desarrollo de aplicaciones web y mobile con la coordinación técnica de los proyectos, desde el relevamiento con el cliente hasta la entrega.",
      en: "I combine building web and mobile apps with the technical coordination of projects, from gathering requirements with the client to delivery.",
    },
    achievementGroups: [
      {
        title: {
          es: "Desarrollo e implementación técnica",
          en: "Development & technical implementation",
        },
        items: [
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
          {
            es: "Implementé requisitos de seguridad y control de acceso en paneles de administración.",
            en: "Implemented security and access-control requirements for admin panels.",
          },
        ],
      },
      {
        title: {
          es: "Coordinación y gestión de proyectos",
          en: "Project coordination & management",
        },
        items: [
          {
            es: "Coordino el trabajo entre diseño y desarrollo sin dejar de programar.",
            en: "Coordinate work between design and development while still writing code.",
          },
          {
            es: "Participo en el plan de entregas de cada proyecto y en su reorganización ante atrasos o cambios.",
            en: "Take part in each project's delivery plan and in reorganizing it when delays or changes come up.",
          },
          {
            es: "Comparto con otra persona las decisiones sobre prioridades, plazos y presupuesto.",
            en: "Share decisions on priorities, timelines and budget with another team member.",
          },
        ],
      },
      {
        title: {
          es: "Comunicación y análisis de negocio",
          en: "Communication & business analysis",
        },
        items: [
          {
            es: "Me comunico directamente con clientes, diseñadores y desarrolladores para alinear expectativas y avances.",
            en: "Communicate directly with clients, designers and developers to align expectations and progress.",
          },
          {
            es: "Traduzco necesidades de negocio en requerimientos y soluciones; por ejemplo, la fórmula de cotización de 2Mmudanzas.",
            en: "Turn business needs into requirements and solutions — for example, the 2Mmudanzas quoting formula.",
          },
          {
            es: "Cuando hace falta, apoyo al área comercial evaluando la viabilidad técnica de soluciones para clientes.",
            en: "When needed, support the sales team by assessing the technical feasibility of client solutions.",
          },
        ],
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
