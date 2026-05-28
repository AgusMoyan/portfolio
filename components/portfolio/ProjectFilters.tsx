import { projectFilters } from "../../data/projects";
import type { ProjectFilterId } from "../../types/projects";

interface ProjectFiltersProps {
  activeFilter: ProjectFilterId;
  disabled?: boolean;
  onChange: (filter: ProjectFilterId) => void;
}

export default function ProjectFilters({
  activeFilter,
  disabled = false,
  onChange,
}: ProjectFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Project filters">
      {projectFilters.map((filter) => {
        const isActive = activeFilter === filter.id;

        return (
          <button
            key={filter.id}
            type="button"
            disabled={disabled}
            aria-pressed={isActive}
            onClick={() => onChange(filter.id)}
            className={`rounded-lg border px-3 py-1.5 font-mono text-[11px] font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 dark:focus-visible:ring-offset-zinc-950 ${
              isActive
                ? "border-indigo-300 bg-indigo-50 text-indigo-700 dark:border-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-300"
                : "border-zinc-200 bg-white text-zinc-500 hover:border-zinc-300 hover:text-zinc-800 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-500 dark:hover:border-zinc-700 dark:hover:text-zinc-300"
            }`}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
