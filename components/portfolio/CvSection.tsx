"use client";

import { useState } from "react";
import { Printer } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cvByLanguage } from "../../data/cv";
import type { CvLanguage } from "../../types/cv";
import {
  sectionContainerVariants,
  sectionExit,
  sectionItemVariants,
} from "./animation";
import CvDocument from "./CvDocument";
import CvLanguageToggle from "./CvLanguageToggle";

export default function CvSection() {
  const [language, setLanguage] = useState<CvLanguage>("es");
  const activeCv = cvByLanguage[language];

  function handlePrint() {
    if (typeof window !== "undefined") {
      window.print();
    }
  }

  return (
    <motion.section
      variants={sectionContainerVariants}
      initial="hidden"
      animate="show"
      exit={sectionExit}
      className="flex w-full flex-col items-center gap-4 text-left"
      aria-label="Curriculum vitae"
    >
      <motion.div
        variants={sectionItemVariants}
        className="cv-actions print:hidden flex w-full flex-col gap-3 rounded-lg border border-line bg-card p-3 shadow-sm sm:flex-row sm:items-center sm:justify-between"
      >
        <div className="flex flex-wrap items-center gap-2">
          <CvLanguageToggle activeLanguage={language} onChange={setLanguage} />
          <span className="font-mono text-[11px] text-tx3">
            inline cv.document.ts
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={handlePrint}
            aria-label="Imprimir o guardar CV como PDF"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-line bg-card px-3 py-1.5 text-xs font-semibold text-tx1 shadow-sm transition hover:bg-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-card active:scale-[0.98]"
          >
            <Printer className="h-3.5 w-3.5" />
            Imprimir / Guardar PDF
          </button>
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={language}
          variants={sectionItemVariants}
          initial="hidden"
          animate="show"
          exit={{ opacity: 0, y: -8, transition: { duration: 0.2 } }}
          className="w-full"
        >
          <CvDocument cv={activeCv} />
        </motion.div>
      </AnimatePresence>
    </motion.section>
  );
}
