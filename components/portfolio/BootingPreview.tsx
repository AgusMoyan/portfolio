import { motion } from "motion/react";

function SkeletonBlock({ className }: { className?: string }) {
  return (
    <motion.div
      className={`rounded-md bg-zinc-200 ${className ?? ""}`}
      animate={{ opacity: [0.35, 0.7, 0.35] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

function SkeletonCard({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4, ease: "easeOut" }}
      className="rounded-xl border border-zinc-200/80 bg-white p-4"
    >
      <SkeletonBlock className="h-2 w-14 mb-3" />
      <SkeletonBlock className="h-3.5 w-3/4 mb-2" />
      <SkeletonBlock className="h-2 w-full mb-1.5" />
      <SkeletonBlock className="h-2 w-2/3 mb-3" />
      <div className="flex gap-1.5">
        <SkeletonBlock className="h-3.5 w-12 rounded-full" />
        <SkeletonBlock className="h-3.5 w-16 rounded-full" />
      </div>
    </motion.div>
  );
}

export default function BootingPreview() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="flex w-full flex-col px-1"
    >
      {/* Header */}
      <div className="flex items-center gap-2.5 mb-6">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          className="text-sm font-semibold text-zinc-800"
        >
          Preparing preview environment
        </motion.span>
        <span className="flex gap-0.5">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-zinc-400 inline-block"
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

      {/* Main layout: sidebar + content */}
      <div className="flex gap-5 w-full">
        {/* Sidebar skeleton */}
        <div className="hidden sm:flex w-28 flex-shrink-0 flex-col gap-2.5">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.3 }}
            className="mb-1"
          >
            <SkeletonBlock className="h-3 w-16 mb-2" />
            <SkeletonBlock className="h-3 w-20" />
          </motion.div>
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.06, duration: 0.3 }}
            >
              <SkeletonBlock className="h-3 w-full" />
            </motion.div>
          ))}
        </div>

        {/* Content area */}
        <div className="flex-1 min-w-0">
          {/* Hero skeleton */}
          <div className="mb-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="mb-3"
            >
              <SkeletonBlock className="h-5 w-32 mb-2" />
              <SkeletonBlock className="h-3.5 w-full max-w-md" />
              <SkeletonBlock className="h-3 w-48 mt-1" />
            </motion.div>
            {/* Badge row */}
            <div className="flex gap-1.5 flex-wrap">
              {["w-14", "w-20", "w-16", "w-12", "w-24"].map((w, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.35 + i * 0.05, duration: 0.3 }}
                >
                  <SkeletonBlock className={`h-4 ${w} rounded-full`} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <SkeletonCard delay={0.3} />
            <SkeletonCard delay={0.4} />
          </div>
        </div>
      </div>

      {/* Bottom loading bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="mt-6 h-1 rounded-full bg-zinc-200 overflow-hidden"
      >
        <motion.div
          className="h-full rounded-full bg-zinc-400"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
}
