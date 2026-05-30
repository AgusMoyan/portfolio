import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://agustinmoyano.dev"),
  title: "Agustín Moyano — Full Stack Developer",
  description:
    "Portfolio interactivo de Agustín Moyano, developer web y mobile enfocado en productos reales, sistemas internos, integraciones y despliegues productivos.",
  openGraph: {
    title: "Agustín Moyano — Full Stack Developer",
    description:
      "Portfolio interactivo de Agustín Moyano, developer web y mobile enfocado en productos reales, sistemas internos, integraciones y despliegues productivos.",
    siteName: "Agustín Moyano",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agustín Moyano — Full Stack Developer",
    description:
      "Portfolio interactivo de Agustín Moyano, developer web y mobile enfocado en productos reales, sistemas internos, integraciones y despliegues productivos.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
