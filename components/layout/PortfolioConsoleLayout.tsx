"use client";

import { useEffect, useRef, useState } from "react";
import {
  bootDelays,
  bootSequence,
  commandConfig,
  commandDelays,
  readyLine,
} from "../../data/console";
import { projectSelectionLogs } from "../../data/projects";
import type { PortfolioCommand, PortfolioStatus } from "../../types/portfolio";
import { isPortfolioCommand } from "../../types/portfolio";
import type { Project, ProjectFilterId } from "../../types/projects";
import ConsolePanel from "../console/ConsolePanel";
import PortfolioPreview from "../portfolio/PortfolioPreview";

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

  useEffect(() => {
    const timers = timersRef.current;

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
      timers.length = 0;
    };
  }, []);

  function scheduleTimer(callback: () => void, delay: number) {
    const timer = setTimeout(() => {
      const timerIndex = timersRef.current.indexOf(timer);

      if (timerIndex !== -1) {
        timersRef.current.splice(timerIndex, 1);
      }

      callback();
    }, delay);

    timersRef.current.push(timer);
  }

  function startBootSequence() {
    if (hasStartedRef.current || status !== "idle") {
      return;
    }

    hasStartedRef.current = true;
    setStatus("booting");
    setConsoleLines([]);

    let elapsed = 0;

    bootSequence.forEach((line, index) => {
      elapsed += bootDelays[index] ?? 500;

      scheduleTimer(() => {
        setConsoleLines((currentLines) => [...currentLines, line]);
      }, elapsed);
    });

    scheduleTimer(() => {
      setConsoleLines((currentLines) => [
        ...currentLines,
        readyLine,
      ]);
      setStatus("ready");
    }, elapsed + 520);
  }

  function runCommand(command: PortfolioCommand) {
    if (
      status === "idle" ||
      status === "booting" ||
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
      status !== "projects" ||
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
    const filterConsoleValue: Record<ProjectFilterId, string> = {
      all: "all",
      web: "web",
      mobile: "mobile",
      production: "production",
      dashboards: "admin-dashboard",
      apis: "api-integration",
    };
    const filterCommand =
      filter === "all"
        ? "> filter projects --all"
        : `> filter projects --tag=${filterConsoleValue[filter]}`;

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

  const activeCommand = isPortfolioCommand(status) ? status : null;

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row overflow-x-hidden bg-zinc-50 dark:bg-zinc-900 print:block print:min-h-0 print:bg-white">
      {/* Left panel (Console) */}
      <section className="w-full h-[42svh] min-h-[280px] max-h-[420px] flex-shrink-0 md:h-screen md:max-h-none md:min-h-0 md:w-[36%] print:hidden">
        <ConsolePanel
          status={status}
          consoleLines={consoleLines}
          activeCommand={activeCommand}
          runningCommand={runningCommand}
          isInteractionRunning={projectExplorerBusy}
          onCommandSelect={runCommand}
        />
      </section>

      {/* Right panel (Portfolio Visual) */}
      <main className="custom-scrollbar-light flex-1 w-full min-h-[58svh] overflow-y-auto md:h-screen md:min-h-0 md:w-[64%] print:block print:h-auto print:min-h-0 print:w-full print:overflow-visible">
        <PortfolioPreview
          status={status}
          projectExplorerBusy={projectExplorerBusy}
          onEnter={startBootSequence}
          onProjectFilter={handleProjectFilter}
          onProjectSelect={handleProjectSelect}
        />
      </main>
    </div>
  );
}
