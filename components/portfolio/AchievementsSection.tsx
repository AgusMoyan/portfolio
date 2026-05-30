"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { achievements } from "../../data/achievements";
import {
  sectionContainerVariants,
  sectionExit,
  sectionItemVariants,
} from "./animation";

function GooglePlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polygon points="10,8 16,12 10,16" fill="currentColor" stroke="none" />
    </svg>
  );
}

function OfflineIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v4" />
      <path d="M12 18v4" />
      <path d="M4.93 4.93l2.83 2.83" />
      <path d="M16.24 16.24l2.83 2.83" />
      <path d="M2 12h4" />
      <path d="M18 12h4" />
      <path d="M4.93 19.07l2.83-2.83" />
      <path d="M16.24 7.76l2.83-2.83" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 7v10a2 2 0 002 2l4-2 6 2 4-2V7a2 2 0 00-2-2l-4 2-6-2-4 2z" />
      <path d="M9 5v14" />
      <path d="M15 7v14" />
      <path d="M9 5a2 2 0 100-4 2 2 0 000 4z" />
      <path d="M15 7a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
  );
}

function DashboardIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

function ShipmentIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9H9l-3-9H2" />
      <path d="M5.5 12L9 3h6l3.5 9" />
    </svg>
  );
}

const iconByTitle: Record<string, ReactNode> = {
  "First Google Play Release": <GooglePlayIcon />,
  "Offline-First Clinical Flow": <OfflineIcon />,
  "Maps Integration Survivor": <MapIcon />,
  "Admin Dashboard Builder": <DashboardIcon />,
  "End-to-End Shipment": <ShipmentIcon />,
};

export default function AchievementsSection() {
  return (
    <motion.section
      variants={sectionContainerVariants}
      initial="hidden"
      animate="show"
      exit={sectionExit}
      className="flex w-full flex-col text-left"
      aria-label="Unlocked achievements"
    >
      {/* Header */}
      <motion.header variants={sectionItemVariants} className="space-y-3">
        <span className="inline-flex rounded-full border border-line bg-card px-3 py-1 font-mono text-[10px] text-tx2 shadow-sm">
          achievements.log
        </span>
        <div className="space-y-2">
          <h2 className="text-2xl font-extrabold tracking-tight text-tx1 sm:text-3xl">
            Logros únicos
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-tx2">
            No son métricas. Son momentos que definieron mi forma de construir.
          </p>
        </div>
      </motion.header>

      <div className="mt-6 grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
        {achievements.map((badge) => (
          <motion.div
            key={badge.title}
            variants={sectionItemVariants}
            className="rounded-lg border border-line bg-card p-4 shadow-sm"
          >
            <div className="mb-2.5 flex items-center gap-2.5">
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-line bg-panel text-tx2"
                aria-hidden="true"
              >
                {iconByTitle[badge.title] ?? (
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                  </svg>
                )}
              </span>
              <div className="min-w-0">
                <h3 className="truncate text-sm font-semibold text-tx1">
                  {badge.title}
                </h3>
              </div>
            </div>
            <p className="text-[13px] leading-relaxed text-tx2">
              {badge.description}
            </p>
            <span className="mt-2 inline-block font-mono text-[10px] text-tx2">
              {badge.project}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
