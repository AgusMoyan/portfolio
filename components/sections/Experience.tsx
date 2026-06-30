import { useLocale, useTranslations } from "next-intl";
import type { Locale } from "@/i18n/routing";
import { experience } from "@/content/experience";
import { localize } from "@/content/types";
import { Section, SectionHeading } from "../Section";
import { Reveal } from "../Reveal";

export function Experience() {
  const t = useTranslations("Experience");
  const locale = useLocale() as Locale;

  if (experience.length === 0) return null;

  return (
    <Section id="experience">
      <SectionHeading title={t("title")} subtitle={t("subtitle")} />

      <ol className="relative border-l border-border">
        {experience.map((item, i) => (
          <li key={item.company} className="ml-6 pb-10 last:pb-0">
            <span className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-background bg-accent" />
            <Reveal delay={i * 0.05}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-lg font-semibold">
                  {localize(item.role, locale)}{" "}
                  <span className="text-muted">· {item.company}</span>
                </h3>
                <span className="font-mono text-sm text-muted">
                  {localize(item.period, locale)}
                </span>
              </div>

              {item.location || item.employmentType ? (
                <p className="mt-1 text-sm text-muted">
                  {[
                    item.location,
                    item.employmentType
                      ? localize(item.employmentType, locale)
                      : null,
                  ]
                    .filter(Boolean)
                    .join(" · ")}
                </p>
              ) : null}

              {item.summary ? (
                <p className="mt-3 text-muted">{localize(item.summary, locale)}</p>
              ) : null}

              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-muted">
                {item.achievements.map((a, j) => (
                  <li key={j}>{localize(a, locale)}</li>
                ))}
              </ul>

              {item.relatedProjects && item.relatedProjects.length > 0 ? (
                <p className="mt-3 text-sm text-muted">
                  {t("relatedProjects", {
                    projects: item.relatedProjects.join(", "),
                  })}
                </p>
              ) : null}
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
