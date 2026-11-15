import { ImageResponse } from "next/og";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/content/site";

const size = { width: 1200, height: 630 };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

/** Una sola imagen por idioma; existe para declarar el `alt` traducido. */
export async function generateImageMetadata({
  params,
}: {
  params: { locale: string };
}) {
  // Corre como generateStaticParams (sin request): next-intl leería headers,
  // así que el alt se toma directo del JSON de mensajes del idioma.
  const locale = hasLocale(routing.locales, params.locale)
    ? params.locale
    : routing.defaultLocale;
  const messages = (await import(`../../messages/${locale}.json`)).default;
  return [
    { id: "og", alt: messages.Metadata.ogAlt, size, contentType: "image/png" },
  ];
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Hero" });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(135deg, #09090b 0%, #3b0d0d 100%)",
          color: "#f4f4f5",
          fontFamily: "sans-serif",
        }}
      >
        {/* Barra de acento a la izquierda */}
        <div style={{ width: 16, height: "100%", background: "#ef4444" }} />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
            padding: "0 80px",
          }}
        >
          <div
            style={{
              fontSize: 30,
              color: "#f87171",
              fontFamily: "monospace",
            }}
          >
            &lt;/&gt;
          </div>
          <div style={{ fontSize: 76, fontWeight: 700, marginTop: 20 }}>
            {siteConfig.name}
          </div>
          <div style={{ fontSize: 34, color: "#fca5a5", marginTop: 12 }}>
            {t("role")}
          </div>
          <div
            style={{
              fontSize: 26,
              color: "#a1a1aa",
              marginTop: 28,
              maxWidth: 880,
              lineHeight: 1.4,
            }}
          >
            {t("valueProp")}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
