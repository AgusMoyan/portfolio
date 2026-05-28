import { motion } from "motion/react";
import { stack } from "../../data/stack";
import {
  sectionContainerVariants,
  sectionExit,
  sectionItemVariants,
} from "./animation";

export default function StackSection() {
  return (
    <motion.div
      variants={sectionContainerVariants}
      initial="hidden"
      animate="show"
      exit={sectionExit}
      className="flex w-full max-w-lg flex-col items-center text-center"
    >
      <motion.span
        variants={sectionItemVariants}
        className="mb-4 rounded-full border border-zinc-200 bg-white px-3 py-1 font-mono text-xs text-zinc-500 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400"
      >
        stack.ts
      </motion.span>

      <motion.h2
        variants={sectionItemVariants}
        className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mb-7"
      >
        Stack técnico
      </motion.h2>

      <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
        {stack.map((category) => (
          <motion.div
            key={category.category}
            variants={sectionItemVariants}
            className="rounded-xl border border-zinc-200 bg-white p-4 text-left shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
          >
            <h3 className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-3">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {category.items.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-[11px] font-medium text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
