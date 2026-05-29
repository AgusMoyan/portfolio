import React from "react";
import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";

interface ConsoleLineProps {
  children: React.ReactNode;
  variant?: "default" | "muted" | "command" | "success" | "accent" | "warning";
  className?: string;
}

const lineVariants = {
  hidden: { opacity: 0, y: 4 },
  visible: { opacity: 1, y: 0 },
};

export default function ConsoleLine({
  children,
  variant = "default",
  className,
}: ConsoleLineProps) {
  const variantStyles = {
    default: "text-zinc-300",
    muted: "text-zinc-600",
    command: "text-zinc-50 font-semibold",
    success: "text-emerald-400",
    accent: "text-indigo-400",
    warning: "text-amber-400",
  };

  return (
    <motion.div
      variants={lineVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={twMerge(
        "font-mono text-sm leading-6 tracking-normal whitespace-pre-wrap",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </motion.div>
  );
}
