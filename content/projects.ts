import type { Project } from "./types";

/**
 * Proyectos destacados (3-5), ordenados por relevancia.
 * TODO (owner): reemplazar con tus proyectos reales, capturas en /public/projects.
 * Regla de no-solape: si `company` está presente, en Experiencia se nombra el
 * proyecto pero NO se repite la descripción.
 */
export const projects: Project[] = [
  {
    slug: "trustride",
    name: "TrustRide",
    description: {
      es: "Plataforma de reservas en producción para traslados de aeropuerto (Palma de Mallorca ↔ Playa de Muro), con landing pública y panel de administración. Resuelve la necesidad de un flujo de reserva self-service confiable, con confirmaciones, y una gestión de reservas para el staff.",
      en: "Production booking platform for airport transfers (Palma de Mallorca ↔ Playa de Muro), with a public landing and a private admin panel. It solves the need for a reliable self-service booking flow, with confirmations, and reservation management for the staff.",
    },
    role: {
      es: "Desarrollo full stack: landing pública, panel de administración, autenticación e integraciones.",
      en: "Full stack development: public landing, admin panel, authentication and integrations.",
    },
    stack: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "reCAPTCHA",
    ],
    highlights: [
      {
        es: "Panel admin protegido para ver, crear, editar y cancelar reservas.",
        en: "Protected admin dashboard to view, create, edit and cancel bookings.",
      },
      {
        es: "Supabase Auth con cookies SSR y protección por middleware, más reCAPTCHA.",
        en: "Supabase Auth with SSR cookies and middleware protection, plus reCAPTCHA.",
      },
      {
        es: "Integración con la API de AeroDataBox y generación de sitemap dinámico.",
        en: "Integration with the AeroDataBox API and dynamic sitemap generation.",
      },
      {
        es: "Flujo de reserva con origen, destino, fecha/hora, pasajeros, niños e ida y vuelta.",
        en: "Booking flow with origin, destination, date/time, passengers, children and round trips.",
      },
      {
        es: "Confirmaciones por email y cancelación por token.",
        en: "Email confirmations and token-based cancellation.",
      },
    ],
    images: ["/projects/TR.png", "/projects/TR1.png", "/projects/TR2.png"],
    demoUrl: "https://trustride.uk/",
    company: "Luz Consulting",
  },
  {
    slug: "2mmudanzas",
    name: "2Mmudanzas",
    description: {
      es: "Plataforma web en producción para una empresa de mudanzas: un flujo público de cotización que el cliente usa solo, más un dashboard privado para gestionar reglas de precio y reservas. Resuelve la cotización manual caso por caso, que era lenta e inconsistente entre operadores.",
      en: "Production web platform for a moving company: a public self-service quoting flow, plus a private dashboard to manage pricing rules and bookings. It replaces the manual case-by-case quoting that was slow and inconsistent across operators.",
    },
    role: {
      es: "Desarrollo full stack: cotización pública, dashboard de administración, motor de precios y backend.",
      en: "Full stack development: public quoting flow, admin dashboard, pricing engine and backend.",
    },
    stack: [
      "Next.js",
      "TypeScript",
      "NestJS",
      "Supabase",
      "PostgreSQL",
      "Mapbox",
      "Tailwind CSS",
    ],
    highlights: [
      {
        es: "Flujo de cotización self-service con origen/destino, validación de direcciones (GeoRef) y mapas de ruta interactivos (Mapbox GL JS).",
        en: "Self-service quoting flow with origin/destination, address validation (GeoRef) and interactive route maps (Mapbox GL JS).",
      },
      {
        es: "Dashboard admin protegido para gestionar reservas, aprobaciones y reglas de precio dinámicas.",
        en: "Protected admin dashboard to manage bookings, approvals and dynamic pricing rules.",
      },
      {
        es: "Motor de precios por distancia con variables operativas configurables (ascensores, escaleras, grúas, pisos, seguro, peajes, márgenes).",
        en: "Distance-based pricing engine with configurable operational variables (elevators, stairs, cranes, floors, insurance, tolls, margins).",
      },
      {
        es: "Creación de reservas y consulta de reserva por DNI para clientes.",
        en: "Booking creation and booking lookup by ID number for customers.",
      },
      {
        es: "Servicios backend con NestJS, Supabase, PostgreSQL y documentación Swagger.",
        en: "Backend services with NestJS, Supabase, PostgreSQL and Swagger documentation.",
      },
    ],
    images: ["/projects/2MM.png", "/projects/2MM1.png", "/projects/2MM2.png"],
    demoUrl: "https://www.2mmudanzas.com/",
    company: "Luz Consulting",
  },
  {
    slug: "rcp-udec",
    name: "RCP Fundación UDEC",
    description: {
      es: "App mobile de educación en RCP y guía de respuesta ante emergencias, publicada en Google Play para la Fundación UDEC. Resuelve la necesidad de una guía clara y de acceso rápido desde el celular, cuando la mayoría de los recursos no están pensados para eso.",
      en: "Mobile app for CPR education and emergency response guidance, published on Google Play for Fundación UDEC. It addresses the need for a clear, fast-access guide from your phone, when most resources aren't designed for that.",
    },
    role: {
      es: "Desarrollo mobile: contenido estructurado, simulador, builds y publicación.",
      en: "Mobile development: structured content, simulator, builds and release.",
    },
    stack: ["React Native", "Expo", "EAS Build", "Expo Updates", "TypeScript"],
    highlights: [
      {
        es: "Publicada en Google Play con perfiles de EAS Build y actualizaciones OTA.",
        en: "Published on Google Play with EAS Build profiles and OTA updates.",
      },
      {
        es: "Contenido de RCP estructurado: técnicas, síntomas, compresiones, estimulación y uso de DEA.",
        en: "Structured CPR content: techniques, symptoms, compressions, stimulation and AED use.",
      },
      {
        es: "Simulador de emergencias y localizador de DEA con búsqueda.",
        en: "Emergency simulator and AED locator with search.",
      },
      {
        es: "Interacciones de video y audio para aprendizaje guiado.",
        en: "Video and audio interactions for guided learning.",
      },
      {
        es: "Configuración de build Android/iOS (package, bundle id, app settings).",
        en: "Android/iOS build configuration (package, bundle id, app settings).",
      },
    ],
    images: ["/projects/RCP.jpeg", "/projects/RCP1.jpeg", "/projects/RCP2.jpeg"],
    imageFit: "contain",
    demoUrl:
      "https://play.google.com/store/apps/details?id=ar.com.fundacionudec.RCPFundacionUdec",
    company: "Luz Consulting",
  },
  {
    slug: "biosyntech",
    name: "Biosyntech",
    description: {
      es: "Sitio institucional en producción para Biosyntech, empresa de insumos e instrumental médico para ortopedia y traumatología. Presenta la empresa y su catálogo de productos, y canaliza las consultas comerciales por WhatsApp y formulario de contacto.",
      en: "Production institutional site for Biosyntech, a medical supplies and surgical instruments company for orthopedics and traumatology. It showcases the company and its product catalog, and channels commercial inquiries through WhatsApp and a contact form.",
    },
    role: {
      es: "Desarrollo front end: landing completa, catálogo de productos, formulario de contacto e integración con WhatsApp.",
      en: "Front end development: full landing page, product catalog, contact form and WhatsApp integration.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Web3Forms"],
    highlights: [
      {
        es: "Catálogo de productos por categorías: osteosíntesis, prótesis, instrumental de artroscopía, insumos médicos y material descartable.",
        en: "Product catalog by category: osteosynthesis, prostheses, arthroscopy instruments, medical supplies and disposables.",
      },
      {
        es: "Integración con WhatsApp: botón flotante y acceso al catálogo completo por mensaje directo.",
        en: "WhatsApp integration: floating button and full catalog access via direct message.",
      },
      {
        es: "Formulario de contacto para consultas comerciales.",
        en: "Contact form for commercial inquiries.",
      },
      {
        es: "Secciones institucionales: sobre nosotros, qué ofrecemos y por qué elegirnos.",
        en: "Institutional sections: about us, what we offer and why choose us.",
      },
      {
        es: "Sitio responsive en producción, con imágenes optimizadas.",
        en: "Responsive site in production, with optimized images.",
      },
    ],
    images: ["/projects/Bio.png", "/projects/Bio1.png"],
    demoUrl: "https://www.biosyntech.com.ar/",
    company: "Freelance",
  },
];
