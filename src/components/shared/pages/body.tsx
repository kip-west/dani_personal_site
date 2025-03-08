import { Footer } from "./footer";
import { Header } from "./header";
import type { PropsWithChildren } from "react";
import { Main } from "./main";

type BodyProps = PropsWithChildren<{ title: string }>;

export function Body({ children, title }: BodyProps) {
  return (
    <body className="w-screen h-screen flex flex-col">
      <Header />
      <Main title={title}>{children}</Main>
      <Footer />
    </body>
  );
}
