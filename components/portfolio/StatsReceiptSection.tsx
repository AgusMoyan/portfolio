"use client";

import { motion } from "motion/react";
import { statsReceipt } from "../../data/stats";
import {
  sectionContainerVariants,
  sectionExit,
  sectionItemVariants,
} from "./animation";

export default function StatsReceiptSection() {
  const { title, subtitle, items, totalLabel, totalValue, barcode } =
    statsReceipt;

  return (
    <motion.section
      variants={sectionContainerVariants}
      initial="hidden"
      animate="show"
      exit={sectionExit}
      className="flex w-full flex-col items-center text-left"
      aria-label="Developer stats receipt"
    >
      <motion.div
        variants={sectionItemVariants}
        className="w-full max-w-sm rounded-2xl border border-zinc-200 bg-white/80 p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/80"
      >
        {/* Header */}
        <div className="mb-4 border-b border-zinc-100 pb-3 text-center dark:border-zinc-800">
          <h2 className="text-base font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            {title}
          </h2>
          <p className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
            {subtitle}
          </p>
        </div>

        {/* Items */}
        <div className="space-y-2">
          {items.map((item) => (
            <motion.div
              key={item.label}
              variants={sectionItemVariants}
              className="flex items-center justify-between gap-4"
            >
              <span className="text-sm text-zinc-600 dark:text-zinc-400">
                {item.label}
              </span>
              <span className="shrink-0 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                {item.value}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Total */}
        <div className="mt-4 border-t border-zinc-100 pt-3 dark:border-zinc-800">
          <div className="flex items-center justify-between font-semibold">
            <span className="text-sm uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
              {totalLabel}
            </span>
            <span className="text-base text-indigo-600 dark:text-indigo-400">
              {totalValue}
            </span>
          </div>
        </div>

        {/* Barcode */}
        <div className="mt-4 border-t border-zinc-100 pt-3 text-center dark:border-zinc-800">
          <span className="font-mono text-[10px] tracking-[0.25em] text-zinc-300 dark:text-zinc-700">
            {barcode}
          </span>
        </div>
      </motion.div>
    </motion.section>
  );
}
