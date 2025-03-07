import type { PropsWithChildren } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

type MainBodyContentProps = PropsWithChildren;

export function MainBodyContent({ children }: MainBodyContentProps) {
  return <ScrollArea className="flex-grow">{children}</ScrollArea>;
}
