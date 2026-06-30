import { useLocale, useTranslations } from "next-intl";
import type { Locale } from "@/i18n/routing";
import {
  aboutIntro,
  aboutLead,
  contributionAreas,
  pillars,
} from "@/content/profile";
import { localize } from "@/content/types";
import { Section, SectionHeading } from "../Section";
import { Reveal } from "../Reveal";

export function About() {
  const t = useTranslations("About");
  const locale = useLocale() as Locale;

  return (
    <Section id="about" muted>
      <SectionHeading title={t("title")} />

      <Reveal>
        <p className="font-mono text-sm text-accent">{t("eyebrow")}</p>
        <p className="mt-3 max-w-3xl text-2xl font-medium tracking-tight sm:text-3xl">
          {localize(aboutIntro, locale)}
        </p>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">
          {localize(aboutLead, locale)}
        </p>
      </Reveal>

      {/* Pilares / forma de trabajo */}
      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {pillars.map((pillar, i) => (
          <Reveal key={pillar.number} delay={i * 0.05}>
            <div className="h-full rounded-xl border border-border bg-background p-6">
              <span className="font-mono text-sm text-accent">
                {pillar.number}
              </span>
              <h3 className="mt-2 text-lg font-semibold">
                {localize(pillar.title, locale)}
              </h3>
              <p className="mt-2 text-muted">
                {localize(pillar.description, locale)}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Áreas de contribución */}
      <Reveal className="mt-12">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">
          {t("contributionsTitle")}
        </h3>
        <ul className="flex flex-wrap gap-2">
          {contributionAreas.map((area) => (
            <li
              key={area.en}
              className="rounded-full border border-border px-4 py-1.5 text-sm"
            >
              {localize(area, locale)}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal className="mt-10">
        <p className="text-base text-muted">{t("freelanceNote")}</p>
      </Reveal>
    </Section>
  );
}
