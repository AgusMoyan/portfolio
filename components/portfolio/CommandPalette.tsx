"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { PortfolioCommand } from "../../types/portfolio";
import { commandConfig } from "../../data/console";

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
  onNavigate: (command: PortfolioCommand) => void;
}

const allModules = [
  "projects",
  "about",
  "experience",
  "stack",
  "contact",
  "stats",
  "gitLog",
  "achievements",
] as const satisfies readonly PortfolioCommand[];

function playPop() {
  try {
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.value = 520;
    osc.type = "sine";
    gain.gain.setValueAtTime(0.06, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.08);
  } catch {
    /* silent fail */
  }
}

export default function CommandPalette({
  open,
  onClose,
  onNavigate,
}: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = allModules
    .map((cmd) => ({
      command: cmd,
      label: commandConfig[cmd].label,
      hint: commandConfig[cmd].hint,
    }))
    .filter(
      (item) =>
        item.label.toLowerCase().includes(query.toLowerCase()) ||
        item.hint.toLowerCase().includes(query.toLowerCase()),
    );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const playOnOpen = useCallback(() => {
    if (open) {
      playPop();
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;

    playOnOpen();

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((i) => Math.min(i + 1, filtered.length - 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((i) => Math.max(i - 1, 0));
      }
      if (e.key === "Enter" && filtered[selectedIndex]) {
        onNavigate(filtered[selectedIndex].command);
        onClose();
      }
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, filtered, selectedIndex, onNavigate, onClose, playOnOpen]);

  useEffect(() => {
    if (open) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.12 }}
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/30 pt-[12vh] backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -8 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="w-full max-w-lg overflow-hidden rounded-xl border border-line bg-card shadow-[0_0_0_0.5px_rgba(0,0,0,0.06),0_8px_30px_rgba(0,0,0,0.12)]"
            onClick={(e) => e.stopPropagation()}
          >
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search modules..."
              className="w-full border-b border-line bg-transparent px-4 py-2.5 text-sm text-tx1 placeholder:text-tx3 outline-none"
            />

            <div className="max-h-72 overflow-y-auto p-1.5">
              {filtered.length > 0 ? (
                <div>
                  <span className="block px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-tx3">
                    Modules
                  </span>
                  {filtered.map((item, idx) => (
                    <button
                      key={item.command}
                      type="button"
                      onClick={() => {
                        onNavigate(item.command);
                        onClose();
                      }}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition ${
                        idx === selectedIndex
                          ? "bg-hover text-tx1"
                          : "text-tx2 hover:bg-hover"
                      }`}
                    >
                      <span className="font-medium">{item.label}</span>
                      <span className="text-[11px] text-tx3">{item.hint}</span>
                    </button>
                  ))}
                </div>
              ) : (
                <p className="px-3 py-8 text-center text-[11px] text-tx3">
                  No results for &ldquo;{query}&rdquo;
                </p>
              )}
            </div>

            <div className="flex items-center gap-3 border-t border-line px-4 py-2 text-[10px] text-tx3">
              <span>
                <kbd className="rounded border border-line bg-panel px-1 py-0.5 font-mono">
                  ↑↓
                </kbd>{" "}
                navigate
              </span>
              <span>
                <kbd className="rounded border border-line bg-panel px-1 py-0.5 font-mono">
                  ↵
                </kbd>{" "}
                open
              </span>
              <span>
                <kbd className="rounded border border-line bg-panel px-1 py-0.5 font-mono">
                  esc
                </kbd>{" "}
                close
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
