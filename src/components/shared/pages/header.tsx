import { PAGES_CONFIG } from "@/constants/pages";
import classNames from "classnames";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className={classNames("bg-[#DAA49A] text-white", "p-3")}>
      <div className="container mx-auto">
        <NavigationMenu className="max-w-full flex justify-center md:justify-between relative">
          <NavigationMenuLink
            href="/"
            className={classNames("text-xl font-bold")}
          >
            Dani Strauss
          </NavigationMenuLink>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="absolute right-0 md:hidden">
                ☰<span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="top">
              <PagesLinks />
            </SheetContent>
          </Sheet>
          <div className={classNames("hidden md:flex")}>
            <PagesLinks />
          </div>
        </NavigationMenu>
      </div>
    </header>
  );
}

function PagesLinks() {
  return (
    <NavigationMenuList
      className={classNames("flex flex-col md:flex-row gap-3")}
    >
      {Object.entries(PAGES_CONFIG)
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
