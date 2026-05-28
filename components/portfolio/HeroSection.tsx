"use client";

import { motion } from "motion/react";
import {
  sectionContainerVariants,
  sectionExit,
  sectionItemVariants,
} from "./animation";

const summaryItems = [
  { label: "Projects indexed", value: "4" },
  { label: "Production focus", value: "web / mobile" },
  { label: "CV document", value: "ES / EN" },
  { label: "Contact actions", value: "ready" },
] as const;

export default function HeroSection() {
  return (
    <motion.div
      variants={sectionContainerVariants}
      initial="hidden"
      animate="show"
      exit={sectionExit}
      className="flex w-full max-w-lg flex-col items-center justify-center text-center"
    >
      {/* Build successful badge */}
      <motion.span
        variants={sectionItemVariants}
        className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-emerald-200/70 bg-emerald-50 px-3 py-1 font-mono text-[11px] font-semibold tracking-[0.12em] text-emerald-700 shadow-sm dark:border-emerald-900/50 dark:bg-emerald-950/30 dark:text-emerald-400"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        BUILD SUCCESSFUL
      </motion.span>

      {/* Title */}
      <motion.h1
        variants={sectionItemVariants}
        className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl"
      >
        Agus Runtime listo.
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        variants={sectionItemVariants}
        className="mt-2 max-w-md text-sm leading-relaxed text-zinc-500 dark:text-zinc-400"
      >
        Perfil cargado, proyectos indexados y CV disponible para inspección.
      </motion.p>

      {/* Description */}
      <motion.p
        variants={sectionItemVariants}
        className="mt-4 max-w-sm text-xs leading-relaxed text-zinc-400 dark:text-zinc-500"
      >
        Desarrollo productos web y mobile que pasan de idea a producción: cotizadores, dashboards, apps mobile, sistemas de reservas e integraciones con APIs.
      </motion.p>

      {/* Runtime summary */}
      <motion.div
        variants={sectionItemVariants}
        className="mt-6 w-full space-y-2"
      >
        <h3 className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-600">
          Runtime summary
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {summaryItems.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-zinc-200 bg-white/70 p-2.5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/70"
            >
              <dt className="font-mono text-[10px] font-medium text-zinc-400 dark:text-zinc-500">
                {item.label}
              </dt>
              <dd className="mt-0.5 text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                {item.value}
              </dd>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Console hint */}
      <motion.p
        variants={sectionItemVariants}
        className="mt-5 text-[11px] leading-relaxed text-zinc-400 dark:text-zinc-600"
      >
        Usá la consola para explorar los módulos disponibles.
      </motion.p>
    </motion.div>
  );
}
