import type { PropsWithChildren } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import classNames from "classnames";

type MainProps = PropsWithChildren<{ title: string }>;

export function Main({ children, title }: MainProps) {
  return (
    <main className="flex-grow">
      <div className={classNames("container mx-auto", "p-2")}>
        <h1 className={"text-2xl font-bold"}>{title}</h1>
        <ScrollArea>{children}</ScrollArea>
      </div>
    </main>
  );
}
