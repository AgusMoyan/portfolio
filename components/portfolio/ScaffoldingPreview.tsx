import { motion } from "motion/react";

function SkeletonPulse({ className }: { className?: string }) {
  return (
    <motion.div
      className={`rounded-md bg-tx3/20 ${className ?? ""}`}
      animate={{ opacity: [0.4, 0.7, 0.4] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

export default function ScaffoldingPreview() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="flex w-full flex-col px-1"
    >
      {/* Phase label */}
      <span className="text-xs font-medium uppercase tracking-widest text-tx3 mb-6">
        Building preview components
      </span>

      {/* Full page skeleton layout */}
      <div className="flex gap-5 w-full">
        {/* Sidebar skeleton */}
        <div className="hidden sm:flex w-28 flex-shrink-0 flex-col gap-2">
          <SkeletonPulse className="h-3 w-16 mb-1" />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
            >
              <SkeletonPulse className="h-3 w-full" />
            </motion.div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 min-w-0 space-y-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.35 }}
            className="flex flex-col gap-2 mb-2"
          >
            <SkeletonPulse className="h-5 w-40" />
            <SkeletonPulse className="h-3.5 w-64" />
          </motion.div>

          {/* Hero card */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.35, ease: "easeOut" }}
            className="rounded-lg border border-line bg-card p-5"
          >
            <SkeletonPulse className="h-3 w-24 mb-3" />
            <SkeletonPulse className="h-5 w-3/4 mb-2" />
            <SkeletonPulse className="h-3 w-full mb-1" />
            <SkeletonPulse className="h-3 w-2/3 mb-4" />
            <div className="flex gap-1.5 flex-wrap">
              {["w-14", "w-20", "w-16", "w-12", "w-24"].map((w, i) => (
                <SkeletonPulse key={i} className={`h-4 ${w} rounded-full`} />
              ))}
            </div>
          </motion.div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.35, ease: "easeOut" }}
                className="rounded-lg border border-line bg-card p-4"
              >
                <SkeletonPulse className="h-2 w-12 mb-3" />
                <SkeletonPulse className="h-3.5 w-3/4 mb-2" />
                <SkeletonPulse className="h-2.5 w-full mb-1" />
                <SkeletonPulse className="h-2.5 w-1/2 mb-3" />
                <div className="flex gap-1">
                  <SkeletonPulse className="h-3.5 w-10 rounded-full" />
                  <SkeletonPulse className="h-3.5 w-14 rounded-full" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Badge row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.35 }}
            className="flex gap-1.5 flex-wrap pt-1"
          >
            {["w-14", "w-20", "w-16", "w-12", "w-24", "w-18"].map((w, i) => (
              <SkeletonPulse key={i} className={`h-5 ${w} rounded-full`} />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
