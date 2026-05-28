"use client";

import { motion } from "motion/react";
import { achievements } from "../../data/achievements";
import {
  sectionContainerVariants,
  sectionExit,
  sectionItemVariants,
} from "./animation";

export default function AchievementsSection() {
  return (
    <motion.section
      variants={sectionContainerVariants}
      initial="hidden"
      animate="show"
      exit={sectionExit}
      className="flex w-full flex-col items-center text-left"
      aria-label="Unlocked achievements"
    >
      <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
        {achievements.map((badge) => (
          <motion.div
            key={badge.title}
            variants={sectionItemVariants}
            className="rounded-xl border border-zinc-200 bg-white/70 p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/70"
          >
            <div className="mb-2 flex items-center gap-2.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-white text-base dark:border-zinc-700 dark:bg-zinc-900">
                {badge.icon}
              </span>
              <div className="min-w-0">
                <h3 className="truncate text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  {badge.title}
                </h3>
                <span className="font-mono text-[10px] text-emerald-500 dark:text-emerald-400">
                  {badge.status}
                </span>
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
