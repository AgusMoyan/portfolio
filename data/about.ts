import type { AboutData } from "../types/portfolio";

export const developerProfile: AboutData = {
  eyebrow: "about.md",
  title: "Developer profile",
  subtitle: "No me defino solamente por un stack.",
  description:
    "Trabajo conectando producto, interfaz, lógica, datos e integraciones para construir sistemas que puedan usarse en escenarios reales. Me interesa entender el problema, ordenar el flujo y llevar soluciones a producción sin agregar complejidad innecesaria.",
  principles: [
    {
      number: "01",
      title: "Product-oriented",
      description:
        "Antes de pensar en componentes, busco entender usuarios, reglas de negocio, fricciones y casos borde. Me interesa que la solución tenga sentido para el producto, no solo que la pantalla se vea bien.",
    },
    {
      number: "02",
      title: "Web & mobile execution",
      description:
        "Construyo interfaces web y mobile, flujos de aplicación, formularios, navegación, validaciones, estados y experiencias pensadas para uso real.",
    },
    {
      number: "03",
      title: "Systems thinking",
      description:
        "No miro solo la UI. También pienso en datos, permisos, APIs, integraciones, trazabilidad, métricas y mantenimiento.",
    },
    {
      number: "04",
      title: "Production mindset",
      description:
        "Me enfoco en que las soluciones puedan desplegarse, medirse, sostenerse y evolucionar sin agregar complejidad innecesaria.",
    },
  ],
  contributionAreas: [
    "Product flows",
    "UI architecture",
    "Mobile apps",
    "Admin systems",
    "API integrations",
    "Auth & permissions",
    "Data modeling",
    "Production deploys",
  ],
};
