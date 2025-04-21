import type { PropsWithChildren } from "react";
import classNames from "classnames";
interface HeaderProps {
  className?: string;
}

export function Header({
  className,
  children,
}: PropsWithChildren<HeaderProps>) {
  return (
    <header className={classNames("p-3", className)}>
      <div className="container mx-auto">{children}</div>
    </header>
  );
}
