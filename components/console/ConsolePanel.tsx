"use client";

import { useEffect, useRef } from "react";
import {
  bootSequence,
  commandConfig,
  consoleIntro,
  consoleStatusCopy,
  readyLine,
} from "../../data/console";
import type { PortfolioCommand, PortfolioStatus } from "../../types/portfolio";
import CommandMenu from "./CommandMenu";
import ConsoleLine from "./ConsoleLine";

interface ConsolePanelProps {
  status: PortfolioStatus;
  consoleLines: string[];
  activeCommand: PortfolioCommand | null;
  runningCommand: PortfolioCommand | null;
  isInteractionRunning?: boolean;
  onCommandSelect: (command: PortfolioCommand) => void;
}

function getLineVariant(line: string) {
  if (line.startsWith(">")) return "command";
  if (line === bootSequence[bootSequence.length - 1] || line === readyLine) {
    return "success";
  }
  return "default";
}

export default function ConsolePanel({
  status,
  consoleLines,
  activeCommand,
  runningCommand,
  isInteractionRunning = false,
  onCommandSelect,
}: ConsolePanelProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isRunning = runningCommand !== null || isInteractionRunning;
  const statusText = runningCommand
    ? `running ${commandConfig[runningCommand].label}`
    : isInteractionRunning
      ? "project explorer action running"
      : consoleStatusCopy[status].text;
  const statusLabel = isRunning ? "running" : consoleStatusCopy[status].label;

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [consoleLines.length, status]);

  return (
    <div className="flex flex-col h-full bg-[#0c0c0e] text-zinc-100 font-mono border-r border-zinc-800/50 relative">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 h-[44px] bg-[#0f0f11] border-b border-zinc-800/60 select-none flex-shrink-0">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="text-[11px] text-zinc-500 font-medium tracking-tight">
          {consoleIntro.terminalTitle}
        </div>
        <div className="w-[52px]" />
      </div>

      {/* Scrollable content */}
      <div ref={scrollRef} className="custom-scrollbar-dark flex-1 overflow-y-auto scroll-smooth">
        <div className="p-5 pb-14 space-y-3">
          {/* Header */}
          <div className="space-y-0.5 pb-1">
            <ConsoleLine variant="muted">{consoleIntro.version}</ConsoleLine>
            <ConsoleLine variant="muted">{consoleIntro.initialization}</ConsoleLine>
          </div>

          {/* Welcome block (shown before idle prompt) */}
          <div className="space-y-1.5">
            <ConsoleLine variant="default" className="flex items-center gap-2">
              <span className="text-indigo-400/90 select-none font-bold">*</span>
              <span className="font-semibold text-zinc-100">{consoleIntro.welcome}</span>
            </ConsoleLine>

            {/* cwd badge */}
            <div className="pt-1">
              <span className="inline-flex items-center gap-1.5 rounded bg-zinc-900/70 px-2 py-1 text-[11px] text-zinc-500 border border-zinc-800/50">
                <span className="text-zinc-600">cwd</span>
                <span className="text-zinc-400">{consoleIntro.cwd}</span>
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-zinc-800/60" />

          {/* Dynamic lines area */}
          {status === "idle" ? (
            <div className="flex items-center gap-2">
              <span className="text-emerald-500 select-none font-bold animate-pulse">&gt;</span>
              <ConsoleLine variant="success" className="inline-flex items-center gap-1">
                <span>{consoleIntro.idlePrompt}</span>
                <span className="w-1 h-4 bg-emerald-400 animate-pulse inline-block align-middle" />
              </ConsoleLine>
            </div>
          ) : (
            <div className="space-y-0.5">
              {consoleLines.map((line, index) => (
                <ConsoleLine
                  key={`${line}-${index}`}
                  variant={getLineVariant(line)}
                  className="flex items-start gap-2"
                >
                  {line.startsWith(">") ? (
                    <span className="text-indigo-400/90 select-none mt-0.5 font-bold">&gt;</span>
                  ) : (
                    <span className="text-zinc-700 select-none mt-0.5">&rsaquo;</span>
                  )}
                  <span className="min-w-0 flex-1 break-words">
                    {line.replace(/^>\s?/, "")}
                  </span>
                  {(status === "booting" || isRunning) &&
                    index === consoleLines.length - 1 && (
                      <span className="w-1 h-4 bg-emerald-400 ml-1 animate-pulse inline-block align-middle flex-shrink-0" />
                    )}
                </ConsoleLine>
              ))}
            </div>
          )}

          {/* Command menu — only after boot */}
          {status !== "idle" && status !== "booting" && (
            <CommandMenu
              activeCommand={activeCommand}
              runningCommand={runningCommand}
              isInteractionRunning={isInteractionRunning}
              onCommandSelect={onCommandSelect}
            />
          )}
        </div>
      </div>

      {/* Status bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[34px] bg-[#0f0f11] border-t border-zinc-800/60 px-4 flex items-center justify-between text-[11px] text-zinc-500 select-none font-mono">
        <div className="flex items-center gap-2 min-w-0">
          <span
            className={`h-1.5 w-1.5 flex-shrink-0 rounded-full ${
              status === "booting" || isRunning
                ? "bg-amber-400 animate-pulse"
                : "bg-emerald-500"
            }`}
          />
          <span className="truncate">{statusText}</span>
        </div>
        <span className="text-[10px] tracking-wider text-zinc-600 font-semibold uppercase flex-shrink-0 ml-3">
          {statusLabel}
        </span>
      </div>
    </div>
  );
}
