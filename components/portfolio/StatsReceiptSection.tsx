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
      aria-label="Developer receipt"
    >
      <motion.div
        variants={sectionItemVariants}
        className="w-full max-w-sm rounded-lg border border-line bg-card p-5 shadow-sm"
      >
        {/* Header */}
        <div className="mb-4 border-b border-line pb-3 text-center">
          <span className="mb-2 inline-flex rounded-full border border-line bg-card px-3 py-1 font-mono text-[10px] text-tx2 shadow-sm">
            dev.receipt
          </span>
          <h2 className="mt-2 text-base font-bold tracking-tight text-tx1">
            {title}
          </h2>
          <p className="text-[11px] font-mono text-tx2">
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
              <span className="text-sm text-tx2">
                {item.label}
              </span>
              <span className="shrink-0 text-sm font-semibold text-tx1">
                {item.value}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Total */}
        <div className="mt-4 border-t border-line pt-3">
          <div className="flex items-center justify-between font-semibold">
            <span className="text-sm uppercase tracking-wider text-tx1">
              {totalLabel}
            </span>
            <span className="text-base text-accent">
              {totalValue}
            </span>
          </div>
        </div>

        {/* Barcode */}
        <div className="mt-4 border-t border-line pt-3 text-center">
          <span className="font-mono text-[10px] tracking-[0.25em] text-tx3">
            {barcode}
          </span>
        </div>
      </motion.div>
    </motion.section>
  );
}
