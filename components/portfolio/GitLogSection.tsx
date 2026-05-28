"use client";

import { motion } from "motion/react";
import { gitLogHeader, gitLogEntries } from "../../data/gitLog";
import {
  sectionContainerVariants,
  sectionExit,
  sectionItemVariants,
} from "./animation";

export default function GitLogSection() {
  const { eyebrow, title, description } = gitLogHeader;

  return (
    <motion.section
      variants={sectionContainerVariants}
      initial="hidden"
      animate="show"
      exit={sectionExit}
      className="flex w-full flex-col text-left"
      aria-label="Career git log"
    >
      {/* Header */}
      <motion.header variants={sectionItemVariants} className="space-y-3">
        <span className="inline-flex rounded-full border border-zinc-200 bg-white px-3 py-1 font-mono text-[10px] text-zinc-500 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400">
          {eyebrow}
        </span>
        <div className="space-y-2">
          <h2 className="text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
            {title}
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
            {description}
          </p>
        </div>
      </motion.header>

      <div className="mt-6 w-full space-y-4">
        {gitLogEntries.map((entry) => (
          <motion.div
            key={entry.hash}
            variants={sectionItemVariants}
            className="rounded-xl border border-zinc-200 bg-white/70 p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/70"
          >
            {/* Hash + Year */}
            <div className="mb-1.5 flex items-center justify-between gap-3">
              <span className="font-mono text-[11px] font-medium text-indigo-500 dark:text-indigo-400">
                {entry.hash}
              </span>
              <span className="shrink-0 font-mono text-[11px] text-zinc-400 dark:text-zinc-600">
                {entry.year}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              {entry.title}
            </h3>

            {/* Message */}
            <p className="mt-1 text-[13px] leading-relaxed text-zinc-500 dark:text-zinc-400">
              {entry.message}
            </p>

            {/* Tags */}
            {entry.tags.length > 0 && (
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {entry.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-md border border-zinc-200 bg-white px-2 py-0.5 font-mono text-[10px] font-medium text-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
