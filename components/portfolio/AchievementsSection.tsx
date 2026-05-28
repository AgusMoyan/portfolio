"use client";

import { motion } from "motion/react";
import { achievements } from "../../data/achievements";
import {
  sectionContainerVariants,
  sectionExit,
  sectionItemVariants,
} from "./animation";

const iconByTitle: Record<string, string> = {
  "First Google Play Release": "📱",
  "Offline-First Clinical Flow": "📴",
  "Maps Integration Survivor": "🗺️",
  "Admin Dashboard Builder": "⚙️",
  "End-to-End Shipment": "🔄",
};

export default function AchievementsSection() {
  return (
    <motion.section
      variants={sectionContainerVariants}
      initial="hidden"
      animate="show"
      exit={sectionExit}
      className="flex w-full flex-col text-left"
      aria-label="Unlocked achievements"
    >
      {/* Header */}
      <motion.header variants={sectionItemVariants} className="space-y-3">
        <span className="inline-flex rounded-full border border-zinc-200 bg-white px-3 py-1 font-mono text-[10px] text-zinc-500 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400">
          achievements.log
        </span>
        <div className="space-y-2">
          <h2 className="text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
            Logros únicos
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
            No son métricas. Son momentos que definieron mi forma de construir.
          </p>
        </div>
      </motion.header>

      <div className="mt-6 grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
        {achievements.map((badge) => (
          <motion.div
            key={badge.title}
            variants={sectionItemVariants}
            className="rounded-xl border border-zinc-200 bg-white/70 p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/70"
          >
            <div className="mb-2.5 flex items-center gap-2.5">
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-white text-sm dark:border-zinc-700 dark:bg-zinc-900"
                aria-hidden="true"
              >
                {iconByTitle[badge.title] ?? "★"}
              </span>
              <div className="min-w-0">
                <h3 className="truncate text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  {badge.title}
                </h3>
              </div>
            </div>
            <p className="text-[13px] leading-relaxed text-zinc-500 dark:text-zinc-400">
              {badge.description}
            </p>
            <span className="mt-2 inline-block font-mono text-[10px] text-zinc-400 dark:text-zinc-600">
              {badge.project}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
