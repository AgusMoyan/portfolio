"use client";

import { useState } from "react";
import { Download, Printer } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cvByLanguage } from "../../data/cv";
import { contact } from "../../data/contact";
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
  const isPdfAvailable = contact.cv.available;

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
        className="cv-actions print:hidden flex w-full flex-col gap-3 rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm sm:flex-row sm:items-center sm:justify-between"
      >
        <div className="flex flex-wrap items-center gap-2">
          <CvLanguageToggle activeLanguage={language} onChange={setLanguage} />
          <span className="font-mono text-[11px] text-zinc-500">
            inline cv.document.ts
          </span>
        </div>

        <div className="flex flex-col gap-2 sm:items-end">
          <div className="flex flex-wrap gap-2">
            {isPdfAvailable ? (
              <a
                href={contact.cv.path}
                download
                aria-label="Descargar CV en PDF"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-300 bg-white px-3 py-2 text-xs font-semibold text-zinc-800 shadow-sm transition hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                <Download className="h-3.5 w-3.5" />
                Descargar PDF
              </a>
            ) : (
              <button
                type="button"
                disabled
                aria-disabled="true"
                aria-label="PDF próximamente"
                className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-zinc-100 px-3 py-2 text-xs font-semibold text-zinc-400 shadow-sm"
              >
                <Download className="h-3.5 w-3.5" />
                PDF próximamente
              </button>
            )}
            <button
              type="button"
              onClick={handlePrint}
              aria-label="Imprimir o guardar CV como PDF"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-300 bg-white px-3 py-2 text-xs font-semibold text-zinc-800 shadow-sm transition hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white active:scale-[0.98]"
            >
              <Printer className="h-3.5 w-3.5" />
              Imprimir / Guardar PDF
            </button>
          </div>

          {!isPdfAvailable && (
            <p className="max-w-xs text-[11px] leading-relaxed text-zinc-500">
              También podés usar Imprimir / Guardar PDF para exportar esta versión.
            </p>
          )}
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
