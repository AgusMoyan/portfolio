import type { CvData } from "../../types/cv";

export const cvEn: CvData = {
  language: "en",
  name: "Agustin Moyano",
  role: "Full Stack Developer | Web & Mobile Apps Developer",
  contact: {
    location: "La Plata, Argentina",
    workMode: "Remote / Hybrid",
    linkedin: "linkedin.com/in/agustinmoyano98",
    email: "moyano.agustin98@gmail.com",
    phone: "+54 9 3388 488336",
  },
  profile:
    "Full Stack Developer focused on building production-ready web and mobile applications. I have 3 years of experience working across frontend, backend and mobile development for real clients. I have experience with quoting systems, booking platforms, healthcare applications, admin dashboards, offline-first flows, external API integrations, production deployments, technical decision-making and publishing mobile applications to Google Play.",
  workExperience: [
    {
      role: "Full Stack Developer — Web & Mobile",
      company: "Luz Consulting",
      location: "La Plata, Argentina",
      mode: "Part-time",
      period: "Sep 2023 - Present",
      bullets: [
        "Develop web and mobile applications for real clients using React, Next.js, React Native, Expo, TypeScript, Supabase and NestJS.",
        "Build reusable components, application flows, dashboards, API integrations, authentication, database interactions and admin panels.",
        "Participate in technical decisions related to architecture, tooling, deployment, scalability and production workflows.",
        "Integrate maps, geocoding APIs, email services, analytics tools, payment platforms and authentication providers.",
        "Delivered production deployments and published a mobile application to Google Play using Expo and EAS Build.",
      ],
    },
    {
      role: "Technical Support Specialist",
      company: "Freelance",
      location: "Buenos Aires, Argentina",
      period: "Aug 2017 - Present",
      bullets: [
        "Provide preventive and corrective maintenance, solving hardware, software, operating system, performance and device configuration issues.",
        "Work with Windows and macOS environments, supporting clients directly and strengthening problem-solving and communication skills.",
      ],
    },
  ],
  selectedProjects: [
    {
      name: "2Mmudanzas",
      url: "2mmudanzas.com",
      type: "Quoting platform + private admin dashboard",
      description:
        "Production web platform for a moving company, with a public quoting flow and a private admin panel.",
      bullets: [
        "Built a quoting flow with origin, destination, moving details, address validation, route visualization, estimated price, booking creation and DNI-based lookup.",
        "Implemented price calculation based on distance and operational variables such as property type, elevators, stairs, cranes, floors, insurance, fuel, tolls, long-distance moves, margins and configurable rules.",
        "Built a protected dashboard for booking management, approval/rejection, dynamic price configuration, calculation policies and status updates.",
        "Integrated GeoRef for address validation in Argentina, Mapbox GL JS for interactive maps and backend services with NestJS, Supabase, PostgreSQL and Swagger.",
      ],
      technologies: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Tailwind CSS v4",
        "Mapbox GL JS",
        "GeoRef",
        "Framer Motion",
        "SweetAlert2",
        "NestJS",
        "Supabase",
        "PostgreSQL",
        "Swagger",
        "Vercel",
      ],
    },
    {
      name: "UDEC — Digital Clinical Records System",
      type: "Mobile-first healthcare full stack application",
      description:
        "Mobile-first full stack application for doctors, focused on managing dynamic digital clinical records.",
      bullets: [
        "Built a separated full stack architecture with a React Native/Expo mobile frontend and a NestJS REST backend using Prisma and PostgreSQL.",
        "Implemented role-based authentication and authorization, configurable clinical forms, digital signatures, multipart file uploads and audit logging for critical backend operations.",
        "Added offline support with SQLite, local drafts and a synchronization queue for pending submissions when connectivity is restored.",
        "Documented the REST API with Swagger and structured critical clinical operations to improve traceability and reliability.",
      ],
      technologies: [
        "React Native",
        "Expo",
        "NestJS",
        "Prisma",
        "PostgreSQL",
        "SQLite",
        "REST API",
        "Swagger",
        "multipart/form-data",
      ],
    },
    {
      name: "RCP Fundacion UDEC",
      type: "Educational / medical mobile application",
      description:
        "Mobile application focused on CPR education and emergency response guidance for Fundacion UDEC.",
      bullets: [
        "Built an Android/iOS mobile app with emergency guidance, CPR educational content, AED locator, search, videos, audio interactions and an emergency simulator.",
        "Implemented structured screens for CPR techniques, symptoms, compressions, stimulation and AED usage.",
        "Configured Expo, EAS Build profiles, OTA updates, Android package, iOS bundle identifier and published the Android app to Google Play.",
      ],
      technologies: [
        "React Native",
        "Expo SDK 54",
        "React Navigation",
        "EAS Build",
        "Expo Updates",
        "Expo Audio",
        "JavaScript",
      ],
    },
    {
      name: "TrustRide",
      url: "trustride.uk",
      type: "Landing page + booking system",
      description:
        "Production platform for transfer bookings between Palma de Mallorca Airport and Playa de Muro.",
      bullets: [
        "Built a landing page and booking flow with origin, destination, date, time, passengers, children, round-trip options and email confirmations.",
        "Developed a protected dashboard to view, create, edit and cancel bookings with token-based cancellation flows.",
        "Configured Supabase Auth with SSR cookies, middleware protection, reCAPTCHA, dynamic sitemap and AeroDataBox API integration.",
      ],
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "Radix UI",
        "Next.js API Routes",
        "Server Actions",
        "Supabase",
        "PostgreSQL",
        "Supabase Auth",
        "AeroDataBox API",
        "reCAPTCHA",
      ],
    },
  ],
  technicalSkills: [
    {
      title: "Frontend",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "shadcn/ui",
        "Framer Motion",
      ],
    },
    {
      title: "Mobile",
      items: [
        "React Native",
        "Expo",
        "EAS Build",
        "Expo Updates",
        "Google Play deployment",
        "offline-first workflows",
      ],
    },
    {
      title: "Backend & Database",
      items: [
        "Node.js",
        "NestJS",
        "Supabase",
        "PostgreSQL",
        "Prisma",
        "REST APIs",
        "Next.js API Routes",
      ],
    },
    {
      title: "Tools & Deployment",
      items: ["Git", "GitHub", "Vercel", "Swagger", "Figma", "PostHog"],
    },
    {
      title: "Integrations",
      items: [
        "Mapbox",
        "GeoRef",
        "Google Maps",
        "Mercado Pago",
        "Supabase Auth",
        "reCAPTCHA",
        "External APIs",
        "email integrations",
        "admin dashboards",
      ],
    },
  ],
  education: [
    {
      title: "Self-directed education",
      description:
        "Self-directed training in modern software development, focused on web and mobile development, including React, React Native, Next.js, Expo, Supabase, backend, APIs, databases and production deployments.",
    },
  ],
  languages: [
    { language: "Spanish", level: "Native" },
    { language: "English", level: "B2" },
  ],
};
