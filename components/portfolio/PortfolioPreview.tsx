import { AnimatePresence, MotionConfig } from "motion/react";
import type { PortfolioStatus } from "../../types/portfolio";
import type { Project, ProjectFilterId } from "../../types/projects";
import type { PreviewPhase } from "./interactive/types";
import IdlePreview from "./IdlePreview";
import BootingPreview from "./BootingPreview";
import ScaffoldingPreview from "./ScaffoldingPreview";
import GeneratingPreview from "./GeneratingPreview";
import RevealingPreview from "./RevealingPreview";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import StackSection from "./StackSection";
import ExperienceSection from "./ExperienceSection";
import ContactSection from "./ContactSection";
import StatsReceiptSection from "./StatsReceiptSection";
import GitLogSection from "./GitLogSection";
import AchievementsSection from "./AchievementsSection";

interface PortfolioPreviewProps {
  status: PortfolioStatus;
  previewPhase?: PreviewPhase;
  projectExplorerBusy?: boolean;
  onEnter: () => void;
  onProjectSelect?: (project: Project) => void;
  onProjectFilter?: (filter: ProjectFilterId, resultCount: number) => void;
}

const toolbarContext: Partial<Record<PortfolioStatus, { label: string }>> = {
  ready: { label: "runtime" },
  about: { label: "developer.profile" },
  projects: { label: "projects.json" },
  stack: { label: "stack.layers" },
  experience: { label: "experience.timeline" },
  contact: { label: "contact.config" },
  stats: { label: "stats.receipt" },
  gitLog: { label: "career.commits" },
  achievements: { label: "milestones" },
};

const phaseStatusLabels: Record<PreviewPhase, { label: string; dot: string }> = {
  idle: { label: "waiting", dot: "bg-zinc-300" },
  booting: { label: "booting", dot: "bg-amber-400" },
  scaffolding: { label: "scaffolding", dot: "bg-blue-400" },
  generating: { label: "generating", dot: "bg-indigo-400" },
  revealing: { label: "revealing", dot: "bg-violet-400" },
  completed: { label: "live", dot: "bg-emerald-500" },
};

