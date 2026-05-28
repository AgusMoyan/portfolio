import { motion } from "motion/react";
import { stack } from "../../data/stack";
import {
  sectionContainerVariants,
  sectionExit,
  sectionItemVariants,
} from "./animation";

export default function StackSection() {
  return (
    <motion.section
      variants={sectionContainerVariants}
      initial="hidden"
      animate="show"
      exit={sectionExit}
      className="flex w-full flex-col text-left"
      aria-label="Tools by purpose"
    >
      <motion.header variants={sectionItemVariants} className="space-y-3">
        <span className="text-xs text-zinc-400 dark:text-zinc-500">
          stack.layers
        </span>

        <div className="space-y-2">
          <h2 className="text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
            Tools by purpose
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
            Las herramientas que uso según la capa del producto que estoy construyendo.
          </p>
        </div>
      </motion.header>

      <div className="mt-6 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
        {stack.map((category) => (
          <motion.div
            key={category.category}
            variants={sectionItemVariants}
            className="border-l-2 border-zinc-200 pl-4 dark:border-zinc-700"
          >
            <h3 className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
              {category.category}
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
              {category.description}
            </p>
            <div className="mt-2 flex flex-wrap gap-x-1 gap-y-0.5 text-xs text-zinc-500 dark:text-zinc-400">
              {category.items.map((tech, i) => (
                <span key={tech}>
                  {i > 0 && <span className="mr-1 text-zinc-300 dark:text-zinc-600">/</span>}
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
