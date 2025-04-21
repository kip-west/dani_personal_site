export interface PageConfig {
  title: string;
  href: string;
  description: string;
}

export type PagesConfig<PCPT extends string> = {
  baseConfig: {
    headerStyles: string;
    footerStyles: string;
  };
  pageConfig: Record<"index", PageConfig> & Record<PCPT, PageConfig>;
};
