import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, MotionConfig } from "motion/react";
import type { PortfolioCommand, PortfolioStatus } from "../../types/portfolio";
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
import CommandPalette from "./CommandPalette";
import { Search, Command, Sun, Moon } from "lucide-react";

interface PortfolioPreviewProps {
  status: PortfolioStatus;
  previewPhase?: PreviewPhase;
  projectExplorerBusy?: boolean;
  onEnter: () => void;
  onHome?: () => void;
  onNavigate?: (command: PortfolioCommand) => void;
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
  idle: { label: "waiting", dot: "bg-tx3" },
  booting: { label: "booting", dot: "bg-amber-400" },
  scaffolding: { label: "scaffolding", dot: "bg-blue-400" },
  generating: { label: "generating", dot: "bg-accent" },
  revealing: { label: "revealing", dot: "bg-violet-400" },
  completed: { label: "live", dot: "bg-emerald-500" },
};

export default function PortfolioPreview({
  status,
  previewPhase = "idle",
  projectExplorerBusy = false,
  onEnter,
  onHome,
  onNavigate,
  onProjectSelect,
  onProjectFilter,
}: PortfolioPreviewProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [isWindowFocused, setIsWindowFocused] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [collapsed, setCollapsed] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") {
      document.documentElement.classList.remove("dark", "light");
      document.documentElement.classList.add(stored);
      setDarkMode(stored === "dark");
    }
  }, []);

  const toggleDark = useCallback(() => {
    const html = document.documentElement;
    const isDark = html.classList.contains("dark");
    html.classList.remove("dark", "light");
    if (isDark) {
      html.classList.add("light");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    const onFocusIn = () => setIsWindowFocused(true);
    const onFocusOut = (e: FocusEvent) => {
      if (!el.contains(e.relatedTarget as Node)) {
        setIsWindowFocused(false);
      }
    };
    el.addEventListener("focusin", onFocusIn);
    el.addEventListener("focusout", onFocusOut);
    return () => {
      el.removeEventListener("focusin", onFocusIn);
      el.removeEventListener("focusout", onFocusOut);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (status === "ready" || isContent) {
          setPaletteOpen((p) => !p);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [status]);

  const handleSearchToggle = useCallback(() => {
    setSearchOpen((prev) => {
      if (!prev) setTimeout(() => searchInputRef.current?.focus(), 50);
      return !prev;
    });
  }, []);

  const clearSearch = useCallback(() => {
    setSearchQuery("");
    setSearchOpen(false);
  }, []);

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
  const isCentered = !isContent && status !== "ready";
  const isBootingPhase = status === "booting" && ["booting", "scaffolding", "generating", "revealing"].includes(previewPhase);
  const phaseInfo = phaseStatusLabels[previewPhase];
  const canPalette = status === "ready" || isContent;

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
                ? canPalette ? "⌘K to search · choose a section from the terminal" : "choose a section from the terminal"
                : "scroll — the rest writes itself";

  return (
    <div
      ref={panelRef}
      tabIndex={-1}
      className="flex min-w-0 flex-col bg-panel font-sans outline-none md:h-full md:overflow-hidden"
    >
      {/* macOS-style window container */}
      <div className="mx-3 mb-3 mt-3 flex flex-col rounded-[10px] border border-line bg-card shadow-[0_0_0_0.5px_rgba(0,0,0,0.06),0_2px_8px_rgba(0,0,0,0.06),0_8px_30px_rgba(0,0,0,0.1)] md:flex-1 md:min-h-0 md:overflow-hidden md:mx-5 md:my-4">
        {/* Titlebar */}
        <div
          data-tauri-drag-region
          className="flex shrink-0 cursor-default select-none items-center gap-3 border-b border-line bg-card/70 backdrop-blur-xl px-4 h-10"
        >
          <div className="flex items-center gap-[6px]" aria-label="Window controls">
            <button
              type="button"
              onClick={onHome}
              aria-label="Close to dashboard"
              className="group/tl1 relative h-3 w-3 cursor-pointer"
            >
              <span
                className={`absolute inset-0 rounded-full transition-all duration-150 group-hover/tl1:scale-110 ${
                  isWindowFocused ? "bg-[#FF5F57]" : "bg-[#CDCDCD]"
                }`}
              />
              <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-100 group-hover/tl1:opacity-100 text-[9px] font-bold leading-none text-[rgba(0,0,0,0.45)]">✕</span>
            </button>
            <button
              type="button"
              onClick={() => setCollapsed((c) => !c)}
              aria-label="Minimize"
              className="group/tl2 relative h-3 w-3 cursor-pointer"
            >
              <span
                className={`absolute inset-0 rounded-full transition-all duration-150 group-hover/tl2:scale-110 ${
                  isWindowFocused ? "bg-[#FEBC2E]" : "bg-[#CDCDCD]"
                }`}
              />
              <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-100 group-hover/tl2:opacity-100 text-[9px] font-bold leading-none text-[rgba(0,0,0,0.45)]">−</span>
            </button>
            <button
              type="button"
              onClick={() => document.documentElement.requestFullscreen?.().catch(() => {})}
              aria-label="Maximize"
              className="group/tl3 relative h-3 w-3 cursor-pointer"
            >
              <span
                className={`absolute inset-0 rounded-full transition-all duration-150 group-hover/tl3:scale-110 ${
                  isWindowFocused ? "bg-[#28C840]" : "bg-[#CDCDCD]"
                }`}
              />
              <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-100 group-hover/tl3:opacity-100 text-[9px] font-bold leading-none text-[rgba(0,0,0,0.45)]">+</span>
            </button>
          </div>
          <span className="text-xs font-semibold text-tx2 tracking-tight">
            Portfolio Preview
          </span>
          <span className="text-[10px] text-tx3 select-none">/</span>
          <span className="flex items-center gap-1.5 text-[10px] font-medium text-tx3">
            <span className={`h-1.5 w-1.5 rounded-full ${phaseInfo.dot}`} />
            {phaseInfo.label}
          </span>
        </div>

        {/* Toolbar */}
        {status !== "idle" && status !== "booting" && (
          <div className="flex shrink-0 items-center justify-between border-b border-line bg-card/60 backdrop-blur-xl px-4 h-9">
            <div className="flex items-center gap-1.5 min-w-0">
              <button
                type="button"
                onClick={onHome}
                className="text-[11px] font-medium text-tx3 transition hover:text-tx1 cursor-pointer select-none"
              >
                Portfolio
              </button>
              <span className="text-[13px] text-tx3 select-none leading-none">›</span>
              <span className="text-[11px] font-medium text-tx1 truncate">
                {toolbarContext[status]?.label ?? status}
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              {canPalette && (
                <button
                  type="button"
                  onClick={() => setPaletteOpen(true)}
                  aria-label="Open command palette"
                  className="flex items-center gap-1 rounded-md px-1.5 py-1 text-[10px] text-tx3 transition hover:text-tx1 hover:bg-hover outline-none"
                >
                  <Command className="h-3 w-3" />
                  <span className="hidden sm:inline">K</span>
                </button>
              )}
              <button
                type="button"
                onClick={toggleDark}
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                className="flex items-center justify-center rounded-md p-1 text-tx3 transition hover:text-tx1 hover:bg-hover outline-none"
              >
                {darkMode ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
              </button>
              <div
                className={`flex items-center overflow-hidden transition-all duration-200 ease-out ${
                  searchOpen ? "w-48 opacity-100" : "w-0 opacity-0"
                }`}
              >
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Escape") clearSearch();
                  }}
                  placeholder="Filter..."
                  className="w-full rounded-md border border-line bg-card/80 px-2 py-1 text-[11px] text-tx1 placeholder:text-tx3 outline-none focus:border-accent transition-colors"
                />
              </div>
              <button
                type="button"
                onClick={searchOpen ? clearSearch : handleSearchToggle}
                aria-label="Toggle search"
                className="flex items-center justify-center rounded-md p-1 text-tx3 transition hover:text-tx1 hover:bg-hover outline-none"
              >
                <Search className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Scrollable body */}
        <div
          className={`overflow-x-hidden transition-all duration-300 ${
            collapsed ? "flex-none overflow-hidden" : "flex flex-col"
          } ${
            isCentered ? "flex flex-col" : ""
          } md:flex-1 md:min-h-0 md:overflow-y-auto md:custom-scrollbar-light`}
        >
          <div
            className={`flex w-full flex-col items-center ${
              collapsed ? "hidden" : ""
            } ${
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
                      : status === "ready"
                        ? "max-w-5xl p-4 sm:p-6"
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
                        onNavigate={onNavigate}
                      />
                    )}
                    {status === "about" && <AboutSection key="about" />}
                    {status === "projects" && (
                      <ProjectsSection
                        key="projects"
                        searchQuery={searchQuery}
                        consoleBusy={projectExplorerBusy}
                        onProjectFilter={onProjectFilter}
                        onProjectSelect={onProjectSelect}
                      />
                    )}
                    {status === "stack" && (
                      <StackSection key="stack" searchQuery={searchQuery} />
                    )}
                    {status === "experience" && (
                      <ExperienceSection key="experience" searchQuery={searchQuery} />
                    )}
                    {status === "contact" && (
                      <ContactSection key="contact" searchQuery={searchQuery} />
                    )}
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
        <div className="flex shrink-0 items-center justify-between border-t border-line bg-card/60 backdrop-blur-xl px-3 h-7 text-[10px] text-tx3 print:hidden select-none">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-tx3/60" />
            Portfolio Preview
          </span>
          <span>{statusBarHint}</span>
        </div>
      </div>

      {/* Command Palette */}
      <CommandPalette
        open={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        onNavigate={(cmd) => {
          setPaletteOpen(false);
          onNavigate?.(cmd);
        }}
      />
    </div>
  );
}
