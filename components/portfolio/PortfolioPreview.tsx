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
  const isContent =
    isProjectExplorer ||
    status === "about" ||
    status === "stats" ||
    status === "gitLog" ||
    status === "achievements";

  return (
    <div
      className={`relative flex min-h-full flex-col items-center bg-gradient-to-br from-zinc-50 via-white to-zinc-100 text-zinc-800 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900 dark:text-zinc-100 print:block print:min-h-0 print:bg-white print:p-0 ${
        isCv || isContent
          ? "justify-start overflow-x-hidden p-3 pb-14 sm:p-6 sm:pb-16"
          : "h-full min-h-[400px] justify-center overflow-hidden p-8"
      }`}
    >
      {/* Subtle dot grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:16px_24px] pointer-events-none print:hidden" />

      {/* Soft ambient glow */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-indigo-100/30 dark:bg-indigo-950/20 rounded-full blur-3xl pointer-events-none print:hidden" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-emerald-100/20 dark:bg-emerald-950/10 rounded-full blur-3xl pointer-events-none print:hidden" />

      {/* Content card */}
      <div
        className={`relative mx-auto flex w-full flex-col items-center justify-center text-center bg-white/90 backdrop-blur-sm border border-zinc-200/70 shadow-sm shadow-zinc-200/50 dark:border-zinc-800/70 dark:bg-zinc-950/90 dark:shadow-none print:max-w-none print:border-0 print:bg-white print:p-0 print:shadow-none ${
          isCv
            ? "max-w-5xl rounded-2xl p-3 sm:p-5"
            : isProjectExplorer
              ? "max-w-6xl rounded-2xl p-3 sm:p-5"
              : isContent
                ? "max-w-xl rounded-2xl p-4 sm:p-6"
                : "max-w-lg rounded-2xl p-8 min-h-[340px]"
        }`}
      >
        {/* Inner ambient glows */}
        <div className="absolute -top-12 -left-12 w-36 h-36 bg-zinc-50 dark:bg-zinc-900/50 rounded-full blur-3xl opacity-70 pointer-events-none print:hidden" />
        <div className="absolute -bottom-12 -right-12 w-36 h-36 bg-zinc-50 dark:bg-zinc-900/50 rounded-full blur-3xl opacity-70 pointer-events-none print:hidden" />

        <div className="relative w-full flex flex-col items-center">
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
      <div className="absolute bottom-5 text-[11px] text-zinc-400 dark:text-zinc-600 font-mono tracking-tight print:hidden">
        {getPortfolioFooterHint(status)}
      </div>
    </div>
  );
}
