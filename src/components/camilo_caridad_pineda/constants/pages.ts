import type { PageConfigProperty } from "@/components/camilo_caridad_pineda/types/pages";
import type { PagesConfig } from "@/types/pages";

export const BASE_PATH = "/ccp";

export const PAGES_CONFIG: PagesConfig<PageConfigProperty> = {
  baseConfig: {
    headerStyles: "bg-black text-white",
    footerStyles: "bg-black text-white",
  },
  pageConfig: {
    index: {
      title: "Home",
      href: `${BASE_PATH}/`,
      description: "Home",
    },
    bio: {
      title: "About Me",
      href: `${BASE_PATH}/bio`,
      description: "About Me",
    },
    contact: {
      title: "Contact",
      href: `${BASE_PATH}/contact`,
      description: "Contact",
    },
  },
};
