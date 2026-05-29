import type { ReactNode } from "react";

type ProjectTechBadgeVariant = "tech" | "tag" | "muted";

interface ProjectTechBadgeProps {
  children: ReactNode;
  variant?: ProjectTechBadgeVariant;
}

const variantClasses: Record<ProjectTechBadgeVariant, string> = {
  tech: "border-line bg-card text-tx1",
  tag: "border-accent/30 bg-accent/8 text-accent",
  muted: "border-line bg-panel text-tx2",
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
