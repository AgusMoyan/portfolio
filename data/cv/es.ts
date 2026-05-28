import type { CvData } from "../../types/cv";

export const cvEs: CvData = {
  language: "es",
  name: "Agustin Moyano",
  role: "Desarrollador Full Stack | Desarrollo Web y Mobile",
  contact: {
    location: "La Plata, Argentina",
    workMode: "Remoto / Hibrido",
    linkedin: "linkedin.com/in/agustinmoyano98",
    email: "moyano.agustin98@gmail.com",
    phone: "+54 9 3388 488336",
  },
  profile:
    "Desarrollador Full Stack enfocado en la creacion de aplicaciones web y mobile listas para produccion. Cuento con 3 anos de experiencia trabajando en frontend, backend y desarrollo mobile para clientes reales. Tengo experiencia en sistemas de cotizacion, plataformas de reservas, aplicaciones de salud, dashboards administrativos, flujos offline-first, integraciones con APIs externas, despliegues productivos, toma de decisiones tecnicas y publicacion de aplicaciones en Google Play.",
  workExperience: [
    {
      role: "Desarrollador Full Stack — Web & Mobile",
      company: "Luz Consulting",
      location: "La Plata, Argentina",
      mode: "Part-time",
      period: "Sep 2023 - Actualidad",
      bullets: [
        "Desarrollo aplicaciones web y mobile para clientes reales utilizando React, Next.js, React Native, Expo, TypeScript, Supabase y NestJS.",
        "Construyo componentes reutilizables, flujos de aplicacion, dashboards, integraciones con APIs, autenticacion, interacciones con base de datos y paneles administrativos.",
        "Participo en decisiones tecnicas relacionadas con arquitectura, tooling, despliegue, escalabilidad y flujos productivos.",
        "Integro mapas, APIs de geocodificacion, servicios de email, herramientas de analitica, plataformas de pago y proveedores de autenticacion.",
        "Realice despliegues productivos y publique una aplicacion mobile en Google Play utilizando Expo y EAS Build.",
      ],
    },
    {
      role: "Soporte Tecnico Freelance",
      company: "Freelance",
      location: "Buenos Aires, Argentina",
      period: "Ago 2017 - Actualidad",
      bullets: [
        "Brindo mantenimiento preventivo y correctivo, resolviendo problemas de hardware, software, sistemas operativos, rendimiento y configuracion de dispositivos.",
        "Trabajo con entornos Windows y macOS, atendiendo directamente a clientes y fortaleciendo habilidades de resolucion de problemas y comunicacion.",
      ],
    },
  ],
  selectedProjects: [
    {
      name: "2Mmudanzas",
      url: "2mmudanzas.com",
      type: "Plataforma de cotizacion + dashboard administrativo privado",
      description:
        "Plataforma web en produccion para una empresa de mudanzas, con flujo publico de cotizacion y panel administrativo privado.",
      bullets: [
        "Desarrolle un flujo de cotizacion con origen, destino, detalles de mudanza, validacion de direcciones, visualizacion de ruta, precio estimado, creacion de reservas y consulta por DNI.",
        "Implemente calculo de precios basado en distancia y variables operativas como tipo de propiedad, ascensores, escaleras, gruas, pisos, seguro, combustible, peajes, mudanzas de larga distancia, margenes y reglas configurables.",
        "Construi un dashboard protegido para gestion de reservas, aprobacion/rechazo, configuracion dinamica de precios, politicas de calculo y actualizacion de estados.",
        "Integre GeoRef para validacion de direcciones en Argentina, Mapbox GL JS para mapas interactivos y servicios backend con NestJS, Supabase, PostgreSQL y Swagger.",
      ],
      technologies: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Tailwind CSS v4",
        "Mapbox GL JS",
        "GeoRef",
        "Framer Motion",
        "SweetAlert2",
        "NestJS",
        "Supabase",
        "PostgreSQL",
        "Swagger",
        "Vercel",
      ],
    },
    {
      name: "UDEC — Sistema de fichas clinicas digitales",
      type: "Aplicacion healthcare full stack mobile-first",
      description:
        "Aplicacion full stack mobile-first para medicos, orientada a la gestion de historias clinicas digitales dinamicas.",
      bullets: [
        "Construi una arquitectura full stack separada con frontend mobile en React Native/Expo y backend REST en NestJS utilizando Prisma y PostgreSQL.",
        "Implemente autenticacion y autorizacion por roles, formularios clinicos configurables, firmas digitales, carga de archivos multipart y auditoria de operaciones criticas en backend.",
        "Agregue soporte offline con SQLite, borradores locales y cola de sincronizacion para envios pendientes cuando se recupera la conexion.",
        "Documente la API REST con Swagger y estructure operaciones clinicas criticas para mejorar trazabilidad y confiabilidad.",
      ],
      technologies: [
        "React Native",
        "Expo",
        "NestJS",
        "Prisma",
        "PostgreSQL",
        "SQLite",
        "REST API",
        "Swagger",
        "multipart/form-data",
      ],
    },
    {
      name: "RCP Fundacion UDEC",
      type: "Aplicacion mobile educativa / medica",
      description:
        "Aplicacion mobile enfocada en educacion sobre RCP y guia de respuesta ante emergencias para Fundacion UDEC.",
      bullets: [
        "Construi una app mobile Android/iOS con guia de emergencia, contenido educativo sobre RCP, localizador de DEA, buscador, videos, interacciones de audio y simulador de emergencia.",
        "Implemente pantallas estructuradas sobre tecnicas de RCP, sintomas, compresiones, estimulacion y uso de DEA.",
        "Configure Expo, perfiles de EAS Build, actualizaciones OTA, package Android, bundle identifier iOS y publicacion de la app Android en Google Play.",
      ],
      technologies: [
        "React Native",
        "Expo SDK 54",
        "React Navigation",
        "EAS Build",
        "Expo Updates",
        "Expo Audio",
        "JavaScript",
      ],
    },
    {
      name: "TrustRide",
      url: "trustride.uk",
      type: "Landing page + sistema de reservas",
      description:
        "Plataforma en produccion para reservas de traslados entre el Aeropuerto de Palma de Mallorca y Playa de Muro.",
      bullets: [
        "Construi una landing page y flujo de reserva con origen, destino, fecha, hora, pasajeros, ninos, opciones de ida y vuelta y confirmaciones por email.",
        "Desarrolle un dashboard protegido para ver, crear, editar y cancelar reservas con flujos de cancelacion basados en token.",
        "Configure Supabase Auth con cookies SSR, proteccion mediante middleware, reCAPTCHA, sitemap dinamico e integracion con AeroDataBox API.",
      ],
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "Radix UI",
        "Next.js API Routes",
        "Server Actions",
        "Supabase",
        "PostgreSQL",
        "Supabase Auth",
        "AeroDataBox API",
        "reCAPTCHA",
      ],
    },
  ],
  technicalSkills: [
    {
      title: "Frontend",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "shadcn/ui",
        "Framer Motion",
      ],
    },
    {
      title: "Mobile",
      items: [
        "React Native",
        "Expo",
        "EAS Build",
        "Expo Updates",
        "Google Play deployment",
        "offline-first workflows",
      ],
    },
    {
      title: "Backend & Database",
      items: [
        "Node.js",
        "NestJS",
        "Supabase",
        "PostgreSQL",
        "Prisma",
        "REST APIs",
        "Next.js API Routes",
      ],
    },
    {
      title: "Tools & Deployment",
      items: ["Git", "GitHub", "Vercel", "Swagger", "Figma", "PostHog"],
    },
    {
      title: "Integraciones",
      items: [
        "Mapbox",
        "GeoRef",
        "Google Maps",
        "Mercado Pago",
        "Supabase Auth",
        "reCAPTCHA",
        "APIs externas",
        "integraciones de email",
        "dashboards administrativos",
      ],
    },
  ],
  education: [
    {
      title: "Formacion autodidacta",
      description:
        "Formacion autodidacta en desarrollo de software moderno, con foco en desarrollo web y mobile, incluyendo React, React Native, Next.js, Expo, Supabase, backend, APIs, bases de datos y despliegues productivos.",
    },
  ],
  languages: [
    { language: "Espanol", level: "Nativo" },
    { language: "Ingles", level: "B2" },
  ],
};
