import { motion } from "motion/react";
import type { ReactNode } from "react";
import Link from "next/link";
import { Mail, Code2, Download, FileText, Globe, MessageCircle } from "lucide-react";
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
      className="flex w-full max-w-lg mx-auto flex-col items-center text-center"
    >
      <motion.span
        variants={sectionItemVariants}
        className="mb-4 text-xs text-tx2"
      >
        contact.config
      </motion.span>

      <motion.h2
        variants={sectionItemVariants}
        className="text-3xl font-extrabold tracking-tight text-tx1 mb-7"
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
            className="flex items-center gap-4 rounded-xl px-4 py-3.5 text-left transition hover:bg-panel/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-card"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-panel text-tx2">
              {iconMap[channel.label]}
            </span>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-tx3">
                {channel.label}
              </span>
              <span className="break-all text-sm font-medium text-tx1">
                {channel.value}
              </span>
            </div>
          </motion.a>
        ))}
      </div>

      <motion.div
        variants={sectionItemVariants}
        className="mt-5 w-full rounded-lg border border-line bg-card px-4 py-3.5 text-left shadow-sm"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold text-tx1">
              CV
            </p>
            <p className="mt-0.5 text-[11px] leading-relaxed text-tx2">
              Recurso secundario para recruiters, fuera del recorrido principal.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Link
              href="/cv"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-line bg-card px-3 py-1.5 text-xs font-semibold text-tx1 shadow-sm transition hover:bg-panel focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-card"
            >
              <FileText className="h-3.5 w-3.5" />
              View CV
            </Link>

            {contact.cv.available ? (
              <a
                href={contact.cv.path}
                download
                className="inline-flex items-center justify-center gap-2 rounded-md border border-line bg-card px-3 py-1.5 text-xs font-semibold text-tx1 shadow-sm transition hover:bg-panel focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-card"
              >
                <Download className="h-3.5 w-3.5" />
                Download CV
              </a>
            ) : (
              <button
                type="button"
                disabled
                aria-disabled="true"
                className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-md border border-line bg-panel px-3 py-1.5 text-xs font-semibold text-tx3"
              >
                <Download className="h-3.5 w-3.5" />
                Download
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
