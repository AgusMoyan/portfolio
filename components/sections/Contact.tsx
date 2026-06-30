import { useLocale, useTranslations } from "next-intl";
import type { Locale } from "@/i18n/routing";
import { cvPath, siteConfig, whatsappUrl } from "@/content/site";
import { Section, SectionHeading } from "../Section";
import { Reveal } from "../Reveal";
import { EmailLink } from "../EmailLink";
import {
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  WhatsAppIcon,
} from "../icons";

export function Contact() {
  const t = useTranslations("Contact");
  const locale = useLocale() as Locale;

  return (
    <Section id="contact">
      <SectionHeading title={t("title")} subtitle={t("subtitle")} />

      <Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Email (obfuscado, ver EmailLink) */}
          <div className="flex items-center gap-3 rounded-xl border border-border p-4">
            <MailIcon className="shrink-0 text-accent" />
            <div className="min-w-0">
              <p className="text-sm font-medium">{t("emailLabel")}</p>
              <EmailLink
                fallback={t("emailLabel")}
                className="block truncate text-sm text-muted hover:text-accent"
              />
            </div>
          </div>

          <ContactCard
            href={siteConfig.linkedin}
            icon={<LinkedInIcon className="shrink-0 text-accent" />}
            label={t("linkedinLabel")}
            value={siteConfig.linkedinHandle}
          />
          <ContactCard
            href={siteConfig.github}
            icon={<GitHubIcon className="shrink-0 text-accent" />}
            label={t("githubLabel")}
            value={siteConfig.githubHandle}
          />
          <ContactCard
            href={whatsappUrl}
            icon={<WhatsAppIcon className="shrink-0 text-accent" />}
            label={t("whatsappLabel")}
            value="wa.me"
          />
        </div>

        {/* CV discreto — link secundario; sirve el PDF del idioma activo */}
        <div className="mt-6">
          <a
            href={cvPath(locale)}
            download
            className="inline-flex items-center gap-1.5 text-sm text-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
          >
            <DownloadIcon className="h-4 w-4" /> {t("downloadCv")}
          </a>
        </div>
      </Reveal>
    </Section>
  );
}

function ContactCard({
  href,
  icon,
  label,
  value,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 rounded-xl border border-border p-4 transition-colors hover:bg-card"
    >
      {icon}
      <div className="min-w-0">
        <p className="text-sm font-medium">{label}</p>
        <p className="truncate text-sm text-muted">{value}</p>
      </div>
    </a>
  );
}
