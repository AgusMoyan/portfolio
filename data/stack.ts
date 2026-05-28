import type { TechCategory } from "../types/portfolio";

export const stack: TechCategory[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    category: "Backend / BaaS",
    items: ["Supabase", "NestJS", "APIs REST"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "Prisma", "SQLite"],
  },
  {
    category: "Integraciones",
    items: ["Mapbox", "MercadoPago", "PostHog"],
  },
  {
    category: "Deploy / Tools",
    items: ["Vercel", "Git", "pnpm"],
  },
];
