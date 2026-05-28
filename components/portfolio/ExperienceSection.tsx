import { motion } from "motion/react";
import { experience } from "../../data/experience";
import {
  projectContainerVariants,
  sectionExit,
  timelineItemVariants,
} from "./animation";

export default function ExperienceSection() {
  return (
    <motion.div
      variants={projectContainerVariants}
      initial="hidden"
      animate="show"
      exit={sectionExit}
      className="flex w-full max-w-md flex-col items-center text-center"
    >
      <motion.span
        variants={timelineItemVariants}
        className="mb-4 rounded-full border border-zinc-200 bg-white px-3 py-1 font-mono text-xs text-zinc-500 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400"
      >
        experience.timeline
      </motion.span>

      <motion.h2
        variants={timelineItemVariants}
        className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mb-7"
      >
        Experiencia
      </motion.h2>

      <div className="relative w-full pl-6 before:absolute before:left-[11px] before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-zinc-200 dark:before:bg-zinc-800">
        {experience.map((exp) => (
          <motion.div
            key={exp.title}
            variants={timelineItemVariants}
            className="relative mb-6 last:mb-0"
          >
            <span className="absolute -left-[21px] top-1.5 h-3 w-3 rounded-full border-2 border-zinc-300 bg-white dark:border-zinc-600 dark:bg-zinc-950" />

            <div className="rounded-xl border border-zinc-200 bg-white p-4 text-left shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
                {exp.title}
              </h3>
              <p className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
