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
      className="flex w-full flex-col"
      aria-label="Developer profile"
    >
      {/* Header */}
      <motion.div variants={sectionItemVariants} className="space-y-3">
        <span className="text-xs text-zinc-500">
          {developerProfile.eyebrow}
        </span>

        <div className="space-y-2">
          <h2 className="text-2xl font-extrabold tracking-tight text-zinc-900 sm:text-3xl">
            {developerProfile.title}
          </h2>
          <p className="text-sm font-semibold text-zinc-700">
            {developerProfile.subtitle}
          </p>
          <p className="max-w-2xl text-sm leading-relaxed text-zinc-500">
            {developerProfile.description}
          </p>
        </div>
      </motion.div>

      {/* Principles */}
      <div className="mt-6 grid w-full gap-4 sm:grid-cols-2">
        {developerProfile.principles.map((principle) => (
          <motion.div
            key={principle.number}
            variants={sectionItemVariants}
            className="rounded-xl border border-zinc-200/80 bg-white px-4 py-3.5 shadow-sm"
          >
            <span className="text-xs font-medium text-zinc-400">
              {principle.number}
            </span>
            <h3 className="mt-1 text-sm font-semibold text-zinc-900">
              {principle.title}
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-zinc-500">
              {principle.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Contribution areas */}
      <motion.div
        variants={sectionItemVariants}
        className="mt-6 flex w-full items-center gap-3"
      >
        <span className="shrink-0 text-[11px] font-medium text-zinc-500">
          Contribution areas
        </span>
        <span className="h-px flex-1 bg-zinc-200/60" />
        <div className="flex flex-wrap gap-x-2 gap-y-1">
          {developerProfile.contributionAreas.map((area) => (
            <span
              key={area}
              className="rounded-md border border-zinc-200/60 bg-zinc-50/50 px-2 py-0.5 text-[11px] font-medium text-zinc-600"
            >
              {area}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
