"use client";

import { commandConfig } from "../../data/console";
import type { PortfolioCommand } from "../../types/portfolio";

const commandGroups = [
  {
    label: "MAIN MODULES",
    commands: ["projects", "about", "experience", "stack", "contact"],
  },
  {
    label: "EXTRAS",
    commands: ["stats", "gitLog", "achievements"],
  },
] as const satisfies readonly {
  label: string;
  commands: readonly PortfolioCommand[];
}[];

interface CommandMenuProps {
  activeCommand: PortfolioCommand | null;
  runningCommand: PortfolioCommand | null;
  isInteractionRunning?: boolean;
  onCommandSelect: (command: PortfolioCommand) => void;
}

export default function CommandMenu({
  activeCommand,
  runningCommand,
  isInteractionRunning = false,
  onCommandSelect,
}: CommandMenuProps) {
  const isRunning = runningCommand !== null || isInteractionRunning;

  return (
    <div className="pt-4 border-t border-zinc-800/80 space-y-3" role="group" aria-label="Available commands">
      <div className="flex items-center justify-between gap-3">
        <span className="text-[11px] font-medium tracking-wider uppercase text-zinc-500">
          Commands
        </span>
        {isRunning && (
          <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-amber-400/90">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
            {runningCommand
              ? `running ${commandConfig[runningCommand].label}`
              : "running explorer"}
          </span>
        )}
      </div>

      <div className="space-y-3">
        {commandGroups.map((group) => (
          <div key={group.label} className="space-y-2" role="group" aria-label={group.label}>
            <span className="block text-[10px] font-semibold tracking-[0.18em] text-zinc-600">
              {group.label}
            </span>
            <div className="flex flex-wrap gap-2">
              {group.commands.map((command) => {
                const isActive = activeCommand === command;
                const isCommandRunning = runningCommand === command;
                const isDisabled = isRunning;
                const commandData = commandConfig[command];

                return (
                  <button
                    key={command}
                    type="button"
                    disabled={isDisabled}
                    aria-pressed={isActive}
                    aria-label={`Ejecutar comando ${commandData.label}`}
                    onClick={() => onCommandSelect(command)}
                    className={`group relative inline-flex min-h-[34px] items-center gap-2 rounded-lg border px-3 py-1.5 font-mono text-xs font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/50 focus-visible:ring-offset-1 focus-visible:ring-offset-[#0c0c0e] ${
                      isCommandRunning
                        ? "border-amber-500/40 bg-amber-500/10 text-amber-300 shadow-[0_0_12px_-4px_rgba(245,158,11,0.15)]"
                        : isActive
                          ? "border-indigo-500/40 bg-indigo-500/10 text-indigo-300 shadow-[0_0_12px_-4px_rgba(99,102,241,0.15)]"
                          : "border-zinc-800 bg-zinc-900/40 text-zinc-400 hover:border-zinc-700 hover:bg-zinc-800/60 hover:text-zinc-200"
                    } disabled:cursor-not-allowed disabled:opacity-40`}
                  >
                    <span>{commandData.label}</span>
                    <span className="hidden text-[10px] font-normal text-zinc-500 sm:inline">
                      {commandData.hint}
                    </span>
                    {(isCommandRunning || isActive) && (
                      <span
                        className={`h-1 w-1 rounded-full ${
                          isCommandRunning
                            ? "bg-amber-400 animate-pulse"
                            : "bg-indigo-400"
                        }`}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
