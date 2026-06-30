# Portfolio — Agustín Moyano

Portfolio personal bilingüe (ES/EN) hecho con amor, Next.js (App Router), TypeScript,
Tailwind CSS, next-intl, Framer Motion y next-themes. Single-page con scroll,
modo claro/oscuro, detección automática de idioma y SEO por idioma.

🔗 [agusmoyano-portfolio.vercel.app](https://agusmoyano-portfolio.vercel.app/)

## Desarrollo

```bash
pnpm install
pnpm dev        # http://localhost:3000  (redirige a /es o /en según el navegador)
pnpm build      # build de producción
pnpm lint       # eslint
pnpm test:e2e   # tests E2E con Playwright
```

> Para los tests, la primera vez: `pnpm exec playwright install chromium`.

## Estructura

El contenido vive tipado por idioma en [`content/`](./content), separado de los
componentes:

| Archivo | Contenido |
|---|---|
| `content/site.ts` | Datos de contacto, redes y URL del sitio. |
| `content/profile.ts` | Texto de "Sobre mí". |
| `content/skills.ts` | Stack técnico e idiomas. |
| `content/projects.ts` | Proyectos destacados. |
| `content/experience.ts` | Experiencia laboral. |
| `content/freelance.ts` | Servicios de soporte técnico. |
| `messages/*.json` | Textos de la interfaz (nav, botones, títulos). |

Assets en `public/`: foto (`foto-perfil.png`), capturas de proyectos
(`public/projects/`) y CV por idioma (`public/cv/`).

## Stack

- **Framework**: Next.js 16 (App Router) + React 19
- **Estilos**: Tailwind CSS v4
- **i18n**: next-intl (routing `/es` · `/en`, `hreflang`, OG por idioma)
- **Animaciones**: Framer Motion
- **Tema**: next-themes (claro/oscuro)
- **Tests**: Playwright (E2E)
- **Deploy**: Vercel

## Deploy

Hosteado en Vercel. Cada push a `main` despliega automáticamente.
