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
      es: "Además de desarrollar aplicaciones web y mobile, participo en la planificación y coordinación técnica de los proyectos, articulando el trabajo de diseño y desarrollo con las necesidades de cada cliente.",
      en: "Besides building web and mobile apps, I take part in the planning and technical coordination of projects, aligning design and development work with each client's needs.",
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
            es: "Combino el desarrollo con la coordinación de tareas en equipos interdisciplinarios de unas cinco personas.",
            en: "Combine development with task coordination in cross-functional teams of around five people.",
          },
          {
            es: "Colaboro en la estimación de tiempos y costos y en la organización de entregables.",
            en: "Help estimate timelines and costs and organize deliverables.",
          },
          {
            es: "Sigo tareas, dependencias y bloqueos en Asana para mantener las entregas en curso.",
            en: "Track tasks, dependencies and blockers in Asana to keep deliveries on course.",
          },
          {
            es: "Participo, junto con otra persona, en decisiones sobre prioridades, plazos, costos y cambios de alcance.",
            en: "Share decisions on priorities, timelines, costs and scope changes with another team member.",
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
            es: "Me comunico de forma directa con clientes, diseñadores y desarrolladores.",
            en: "Communicate directly with clients, designers and developers.",
          },
          {
            es: "Relevo requerimientos y reglas de negocio para convertirlos en soluciones concretas.",
            en: "Gather requirements and business rules and turn them into concrete solutions.",
          },
          {
            es: "Colaboro ocasionalmente con el área comercial en consultas técnicas y en la evaluación de soluciones para clientes.",
            en: "Occasionally support the sales team with technical questions and by evaluating solutions for clients.",
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
    relatedProjects: ["Biosyntech"],
  },
];
