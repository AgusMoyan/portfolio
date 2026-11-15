import type { CoordinationBlock } from "./types";

/**
 * Sección "Cómo gestiono los proyectos": coordinación técnica junto al desarrollo.
 * Regla: describir solo prácticas reales. Sin Jira, sin certificaciones, Scrum
 * solo como intento adaptado y costos/alcance como tarea compartida.
 */
export const coordinationBlocks: CoordinationBlock[] = [
  {
    id: "planning",
    title: { es: "Planificación y seguimiento", en: "Planning & tracking" },
    items: [
      {
        es: "Planifico entregables y defino fechas de entrega a partir de estimaciones basadas en proyectos anteriores.",
        en: "I plan deliverables and set delivery dates based on estimates drawn from previous projects.",
      },
      {
        es: "Ordeno prioridades e identifico dependencias, tareas bloqueadas y trabajo que puede avanzar en paralelo.",
        en: "I organize priorities and identify dependencies, blocked tasks and work that can move forward in parallel.",
      },
      {
        es: "Hago seguimiento del avance para detectar desvíos a tiempo.",
        en: "I track progress to catch deviations early.",
      },
    ],
  },
  {
    id: "tools",
    title: { es: "Herramientas y metodologías", en: "Tools & methods" },
    flow: {
      label: { es: "Tablero Kanban en Asana", en: "Kanban board in Asana" },
      steps: [
        { es: "Pendiente", en: "To do" },
        { es: "En progreso", en: "In progress" },
        { es: "Revisión", en: "Review" },
        { es: "Finalizado", en: "Done" },
      ],
    },
    items: [
      {
        es: "Tickets en Asana con objetivo, requerimientos, tiempo estimado y criterios de aceptación, más prioridades, dependencias y bloqueos.",
        en: "Asana tickets with goal, requirements, estimated time and acceptance criteria, plus priorities, dependencies and blockers.",
      },
      {
        es: "Participé en un intento de adopción de Scrum. Luego adaptamos nuestra forma de organizarnos porque no resultaba eficiente para el equipo.",
        en: "I took part in an attempt to adopt Scrum. We later adapted how we organize our work because it wasn't efficient for the team.",
      },
      {
        es: "En proyectos con fases secuenciales al estilo cascada (relevamiento, diseño, desarrollo, pruebas y puesta en producción), organizo entregables y dependencias entre etapas.",
        en: "In projects with sequential, waterfall-style phases (discovery, design, development, testing and release), I organize deliverables and dependencies between stages.",
      },
    ],
  },
  {
    id: "costs",
    title: { es: "Costos, riesgos y alcance", en: "Costs, risks & scope" },
    lead: {
      es: "En Luz Consulting, junto con otra persona del equipo:",
      en: "At Luz Consulting, together with another team member:",
    },
    items: [
      {
        es: "Estimábamos horas y costos de implementación, con márgenes de contingencia.",
        en: "We estimated implementation hours and costs, with contingency margins.",
      },
      {
        es: "Evaluábamos nuevos requerimientos y su impacto en alcance, plazos y presupuesto.",
        en: "We assessed new requirements and their impact on scope, timelines and budget.",
      },
      {
        es: "Comparábamos horas previstas y reales para detectar desvíos presupuestarios.",
        en: "We compared estimated and actual hours to spot budget deviations.",
      },
      {
        es: "Ante atrasos o bloqueos, reorganizábamos tareas, evaluábamos alternativas y le comunicábamos al cliente los problemas que pudieran comprometer las entregas.",
        en: "When delays or blockers came up, we reorganized tasks, evaluated alternatives and told the client about issues that could put deliveries at risk.",
      },
    ],
  },
  {
    id: "communication",
    title: {
      es: "Documentación y comunicación",
      en: "Documentation & communication",
    },
    items: [
      {
        es: "Registro requerimientos y criterios de aceptación en Asana.",
        en: "I record requirements and acceptance criteria in Asana.",
      },
      {
        es: "Documento acuerdos y decisiones de las reuniones por Google Meet en documentos compartidos de Google Drive.",
        en: "I document agreements and decisions from Google Meet calls in shared Google Drive documents.",
      },
      {
        es: "Uso GitHub para el control de versiones y el seguimiento de cambios.",
        en: "I use GitHub for version control and change tracking.",
      },
      {
        es: "Comunico avances a clientes y coordino entre desarrollo, diseño y stakeholders. En Luz Consulting también colaboraba ocasionalmente con el área comercial en consultas técnicas.",
        en: "I share progress with clients and coordinate between development, design and stakeholders. At Luz Consulting I also occasionally collaborated with the sales team on technical questions.",
      },
    ],
  },
];
