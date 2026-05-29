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
        <span className="inline-flex rounded-full border border-line bg-card px-3 py-1 font-mono text-[10px] text-tx2 shadow-sm">
          {eyebrow}
        </span>
        <div className="space-y-2">
          <h2 className="text-2xl font-extrabold tracking-tight text-tx1 sm:text-3xl">
            {title}
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-tx2">
            {description}
          </p>
        </div>
      </motion.header>

      <div className="mt-6 w-full space-y-4">
        {gitLogEntries.map((entry) => (
          <motion.div
            key={entry.hash}
            variants={sectionItemVariants}
            className="rounded-lg border border-line bg-card p-4 shadow-sm"
          >
            {/* Hash + Year */}
            <div className="mb-1.5 flex items-center justify-between gap-3">
              <span className="font-mono text-[11px] font-medium text-accent">
                {entry.hash}
              </span>
              <span className="shrink-0 font-mono text-[11px] text-tx2">
                {entry.year}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-sm font-semibold text-tx1">
              {entry.title}
            </h3>

            {/* Message */}
            <p className="mt-1 text-[13px] leading-relaxed text-tx2">
              {entry.message}
            </p>

            {/* Tags */}
            {entry.tags.length > 0 && (
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {entry.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-md border border-line bg-card px-2 py-0.5 font-mono text-[10px] font-medium text-tx2"
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
