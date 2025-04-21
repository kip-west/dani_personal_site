import { PAGES_CONFIG } from "@/components/camilo_caridad_pineda/constants/pages";
import classNames from "classnames";
import {
  NavigationMenu,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { PagesLinks } from "@/components/shared/pages/pages_links";

export function HeaderInner() {
  return (
    <>
      <NavigationMenu className="max-w-full flex justify-center md:justify-between relative">
        <NavigationMenuLink
          href={PAGES_CONFIG.pageConfig.index.href}
          className={classNames("text-xl font-bold")}
        >
          <img
            src="/red_star.svg"
            alt="Camilo Caridad Pineda"
            className="w-10 h-10"
          />
        </NavigationMenuLink>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="absolute right-0 md:hidden">
              ☰<span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="top">
            <PagesLinks pagesConfig={PAGES_CONFIG.pageConfig} />
          </SheetContent>
        </Sheet>
        <div className={classNames("hidden md:flex")}>
          <PagesLinks pagesConfig={PAGES_CONFIG.pageConfig} />
        </div>
      </NavigationMenu>
    </>
  );
}
