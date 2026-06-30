"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { siteConfig } from "@/content/site";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { ThemeToggle } from "./ThemeToggle";

const SECTIONS = [
  "about",
  "skills",
  "projects",
  "experience",
  "freelance",
  "contact",
] as const;

export function Navbar() {
  const t = useTranslations("Nav");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("hero");

  // Scroll-spy: marca la sección que está cerca del centro del viewport.
  useEffect(() => {
    const ids = ["hero", ...SECTIONS];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  // Cierra el menú mobile con Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav
        className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6"
        aria-label="Principal"
      >
        <a
          href="#hero"
          className="font-mono text-sm font-semibold tracking-tight"
        >
          <span className="text-accent">&lt;/&gt;</span> {siteConfig.name}
        </a>

        {/* Links de escritorio */}
        <ul className="hidden items-center gap-6 md:flex">
          {SECTIONS.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? "true" : undefined}
                className={`text-sm transition-colors hover:text-foreground ${
                  active === id ? "text-foreground" : "text-muted"
                }`}
              >
                {t(id)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LocaleSwitcher />
          <ThemeToggle />
          {/* Botón de menú mobile */}
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border md:hidden"
            aria-label={open ? t("closeMenu") : t("openMenu")}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Menú mobile desplegable */}
      {open ? (
        <ul className="border-t border-border bg-background px-6 py-3 md:hidden">
          {SECTIONS.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm text-muted transition-colors hover:text-foreground"
              >
                {t(id)}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  );
}
