import { PAGES_CONFIG } from "@/constants/pages";
import classNames from "classnames";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export function NavHeader() {
  return (
    <div className="w-full">
      <NavigationMenu
        className={classNames(
          "bg-gray-900 text-white",
          "p-3",
          "max-w-full max-h-fit",
          "flex justify-between items-center"
        )}
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
  );
}
