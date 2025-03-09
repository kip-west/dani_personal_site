import type { PropsWithChildren } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import classNames from "classnames";
import { css } from "@emotion/react";

type MainProps = {
  title: string;
  backgroundImage?: string;
  isNotScrollable?: boolean;
};

export function Main({
  children,
  title,
  backgroundImage,
  isNotScrollable = false,
}: PropsWithChildren<MainProps>) {
  return (
    <main
      className={classNames("flex-grow")}
      css={css`
        background-image: url(${backgroundImage});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      `}
    >
      <span className="sr-only">{title} Page</span>
      {isNotScrollable ? (
        <div className="container mx-auto flex-1 h-full p-4">{children}</div>
      ) : (
        <ScrollArea className="container mx-auto flex-1 h-full p-4">
          {children}
        </ScrollArea>
      )}
    </main>
  );
}
