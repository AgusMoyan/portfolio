import { Reveal } from "./Reveal";

type SectionProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
  /** Fondo alterno para separar secciones visualmente. */
  muted?: boolean;
};

export function Section({ id, children, className, muted }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 sm:py-28 ${muted ? "bg-card" : ""} ${className ?? ""}`}
    >
      <div className="mx-auto w-full max-w-5xl px-6">{children}</div>
    </section>
  );
}

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
};

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12">
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 max-w-2xl text-lg text-muted">{subtitle}</p>
      ) : null}
    </Reveal>
  );
}
