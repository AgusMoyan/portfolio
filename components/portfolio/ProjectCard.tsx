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
  published: "bg-accent",
  internal: "bg-tx3",
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

const gradients: Record<string, string> = {
  "2mmudanzas": "from-blue-500/20 via-cyan-500/10 to-transparent",
  "udec-clinical-records": "from-emerald-500/20 via-teal-500/10 to-transparent",
  "rcp-fundacion-udec": "from-rose-500/20 via-pink-500/10 to-transparent",
  trustride: "from-amber-500/20 via-orange-500/10 to-transparent",
};

function getInitials(name: string) {
  return name
    .split(/[\s-]+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

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
      className={`group relative min-w-0 overflow-hidden rounded-lg border text-left shadow-sm transition ${
        isActive
          ? "border-accent bg-accent/5 shadow-accent/10"
          : "border-line bg-card hover:border-tx3 hover:shadow-md"
      }`}
    >
      {/* Gradient placeholder */}
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-br ${
          gradients[project.id] ?? "from-accent/10 via-transparent to-transparent"
        }`}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute right-3 top-3 select-none text-[28px] font-extrabold tracking-tight text-tx3/20" aria-hidden="true">
        {getInitials(project.name)}
      </div>

      <button
        type="button"
        disabled={disabled}
        aria-pressed={isActive}
        aria-label={`Open project ${project.name}`}
        onClick={() => onSelect(project)}
        className="relative flex w-full flex-col gap-2 p-3 pt-8 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent/60 disabled:cursor-not-allowed disabled:opacity-60"
      >
        <div className="flex min-w-0 flex-wrap items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-tx2">
            <span
              className={`h-1.5 w-1.5 rounded-full ${statusDots[project.status]}`}
            />
            {buildLabels[project.status]}
          </span>
          {isActive && (
            <span className="rounded-full border border-accent/30 bg-card px-2 py-0.5 font-mono text-[10px] font-semibold text-accent">
              selected
            </span>
          )}
        </div>

        <div className="min-w-0">
          <h3 className="break-words text-sm font-semibold tracking-tight text-tx1">
            {project.name}
          </h3>
          <p className="mt-1 line-clamp-1 text-[11px] font-medium text-tx2">
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
