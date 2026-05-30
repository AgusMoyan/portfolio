"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import type { PortfolioCommand } from "../../types/portfolio";
import {
  sectionContainerVariants,
  sectionExit,
  sectionItemVariants,
} from "./animation";

const quickModules: {
  label: string;
  hint: string;
  command: PortfolioCommand;
}[] = [
  { label: "Projects", hint: "4 shipped products", command: "projects" },
  { label: "About", hint: "Developer profile", command: "about" },
  { label: "Experience", hint: "Professional timeline", command: "experience" },
  { label: "Stack", hint: "Tools by purpose", command: "stack" },
  { label: "Contact", hint: "Recruiter shortcuts", command: "contact" },
];

const runtimeItems = [
  { label: "Build", value: "successful", dot: true },
  { label: "Projects indexed", value: "4", dot: false, count: true },
  { label: "Contact actions", value: "ready", dot: false },
  { label: "Resume shortcut", value: "view / print", dot: false },
  { label: "Status", value: "live", dot: true },
] as const;

interface HeroSectionProps {
  onNavigate?: (command: PortfolioCommand) => void;
}

function AnimatedCount({
  target,
  duration = 600,
}: {
  target: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));

      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [target, duration]);

  return <>{count}</>;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <motion.div
      variants={sectionContainerVariants}
      initial="hidden"
      animate="show"
      exit={sectionExit}
      className="flex w-full flex-col gap-5 sm:gap-6"
    >
      {/* Header */}
      <motion.div
        variants={sectionItemVariants}
        className="flex flex-col gap-2"
      >
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200/60 dark:border-emerald-700/60 bg-emerald-50/60 dark:bg-emerald-900/30 px-2.5 py-0.5 text-[10px] font-medium text-emerald-700 dark:text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Build successful
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="currentColor"
              aria-hidden="true"
            >
              <text
                x="12"
                y="17"
                textAnchor="middle"
                fontSize="16"
                fontWeight="700"
              >
                A
              </text>
            </svg>
          </div>
          <h1 className="text-xl font-bold tracking-tight text-tx1 sm:text-2xl">
            Agus Runtime
          </h1>
        </div>
        <p className="text-sm font-medium text-tx2">
          Portfolio workspace ready.
        </p>
        <p className="max-w-xl text-[11px] leading-relaxed text-tx3">
          Explorá proyectos, experiencia, stack y contacto desde la consola o
          desde los accesos rápidos.
        </p>
      </motion.div>

      {/* Profile + Runtime side by side */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <motion.div
          variants={sectionItemVariants}
          className="rounded-lg border border-line bg-card p-4 shadow-[0_0_0_0.5px_rgba(0,0,0,0.05),0_1px_2px_rgba(0,0,0,0.06)] sm:p-5"
        >
          <h2 className="text-[11px] font-semibold uppercase tracking-wider text-tx3">
            Profile
          </h2>
          <div className="mt-3 space-y-2.5">
            <div>
              <span className="text-[11px] font-medium text-tx2">Scope</span>
              <p className="text-sm font-semibold text-tx1">
                Web / Mobile / Systems
              </p>
            </div>
            <div>
              <span className="text-[11px] font-medium text-tx2">Focus</span>
              <p className="text-sm leading-relaxed text-tx2">
                Producto, interfaces, lógica, datos e integraciones
              </p>
            </div>
            <div>
              <span className="text-[11px] font-medium text-tx2">Work</span>
              <p className="text-sm leading-relaxed text-tx2">
                Sistemas reales, mobile apps, dashboards, APIs, producción
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={sectionItemVariants}
          className="rounded-lg border border-line bg-card p-4 shadow-[0_0_0_0.5px_rgba(0,0,0,0.05),0_1px_2px_rgba(0,0,0,0.06)] sm:p-5"
        >
          <h2 className="text-[11px] font-semibold uppercase tracking-wider text-tx3">
            Runtime Status
          </h2>
          <dl className="mt-3 space-y-2.5">
            {runtimeItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between"
              >
                <dt className="text-[11px] text-tx3">{item.label}</dt>
                <dd className="flex items-center gap-1.5 text-[11px] font-medium text-tx1">
                  {item.dot && (
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  )}
                  {"count" in item && item.count ? (
                    <AnimatedCount target={Number(item.value)} />
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>

      {/* Quick Modules */}
      <motion.div
        variants={sectionItemVariants}
        className="flex flex-col gap-3"
      >
        <h2 className="text-[11px] font-semibold uppercase tracking-wider text-tx3">
          Quick Modules
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {quickModules.map((mod) => (
            <button
              key={mod.command}
              type="button"
              onClick={() => onNavigate?.(mod.command)}
              className="group cursor-pointer rounded-lg border border-line bg-card p-3 text-left shadow-[0_0_0_0.5px_rgba(0,0,0,0.05),0_1px_2px_rgba(0,0,0,0.06)] transition-all duration-150 hover:bg-hover hover:shadow-[0_0_0_0.5px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
            >
              <p className="text-sm font-semibold text-tx1 transition-colors duration-150 group-hover:text-accent">
                {mod.label}
              </p>
              <p className="mt-0.5 text-[10px] text-tx3">{mod.hint}</p>
              <code className="mt-1.5 inline-block rounded bg-line/50 px-1.5 py-0.5 text-[10px] font-mono text-tx3">
                {`/${mod.command}`}
              </code>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Suggested next action */}
      <motion.div
        variants={sectionItemVariants}
        className="flex flex-col gap-2 rounded-lg border border-line bg-card/60 p-4 shadow-[0_0_0_0.5px_rgba(0,0,0,0.05),0_1px_2px_rgba(0,0,0,0.06)]"
      >
        <span className="text-[10px] font-semibold uppercase tracking-wider text-tx3">
          Suggested next action
        </span>
        <div className="flex items-center gap-2">
          <p className="text-[11px] text-tx2">
            Open{" "}
            <span className="font-mono font-medium text-accent">/projects</span>{" "}
            to inspect shipped work.
          </p>
          <button
            type="button"
            onClick={() => onNavigate?.("projects")}
            className="inline-flex cursor-pointer items-center rounded-md border border-line bg-card px-2 py-0.5 text-[10px] font-mono text-tx3 transition hover:bg-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
          >
            /projects
          </button>
        </div>
      </motion.div>

      {/* Status hint */}
      <motion.p
        variants={sectionItemVariants}
        className="text-[10px] leading-relaxed text-tx3"
      >
        Explorá los módulos desde la consola con los comandos disponibles o hacé
        clic en los accesos rápidos.
      </motion.p>
    </motion.div>
  );
}
