export type CvLanguage = "es" | "en";

export type CvContact = {
  linkedin?: string;
  email?: string;
  phone?: string;
  location?: string;
  workMode?: string;
  portfolio?: string;
  github?: string;
};

export type CvSkillGroup = {
  title: string;
  items: string[];
};

export type CvExperienceItem = {
  role: string;
  company: string;
  location?: string;
  mode?: string;
  period: string;
  bullets: string[];
};

export type CvProjectItem = {
  name: string;
  url?: string;
  type: string;
  description: string;
  bullets: string[];
  technologies: string[];
};

export type CvEducationItem = {
  title: string;
  description: string;
};

export type CvLanguageItem = {
  language: string;
  level: string;
};

export type CvData = {
  language: CvLanguage;
  name: string;
  role: string;
  contact: CvContact;
  profile: string;
  workExperience: CvExperienceItem[];
  selectedProjects: CvProjectItem[];
  technicalSkills: CvSkillGroup[];
  education: CvEducationItem[];
  languages: CvLanguageItem[];
};
