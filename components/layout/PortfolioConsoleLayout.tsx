"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  commandConfig,
  commandDelays,
} from "../../data/console";
import { projectSelectionLogs } from "../../data/projects";
import type { PortfolioCommand, PortfolioStatus } from "../../types/portfolio";
import { isPortfolioCommand } from "../../types/portfolio";
import type { Project, ProjectFilterId } from "../../types/projects";
import type { PreviewPhase } from "../portfolio/interactive/types";
import { createTerminalScript } from "../portfolio/interactive/terminalScript";
import { usePortfolioSequence } from "../portfolio/interactive/usePortfolioSequence";
import ConsolePanel from "../console/ConsolePanel";
import PortfolioPreview from "../portfolio/PortfolioPreview";

const projectFilterConsoleValue: Record<ProjectFilterId, string> = {
  all: "all",
  web: "web",
  mobile: "mobile",
  production: "production",
  dashboards: "admin-dashboard",
  apis: "api-integration",
};

function previewPhaseToPortfolioStatus(phase: PreviewPhase): PortfolioStatus {
  switch (phase) {
    case "idle":
      return "idle";
    case "booting":
      return "booting";
    case "scaffolding":
    case "generating":
    case "revealing":
      return "booting";
    case "completed":
      return "ready";
  }
}

