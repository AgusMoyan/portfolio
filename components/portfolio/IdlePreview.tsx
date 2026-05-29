import { motion } from "motion/react";

interface IdlePreviewProps {
  onEnter: () => void;
}

export default function IdlePreview({ onEnter }: IdlePreviewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col items-center justify-center text-center max-w-md w-full"
    >
      <div className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-[11px] font-medium text-zinc-400 mb-5">
        Preview
      </div>

      <p className="text-sm text-zinc-500 leading-relaxed max-w-[200px]">
        Preview waiting for generation
      </p>

      <div className="mt-8 flex items-center gap-1.5">
        <span className="h-1 w-1 rounded-full bg-zinc-300" />
        <span className="h-1 w-1 rounded-full bg-zinc-300" />
        <span className="h-1 w-1 rounded-full bg-zinc-300" />
      </div>

      <button
        type="button"
        onClick={onEnter}
        className="mt-6 rounded-lg border border-zinc-200 bg-white px-4 py-2 text-xs font-medium text-zinc-500 transition hover:border-zinc-300 hover:text-zinc-700"
      >
        Press Enter to start
      </button>
    </motion.div>
  );
}
