import type { ReactNode } from "react";

type ProjectTechBadgeVariant = "tech" | "tag" | "muted";

interface ProjectTechBadgeProps {
  children: ReactNode;
  variant?: ProjectTechBadgeVariant;
}

const variantClasses: Record<ProjectTechBadgeVariant, string> = {
  tech: "border-zinc-200 bg-zinc-50 text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400",
  tag: "border-indigo-200/80 bg-indigo-50/70 text-indigo-700 dark:border-indigo-900/70 dark:bg-indigo-950/30 dark:text-indigo-300",
  muted:
    "border-zinc-200/80 bg-white text-zinc-500 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-500",
};

export default function ProjectTechBadge({
  children,
  variant = "tech",
}: ProjectTechBadgeProps) {
  return (
    <span
      className={`inline-flex max-w-full items-center rounded-md border px-2 py-0.5 font-mono text-[10px] font-medium leading-5 ${variantClasses[variant]}`}
    >
      <span className="truncate">{children}</span>
    </span>
  );
}
