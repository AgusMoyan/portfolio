import { motion } from "motion/react";
import type { ReactNode } from "react";
import { Mail, Code2, Globe, MessageCircle } from "lucide-react";
import { contact } from "../../data/contact";
import {
  sectionContainerVariants,
  sectionExit,
  sectionItemVariants,
} from "./animation";

const iconMap: Record<string, ReactNode> = {
  Email: <Mail className="h-4 w-4" />,
  GitHub: <Code2 className="h-4 w-4" />,
  LinkedIn: <Globe className="h-4 w-4" />,
  WhatsApp: <MessageCircle className="h-4 w-4" />,
};

const channels: {
  label: string;
  value: string;
  href: string;
  external?: boolean;
}[] = [
  { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  {
    label: "GitHub",
    value: contact.github,
    href: `https://${contact.github}`,
    external: true,
  },
  {
    label: "LinkedIn",
    value: contact.linkedin,
    href: `https://${contact.linkedin}`,
    external: true,
  },
];

if (contact.whatsapp) {
  channels.push({
    label: "WhatsApp",
    value: contact.whatsapp,
    href: `https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`,
    external: true,
  });
}

export default function ContactSection() {
  return (
    <motion.div
      variants={sectionContainerVariants}
      initial="hidden"
      animate="show"
      exit={sectionExit}
      className="flex w-full max-w-sm flex-col items-center text-center"
    >
      <motion.span
        variants={sectionItemVariants}
        className="mb-4 rounded-full border border-zinc-200 bg-white px-3 py-1 font-mono text-xs text-zinc-500 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400"
      >
        contact.config
      </motion.span>

      <motion.h2
        variants={sectionItemVariants}
        className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mb-7"
      >
        Contacto
      </motion.h2>

      <div className="flex w-full flex-col gap-3">
        {channels.map((channel) => (
          <motion.a
            key={channel.label}
            variants={sectionItemVariants}
            href={channel.href}
            target={channel.external ? "_blank" : undefined}
            rel={channel.external ? "noopener noreferrer" : undefined}
            aria-label={`Abrir ${channel.label}: ${channel.value}`}
            className="flex items-center gap-4 rounded-xl border border-zinc-200 bg-white px-5 py-3.5 text-left shadow-sm transition hover:bg-zinc-50 hover:border-zinc-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-zinc-800 dark:bg-zinc-950 dark:focus-visible:ring-offset-zinc-950 dark:hover:bg-zinc-900 dark:hover:border-zinc-700"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-100 text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400">
              {iconMap[channel.label]}
            </span>
            <div className="flex flex-col">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                {channel.label}
              </span>
              <span className="break-all text-sm font-medium text-zinc-800 dark:text-zinc-200 font-mono">
                {channel.value}
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
