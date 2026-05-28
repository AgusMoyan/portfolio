import { motion } from "motion/react";
import { idlePreviewCopy } from "../../data/console";
import FakeEnterButton from "../console/FakeEnterButton";

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
      <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mb-2">
        {idlePreviewCopy.title}
      </h1>
      <p className="text-sm font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-6">
        {idlePreviewCopy.subtitle}
      </p>

      <div className="h-[1px] w-16 bg-zinc-200 dark:bg-zinc-800 mx-auto mb-6" />

      <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-3">
        {idlePreviewCopy.instruction}{" "}
        <span className="font-semibold text-zinc-700 dark:text-zinc-300 font-mono">
          {idlePreviewCopy.emphasizedKey}
        </span>{" "}
        {idlePreviewCopy.instructionSuffix}
      </p>
      <p className="text-xs text-zinc-400 dark:text-zinc-500 leading-relaxed max-w-xs mb-8">
        {idlePreviewCopy.description}
      </p>

      <FakeEnterButton onClick={onEnter} disabled={false} />
    </motion.div>
  );
}
