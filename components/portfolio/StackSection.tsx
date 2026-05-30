"use client";

import { useMemo } from "react";
import { motion } from "motion/react";
import { stack } from "../../data/stack";
import {
  sectionContainerVariants,
  sectionExit,
  sectionItemVariants,
} from "./animation";

interface StackSectionProps {
  searchQuery?: string;
}

export default function StackSection({ searchQuery = "" }: StackSectionProps) {
  const filtered = useMemo(() => {
    if (!searchQuery) return stack;
    const q = searchQuery.toLowerCase();
    return stack
      .map((cat) => ({
        ...cat,
        items: cat.items.filter((t) => t.toLowerCase().includes(q)),
      }))
      .filter(
        (cat) =>
          cat.items.length > 0 ||
          cat.category.toLowerCase().includes(q) ||
          cat.description.toLowerCase().includes(q),
      );
  }, [searchQuery]);

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

      <motion.div variants={sectionItemVariants} className="mt-4 flex items-center gap-2 text-[11px] text-tx3">
        <span>{filtered.reduce((a, c) => a + c.items.length, 0)} tools</span>
        {searchQuery && (
          <>
            <span className="text-tx3">·</span>
            <span>
              matching &ldquo;{searchQuery}&rdquo;
            </span>
          </>
        )}
      </motion.div>

      <div className="mt-3 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
        {filtered.map((category) => (
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

      {filtered.length === 0 && searchQuery && (
        <motion.p
          variants={sectionItemVariants}
          className="mt-8 text-center text-[11px] text-tx3"
        >
          No tools match &ldquo;{searchQuery}&rdquo;
        </motion.p>
      )}
    </motion.section>
  );
}