export default function PortfolioPreview({
  status,
  previewPhase = "idle",
  projectExplorerBusy = false,
  onEnter,
  onProjectSelect,
  onProjectFilter,
}: PortfolioPreviewProps) {
  const isProjectExplorer = status === "projects";
  const isDocumentLike = isProjectExplorer;
  const isContent =
    isProjectExplorer ||
    status === "about" ||
    status === "contact" ||
    status === "stack" ||
    status === "experience" ||
    status === "stats" ||
    status === "gitLog" ||
    status === "achievements";
  const isCentered = !isContent;
  const isBootingPhase = status === "booting" && ["booting", "scaffolding", "generating", "revealing"].includes(previewPhase);
  const phaseInfo = phaseStatusLabels[previewPhase];

  const statusBarHint =
    previewPhase === "idle"
      ? "ready — press Enter to generate"
      : previewPhase === "booting"
        ? "preparing environment..."
        : previewPhase === "scaffolding"
          ? "building preview components..."
          : previewPhase === "generating"
            ? "injecting profile data..."
            : previewPhase === "revealing"
              ? "assembling final preview..."
              : previewPhase === "completed"
                ? "choose a section from the terminal"
                : "scroll — the rest writes itself";

  return (
    <div className="flex min-w-0 flex-col bg-zinc-100 dark:bg-zinc-100 md:h-full md:overflow-hidden">
      {/* macOS-style window container */}
      <div className="mx-3 mb-3 mt-3 flex flex-col rounded-xl border border-zinc-200/80 bg-white shadow-[0_2px_12px_-2px_rgba(0,0,0,0.08),0_1px_4px_-1px_rgba(0,0,0,0.04)] dark:border-zinc-200/80 dark:bg-white md:flex-1 md:min-h-0 md:overflow-hidden md:mx-5 md:my-4">
        {/* Titlebar */}
        <div className="flex shrink-0 items-center gap-3 border-b border-zinc-200/80 bg-zinc-50/70 backdrop-blur-sm dark:border-zinc-200/80 dark:bg-zinc-50/70 px-4 h-9">
          <div className="flex items-center gap-1.5 group" aria-label="Window controls">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500 transition-transform duration-150 group-hover:scale-125" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500 transition-transform duration-150 group-hover:scale-125" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500 transition-transform duration-150 group-hover:scale-125" />
          </div>
          <span className="text-xs font-medium text-zinc-500">
            Portfolio Preview
          </span>
          <span className="text-[10px] text-zinc-300">/</span>
          <span className="flex items-center gap-1 text-[10px] font-medium text-zinc-400">
            <span className={`h-1.5 w-1.5 rounded-full ${phaseInfo.dot}`} />
            {phaseInfo.label}
          </span>
        </div>

        {/* Toolbar */}
        {status !== "idle" && status !== "booting" && (
          <div className="flex shrink-0 items-center justify-between border-b border-zinc-200/80 bg-zinc-50/40 px-4 h-8">
            <div className="flex items-center gap-2 min-w-0">
              <span className="text-[11px] font-medium text-zinc-400">Portfolio Preview</span>
              <span className="text-[11px] text-zinc-300 select-none">/</span>
              <span className="text-[11px] font-medium text-zinc-600 truncate">
                {toolbarContext[status]?.label ?? status}
              </span>
            </div>
          </div>
        )}

        {/* Scrollable body */}
        <div
          className={`overflow-x-hidden ${
            isCentered ? "flex flex-col" : ""
          } md:flex-1 md:min-h-0 md:overflow-y-auto md:custom-scrollbar-light`}
        >
          <div
            className={`flex w-full flex-col items-center ${
              isBootingPhase
                ? "justify-start pt-6 sm:pt-8"
                : isCentered
                  ? "flex-1 min-h-full justify-center"
                  : isDocumentLike
                    ? "min-h-0 justify-start p-3 sm:p-5"
                    : "min-h-0 justify-start p-4 sm:p-6"
            }`}
          >
            <div
              className={`relative mx-auto flex min-w-0 w-full flex-col items-center ${
                isBootingPhase
                  ? "max-w-3xl"
                  : isProjectExplorer
                    ? "max-w-6xl"
                    : isContent
                      ? "max-w-3xl"
                      : "max-w-lg p-6 min-h-[300px] sm:min-h-[340px] sm:p-8"
              }`}
            >
              <MotionConfig reducedMotion={process.env.NODE_ENV === "production" ? "user" : "never"}>
                <div className="relative flex w-full min-w-0 flex-col items-center">
                  <AnimatePresence mode="wait">
                    {status === "idle" && <IdlePreview key="idle" onEnter={onEnter} />}
                    {status === "booting" && previewPhase === "booting" && (
                      <BootingPreview key="booting" />
                    )}
                    {status === "booting" && previewPhase === "scaffolding" && (
                      <ScaffoldingPreview key="scaffolding" />
                    )}
                    {status === "booting" && previewPhase === "generating" && (
                      <GeneratingPreview key="generating" />
                    )}
                    {status === "booting" && previewPhase === "revealing" && (
                      <RevealingPreview key="revealing" />
                    )}
                    {status === "ready" && (
                      <HeroSection
                        key="ready"
                      />
                    )}
                    {status === "about" && <AboutSection key="about" />}
                    {status === "projects" && (
                      <ProjectsSection
                        key="projects"
                        consoleBusy={projectExplorerBusy}
                        onProjectFilter={onProjectFilter}
                        onProjectSelect={onProjectSelect}
                      />
                    )}
                    {status === "stack" && <StackSection key="stack" />}
                    {status === "experience" && <ExperienceSection key="experience" />}
                    {status === "contact" && <ContactSection key="contact" />}
                    {status === "stats" && <StatsReceiptSection key="stats" />}
                    {status === "gitLog" && <GitLogSection key="gitLog" />}
                    {status === "achievements" && (
                      <AchievementsSection key="achievements" />
                    )}
                  </AnimatePresence>
                </div>
              </MotionConfig>
            </div>
          </div>
        </div>

        {/* Statusbar */}
        <div className="flex shrink-0 items-center justify-between border-t border-zinc-200/80 bg-zinc-50/70 dark:border-zinc-200/80 dark:bg-zinc-50/70 px-4 h-6 text-[10px] text-zinc-400 print:hidden">
          <span>Portfolio Preview</span>
          <span>{statusBarHint}</span>
        </div>
      </div>
    </div>
  );
}
