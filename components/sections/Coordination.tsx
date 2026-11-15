import { useLocale, useTranslations } from "next-intl";
import type { Locale } from "@/i18n/routing";
import { coordinationBlocks } from "@/content/coordination";
import { localize } from "@/content/types";
import { Section, SectionHeading } from "../Section";
import { Reveal } from "../Reveal";

export function Coordination() {
  const t = useTranslations("Coordination");
  const locale = useLocale() as Locale;

  if (coordinationBlocks.length === 0) return null;

  return (
    <Section id="coordination" muted>
      <SectionHeading title={t("title")} subtitle={t("subtitle")} />

      <div className="grid gap-5 md:grid-cols-2">
        {coordinationBlocks.map((block, i) => (
          <Reveal key={block.id} delay={i * 0.05}>
            <div className="h-full rounded-xl border border-border bg-background p-6">
              <h3 className="text-lg font-semibold">
                {localize(block.title, locale)}
              </h3>

              {block.flow ? (
                <div className="mt-4">
                  <p
                    id={`${block.id}-flow`}
                    className="text-sm font-medium"
                  >
                    {localize(block.flow.label, locale)}
                  </p>
                  <ol
                    aria-labelledby={`${block.id}-flow`}
                    className="mt-2 flex flex-wrap items-center gap-x-1.5 gap-y-2 text-xs"
                  >
                    {block.flow.steps.map((step, k) => (
                      <li key={step.en} className="flex items-center gap-1.5">
                        {k > 0 ? (
                          <span aria-hidden="true" className="text-muted">
                            →
                          </span>
                        ) : null}
                        <span className="rounded-md bg-card px-2 py-1 font-mono text-muted">
                          {localize(step, locale)}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              ) : null}

              {block.lead ? (
                <p className="mt-3 text-sm font-medium">
                  {localize(block.lead, locale)}
                </p>
              ) : null}

              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-muted">
                {block.items.map((item, k) => (
                  <li key={k}>{localize(item, locale)}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
