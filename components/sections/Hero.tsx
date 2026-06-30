import Image from "next/image";
import { useTranslations } from "next-intl";
import { siteConfig } from "@/content/site";
import { Reveal } from "../Reveal";

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section id="hero" className="px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
      <div className="mx-auto flex w-full max-w-5xl flex-col-reverse items-center gap-10 sm:flex-row sm:justify-between">
        <Reveal className="flex-1">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            {t("available")}
          </span>
          <p className="mt-4 font-mono text-sm text-accent">{t("role")}</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            {siteConfig.name}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            {t("valueProp")}
          </p>
          <p className="mt-4 flex items-center gap-1.5 text-sm text-muted">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {t("location")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex h-11 items-center justify-center rounded-md bg-accent px-6 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              {t("ctaProjects")}
            </a>
            <a
              href="#contact"
              className="inline-flex h-11 items-center justify-center rounded-md border border-border px-6 text-sm font-medium transition-colors hover:bg-card"
            >
              {t("ctaContact")}
            </a>
          </div>
        </Reveal>

        <Reveal className="shrink-0">
          <Image
            src="/foto-perfil.png"
            alt={t("photoAlt")}
            width={224}
            height={224}
            priority
            className="h-40 w-40 rounded-full border border-border object-cover sm:h-56 sm:w-56"
          />
        </Reveal>
      </div>
    </section>
  );
}
