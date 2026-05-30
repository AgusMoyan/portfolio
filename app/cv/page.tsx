import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CvSection from "@/components/portfolio/CvSection";

export const metadata: Metadata = {
  title: "CV — Agustín Moyano",
  description: "CV secundario de Agustín Moyano disponible para consulta e impresión.",
};

export default function CvPage() {
  return (
    <main className="min-h-dvh bg-panel px-4 py-6 text-tx1 print:bg-white print:p-0">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 print:max-w-none print:gap-0">
        <Link
          href="/"
          className="print:hidden inline-flex w-fit items-center gap-2 rounded-lg border border-line bg-card px-3 py-2 text-xs font-semibold text-tx2 shadow-sm transition hover:bg-hover"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to portfolio
        </Link>

        <CvSection />
      </div>
    </main>
  );
}
