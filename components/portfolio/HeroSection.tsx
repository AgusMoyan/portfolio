"use client";

import { motion } from "motion/react";
import {
  sectionContainerVariants,
  sectionExit,
  sectionItemVariants,
} from "./animation";

const summaryItems = [
  { label: "Profile scope", value: "web / mobile / systems" },
  { label: "Projects indexed", value: "4" },
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
        className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        Build successful
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
        Trabajo conectando producto, interfaz, lógica, datos e integraciones para convertir ideas en sistemas web y mobile usables en escenarios reales.
      </motion.p>

      {/* Runtime summary */}
      <motion.div
        variants={sectionItemVariants}
        className="mt-6 w-full space-y-2"
      >
        <h3 className="text-xs font-medium text-zinc-400 dark:text-zinc-500">
          Runtime summary
        </h3>
        <dl className="grid grid-cols-2 gap-x-4 gap-y-2">
          {summaryItems.map((item) => (
            <div key={item.label}>
              <dt className="text-[11px] font-medium text-zinc-400 dark:text-zinc-500">
                {item.label}
              </dt>
              <dd className="mt-0.5 text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
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
