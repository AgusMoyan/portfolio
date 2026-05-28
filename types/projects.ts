export type ProjectStatus =
  | "production"
  | "published"
  | "internal"
  | "production-ready";

export type ProjectPlatform = "web" | "mobile" | "full-stack";

export type ProjectTag =
  | "production"
  | "web"
  | "mobile"
  | "full-stack"
  | "admin-dashboard"
  | "maps"
  | "pricing-engine"
  | "bookings"
  | "api"
  | "api-integration"
  | "healthcare"
  | "offline-first"
  | "auth"
  | "backend"
  | "clinical-records"
  | "expo"
  | "google-play"
  | "education"
  | "emergency"
  | "published"
  | "booking-system"
  | "supabase"
  | "landing";

export type ProjectId =
  | "2mmudanzas"
  | "udec-clinical-records"
  | "rcp-fundacion-udec"
  | "trustride";

export type Project = {
  id: ProjectId;
  name: string;
  type: string;
  description: string;
  status: ProjectStatus;
  statusLabel: string;
  platform: ProjectPlatform[];
  url?: string;
  year?: string;
  role?: string;
  highlights: string[];
  technologies: string[];
  tags: ProjectTag[];
  featured?: boolean;
  consoleCommand: string;
};

export type ProjectFilterId =
  | "all"
  | "web"
  | "mobile"
  | "production"
  | "dashboards"
  | "apis";

export type ProjectPlatformFilterId = "web" | "mobile";

export type ProjectStatusFilterId = "production";

export type ProjectTagFilterId = Exclude<
  ProjectFilterId,
  "all" | ProjectPlatformFilterId | ProjectStatusFilterId
>;

export type ProjectFilter =
  | {
      id: "all";
      label: string;
      match: "all";
    }
  | {
      id: ProjectPlatformFilterId;
      label: string;
      match: "platform";
      value: ProjectPlatform;
    }
  | {
      id: ProjectStatusFilterId;
      label: string;
      match: "status";
      values: ProjectStatus[];
    }
  | {
      id: ProjectTagFilterId;
      label: string;
      match: "tag";
      value: ProjectTag;
    };
