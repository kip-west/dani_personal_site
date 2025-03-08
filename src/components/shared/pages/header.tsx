import { PAGES_CONFIG } from "@/constants/pages";
import classNames from "classnames";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export function Header() {
  return (
    <header className={classNames("bg-gray-900 text-white", "p-3")}>
      <div className="container mx-auto">
        <NavigationMenu
          className={classNames("max-w-full flex justify-between")}
        >
          <NavigationMenuLink
            href="/"
            className={classNames("text-xl font-bold")}
          >
            Dani Strauss
          </NavigationMenuLink>

          <NavigationMenuList className={classNames("flex gap-3")}>
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
        </NavigationMenu>
      </div>
    </header>
  );
}
