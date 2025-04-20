import type { PageConfigProperty, PageConfig } from "@/types/pages";

export const BASE_PATH = "/dani_strauss";

export const PAGES_CONFIG: Record<PageConfigProperty, PageConfig> = {
  index: {
    title: "Home",
    href: `${BASE_PATH}/`,
    description: "Home",
  },
  approach: {
    title: "My Approach",
    href: `${BASE_PATH}/approach`,
    description: "My Approach",
  },
  services: {
    title: "Services",
    href: `${BASE_PATH}/services`,
    description: "What I Offer",
  },
  fees: {
    title: "Fees",
    href: `${BASE_PATH}/fees`,
    description: "Fees",
  },
  bio: {
    title: "About Me",
    href: `${BASE_PATH}/bio`,
    description: "About Me",
  },
  associates: {
    title: "Associates",
    href: `${BASE_PATH}/associates`,
    description: "Associates",
  },
  contact: {
    title: "Contact",
    href: `${BASE_PATH}/contact`,
    description: "Contact",
  },
};
