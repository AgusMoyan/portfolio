"use client";

import { motion } from "motion/react";
import { developerProfile } from "../../data/about";
import {
  sectionContainerVariants,
  sectionExit,
  sectionItemVariants,
} from "./animation";

export default function AboutSection() {
  return (
    <motion.section
      variants={sectionContainerVariants}
      initial="hidden"
      animate="show"
      exit={sectionExit}
      className="flex w-full flex-col items-center text-left"
      aria-label="Developer profile"
    >
      {/* Header */}
      <motion.div variants={sectionItemVariants} className="w-full space-y-3">
        <span className="inline-flex rounded-full border border-zinc-200 bg-white px-3 py-1 font-mono text-xs text-zinc-500 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400">
          {developerProfile.eyebrow}
        </span>

        <div className="space-y-2">
          <h2 className="text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
            {developerProfile.title}
          </h2>
          <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
            {developerProfile.subtitle}
          </p>
          <p className="max-w-2xl text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
            {developerProfile.description}
          </p>
        </div>
      </motion.div>

      {/* Principles */}
      <div className="mt-6 grid w-full gap-3 sm:grid-cols-2">
        {developerProfile.principles.map((principle) => (
          <motion.div
            key={principle.number}
            variants={sectionItemVariants}
            className="rounded-xl border border-zinc-200 bg-white/80 p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/80"
          >
            <span className="font-mono text-[11px] font-semibold text-indigo-500 dark:text-indigo-400">
              {principle.number}
            </span>
            <h3 className="mt-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              {principle.title}
            </h3>
            <p className="mt-1.5 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
              {principle.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Contribution areas */}
      <motion.div
        variants={sectionItemVariants}
        className="mt-5 w-full space-y-3"
      >
        <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-600">
          Where I usually contribute
        </h3>
        <div className="flex flex-wrap gap-2">
          {developerProfile.contributionAreas.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-600 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
