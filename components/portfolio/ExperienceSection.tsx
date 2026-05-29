import { motion } from "motion/react";
import { experience, experienceMilestones } from "../../data/experience";
import {
  projectContainerVariants,
  sectionExit,
  timelineItemVariants,
} from "./animation";

function getMeta(location?: string, mode?: string) {
  return [location, mode].filter(Boolean).join(" · ");
}

export default function ExperienceSection() {
  return (
    <motion.section
      variants={projectContainerVariants}
      initial="hidden"
      animate="show"
      exit={sectionExit}
      className="flex w-full flex-col text-left"
      aria-label="Trayectoria profesional"
    >
      <motion.header variants={timelineItemVariants} className="space-y-3">
        <span className="text-xs text-tx3">
          experience.timeline
        </span>

        <div className="space-y-2">
          <h2 className="text-2xl font-extrabold tracking-tight text-tx1 sm:text-3xl">
            Trayectoria profesional
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-tx2">
            Roles, responsabilidades y entregas relevantes en productos web, mobile y soporte técnico.
          </p>
        </div>
      </motion.header>

      <div className="relative mt-6 w-full pl-5 before:absolute before:left-[7px] before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-line">
        {experience.map((exp) => (
          <motion.div
            key={exp.id}
            variants={timelineItemVariants}
            className="relative mb-6 last:mb-0"
          >
            <span className="absolute -left-[14px] top-1.5 z-10 h-2.5 w-2.5 rounded-full border-2 border-line bg-card" />

            <div className="rounded-lg border border-line bg-card px-4 py-3.5 shadow-sm">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <span className="text-[11px] font-medium text-tx3">
                    {exp.period}
                  </span>
                  <h3 className="mt-0.5 text-base font-bold tracking-tight text-tx1">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-medium text-tx2">
                    {exp.company}
                  </p>
                </div>

                {getMeta(exp.location, exp.mode) && (
                  <span className="shrink-0 text-[11px] font-medium text-tx3">
                    {getMeta(exp.location, exp.mode)}
                  </span>
                )}
              </div>

              <p className="mt-2 text-sm leading-relaxed text-tx2">
                {exp.summary}
              </p>

              <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-tx2">
                {exp.bullets.slice(0, 4).map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {exp.tags && exp.tags.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-panel px-2 py-0.5 text-[11px] font-medium text-tx2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {experienceMilestones.length > 0 && (
        <motion.div variants={timelineItemVariants} className="mt-6 space-y-3">
          <h3 className="text-xs font-medium text-tx2">
            Selected milestones
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {experienceMilestones.map((milestone) => (
              <div
                key={milestone.id}
                className="rounded-lg border border-line bg-card px-4 py-3 shadow-sm"
              >
                {milestone.period && (
                  <span className="text-[11px] font-medium text-tx3">
                    {milestone.period}
                  </span>
                )}
                <h4 className="mt-0.5 text-sm font-semibold leading-snug text-tx1">
                  {milestone.title}
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-tx2">
                  {milestone.summary}
                </p>
                {milestone.tags && milestone.tags.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {milestone.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-panel px-2 py-0.5 text-[11px] font-medium text-tx2"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.section>
  );
}
