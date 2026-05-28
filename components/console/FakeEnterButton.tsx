"use client";

interface FakeEnterButtonProps {
  disabled?: boolean;
  onClick: () => void;
}

export default function FakeEnterButton({
  disabled = false,
  onClick,
}: FakeEnterButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className="group relative inline-flex items-center justify-center gap-2.5 rounded-xl border border-zinc-300 bg-zinc-950 px-6 py-3 font-mono text-sm font-semibold text-zinc-50 shadow-lg shadow-zinc-950/15 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none enabled:hover:-translate-y-0.5 enabled:hover:border-zinc-400 enabled:hover:bg-zinc-900 enabled:hover:shadow-xl enabled:hover:shadow-zinc-950/20 enabled:active:translate-y-0 dark:border-zinc-600 dark:bg-zinc-100 dark:text-zinc-950 dark:shadow-zinc-950/30 dark:focus-visible:ring-offset-zinc-950 dark:enabled:hover:bg-white dark:enabled:hover:border-zinc-300"
      aria-label="Start portfolio runtime"
    >
      <span>Enter</span>
      <span className="rounded-md border border-white/20 bg-white/10 px-1.5 py-0.5 text-xs text-zinc-200 transition group-disabled:border-zinc-600/20 group-disabled:bg-zinc-800/10 group-disabled:text-zinc-500 dark:border-zinc-950/15 dark:bg-zinc-950/5 dark:text-zinc-700 dark:group-disabled:border-zinc-400/20 dark:group-disabled:bg-zinc-400/5 dark:group-disabled:text-zinc-500">
        ↵
      </span>
    </button>
  );
}
