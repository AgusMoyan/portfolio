import type { ReactNode } from "react";
import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import type { Project } from "../../types/projects";
import ProjectTechBadge from "./ProjectTechBadge";

interface ProjectDetailProps {
  project: Project;
}

const highlightPriorityTerms = [
  "dashboard",
  "offline",
  "google play",
  "pricing",
  "booking",
  "mapbox",
  "auth",
  "signature",
  "sync",
  "eas",
  "published",
  "emergency",
  "api",
];

function DetailBlock({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-2">
      <h4 className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-600">
        {title}
      </h4>
      {children}
    </section>
  );
}

function getVisibleHighlights(project: Project) {
  const prioritized = project.highlights.filter((highlight) => {
    const normalizedHighlight = highlight.toLowerCase();

    return highlightPriorityTerms.some((term) =>
      normalizedHighlight.includes(term)
    );
  });
  const remaining = project.highlights.filter(
    (highlight) => !prioritized.includes(highlight)
  );

  return [...prioritized, ...remaining].slice(0, 6);
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const visibleHighlights = getVisibleHighlights(project);

  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="custom-scrollbar-light min-w-0 rounded-2xl border border-zinc-200 bg-white/85 p-4 text-left shadow-sm dark:border-zinc-800 dark:bg-zinc-950/85 lg:max-h-[calc(100svh-230px)] lg:overflow-y-auto sm:p-5"
    >
      <header className="border-b border-zinc-100 pb-4 dark:border-zinc-800">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <span className="font-mono text-[11px] font-medium text-indigo-500 dark:text-indigo-400">
              {project.statusLabel}
            </span>
            <h3 className="mt-1 break-words text-xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
              {project.name}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
              {project.type}
            </p>
          </div>

          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white px-3 py-2 font-mono text-[11px] font-semibold text-zinc-700 shadow-sm transition hover:border-zinc-300 hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:focus-visible:ring-offset-zinc-950"
            >
              Open live
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          )}
        </div>

        {(project.role || project.year) && (
          <div className="mt-3 flex flex-wrap gap-2">
            {project.role && (
              <ProjectTechBadge variant="muted">role: {project.role}</ProjectTechBadge>
            )}
            {project.year && (
              <ProjectTechBadge variant="muted">year: {project.year}</ProjectTechBadge>
            )}
          </div>
        )}
      </header>

      <div className="mt-4 space-y-5">
        <DetailBlock title="Overview">
          <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {project.description}
          </p>
        </DetailBlock>

        <DetailBlock title="What I built">
          <ul className="grid gap-2 text-sm text-zinc-600 dark:text-zinc-400 sm:grid-cols-2">
            {visibleHighlights.map((highlight) => (
              <li key={highlight} className="flex min-w-0 gap-2 leading-relaxed">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-400" />
                <span className="break-words">{highlight}</span>
              </li>
            ))}
          </ul>
        </DetailBlock>

        <DetailBlock title="Stack">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((technology) => (
              <ProjectTechBadge key={technology}>{technology}</ProjectTechBadge>
            ))}
          </div>
        </DetailBlock>

        <DetailBlock title="Focus">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <ProjectTechBadge key={tag} variant="tag">
                {tag}
              </ProjectTechBadge>
            ))}
          </div>
        </DetailBlock>
      </div>
    </motion.article>
  );
}
