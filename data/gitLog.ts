import type { GitLogEntry } from "../types/portfolio";

export const gitLogHeader = {
  eyebrow: "git log --career",
  title: "Career commits",
  description:
    "Hitos que marcaron mi evolución como developer web, mobile y full stack.",
};

export const gitLogEntries: GitLogEntry[] = [
  {
    hash: "a9f3c21",
    year: "2026",
    title: "Published mobile app to Google Play",
    message:
      "Configured Expo, EAS Build, Android package, OTA updates and production release flow.",
    tags: ["React Native", "Expo", "EAS Build", "Google Play"],
  },
  {
    hash: "b7e2d88",
    year: "2025",
    title: "Built production quotation platform",
    message:
      "Developed pricing logic, address validation, route visualization, admin dashboard and booking flows.",
    tags: ["Next.js", "Supabase", "Mapbox", "NestJS"],
  },
  {
    hash: "c4d8a10",
    year: "2025",
    title: "Implemented offline-first clinical workflows",
    message:
      "Added SQLite drafts, synchronization queue, digital signatures and role-based clinical forms.",
    tags: ["React Native", "SQLite", "NestJS", "PostgreSQL"],
  },
  {
    hash: "e1f9b04",
    year: "2024",
    title: "Expanded full-stack production toolkit",
    message:
      "Worked across frontend, backend, databases, authentication, API integrations and deployment workflows.",
    tags: ["TypeScript", "PostgreSQL", "REST APIs", "Vercel"],
  },
];
