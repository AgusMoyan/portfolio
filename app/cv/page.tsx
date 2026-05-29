import type { Metadata } from "next";
import Link from "next/link";
import CvSection from "@/components/portfolio/CvSection";

export const metadata: Metadata = {
  title: "CV — Agustín Moyano",
  description: "CV secundario de Agustín Moyano disponible para consulta e impresión.",
};

export default function CvPage() {
  return (
    <main className="min-h-dvh bg-zinc-100 px-4 py-6 text-zinc-900 print:bg-white print:p-0">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 print:max-w-none print:gap-0">
        <Link
          href="/"
          className="print:hidden inline-flex w-fit items-center rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs font-semibold text-zinc-700 shadow-sm transition hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-100"
        >
          Back to portfolio
        </Link>

        <CvSection />
      </div>
    </main>
  );
}
