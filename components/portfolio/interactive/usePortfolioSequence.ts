"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { FlowStatus, PreviewPhase, TerminalLine } from "./types";

function flattenToConsoleStrings(lines: TerminalLine[]): string[] {
  const result: string[] = [];
  for (const line of lines) {
    if (line.type === "spacer") {
      result.push("");
      continue;
    }
    if (line.lines) {
      result.push(...line.lines);
      continue;
    }
    if (line.content !== undefined) {
      result.push(line.content);
    }
  }
  return result;
}

interface UsePortfolioSequenceOptions {
  script: TerminalLine[];
}

interface UsePortfolioSequenceReturn {
  visibleLines: TerminalLine[];
  visibleConsoleStrings: string[];
  status: FlowStatus;
  previewPhase: PreviewPhase;
  isRunning: boolean;
  isCompleted: boolean;
  start: () => void;
  reset: () => void;
  skipToEnd: () => void;
}

export function usePortfolioSequence({
  script,
}: UsePortfolioSequenceOptions): UsePortfolioSequenceReturn {
  const [visibleLines, setVisibleLines] = useState<TerminalLine[]>([]);
  const [status, setStatus] = useState<FlowStatus>("idle");
  const [previewPhase, setPreviewPhase] = useState<PreviewPhase>("idle");
  const [isRunning, setIsRunning] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const hasStartedRef = useRef(false);
  const isCancelledRef = useRef(false);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach((timer) => clearTimeout(timer));
    timersRef.current = [];
  }, []);

  const reset = useCallback(() => {
    clearTimers();
    hasStartedRef.current = false;
    isCancelledRef.current = true;
    setVisibleLines([]);
    setStatus("idle");
    setPreviewPhase("idle");
    setIsRunning(false);
    setIsCompleted(false);
  }, [clearTimers]);

  const skipToEnd = useCallback(() => {
    clearTimers();
    isCancelledRef.current = true;
    setVisibleLines([...script]);
    setStatus("completed");
    setPreviewPhase("completed");
    setIsRunning(false);
    setIsCompleted(true);
    hasStartedRef.current = true;
  }, [clearTimers, script]);

  const start = useCallback(() => {
    if (hasStartedRef.current) return;

    hasStartedRef.current = true;
    isCancelledRef.current = false;
    setIsRunning(true);

    let cumulativeDelay = 0;
    const timers: ReturnType<typeof setTimeout>[] = [];

    for (let i = 0; i < script.length; i++) {
      const line = script[i];
      const delay = cumulativeDelay;

      const timer = setTimeout(() => {
        if (isCancelledRef.current) return;

        setVisibleLines((prev) => [...prev, line]);

        if (line.phase) {
          setStatus(line.phase);
        }

        if (line.previewPhase) {
          setPreviewPhase(line.previewPhase);
        }

        if (i === script.length - 1) {
          setIsRunning(false);
          setIsCompleted(true);
        }
      }, delay);

      timers.push(timer);
      cumulativeDelay += line.delayMs;
    }

    timersRef.current = timers;
  }, [script]);

  useEffect(() => {
    return () => {
      clearTimers();
      isCancelledRef.current = true;
    };
  }, [clearTimers]);

  const visibleConsoleStrings = flattenToConsoleStrings(visibleLines);

  return {
    visibleLines,
    visibleConsoleStrings,
    status,
    previewPhase,
    isRunning,
    isCompleted,
    start,
    reset,
    skipToEnd,
  };
}
