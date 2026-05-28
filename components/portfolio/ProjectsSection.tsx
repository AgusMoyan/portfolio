"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { projectFilters, projects } from "../../data/projects";
import type { Project, ProjectFilterId, ProjectId } from "../../types/projects";
import {
  projectContainerVariants,
  projectItemVariants,
  sectionExit,
} from "./animation";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";
import ProjectFilters from "./ProjectFilters";

interface ProjectsSectionProps {
  consoleBusy?: boolean;
  onProjectSelect?: (project: Project) => void;
  onProjectFilter?: (filter: ProjectFilterId, resultCount: number) => void;
}

function getDefaultProjectId() {
  return projects.find((project) => project.featured)?.id ?? projects[0]?.id ?? "";
}

function getFilteredProjects(filterId: ProjectFilterId) {
  const filter = projectFilters.find((item) => item.id === filterId);

  if (!filter || filter.match === "all") {
    return projects;
  }

  if (filter.match === "platform") {
    return projects.filter((project) => project.platform.includes(filter.value));
  }

  if (filter.match === "status") {
    return projects.filter((project) => filter.values.includes(project.status));
  }

  return projects.filter((project) => project.tags.includes(filter.value));
}

export default function ProjectsSection({
  consoleBusy = false,
  onProjectSelect,
  onProjectFilter,
}: ProjectsSectionProps) {
  const [selectedProjectId, setSelectedProjectId] = useState<ProjectId | "">(
    getDefaultProjectId
  );
  const [activeFilter, setActiveFilter] = useState<ProjectFilterId>("all");

  const filteredProjects = getFilteredProjects(activeFilter);
  const selectedProject =
    filteredProjects.find((project) => project.id === selectedProjectId) ??
    filteredProjects[0] ??
    projects[0];

  function handleFilterChange(nextFilter: ProjectFilterId) {
    if (consoleBusy || nextFilter === activeFilter) {
      return;
    }

    const nextProjects = getFilteredProjects(nextFilter);
    const firstProject = nextProjects[0];

    setActiveFilter(nextFilter);

    if (
      firstProject &&
      !nextProjects.some((project) => project.id === selectedProjectId)
    ) {
      setSelectedProjectId(firstProject.id);
    }

    onProjectFilter?.(nextFilter, nextProjects.length);
  }

  function handleProjectSelect(project: Project) {
    if (consoleBusy) {
      return;
    }

    setSelectedProjectId(project.id);
    onProjectSelect?.(project);
  }

  return (
    <motion.section
      variants={projectContainerVariants}
      initial="hidden"
      animate="show"
      exit={sectionExit}
      className="flex w-full flex-col gap-6 text-left"
      aria-label="Project explorer"
    >
      <motion.header variants={projectItemVariants} className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="rounded-full border border-zinc-200 bg-white px-3 py-1 font-mono text-xs text-zinc-500 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400">
            projects.json
          </span>
          <span className="font-mono text-[11px] text-zinc-400 dark:text-zinc-600">
            {filteredProjects.length}/{projects.length} deployments indexed
          </span>
        </div>

        <div className="space-y-1">
          <h2 className="text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
            Project Explorer
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
            Select a project to inspect scope, role and shipped work.
          </p>
        </div>
      </motion.header>

      <motion.div variants={projectItemVariants}>
        <ProjectFilters
          activeFilter={activeFilter}
          disabled={consoleBusy}
          onChange={handleFilterChange}
        />
      </motion.div>

      <div className="grid w-full gap-5 lg:grid-cols-[minmax(210px,0.68fr)_minmax(0,1.32fr)]">
        <motion.div
          variants={projectItemVariants}
          className="custom-scrollbar-light min-w-0 space-y-3 lg:max-h-[calc(100svh-230px)] lg:overflow-y-auto lg:pr-1"
        >
          <AnimatePresence initial={false} mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                <ProjectCard
                  project={project}
                  isActive={selectedProject?.id === project.id}
                  disabled={consoleBusy}
                  onSelect={handleProjectSelect}
                />
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <div className="rounded-2xl border border-dashed border-zinc-200 bg-white/70 p-5 text-sm text-zinc-500 dark:border-zinc-800 dark:bg-zinc-950/70 dark:text-zinc-400">
              No projects match this filter yet.
            </div>
          )}
        </motion.div>

        <motion.div variants={projectItemVariants} className="min-w-0">
          <AnimatePresence mode="wait">
            {selectedProject && (
              <ProjectDetail key={selectedProject.id} project={selectedProject} />
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
}
