import { useLocale, useTranslations } from "next-intl";
import type { Locale } from "@/i18n/routing";
import { projects } from "@/content/projects";
import { localize } from "@/content/types";
import { Section, SectionHeading } from "../Section";
import { Reveal } from "../Reveal";
import { ProjectGallery } from "../ProjectGallery";
import { ExternalLinkIcon, GitHubIcon } from "../icons";

export function Projects() {
  const t = useTranslations("Projects");
  const locale = useLocale() as Locale;

  if (projects.length === 0) return null;

  return (
    <Section id="projects" muted>
      <SectionHeading title={t("title")} subtitle={t("subtitle")} />

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.05}>
            <article className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-background transition-[transform,box-shadow,border-color] duration-200 hover:border-accent/40 hover:shadow-lg motion-safe:hover:-translate-y-1">
              <ProjectGallery
                images={project.images}
                alt={project.name}
                fit={project.imageFit}
              />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                {project.company ? (
                  <p className="mt-1 text-sm text-muted">
                    {t("atCompany", { company: project.company })}
                  </p>
                ) : null}

                <p className="mt-3 text-muted">
                  {localize(project.description, locale)}
                </p>

                <p className="mt-4 text-sm">
                  <span className="font-medium">{t("role")}:</span>{" "}
                  <span className="text-muted">
                    {localize(project.role, locale)}
                  </span>
                </p>

                {project.highlights && project.highlights.length > 0 ? (
                  <div className="mt-4">
                    <p className="text-sm font-medium">{t("highlights")}</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
                      {project.highlights.map((h, k) => (
                        <li key={k}>{localize(h, locale)}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md bg-card px-2 py-1 font-mono text-xs text-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-4 pt-2">
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                    >
                      <ExternalLinkIcon /> {t("viewDemo")}
                    </a>
                  ) : null}
                  {project.repoUrl ? (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
                    >
                      <GitHubIcon className="h-4 w-4" /> {t("viewCode")}
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
