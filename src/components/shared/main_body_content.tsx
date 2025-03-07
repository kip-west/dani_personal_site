import type { PropsWithChildren } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import classNames from "classnames";
type MainBodyContentProps = PropsWithChildren<{ title: string }>;

export function MainBodyContent({ children, title }: MainBodyContentProps) {
  return (
    <div className={classNames("m-2", "flex-grow")}>
      <h1 className={"text-2xl font-bold"}>{title}</h1>
      <ScrollArea className="flex-grow">{children}</ScrollArea>
    </div>
  );
}
