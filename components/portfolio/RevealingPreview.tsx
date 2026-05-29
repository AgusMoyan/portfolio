import { motion } from "motion/react";
import { profile } from "../../data/profile";
import { stack } from "../../data/stack";
import { projects } from "../../data/projects";

const topTech = stack
  .flatMap((layer) => layer.items)
  .filter((t) =>
    ["React", "Next.js", "TypeScript", "React Native", "Tailwind CSS", "Supabase"].includes(t)
  );

const featuredProjects = projects.filter((p) => p.featured).slice(0, 2);
const stackLayers = stack.slice(0, 3);

export default function RevealingPreview() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex w-full flex-col px-1"
    >
      {/* Hero row: avatar + info */}
      <div className="flex flex-col sm:flex-row sm:items-start gap-5 w-full mb-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.05, duration: 0.35, ease: "easeOut" }}
          className="flex-shrink-0 w-16 h-16 rounded-full bg-panel border border-line flex items-center justify-center"
        >
          <span className="text-2xl font-bold text-tx3">
            {profile.name.charAt(0)}
          </span>
        </motion.div>

        <div className="flex-1 min-w-0">
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
            className="text-2xl font-extrabold tracking-tight text-tx1 mb-1"
          >
            {profile.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.35, ease: "easeOut" }}
            className="text-sm text-tx2"
          >
            {profile.role}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.35, ease: "easeOut" }}
            className="text-xs text-tx3 mt-0.5"
          >
            {profile.location}
          </motion.p>
        </div>

        {/* Tech badges inline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.35 }}
          className="flex flex-wrap gap-1.5 sm:self-start mt-2 sm:mt-0"
        >
          {topTech.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-panel px-2 py-0.5 text-[11px] font-medium text-tx2"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Summary */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.35, ease: "easeOut" }}
        className="text-xs leading-relaxed text-tx2 mb-6 max-w-prose"
      >
        {profile.summary}
      </motion.p>

      {/* Project cards */}
      <div className="w-full mb-6">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="text-[10px] font-semibold uppercase tracking-widest text-tx3 mb-3"
        >
          Featured Projects
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: 0.55 + i * 0.12,
                duration: 0.35,
                ease: "easeOut",
              }}
              className="rounded-lg border border-line bg-card px-4 py-3"
            >
                <p className="text-[10px] font-semibold uppercase tracking-wider text-tx3 mb-0.5">
                {project.status === "production"
                  ? "Production"
                  : project.statusLabel ?? project.status}
              </p>
                <p className="text-sm font-semibold text-tx1">
                  {project.name}
                </p>
                <p className="text-[11px] text-tx2 line-clamp-1">
                {project.type}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stack layers */}
      <div className="w-full mb-4">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.3 }}
          className="text-[10px] font-semibold uppercase tracking-widest text-tx3 mb-3"
        >
          Stack
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {stackLayers.map((layer, li) => (
            <motion.div
              key={layer.category}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 + li * 0.1, duration: 0.3 }}
            >
                <p className="text-[10px] font-medium text-tx3 mb-1.5">
                {layer.category}
              </p>
              <div className="flex flex-wrap gap-1">
                {layer.items.slice(0, 4).map((item) => (
                  <span
                    key={item}
                    className="rounded-md bg-panel px-1.5 py-0.5 text-[10px] font-medium text-tx2"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.4 }}
        className="flex items-center gap-2 text-[10px] text-tx3 pb-1"
      >
        <span className="h-px w-5 bg-line" />
        <span>scroll to explore</span>
        <span className="h-px w-5 bg-line" />
      </motion.div>
    </motion.div>
  );
}
