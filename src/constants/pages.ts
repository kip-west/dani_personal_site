import type { PageConfigProperty, PageConfig } from "@/types/pages";

export const PAGES_CONFIG: Record<PageConfigProperty, PageConfig> = {
  index: {
    title: "Home",
    href: "/",
    description: "Home",
  },
  bio: {
    title: "About Me",
    href: "/bio",
    description: "About Me",
  },
  approach: {
    title: "My Approach",
    href: "/approach",
    description: "My Approach",
  },
  services: {
    title: "Services",
    href: "/services",
    description: "What I Offer",
  },
  fees: {
    title: "Fees",
    href: "/fees",
    description: "Fees",
  },
  associates: {
    title: "Associates",
    href: "/associates",
    description: "Associates",
  },
  contact: {
    title: "Contact",
    href: "/contact",
    description: "Contact",
  },
};