export default function PortfolioConsoleLayout() {
  const [status, setStatus] = useState<PortfolioStatus>("idle");
  const [consoleLines, setConsoleLines] = useState<string[]>([]);
  const [runningCommand, setRunningCommand] = useState<PortfolioCommand | null>(
    null
  );
  const [projectExplorerBusy, setProjectExplorerBusy] = useState(false);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const hasStartedRef = useRef(false);
  const isCommandRunningRef = useRef(false);
  const isProjectExplorerLogRunningRef = useRef(false);
  const [layoutMode, setLayoutMode] = useState<"intro" | "workspace">("intro");

  const sequence = usePortfolioSequence({
    script: useMemo(() => createTerminalScript(), []),
  });

  const scheduleTimer = useCallback((callback: () => void, delay: number) => {
    const timer = setTimeout(() => {
      const timerIndex = timersRef.current.indexOf(timer);

      if (timerIndex !== -1) {
        timersRef.current.splice(timerIndex, 1);
      }

      callback();
    }, delay);

    timersRef.current.push(timer);
  }, []);

  const startBootSequence = useCallback(() => {
    if (hasStartedRef.current || status !== "idle") {
      return;
    }

    hasStartedRef.current = true;
    setStatus("booting");
    setLayoutMode("workspace");
    const timer = setTimeout(() => {
      sequence.start();
    }, 200);
    timersRef.current.push(timer);
  }, [status, sequence]);

  useEffect(() => {
    const timers = timersRef.current;

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
      timers.length = 0;
    };
  }, []);

  useEffect(() => {
    if (status !== "idle") return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Enter") {
        startBootSequence();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [status, startBootSequence]);

  const effectiveStatus: PortfolioStatus =
    sequence.isCompleted && status === "booting" ? "ready" : status;

  function runCommand(command: PortfolioCommand) {
    if (
      effectiveStatus === "idle" ||
      effectiveStatus === "booting" ||
      isCommandRunningRef.current ||
      isProjectExplorerLogRunningRef.current
    ) {
      return;
    }

    isCommandRunningRef.current = true;
    setRunningCommand(command);
    setConsoleLines((currentLines) => [
      ...currentLines,
      `> ${commandConfig[command].label}`,
    ]);

    let elapsed = 0;

    commandConfig[command].sequence.forEach((line, index) => {
      elapsed += commandDelays[index] ?? 440;

      scheduleTimer(() => {
        setConsoleLines((currentLines) => [...currentLines, line]);
      }, elapsed);
    });

    scheduleTimer(() => {
      setStatus(command);
      setRunningCommand(null);
      isCommandRunningRef.current = false;
    }, elapsed + 280);
  }

  function runProjectExplorerLog(lines: readonly string[]) {
    if (
      effectiveStatus !== "projects" ||
      isCommandRunningRef.current ||
      isProjectExplorerLogRunningRef.current
    ) {
      return;
    }

    const [commandLine, ...detailLines] = lines;

    if (!commandLine) {
      return;
    }

    isProjectExplorerLogRunningRef.current = true;
    setProjectExplorerBusy(true);
    setConsoleLines((currentLines) => [...currentLines, commandLine]);

    let elapsed = 0;

    detailLines.forEach((line) => {
      elapsed += 240;

      scheduleTimer(() => {
        setConsoleLines((currentLines) => [...currentLines, line]);
      }, elapsed);
    });

    scheduleTimer(() => {
      isProjectExplorerLogRunningRef.current = false;
      setProjectExplorerBusy(false);
    }, elapsed + 140);
  }

  function handleProjectFilter(filter: ProjectFilterId, resultCount: number) {
    const filterCommand =
      filter === "all"
        ? "> filter projects --all"
        : `> filter projects --tag=${projectFilterConsoleValue[filter]}`;

    runProjectExplorerLog([
      filterCommand,
      "Applying project filter",
      `Found ${resultCount} matching ${resultCount === 1 ? "project" : "projects"}`,
    ]);
  }

  function handleProjectSelect(project: Project) {
    runProjectExplorerLog([
      project.consoleCommand,
      ...projectSelectionLogs[project.id],
    ]);
  }

  const effectivePreviewPhase: PreviewPhase =
    sequence.isRunning && sequence.previewPhase === "idle"
      ? "booting"
      : sequence.previewPhase;

  const previewStatus: PortfolioStatus = sequence.isRunning
    ? previewPhaseToPortfolioStatus(effectivePreviewPhase)
    : effectiveStatus;

  const activeCommand = isPortfolioCommand(previewStatus) ? previewStatus : null;

  const displayedConsoleLines =
    sequence.isRunning || sequence.isCompleted
      ? [...sequence.visibleConsoleStrings, ...consoleLines]
      : consoleLines;

  return (
    <AnimatePresence mode="wait">
      {layoutMode === "intro" && (
        <motion.div
          key="intro"
          exit={{ opacity: 0, scale: 0.94, x: -120, y: -16 }}
          transition={{ duration: 0.2, ease: [0.32, 0, 0.15, 1] }}
          className="min-h-dvh w-full bg-gradient-to-br from-stone-50 via-stone-100 to-stone-200/70 flex items-center justify-center p-4 md:p-6"
        >
          <div className="w-full max-w-[860px] h-[500px] max-h-[90dvh] min-h-[400px] rounded-2xl overflow-hidden border border-white/[0.07] shadow-[0_12px_40px_-12px_rgba(0,0,0,0.25),0_4px_12px_-4px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.03)]">
            <ConsolePanel
              status="idle"
              consoleLines={[]}
              activeCommand={null}
              runningCommand={null}
              isInteractionRunning={false}
              sequenceRunning={false}
              sequenceCompleted={false}
              onCommandSelect={() => {}}
            />
          </div>
        </motion.div>
      )}

      {layoutMode === "workspace" && (
        <motion.div
          key="workspace"
          className="min-h-screen w-full flex flex-col overflow-x-hidden bg-zinc-50 dark:bg-zinc-900 md:h-screen md:min-h-0 md:flex-row print:block print:h-auto print:min-h-0 print:bg-white"
        >
          {/* Left panel (Console) */}
          <motion.section
            initial={{ opacity: 0, x: -48 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="w-full h-[42svh] min-h-[280px] max-h-[420px] flex-shrink-0 md:h-screen md:max-h-none md:min-h-0 md:w-[36%] print:hidden border-r border-zinc-800/50"
          >
            <ConsolePanel
              status={effectiveStatus}
              consoleLines={displayedConsoleLines}
              activeCommand={activeCommand}
              runningCommand={runningCommand}
              isInteractionRunning={projectExplorerBusy}
              sequenceRunning={sequence.isRunning}
              sequenceCompleted={sequence.isCompleted}
              onCommandSelect={runCommand}
            />
          </motion.section>

          {/* Right panel (Portfolio Visual) */}
          <motion.main
            initial={{ opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: 0.06, ease: "easeOut" }}
            className="min-h-[58svh] min-w-0 flex-1 w-full md:h-full md:min-h-0 md:overflow-hidden md:w-[64%] print:block print:h-auto print:min-h-0 print:w-full print:overflow-visible"
          >
            <PortfolioPreview
              status={previewStatus}
              previewPhase={effectivePreviewPhase}
              projectExplorerBusy={projectExplorerBusy}
              onEnter={startBootSequence}
              onProjectFilter={handleProjectFilter}
              onProjectSelect={handleProjectSelect}
            />
          </motion.main>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
