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
      className="inline-flex rounded-lg border border-line bg-panel p-0.5 shadow-sm print:hidden"
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
            className={`rounded-md px-3 py-1.5 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-1 focus-visible:ring-offset-panel ${
              isActive
                ? "bg-card text-tx1 shadow-sm"
                : "text-tx3 hover:bg-hover hover:text-tx2"
            }`}
          >
            {language.label}
          </button>
        );
      })}
    </div>
  );
}
