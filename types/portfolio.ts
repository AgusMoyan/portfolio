export const portfolioCommands = [
  "projects",
  "about",
  "experience",
  "stack",
  "cv",
  "contact",
  "stats",
  "gitLog",
  "achievements",
] as const;

export type PortfolioCommand = (typeof portfolioCommands)[number];

export type PortfolioStatus = "idle" | "booting" | "ready" | PortfolioCommand;

export function isPortfolioCommand(
  status: PortfolioStatus
): status is PortfolioCommand {
  return portfolioCommands.includes(status as PortfolioCommand);
}

export interface Profile {
  name: string;
  shortName: string;
  role: string;
  location: string;
  summary: string;
  currentFocus: string;
  highlights: string[];
}

export interface TechCategory {
  category: string;
  description: string;
  usedFor: string;
  items: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  mode?: string;
  period: string;
  summary: string;
  bullets: string[];
  tags?: string[];
}

export interface MilestoneItem {
  id: string;
  title: string;
  period?: string;
  summary: string;
  tags?: string[];
}

export interface Contact {
  email: string;
  github: string;
  linkedin: string;
  whatsapp?: string;
  cv: {
    path: string;
    available: boolean;
  };
}

export interface StatsItem {
  label: string;
  value: string;
}

export interface StatsReceipt {
  title: string;
  subtitle: string;
  items: StatsItem[];
  totalLabel: string;
  totalValue: string;
  barcode: string;
}

export interface GitLogEntry {
  hash: string;
  year: string;
  title: string;
  message: string;
  tags: string[];
}

export interface AboutPrinciple {
  number: string;
  title: string;
  description: string;
}

export interface AboutData {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  principles: AboutPrinciple[];
  contributionAreas: string[];
}

export interface Achievement {
  title: string;
  description: string;
  project: string;
}
