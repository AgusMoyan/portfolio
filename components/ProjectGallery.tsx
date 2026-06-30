"use client";

import Image from "next/image";
import { useState } from "react";

type ProjectGalleryProps = {
  images: string[];
  alt: string;
  /** "cover" recorta a 16:9; "contain" muestra la imagen completa (capturas mobile). */
  fit?: "cover" | "contain";
};

/** Slider de capturas dentro de la card. Con 1 sola imagen no muestra controles. */
export function ProjectGallery({ images, alt, fit = "cover" }: ProjectGalleryProps) {
  const [index, setIndex] = useState(0);
  const count = images.length;

  const go = (dir: number) => setIndex((i) => (i + dir + count) % count);
  const fitClass = fit === "contain" ? "object-contain" : "object-cover";

  return (
    <div className="relative aspect-video overflow-hidden border-b border-border bg-card">
      <Image
        src={images[index]}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className={fitClass}
      />

      {count > 1 ? (
        <>
          <button
            type="button"
            aria-label="Anterior"
            onClick={() => go(-1)}
            className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur transition-colors hover:bg-black/70"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Siguiente"
            onClick={() => go(1)}
            className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur transition-colors hover:bg-black/70"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>

          <div className="absolute inset-x-0 bottom-2 flex justify-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Ir a la imagen ${i + 1}`}
                aria-current={i === index}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-4 bg-white" : "w-1.5 bg-white/60 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
