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
        <span className="text-xs text-tx3">
          stack.layers
        </span>

        <div className="space-y-2">
          <h2 className="text-2xl font-extrabold tracking-tight text-tx1 sm:text-3xl">
            Tools by purpose
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-tx2">
            Las herramientas que uso según la capa del producto que estoy construyendo.
          </p>
        </div>
      </motion.header>

      <div className="mt-6 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
        {stack.map((category) => (
          <motion.div
            key={category.category}
            variants={sectionItemVariants}
            className="rounded-lg border border-line bg-card px-4 py-3.5 shadow-sm"
          >
            <h3 className="text-sm font-semibold tracking-tight text-tx1">
              {category.category}
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-tx2">
              {category.description}
            </p>
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {category.items.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-panel px-2 py-0.5 text-[11px] font-medium text-tx2"
                >
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
