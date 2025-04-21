import type { PageConfigProperty } from "@/components/camilo_caridad_pineda/types/pages";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import type { PageConfig } from "@/types/pages";

interface PagesLinksProps {
  pagesConfig: Record<PageConfigProperty, PageConfig>;
}

export function PagesLinks({ pagesConfig }: PagesLinksProps) {
  return (
    <NavigationMenuList>
      {Object.entries(pagesConfig)
        .filter(([key]) => key !== "index")
        .map(([key, value]) => (
          <NavigationMenuItem key={key}>
            <NavigationMenuLink href={value.href}>
              {value.title}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
    </NavigationMenuList>
  );
}
