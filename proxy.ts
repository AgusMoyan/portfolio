import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Proxy (la convención que reemplaza a "middleware" en Next 16).
// Detecta el idioma del visitante (cookie NEXT_LOCALE -> Accept-Language ->
// defaultLocale 'es') y reescribe/redirige a la ruta con prefijo de locale.
export default createMiddleware(routing);

export const config = {
  // Corre en todo menos en API, internos de Next y archivos con extensión
  // (imágenes, PDFs del CV, etc.).
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
};
