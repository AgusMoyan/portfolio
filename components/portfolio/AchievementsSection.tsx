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
        <span className="inline-flex rounded-full border border-line bg-card px-3 py-1 font-mono text-[10px] text-tx2 shadow-sm">
          achievements.log
        </span>
        <div className="space-y-2">
          <h2 className="text-2xl font-extrabold tracking-tight text-tx1 sm:text-3xl">
            Logros únicos
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-tx2">
            No son métricas. Son momentos que definieron mi forma de construir.
          </p>
        </div>
      </motion.header>

      <div className="mt-6 grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
        {achievements.map((badge) => (
          <motion.div
            key={badge.title}
            variants={sectionItemVariants}
            className="rounded-lg border border-line bg-card p-4 shadow-sm"
          >
            <div className="mb-2.5 flex items-center gap-2.5">
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-line bg-card text-sm"
                aria-hidden="true"
              >
                {iconByTitle[badge.title] ?? "★"}
              </span>
              <div className="min-w-0">
                <h3 className="truncate text-sm font-semibold text-tx1">
                  {badge.title}
                </h3>
              </div>
            </div>
            <p className="text-[13px] leading-relaxed text-tx2">
              {badge.description}
            </p>
            <span className="mt-2 inline-block font-mono text-[10px] text-tx2">
              {badge.project}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
