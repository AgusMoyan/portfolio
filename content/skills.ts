import type { SkillGroup, SpokenLanguage } from "./types";

/**
 * Stack agrupado por propósito (capa del producto), no por categoría genérica.
 * `icon` = slug de simpleicons.org; "" = se muestra solo el nombre.
 */
export const skillGroups: SkillGroup[] = [
  {
    id: "interface",
    title: { es: "Capa de interfaz", en: "Interface layer" },
    description: {
      es: "Interfaces web, diseño de componentes, estados visuales y experiencia de usuario.",
      en: "Web interfaces, component design, visual states and user experience.",
    },
    skills: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextdotjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "shadcn/ui", icon: "shadcnui" },
      { name: "Framer Motion", icon: "framer" },
    ],
  },
  {
    id: "mobile",
    title: { es: "Capa mobile", en: "Mobile layer" },
    description: {
      es: "Aplicaciones mobile, navegación, builds, updates y flujos offline.",
      en: "Mobile apps, navigation, builds, updates and offline flows.",
    },
    skills: [
      { name: "React Native", icon: "react" },
      { name: "Expo", icon: "expo" },
      { name: "EAS Build", icon: "expo" },
      { name: "Expo Updates", icon: "expo" },
      { name: "SQLite", icon: "sqlite" },
    ],
  },
  {
    id: "backend",
    title: { es: "Datos & backend", en: "Data & backend" },
    description: {
      es: "APIs, autenticación, bases de datos, modelos y lógica server-side.",
      en: "APIs, authentication, databases, models and server-side logic.",
    },
    skills: [
      { name: "Node.js", icon: "nodedotjs" },
      { name: "NestJS", icon: "nestjs" },
      { name: "Supabase", icon: "supabase" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Prisma", icon: "prisma" },
      { name: "REST APIs", icon: "" },
      { name: "Next.js API Routes", icon: "nextdotjs" },
    ],
  },
  {
    id: "integrations",
    title: { es: "Integraciones de producto", en: "Product integrations" },
    description: {
      es: "Servicios externos que conectan el producto con mapas, pagos, analítica y seguridad.",
      en: "External services connecting the product with maps, payments, analytics and security.",
    },
    skills: [
      { name: "Mapbox", icon: "mapbox" },
      { name: "GeoRef", icon: "" },
      { name: "Google Maps", icon: "googlemaps" },
      { name: "Mercado Pago", icon: "mercadopago" },
      { name: "PostHog", icon: "posthog" },
      { name: "reCAPTCHA", icon: "" },
      { name: "Supabase Auth", icon: "supabase" },
    ],
  },
  {
    id: "delivery",
    title: { es: "Delivery & tooling", en: "Delivery & tooling" },
    description: {
      es: "Deploys, documentación, control de versiones y herramientas de trabajo.",
      en: "Deploys, documentation, version control and work tooling.",
    },
    skills: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Vercel", icon: "vercel" },
      { name: "Swagger", icon: "swagger" },
      { name: "Figma", icon: "figma" },
      { name: "pnpm", icon: "pnpm" },
    ],
  },
];

export const spokenLanguages: SpokenLanguage[] = [
  {
    name: { es: "Español", en: "Spanish" },
    level: { es: "Nativo", en: "Native" },
  },
  {
    name: { es: "Inglés", en: "English" },
    level: { es: "Avanzado", en: "Advanced" },
  },
];
