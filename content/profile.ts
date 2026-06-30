import type { LocalizedString, Pillar } from "./types";

/** Frase de apertura de "Sobre mí" (declaración fuerte). */
export const aboutIntro: LocalizedString = {
  es: "No me defino solo por un stack.",
  en: "I don't define myself by a stack alone.",
};

/** Párrafo introductorio. */
export const aboutLead: LocalizedString = {
  es: "Trabajo conectando producto, interfaz, lógica, datos e integraciones para construir sistemas que se puedan usar en escenarios reales. Me importa entender el problema, estructurar el flujo y llevar soluciones a producción sin sumar complejidad innecesaria.",
  en: "I work by connecting product, interface, logic, data and integrations to build systems that can be used in real-world scenarios. I care about understanding the problem, structuring the flow and shipping solutions to production without adding unnecessary complexity.",
};

/** Pilares / forma de trabajo. */
export const pillars: Pillar[] = [
  {
    number: "01",
    title: { es: "Orientado al producto", en: "Product-oriented" },
    description: {
      es: "Antes de pensar en componentes, busco entender a los usuarios, las reglas de negocio, los puntos de fricción y los casos límite. Quiero que la solución tenga sentido para el producto, no solo que se vea bien en pantalla.",
      en: "Before thinking about components, I try to understand users, business rules, friction points and edge cases. I want the solution to make sense for the product, not just look good on screen.",
    },
  },
  {
    number: "02",
    title: { es: "Ejecución web y mobile", en: "Web & mobile execution" },
    description: {
      es: "Construyo interfaces web y mobile, flujos de aplicación, formularios, navegación, validaciones, estados y experiencias pensadas para el uso real.",
      en: "I build web and mobile interfaces, application flows, forms, navigation, validations, states and experiences designed for real use.",
    },
  },
  {
    number: "03",
    title: { es: "Pensamiento de sistemas", en: "Systems thinking" },
    description: {
      es: "No miro solo la UI. También pienso en datos, permisos, APIs, integraciones, trazabilidad, métricas y mantenimiento.",
      en: "I don't only look at the UI. I also think about data, permissions, APIs, integrations, traceability, metrics and maintenance.",
    },
  },
  {
    number: "04",
    title: { es: "Mentalidad de producción", en: "Production mindset" },
    description: {
      es: "Me enfoco en soluciones que se puedan desplegar, medir, sostener y evolucionar sin sumar complejidad innecesaria.",
      en: "I focus on solutions that can be deployed, measured, sustained and evolved without adding unnecessary complexity.",
    },
  },
];

/** Áreas de contribución (chips). */
export const contributionAreas: LocalizedString[] = [
  { es: "Flujos de producto", en: "Product flows" },
  { es: "Arquitectura de UI", en: "UI architecture" },
  { es: "Apps mobile", en: "Mobile apps" },
  { es: "Sistemas de administración", en: "Admin systems" },
  { es: "Integraciones de API", en: "API integrations" },
  { es: "Auth y permisos", en: "Auth & permissions" },
];
