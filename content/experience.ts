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
    employmentType: { es: "Full-time", en: "Full-time" },
    summary: {
      es: "Combiné el desarrollo de aplicaciones web y mobile con la coordinación técnica de los proyectos, desde el relevamiento con el cliente hasta la entrega.",
      en: "I combined building web and mobile apps with the technical coordination of projects, from gathering requirements with the client to delivery.",
    },
    achievementGroups: [
      {
        title: {
          es: "Desarrollo e implementación técnica",
          en: "Development & technical implementation",
        },
        items: [
          {
            es: "Llevé 3 productos a producción de punta a punta (web y mobile): frontend, backend, integraciones y despliegue.",
            en: "Shipped 3 products to production end to end (web and mobile): frontend, backend, integrations and deployment.",
          },
          {
            es: "Participé en decisiones técnicas de arquitectura, tooling, despliegue y escalabilidad.",
            en: "Took part in technical decisions around architecture, tooling, deployment and scalability.",
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
            es: "Coordiné el trabajo entre diseño y desarrollo sin dejar de programar.",
            en: "Coordinated work between design and development while still writing code.",
          },
          {
            es: "Participé en el plan de entregas de cada proyecto y en su reorganización ante atrasos o cambios.",
            en: "Took part in each project's delivery plan and in reorganizing it when delays or changes came up.",
          },
          {
            es: "Compartí con otra persona las decisiones sobre prioridades, plazos y presupuesto.",
            en: "Shared decisions on priorities, timelines and budget with another team member.",
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
            es: "Me comuniqué directamente con clientes, diseñadores y desarrolladores para alinear expectativas y avances.",
            en: "Communicated directly with clients, designers and developers to align expectations and progress.",
          },
          {
            es: "Traduje necesidades de negocio en requerimientos y soluciones; por ejemplo, la fórmula de cotización de 2Mmudanzas.",
            en: "Turned business needs into requirements and solutions — for example, the 2Mmudanzas quoting formula.",
          },
          {
            es: "Cuando hacía falta, apoyé al área comercial evaluando la viabilidad técnica de soluciones para clientes.",
            en: "When needed, supported the sales team by assessing the technical feasibility of client solutions.",
          },
        ],
      },
    ],
    relatedProjects: ["TrustRide", "2Mmudanzas", "RCP Fundación UDEC"],
  },
  {
    company: "Freelance",
    role: {
      es: "Soporte técnico y desarrollo web",
      en: "Technical Support & Web Development",
    },
    period: { es: "Ago 2017 – Actualidad", en: "Aug 2017 – Present" },
    location: "Buenos Aires, Argentina",
    employmentType: { es: "Freelance", en: "Freelance" },
    summary: {
      es: "Soporte técnico preventivo y correctivo para clientes, resolviendo problemas de hardware, software, sistemas operativos, rendimiento y configuración de dispositivos, y desarrollo de sitios web para negocios.",
      en: "Preventive and corrective tech support for clients, solving hardware, software, OS, performance and device configuration issues, plus website development for businesses.",
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
