import { useLocale, useTranslations } from "next-intl";
import type { Locale } from "@/i18n/routing";
import {
  freelanceServices,
  freelanceTools,
  testimonials,
} from "@/content/freelance";
import { localize } from "@/content/types";
import { Section, SectionHeading } from "../Section";
import { Reveal } from "../Reveal";
import { serviceIcons } from "../icons";

export function Freelance() {
  const t = useTranslations("Freelance");
  const locale = useLocale() as Locale;

  return (
    <Section id="freelance" muted>
      <SectionHeading title={t("title")} subtitle={t("subtitle")} />

      {/* Servicios */}
      <ul className="grid gap-5 sm:grid-cols-3">
        {freelanceServices.map((service, i) => {
          const Icon = serviceIcons[service.icon as keyof typeof serviceIcons];
          return (
            <Reveal key={service.title.en} delay={i * 0.05}>
              <li className="h-full rounded-xl border border-border bg-background p-5">
                {Icon ? <Icon className="text-accent" /> : null}
                <h3 className="mt-3 font-semibold">
                  {localize(service.title, locale)}
                </h3>
                <p className="mt-1.5 text-sm text-muted">
                  {localize(service.description, locale)}
                </p>
              </li>
            </Reveal>
          );
        })}
      </ul>

      {/* Herramientas del rubro */}
      {freelanceTools.length > 0 ? (
        <Reveal className="mt-8">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted">
            {t("toolsTitle")}
          </h3>
          <ul className="flex flex-wrap gap-2">
            {freelanceTools.map((tool) => (
              <li
                key={tool.name}
                className="rounded-md border border-border px-3 py-1 text-sm text-muted"
              >
                {tool.name}
              </li>
            ))}
          </ul>
        </Reveal>
      ) : null}

      {/* Testimonios — la sub-sección se oculta sola si no hay */}
      {testimonials.length > 0 ? (
        <Reveal className="mt-10">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">
            {t("testimonialsTitle")}
          </h3>
          <div className="grid gap-5 sm:grid-cols-2">
            {testimonials.map((item, i) => (
              <figure
                key={i}
                className="rounded-xl border border-border bg-background p-5"
              >
                <blockquote className="text-foreground">
                  “{localize(item.quote, locale)}”
                </blockquote>
                <figcaption className="mt-3 text-sm text-muted">
                  <span className="font-medium text-foreground">
                    {item.author}
                  </span>{" "}
                  · {localize(item.context, locale)}
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      ) : null}
    </Section>
  );
}
