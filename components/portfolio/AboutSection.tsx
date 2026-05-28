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
        <span className="text-xs text-zinc-400 dark:text-zinc-500">
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
            className="border-l-2 border-zinc-200 pl-4 dark:border-zinc-700"
          >
            <span className="text-xs font-medium text-zinc-400 dark:text-zinc-500">
              {principle.number}
            </span>
            <h3 className="mt-1.5 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              {principle.title}
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
              {principle.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Contribution areas */}
      <motion.div
        variants={sectionItemVariants}
        className="mt-6 w-full space-y-3"
      >
        <h3 className="text-xs font-medium text-zinc-400 dark:text-zinc-500">
          Where I usually contribute
        </h3>
        <p className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
          {developerProfile.contributionAreas.join(" · ")}
        </p>
      </motion.div>
    </motion.section>
  );
}
