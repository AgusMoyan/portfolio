import { notFound } from "next/navigation";

// Captura cualquier ruta no existente bajo /[locale] y la deriva al
// boundary de not-found.tsx (que renderiza el 404 localizado con el layout).
export default function CatchAllPage() {
  notFound();
}
