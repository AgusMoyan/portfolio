"use client";

import { useMemo } from "react";
import { motion } from "motion/react";
import type { ReactNode } from "react";
import Link from "next/link";
import { Mail, Code2, FileText, Globe, MessageCircle } from "lucide-react";
import { contact } from "../../data/contact";
import {
  sectionContainerVariants,
  sectionExit,
  sectionItemVariants,
} from "./animation";

interface ContactSectionProps {
  searchQuery?: string;
}

const iconMap: Record<string, ReactNode> = {
  Email: <Mail className="h-4 w-4" />,
  GitHub: <Code2 className="h-4 w-4" />,
  LinkedIn: <Globe className="h-4 w-4" />,
  WhatsApp: <MessageCircle className="h-4 w-4" />,
};

export default function ContactSection({ searchQuery = "" }: ContactSectionProps) {
  const channels = useMemo(() => {
    const base: {
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
      base.push({
        label: "WhatsApp",
        value: contact.whatsapp,
        href: `https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`,
        external: true,
      });
    }

    if (!searchQuery) return base;
    const q = searchQuery.toLowerCase();
    return base.filter(
      (ch) =>
        ch.label.toLowerCase().includes(q) ||
        ch.value.toLowerCase().includes(q),
    );
  }, [searchQuery]);

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

      {searchQuery && (
        <motion.p
          variants={sectionItemVariants}
          className="mb-4 text-[11px] text-tx3"
        >
          {channels.length} channel{channels.length !== 1 ? "s" : ""} matching &ldquo;{searchQuery}&rdquo;
        </motion.p>
      )}

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

      {channels.length === 0 && searchQuery && (
        <motion.p
          variants={sectionItemVariants}
          className="mt-8 text-[11px] text-tx3"
        >
          No channels match &ldquo;{searchQuery}&rdquo;
        </motion.p>
      )}

      <motion.div
        variants={sectionItemVariants}
        className="mt-5 w-full rounded-lg border border-line bg-card px-4 py-3.5 text-left shadow-sm"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-tx1">
              CV
            </p>
            <p className="mt-0.5 text-[11px] leading-relaxed text-tx2">
              Versión secundaria disponible para consulta.
            </p>
          </div>

          <Link
            href="/cv"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-line bg-card px-3 py-1.5 text-xs font-semibold text-tx1 shadow-sm transition hover:bg-panel focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-card"
          >
            <FileText className="h-3.5 w-3.5" />
            View CV
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
