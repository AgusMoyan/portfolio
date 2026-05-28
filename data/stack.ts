import type { TechCategory } from "../types/portfolio";

export const stack: TechCategory[] = [
  {
    category: "Interface layer",
    description:
      "Interfaces web, diseño de componentes, estados visuales y experiencia de usuario.",
    usedFor: "interfaces",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
    ],
  },
  {
    category: "Mobile layer",
    description:
      "Aplicaciones mobile, navegación, builds, updates y flujos offline.",
    usedFor: "mobile",
    items: ["React Native", "Expo", "EAS Build", "Expo Updates", "SQLite"],
  },
  {
    category: "Data & backend",
    description:
      "APIs, autenticación, bases de datos, modelos y lógica server-side.",
    usedFor: "backend",
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
    category: "Product integrations",
    description:
      "Servicios externos que conectan el producto con mapas, pagos, analítica y seguridad.",
    usedFor: "integrations",
    items: [
      "Mapbox",
      "GeoRef",
      "Google Maps",
      "Mercado Pago",
      "PostHog",
      "reCAPTCHA",
      "Supabase Auth",
    ],
  },
  {
    category: "Delivery & tooling",
    description:
      "Deploys, documentación, control de versiones y herramientas de trabajo.",
    usedFor: "delivery",
    items: ["Git", "GitHub", "Vercel", "Swagger", "Figma", "pnpm"],
  },
];
