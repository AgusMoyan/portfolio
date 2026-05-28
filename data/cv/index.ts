import type { CvData, CvLanguage } from "../../types/cv";
import { cvEn } from "./en";
import { cvEs } from "./es";

export { cvEn, cvEs };

export const cvByLanguage: Record<CvLanguage, CvData> = {
  es: cvEs,
  en: cvEn,
};
