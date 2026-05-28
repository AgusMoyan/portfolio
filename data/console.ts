import {
  isPortfolioCommand,
  type PortfolioCommand,
  type PortfolioStatus,
} from "../types/portfolio";

export const consoleIntro = {
  version: "// Developer Portfolio Console v1.0.0",
  initialization: "// Initialization: OK",
  welcome: "Welcome to Agus Runtime",
  cwd: "~/agustin-moyano",
  terminalTitle: "agus@portfolio ~/me — runtime",
  idlePrompt: "waiting for user action",
};

export const idlePreviewCopy = {
  title: "Agus.dev",
  subtitle: "Portfolio Runtime",
  instruction: "Presioná",
  emphasizedKey: "Enter",
  instructionSuffix: "para iniciar",
  description:
    "Una experiencia interactiva donde mi perfil se ejecuta como una consola.",
};

export const bootingPreviewCopy = {
  title: "Inicializando portfolio",
  description: "Cargando perfil, proyectos y stack técnico.",
  loadingDots: [0, 1, 2],
  loadingBars: [
    { width: "w-48", delay: 0.2 },
    { width: "w-36", delay: 0.6 },
    { width: "w-44", delay: 1.0 },
    { width: "w-28", delay: 1.4 },
  ],
} as const;

export const bootSequence = [
  "> run agustin-profile --mode=interactive",
  "Reading profile.ts",
  "Loading highlighted projects",
  "Detecting scope: product flows, web apps, mobile apps, integrations",
  "Preparing recruiter mode",
  "Rendering portfolio preview",
  "Done",
] as const;

export const bootDelays = [160, 620, 520, 740, 560, 600, 420] as const;

export const readyLine = "profile ready — choose a command";

export const commandDelays = [260, 520, 480, 420, 360] as const;

export const commandConfig: Record<
  PortfolioCommand,
  {
    label: string;
    hint: string;
    sequence: readonly string[];
  }
> = {
  about: {
    label: "/about",
    hint: "developer profile",
    sequence: [
      "Reading developer.profile",
      "Mapping product + engineering scope",
      "Rendering working model",
    ],
  },
  projects: {
    label: "/projects",
    hint: "project explorer",
    sequence: [
      "Reading projects.json",
      "Detecting production work",
      "Found 4 shipped projects",
      "Rendering project explorer",
    ],
  },
  stack: {
    label: "/stack",
    hint: "technical stack",
    sequence: [
      "Reading stack.layers",
      "Grouping tools by purpose",
      "Rendering technical map",
    ],
  },
  experience: {
    label: "/experience",
    hint: "timeline",
    sequence: [
      "Reading professional.timeline",
      "Sorting roles and milestones",
      "Rendering career timeline",
    ],
  },
  cv: {
    label: "/cv",
    hint: "inline document",
    sequence: [
      "Reading cv.document.ts",
      "Loading ES / EN versions",
      "Formatting professional document",
      "Rendering inline CV",
      "Download action ready",
    ],
  },
  contact: {
    label: "/contact",
    hint: "contact actions",
    sequence: [
      "Reading contact.config",
      "Enabling contact actions",
      "Rendering contact panel",
    ],
  },
  stats: {
    label: "/receipt",
    hint: "developer receipt",
    sequence: [
      "Reading stats.receipt",
      "Formatting quick developer metrics",
      "Rendering receipt",
    ],
  },
  gitLog: {
    label: "/git-log",
    hint: "career commits",
    sequence: [
      "Reading career commits",
      "Sorting professional history",
      "Rendering git log",
    ],
  },
  achievements: {
    label: "/achievements",
    hint: "unlocked milestones",
    sequence: [
      "Scanning unlocked milestones",
      "Loading achievement badges",
      "Rendering achievements",
    ],
  },
};

export const consoleStatusCopy: Record<
  PortfolioStatus,
  { label: string; text: string }
> = {
  idle: { label: "idle", text: "ready — press enter to run profile" },
  booting: { label: "booting", text: "running profile boot sequence" },
  ready: { label: "ready", text: "profile loaded — awaiting next command" },
  about: { label: "about", text: "about section loaded — choose another command" },
  projects: {
    label: "projects",
    text: "project explorer loaded — choose another command",
  },
  stack: { label: "stack", text: "stack section loaded — choose another command" },
  experience: {
    label: "experience",
    text: "experience section loaded — choose another command",
  },
  cv: { label: "cv", text: "cv panel loaded — choose another command" },
  contact: { label: "contact", text: "contact panel loaded — choose another command" },
  stats: { label: "receipt", text: "receipt loaded — choose another command" },
  gitLog: { label: "git-log", text: "git log loaded — choose another command" },
  achievements: { label: "achievements", text: "achievements loaded — choose another command" },
};

export function getPortfolioFooterHint(status: PortfolioStatus) {
  if (status === "idle") return "v1.0.0-beta • waiting for user input";
  if (status === "booting") return "v1.0.0-beta • loading runtime modules";
  if (status === "ready") return "v1.0.0-beta • commands available";
  if (isPortfolioCommand(status)) {
    return `v1.0.0-beta • ${commandConfig[status].label} rendered`;
  }

  return "v1.0.0-beta • portfolio rendered";
}
