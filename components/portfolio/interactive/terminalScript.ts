import type { FlowStatus, PreviewPhase, TerminalLine } from "./types";

export const flowSteps: FlowStatus[] = [
  "idle",
  "submitting",
  "booting",
  "planning",
  "scaffolding",
  "installing",
  "starting_dev_server",
  "generating_preview",
  "completed",
];

export const previewSteps: PreviewPhase[] = [
  "idle",
  "booting",
  "scaffolding",
  "generating",
  "revealing",
  "completed",
];

export function createTerminalScript(): TerminalLine[] {
  return [
    // ═══════════════════════════════════════════════════════════
    // PHASE 1: SUBMITTING  (~0.9s)
    // ═══════════════════════════════════════════════════════════
    {
      id: "user-prompt",
      type: "command",
      content: "build me an interactive developer portfolio with a clean macOS preview",
      delayMs: 0,
      phase: "submitting",
      previewPhase: "booting",
    },
    {
      id: "submitting-thinking",
      type: "output",
      content: "Analyzing request...",
      delayMs: 400,
    },
    {
      id: "submitting-done",
      type: "success",
      content: "Request understood. Generating portfolio from profile data.",
      delayMs: 500,
    },

    // ═══════════════════════════════════════════════════════════
    // PHASE 2: PLANNING  (~2.5s)
    // ═══════════════════════════════════════════════════════════
    {
      id: "phase-planning",
      type: "muted",
      content: "── plan ──────────────────────────────────────",
      delayMs: 400,
      phase: "planning",
    },
    {
      id: "plan-intro",
      type: "text",
      content: "Got it. Here's the plan:",
      delayMs: 300,
    },
    {
      id: "plan-1",
      type: "text",
      content: "1. Read existing profile and project data",
      delayMs: 350,
    },
    {
      id: "plan-2",
      type: "text",
      content: "2. Scaffold a polished portfolio preview window",
      delayMs: 350,
    },
    {
      id: "plan-3",
      type: "text",
      content: "3. Wire terminal progress to visual sections",
      delayMs: 350,
    },
    {
      id: "plan-4",
      type: "text",
      content: "4. Deploy preview with scroll-based reveal",
      delayMs: 350,
    },
    {
      id: "plan-done",
      type: "success",
      content: "Plan ready. Starting scaffold.",
      delayMs: 400,
    },

    // ═══════════════════════════════════════════════════════════
    // PHASE 3: SCAFFOLDING  (~2.6s)
    // ═══════════════════════════════════════════════════════════
    {
      id: "phase-scaffold",
      type: "muted",
      content: "── scaffold ──────────────────────────────────",
      delayMs: 300,
      phase: "scaffolding",
      previewPhase: "scaffolding",
    },
    {
      id: "scaffold-create",
      type: "command",
      content: "pnpm create vite@latest portfolio -- --template react-ts",
      delayMs: 300,
    },
    {
      id: "scaffold-dir",
      type: "output",
      content: "scaffolded portfolio/",
      delayMs: 400,
    },
    {
      id: "scaffold-cd",
      type: "command",
      content: "cd portfolio",
      delayMs: 200,
    },
    {
      id: "scaffold-install",
      type: "command",
      content: "pnpm install",
      delayMs: 200,
    },
    {
      id: "scaffold-packages",
      type: "text",
      content: "added 174 packages in 2.8s",
      delayMs: 500,
    },
    {
      id: "scaffold-deps",
      type: "text",
      content: "✓ next@16.2.6  react@19.2.4  motion@12.6.0  lucide-react  tailwind-merge",
      delayMs: 350,
    },
    {
      id: "scaffold-devdeps",
      type: "text",
      content: "✓ typescript  tailwindcss  eslint  postcss",
      delayMs: 300,
    },
    {
      id: "scaffold-done",
      type: "success",
      content: "Scaffold complete.",
      delayMs: 250,
    },

    // ═══════════════════════════════════════════════════════════
    // PHASE 4: READING DATA  (~2.5s)
    // ═══════════════════════════════════════════════════════════
    {
      id: "phase-data",
      type: "muted",
      content: "── reading data ──────────────────────────────",
      delayMs: 250,
      phase: "installing",
      previewPhase: "generating",
    },
    {
      id: "read-profile",
      type: "command",
      content: "> cat profile.json",
      delayMs: 250,
    },
    {
      id: "profile-json",
      type: "json",
      lines: [
        "{",
        '  "role": "React / React Native Developer",',
        '  "focus": ["frontend", "mobile", "product UI"],',
        '  "location": "Argentina",',
        '  "highlights": [',
        '    "Product flows & admin dashboards",',
        '    "Mobile-first healthcare apps",',
        '    "API integrations & auth systems"',
        "  ]",
        "}",
      ],
      delayMs: 600,
    },
    {
      id: "read-projects",
      type: "output",
      content: "Read(\"projects.json\") → 4 indexed projects including 2Mmudanzas, UDEC Clinical Records, RCP Fundación, TrustRide",
      delayMs: 400,
    },
    {
      id: "read-stack",
      type: "output",
      content: "Read(\"stack.layers\") → 5 layers: interface, mobile, data, integrations, tooling",
      delayMs: 350,
    },
    {
      id: "read-experience",
      type: "output",
      content: "Read(\"experience.timeline\") → 2 positions, 4 milestones",
      delayMs: 350,
    },
    {
      id: "data-done",
      type: "success",
      content: "Profile data hydrated.",
      delayMs: 300,
    },

    // ═══════════════════════════════════════════════════════════
    // PHASE 5: GENERATING SECTIONS  (~2.4s)
    // ═══════════════════════════════════════════════════════════
    {
      id: "phase-generate",
      type: "muted",
      content: "── generating sections ───────────────────────",
      delayMs: 250,
      phase: "generating_preview",
      previewPhase: "revealing",
    },
    {
      id: "generate-hero",
      type: "output",
      content: "Generating HeroSection...",
      delayMs: 300,
    },
    {
      id: "generate-projects",
      type: "output",
      content: "Composing ProjectCards with tech badges...",
      delayMs: 350,
    },
    {
      id: "generate-about",
      type: "output",
      content: "Building AboutSection with principles grid...",
      delayMs: 300,
    },
    {
      id: "generate-experience",
      type: "output",
      content: "Rendering ExperienceSection timeline...",
      delayMs: 300,
    },
    {
      id: "generate-stack",
      type: "output",
      content: "Mapping stack badges by layer...",
      delayMs: 250,
    },
    {
      id: "generate-contacts",
      type: "output",
      content: "Syncing contact panel and stats receipt...",
      delayMs: 300,
    },
    {
      id: "generate-done",
      type: "success",
      content: "Preview ready.",
      delayMs: 350,
    },

    // ═══════════════════════════════════════════════════════════
    // PHASE 6: COMPLETED  (~1.5s)
    // ═══════════════════════════════════════════════════════════
    {
      id: "phase-completed",
      type: "muted",
      content: "── ready ──────────────────────────────────────",
      delayMs: 300,
      phase: "completed",
      previewPhase: "completed",
    },
    {
      id: "completed-live",
      type: "output",
      content: "watching for scroll...",
      delayMs: 300,
    },
    {
      id: "completed-message",
      type: "success",
      content: "portfolio preview is live",
      delayMs: 400,
    },
    {
      id: "completed-hint",
      type: "muted",
      content: "Choose a section from the terminal to explore.",
      delayMs: 500,
    },
  ];
}
