import type { PropsWithChildren } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import classNames from "classnames";

type MainProps = PropsWithChildren<{ title: string }>;

export function Main({ children, title }: MainProps) {
  return (
    <main className={classNames("container mx-auto", "flex-grow", "p-2")}>
      <span className="sr-only">{title} Page</span>
      <ScrollArea>{children}</ScrollArea>
    </main>
  );
}
