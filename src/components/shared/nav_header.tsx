import { PAGES_CONFIG } from "@/constants/pages";
import classNames from "classnames";

export function NavHeader() {
  return (
    <nav className={classNames("bg-gray-900 text-white", "p-4", "h-fit")}>
      <div
        className={classNames(
          "container mx-auto flex justify-between items-center"
        )}
      >
        <a href="/" className={classNames("text-2xl font-bold")}>
          Dani Strauss
        </a>
        <ul className={classNames("flex space-x-4")}>
          {Object.entries(PAGES_CONFIG)
            .filter(([key]) => key !== "index")
            .map(([key, value]) => (
              <li key={key}>
                <a
                  href={value.href}
                  className={classNames(
                    "hover:text-gray-400 active:text-gray-400"
                  )}
                >
                  {value.title}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  );
}
