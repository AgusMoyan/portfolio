import type { Project, ProjectStatus, ProjectTag } from "../../types/projects";
import ProjectTechBadge from "./ProjectTechBadge";

interface ProjectCardProps {
  project: Project;
  isActive: boolean;
  disabled?: boolean;
  onSelect: (project: Project) => void;
}

const buildLabels: Record<ProjectStatus, string> = {
  production: "Production",
  published: "Published",
  internal: "Internal",
  "production-ready": "Production ready",
};

const statusDots: Record<ProjectStatus, string> = {
  production: "bg-emerald-500",
  published: "bg-indigo-500",
  internal: "bg-zinc-400",
  "production-ready": "bg-amber-400",
};

const cardTagPriority: ProjectTag[] = [
  "google-play",
  "offline-first",
  "admin-dashboard",
  "api-integration",
  "production",
  "published",
  "mobile",
];

const cardTechnologyPriority = [
  "Next.js 16",
  "Next.js",
  "React Native",
  "Expo SDK 54",
  "Expo",
  "Mapbox GL JS",
  "Supabase",
  "NestJS",
  "PostgreSQL",
  "SQLite",
  "EAS Build",
  "TypeScript",
  "React 19",
  "React",
] as const;

function getVisibleTechnologies(project: Project) {
  const prioritized = cardTechnologyPriority.filter((technology) =>
    project.technologies.includes(technology)
  );
  const prioritizedSet = new Set<string>(prioritized);
  const remaining = project.technologies.filter(
    (technology) => !prioritizedSet.has(technology)
  );

  return [...prioritized, ...remaining].slice(0, 3);
}

export default function ProjectCard({
  project,
  isActive,
  disabled = false,
  onSelect,
}: ProjectCardProps) {
  const visibleTechnologies = getVisibleTechnologies(project);
  const hiddenTechnologyCount = Math.max(
    project.technologies.length - visibleTechnologies.length,
    0
  );
  const visibleTags = cardTagPriority
    .filter((tag) => project.tags.includes(tag))
    .slice(0, 2);

  return (
    <article
      className={`group relative min-w-0 overflow-hidden rounded-2xl border text-left shadow-sm transition ${
        isActive
          ? "border-indigo-300 bg-indigo-50/40 shadow-indigo-100/60 dark:border-indigo-800/80 dark:bg-indigo-950/20 dark:shadow-none"
          : "border-zinc-200 bg-white/80 hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950/80 dark:hover:border-zinc-700 dark:hover:shadow-none"
      }`}
    >
      <button
        type="button"
        disabled={disabled}
        aria-pressed={isActive}
        aria-label={`Open project ${project.name}`}
        onClick={() => onSelect(project)}
        className="flex w-full flex-col gap-2 p-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-indigo-400/60 disabled:cursor-not-allowed disabled:opacity-60"
      >
        <div className="flex min-w-0 flex-wrap items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-500">
            <span
              className={`h-1.5 w-1.5 rounded-full ${statusDots[project.status]}`}
            />
            {buildLabels[project.status]}
          </span>
          {isActive && (
            <span className="rounded-full border border-indigo-200 bg-white px-2 py-0.5 font-mono text-[10px] font-semibold text-indigo-600 dark:border-indigo-800 dark:bg-zinc-950 dark:text-indigo-300">
              selected
            </span>
          )}
        </div>

        <div className="min-w-0">
          <h3 className="break-words text-sm font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
            {project.name}
          </h3>
          <p className="mt-1 line-clamp-1 text-[11px] font-medium text-zinc-500 dark:text-zinc-400">
            {project.type}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {visibleTechnologies.map((technology) => (
            <ProjectTechBadge key={technology}>{technology}</ProjectTechBadge>
          ))}
          {hiddenTechnologyCount > 0 && (
            <ProjectTechBadge variant="muted">
              +{hiddenTechnologyCount}
            </ProjectTechBadge>
          )}
        </div>

        {visibleTags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {visibleTags.map((tag) => (
              <ProjectTechBadge key={tag} variant="tag">
                {tag}
              </ProjectTechBadge>
            ))}
          </div>
        )}
      </button>
    </article>
  );
}
