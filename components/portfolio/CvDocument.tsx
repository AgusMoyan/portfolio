import type { ReactNode } from "react";
import type { CvContact, CvData, CvProjectItem } from "../../types/cv";

interface CvDocumentProps {
  cv: CvData;
}

const sectionLabels = {
  es: {
    profile: "Perfil profesional",
    experience: "Experiencia laboral",
    projects: "Proyectos seleccionados",
    skills: "Skills tecnicos",
    education: "Formacion",
    languages: "Idiomas",
    technologies: "Tecnologias",
  },
  en: {
    profile: "Professional Profile",
    experience: "Work Experience",
    projects: "Selected Projects",
    skills: "Technical Skills",
    education: "Education & Training",
    languages: "Languages",
    technologies: "Technologies",
  },
};

function externalHref(value: string) {
  return value.startsWith("http") ? value : `https://${value}`;
}

function ContactLink({ label, value }: { label: string; value?: string }) {
  if (!value) return null;

  if (label === "email") {
    return (
      <a className="hover:text-zinc-950" href={`mailto:${value}`}>
        {value}
      </a>
    );
  }

  if (label === "phone") {
    return (
      <a className="hover:text-zinc-950" href={`tel:${value.replace(/\s/g, "")}`}>
        {value}
      </a>
    );
  }

  if (label === "linkedin" || label === "github" || label === "portfolio") {
    return (
      <a
        className="hover:text-zinc-950"
        href={externalHref(value)}
        target="_blank"
        rel="noopener noreferrer"
      >
        {value}
      </a>
    );
  }

  return <span>{value}</span>;
}

function ContactList({ contact }: { contact: CvContact }) {
  const entries = [
    ["location", contact.location],
    ["workMode", contact.workMode],
    ["email", contact.email],
    ["linkedin", contact.linkedin],
    ["phone", contact.phone],
    ["portfolio", contact.portfolio],
    ["github", contact.github],
  ] as const;

  return (
    <div className="mt-4 grid gap-1.5 text-xs text-zinc-600 sm:grid-cols-2 print:grid-cols-2">
      {entries.map(([label, value]) => (
        <div key={label} className="min-w-0 break-words">
          <ContactLink label={label} value={value} />
        </div>
      ))}
    </div>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h3 className="mb-3 border-b border-zinc-200 pb-1.5 text-xs font-bold uppercase tracking-[0.16em] text-zinc-900 print:border-zinc-300">
      {children}
    </h3>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5 pl-4 text-sm leading-relaxed text-zinc-700 marker:text-zinc-400">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function CvBadge({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md border border-zinc-200/80 bg-white px-2 py-0.5 text-[10px] font-medium text-zinc-700 print:border-zinc-300">
      {children}
    </span>
  );
}

function TechnologyBadges({ project }: { project: CvProjectItem }) {
  return (
    <div className="mt-3 flex flex-wrap gap-1.5">
      {project.technologies.map((technology) => (
        <CvBadge key={technology}>{technology}</CvBadge>
      ))}
    </div>
  );
}

export default function CvDocument({ cv }: CvDocumentProps) {
  const labels = sectionLabels[cv.language];

  return (
    <article className="cv-print-document mx-auto w-full max-w-4xl rounded-2xl border border-zinc-200 bg-white p-5 text-left text-zinc-900 shadow-sm sm:p-8 print:max-w-none print:rounded-none print:border-none print:p-0 print:shadow-none">
      <header className="break-inside-avoid border-b border-zinc-200 pb-5 print:border-zinc-300">
        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-4xl">
          {cv.name}
        </h1>
        <p className="mt-1 text-base font-medium text-zinc-700">{cv.role}</p>
        <ContactList contact={cv.contact} />
      </header>

      <div className="mt-6 space-y-7">
        <section className="break-inside-avoid">
          <SectionTitle>{labels.profile}</SectionTitle>
          <p className="text-sm leading-relaxed text-zinc-700">{cv.profile}</p>
        </section>

        <section>
          <SectionTitle>{labels.experience}</SectionTitle>
          <div className="space-y-5">
            {cv.workExperience.map((experience) => (
              <div key={`${experience.company}-${experience.period}`} className="break-inside-avoid">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-zinc-950">{experience.role}</h4>
                    <p className="text-xs font-medium text-zinc-600">
                      {experience.company}
                      {experience.location ? ` · ${experience.location}` : ""}
                      {experience.mode ? ` · ${experience.mode}` : ""}
                    </p>
                  </div>
                  <p className="text-xs font-semibold text-zinc-500">{experience.period}</p>
                </div>
                <div className="mt-2">
                  <BulletList items={experience.bullets} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionTitle>{labels.projects}</SectionTitle>
          <div className="space-y-5">
            {cv.selectedProjects.map((project) => (
              <div key={project.name} className="break-inside-avoid rounded-xl border border-zinc-200 p-4 print:border-zinc-300">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-zinc-950">{project.name}</h4>
                    <p className="text-xs font-medium text-zinc-600">{project.type}</p>
                  </div>
                  {project.url && (
                    <a
                      className="break-all text-xs font-medium text-zinc-500 hover:text-zinc-950"
                      href={externalHref(project.url)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.url}
                    </a>
                  )}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-zinc-700">{project.description}</p>
                <div className="mt-2">
                  <BulletList items={project.bullets} />
                </div>
                <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.14em] text-zinc-500">
                  {labels.technologies}
                </p>
                <TechnologyBadges project={project} />
              </div>
            ))}
          </div>
        </section>

        <section className="break-inside-avoid">
          <SectionTitle>{labels.skills}</SectionTitle>
          <div className="grid gap-3 sm:grid-cols-2">
            {cv.technicalSkills.map((skillGroup) => (
              <div key={skillGroup.title} className="rounded-xl border border-zinc-200 p-3 print:border-zinc-300">
                <h4 className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-zinc-600">
                  {skillGroup.title}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {skillGroup.items.map((skill) => (
                    <CvBadge key={skill}>{skill}</CvBadge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="break-inside-avoid">
          <SectionTitle>{labels.education}</SectionTitle>
          {cv.education.map((education) => (
            <div key={education.title}>
              <h4 className="text-sm font-bold text-zinc-950">{education.title}</h4>
              <p className="mt-1 text-sm leading-relaxed text-zinc-700">{education.description}</p>
            </div>
          ))}
        </section>

        <section className="break-inside-avoid">
          <SectionTitle>{labels.languages}</SectionTitle>
          <div className="flex flex-wrap gap-2">
            {cv.languages.map((language) => (
              <span
                key={`${language.language}-${language.level}`}
                className="rounded-md border border-zinc-200/80 bg-white px-2.5 py-1 text-xs font-medium text-zinc-700 print:border-zinc-300"
              >
                {language.language}: {language.level}
              </span>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
