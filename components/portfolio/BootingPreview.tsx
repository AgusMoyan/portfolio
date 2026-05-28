import { motion } from "motion/react";
import { bootingPreviewCopy } from "../../data/console";

export default function BootingPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col items-center justify-center text-center max-w-md w-full"
    >
      <div className="flex items-center gap-1 mb-4">
        <span className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">
          {bootingPreviewCopy.title}
        </span>
        <span className="flex gap-0.5">
          {bootingPreviewCopy.loadingDots.map((i) => (
            <motion.span
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500 inline-block"
              animate={{ opacity: [0.25, 1, 0.25] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </span>
      </div>

      <p className="text-xs text-zinc-400 dark:text-zinc-500 mb-10">
        {bootingPreviewCopy.description}
      </p>

      <div className="space-y-2.5 w-48">
        {bootingPreviewCopy.loadingBars.map((bar) => (
          <div
            key={bar.delay}
            className="h-1.5 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden"
          >
            <motion.div
              className={`h-full rounded-full bg-zinc-400 dark:bg-zinc-600 ${bar.width}`}
              initial={{ opacity: 0.3 }}
              animate={{ opacity: [0.25, 0.75, 0.25] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                delay: bar.delay,
                ease: "easeInOut",
              }}
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
