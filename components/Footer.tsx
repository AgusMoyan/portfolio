import { useTranslations } from "next-intl";
import { siteConfig, whatsappUrl } from "@/content/site";
import { EmailLink } from "./EmailLink";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  WhatsAppIcon,
} from "./icons";

export function Footer() {
  const t = useTranslations("Footer");
  const year = new Date().getFullYear();

  // El email va aparte (EmailLink) para no exponerlo en el HTML servido.
  const socials = [
    { href: siteConfig.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
    { href: siteConfig.github, label: "GitHub", Icon: GitHubIcon },
    { href: whatsappUrl, label: "WhatsApp", Icon: WhatsAppIcon },
  ];

  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="text-center text-sm text-muted sm:text-left">
          <p>
            © {year} {siteConfig.name}. {t("rights")}
          </p>
          <p className="mt-1">
            {t("builtWith")}{" "}
            <a
              href={siteConfig.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 transition-colors hover:text-accent"
            >
              {t("viewSource")}
            </a>
          </p>
        </div>
        <ul className="flex items-center gap-4">
          <li>
            <EmailLink
              aria-label="Email"
              className="text-muted transition-colors hover:text-foreground"
            >
              <MailIcon />
            </EmailLink>
          </li>
          {socials.map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="text-muted transition-colors hover:text-foreground"
              >
                <Icon />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
