import { useLocale, useTranslations } from "next-intl";
import type { Locale } from "@/i18n/routing";
import { skillGroups, spokenLanguages } from "@/content/skills";
import { localize } from "@/content/types";
import { Section, SectionHeading } from "../Section";
import { Reveal } from "../Reveal";

export function Skills() {
  const t = useTranslations("Skills");
  const locale = useLocale() as Locale;

  return (
    <Section id="skills">
      <SectionHeading title={t("title")} subtitle={t("subtitle")} />

      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.id} delay={i * 0.05}>
            <div className="h-full rounded-xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold">
                {localize(group.title, locale)}
              </h3>
              <p className="mt-1.5 text-sm text-muted">
                {localize(group.description, locale)}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-1.5 text-sm"
                  >
                    {skill.icon ? (
                      <span className="flex h-5 w-5 items-center justify-center rounded bg-white">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={`https://cdn.simpleicons.org/${skill.icon}`}
                          alt=""
                          width={16}
                          height={16}
                          loading="lazy"
                        />
                      </span>
                    ) : null}
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">
          {t("languagesTitle")}
        </h3>
        <ul className="flex flex-wrap gap-3">
          {spokenLanguages.map((lang) => (
            <li
              key={lang.name.en}
              className="rounded-lg border border-border px-4 py-2 text-sm"
            >
              <span className="font-medium">{localize(lang.name, locale)}</span>
              <span className="text-muted"> · {localize(lang.level, locale)}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
