import { AnimatePresence } from "motion/react";
import { getPortfolioFooterHint } from "../../data/console";
import type { PortfolioStatus } from "../../types/portfolio";
import type { Project, ProjectFilterId } from "../../types/projects";
import IdlePreview from "./IdlePreview";
import BootingPreview from "./BootingPreview";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import StackSection from "./StackSection";
import ExperienceSection from "./ExperienceSection";
import CvSection from "./CvSection";
import ContactSection from "./ContactSection";
import StatsReceiptSection from "./StatsReceiptSection";
import GitLogSection from "./GitLogSection";
import AchievementsSection from "./AchievementsSection";

interface PortfolioPreviewProps {
  status: PortfolioStatus;
  projectExplorerBusy?: boolean;
  onEnter: () => void;
  onProjectSelect?: (project: Project) => void;
  onProjectFilter?: (filter: ProjectFilterId, resultCount: number) => void;
}

export default function PortfolioPreview({
  status,
  projectExplorerBusy = false,
  onEnter,
  onProjectSelect,
  onProjectFilter,
}: PortfolioPreviewProps) {
  const isCv = status === "cv";
  const isProjectExplorer = status === "projects";
  const isDocumentLike = isCv || isProjectExplorer;
  const isContent =
    isProjectExplorer ||
    status === "about" ||
    status === "stack" ||
    status === "experience" ||
    status === "stats" ||
    status === "gitLog" ||
    status === "achievements";

  return (
    <div
      className={`relative flex min-h-full min-w-0 flex-col items-center bg-gradient-to-br from-zinc-50 via-white to-zinc-100 text-zinc-800 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900 dark:text-zinc-100 print:block print:min-h-0 print:bg-white print:p-0 ${
        isCv || isContent
          ? isDocumentLike
            ? "justify-start overflow-x-hidden p-3 pb-10 sm:p-6 sm:pb-12"
            : "justify-start overflow-x-hidden p-4 sm:p-8"
          : "min-h-[58svh] justify-center overflow-hidden p-6 sm:p-8 md:h-full md:min-h-0"
      }`}
    >
      {/* Soft ambient glow */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-indigo-100/30 dark:bg-indigo-950/20 rounded-full blur-3xl pointer-events-none print:hidden" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-emerald-100/20 dark:bg-emerald-950/10 rounded-full blur-3xl pointer-events-none print:hidden" />

      {/* Content card */}
      <div
        className={`relative mx-auto flex min-w-0 w-full flex-col items-center justify-center text-center ${
          isCv
            ? "max-w-5xl rounded-2xl bg-white/90 backdrop-blur-sm border border-zinc-200/70 shadow-sm shadow-zinc-200/50 dark:border-zinc-800/70 dark:bg-zinc-950/90 dark:shadow-none p-3 sm:p-5"
            : isProjectExplorer
              ? "max-w-6xl rounded-2xl bg-white/90 backdrop-blur-sm border border-zinc-200/70 shadow-sm shadow-zinc-200/50 dark:border-zinc-800/70 dark:bg-zinc-950/90 dark:shadow-none p-3 sm:p-5"
              : isContent
                ? "max-w-xl"
                : "max-w-lg rounded-2xl bg-white/90 backdrop-blur-sm border border-zinc-200/70 shadow-sm shadow-zinc-200/50 dark:border-zinc-800/70 dark:bg-zinc-950/90 dark:shadow-none p-6 min-h-[300px] sm:min-h-[340px] sm:p-8"
        }`}
      >

        <div className="relative flex w-full min-w-0 flex-col items-center">
          <AnimatePresence mode="wait">
            {status === "idle" && <IdlePreview key="idle" onEnter={onEnter} />}
            {status === "booting" && <BootingPreview key="booting" />}
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
            {status === "cv" && <CvSection key="cv" />}
            {status === "contact" && <ContactSection key="contact" />}
            {status === "stats" && <StatsReceiptSection key="stats" />}
            {status === "gitLog" && <GitLogSection key="gitLog" />}
            {status === "achievements" && (
              <AchievementsSection key="achievements" />
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Footer hint */}
      <div className="pointer-events-none absolute bottom-5 left-4 right-4 text-center text-[11px] text-zinc-400 dark:text-zinc-600 print:hidden">
        {getPortfolioFooterHint(status)}
      </div>
    </div>
  );
}
