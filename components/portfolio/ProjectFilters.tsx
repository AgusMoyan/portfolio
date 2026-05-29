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
            className={`rounded-lg border px-3 py-1.5 font-mono text-[11px] font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 ${
              isActive
                ? "border-indigo-300 bg-indigo-50 text-indigo-700"
                : "border-zinc-200 bg-white text-zinc-500 hover:border-zinc-300 hover:text-zinc-800"
            }`}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
