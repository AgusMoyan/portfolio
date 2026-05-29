"use client";

import type { CvLanguage } from "../../types/cv";

interface CvLanguageToggleProps {
  activeLanguage: CvLanguage;
  onChange: (language: CvLanguage) => void;
}

const languages: { value: CvLanguage; label: string; ariaLabel: string }[] = [
  { value: "es", label: "ES", ariaLabel: "Mostrar CV en espanol" },
  { value: "en", label: "EN", ariaLabel: "Show CV in English" },
];

export default function CvLanguageToggle({
  activeLanguage,
  onChange,
}: CvLanguageToggleProps) {
  return (
    <div
      className="inline-flex rounded-xl border border-zinc-200 bg-white p-1 shadow-sm print:hidden"
      role="group"
      aria-label="Seleccionar idioma del CV"
    >
      {languages.map((language) => {
        const isActive = activeLanguage === language.value;

        return (
          <button
            key={language.value}
            type="button"
            aria-label={language.ariaLabel}
            aria-pressed={isActive}
            onClick={() => onChange(language.value)}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
               isActive
                 ? "bg-white text-zinc-900 shadow-sm"
                 : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-700"
            }`}
          >
            {language.label}
          </button>
        );
      })}
    </div>
  );
}
