import { motion } from "motion/react";
import { profile } from "../../data/profile";
import { stack } from "../../data/stack";

const topTech = stack
  .flatMap((layer) => layer.items)
  .filter((t) =>
    ["React", "Next.js", "TypeScript", "React Native", "Tailwind CSS", "Supabase"].includes(t)
  );

export default function GeneratingPreview() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex w-full flex-col px-1"
    >
      {/* Badge */}
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.05 }}
        className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-emerald-200/60 bg-emerald-50/60 px-2.5 py-0.5 text-[10px] font-medium text-emerald-600 self-start"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        Generating from profile data
      </motion.span>

      {/* Profile header */}
      <div className="flex flex-col sm:flex-row sm:items-start gap-5 w-full">
        {/* Avatar placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.35, ease: "easeOut" }}
          className="flex-shrink-0 w-14 h-14 rounded-full bg-zinc-100 border border-zinc-200/80 flex items-center justify-center"
        >
          <span className="text-lg font-bold text-zinc-400">
            {profile.name.charAt(0)}
          </span>
        </motion.div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2, ease: "easeOut" }}
            className="text-2xl font-extrabold tracking-tight text-zinc-900 mb-1"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.35, ease: "easeOut" }}
            className="text-sm text-zinc-500 mb-0.5"
          >
            {profile.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.45, ease: "easeOut" }}
            className="text-xs text-zinc-400"
          >
            {profile.location}
          </motion.p>
        </div>
      </div>

      {/* Summary */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.6, ease: "easeOut" }}
        className="mt-4 max-w-prose text-xs leading-relaxed text-zinc-500"
      >
        {profile.summary}
      </motion.p>

      {/* Tech badges */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.35 }}
        className="mt-5 flex flex-wrap gap-1.5"
      >
        {topTech.map((tag, i) => (
          <motion.span
            key={tag}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.85 + i * 0.05, duration: 0.2 }}
            className="rounded-md bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-600"
          >
            {tag}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}
