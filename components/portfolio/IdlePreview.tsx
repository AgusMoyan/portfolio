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
      <div className="rounded-full border border-line bg-card px-3 py-1 text-[11px] font-medium text-tx3 mb-5">
        Preview
      </div>

      <p className="text-sm text-tx2 leading-relaxed max-w-[200px]">
        Preview waiting for generation
      </p>

      <div className="mt-8 flex items-center gap-1.5">
        <span className="h-1 w-1 rounded-full bg-tx3/40" />
        <span className="h-1 w-1 rounded-full bg-tx3/40" />
        <span className="h-1 w-1 rounded-full bg-tx3/40" />
      </div>

      <button
        type="button"
        onClick={onEnter}
        className="mt-6 rounded-md border border-line bg-card px-4 py-2 text-xs font-medium text-tx2 transition hover:border-tx3 hover:text-tx1"
      >
        Press Enter to start
      </button>
    </motion.div>
  );
}
