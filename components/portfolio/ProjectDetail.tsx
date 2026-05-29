import type { ReactNode } from "react";
import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import type { Project, ProjectTag } from "../../types/projects";
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

const focusTagPriority: ProjectTag[] = [
  "google-play",
  "offline-first",
  "admin-dashboard",
  "api-integration",
  "pricing-engine",
  "booking-system",
  "auth",
  "backend",
  "maps",
  "healthcare",
  "production",
  "published",
  "mobile",
];

const maxVisibleTechnologies = 8;
const maxVisibleFocusTags = 5;
const maxVisibleHighlights = 5;

function DetailBlock({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-2">
          <h4 className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-tx2">
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

  return [...prioritized, ...remaining].slice(0, maxVisibleHighlights);
}

function getVisibleFocusTags(project: Project) {
  const prioritized = focusTagPriority.filter((tag) => project.tags.includes(tag));
  const remaining = project.tags.filter((tag) => !prioritized.includes(tag));

  return [...prioritized, ...remaining].slice(0, maxVisibleFocusTags);
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const visibleHighlights = getVisibleHighlights(project);
  const visibleTechnologies = project.technologies.slice(0, maxVisibleTechnologies);
  const hiddenTechnologyCount = Math.max(
    project.technologies.length - visibleTechnologies.length,
    0
  );
  const visibleFocusTags = getVisibleFocusTags(project);
  const hiddenFocusTagCount = Math.max(
    project.tags.length - visibleFocusTags.length,
    0
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="min-w-0 rounded-lg border border-line bg-card p-4 text-left shadow-sm sm:p-5"
    >
      <header className="border-b border-line pb-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <span className="font-mono text-[11px] font-medium text-accent">
              {project.statusLabel}
            </span>
            <h3 className="mt-1 break-words text-xl font-bold tracking-tight text-tx1">
              {project.name}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-tx2">
              {project.type}
            </p>
          </div>

          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-line bg-card px-3 py-2 font-mono text-[11px] font-semibold text-tx1 shadow-sm transition hover:bg-panel focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-card"
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
          <p className="text-sm leading-relaxed text-tx2">
            {project.description}
          </p>
        </DetailBlock>

        <DetailBlock title="What I built">
          <ul className="grid gap-2 text-sm text-tx2 sm:grid-cols-2">
            {visibleHighlights.map((highlight) => (
              <li key={highlight} className="flex min-w-0 gap-2 leading-relaxed">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                <span className="break-words">{highlight}</span>
              </li>
            ))}
          </ul>
        </DetailBlock>

        <DetailBlock title="Stack">
          <div className="flex flex-wrap gap-1.5">
            {visibleTechnologies.map((technology) => (
              <ProjectTechBadge key={technology}>{technology}</ProjectTechBadge>
            ))}
            {hiddenTechnologyCount > 0 && (
              <ProjectTechBadge variant="muted">
                +{hiddenTechnologyCount} more
              </ProjectTechBadge>
            )}
          </div>
        </DetailBlock>

        <DetailBlock title="Focus">
          <div className="flex flex-wrap gap-1.5">
            {visibleFocusTags.map((tag) => (
              <ProjectTechBadge key={tag} variant="tag">
                {tag}
              </ProjectTechBadge>
            ))}
            {hiddenFocusTagCount > 0 && (
              <ProjectTechBadge variant="muted">
                +{hiddenFocusTagCount} more
              </ProjectTechBadge>
            )}
          </div>
        </DetailBlock>
      </div>
    </motion.article>
  );
}
