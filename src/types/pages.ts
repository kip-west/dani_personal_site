export type PageConfigProperty =
  | "index"
  | "bio"
  | "approach"
  | "services"
  | "fees"
  | "associates"
  | "contact";

export interface PageConfig {
  title: string;
  href: string;
  description: string;
}
