import { css } from "@emotion/react";
import { useMachine } from "@xstate/react";
import classNames from "classnames";
import { indexPageMachine } from "./machines/index_page_machine";

export function IndexPage() {
  const [state] = useMachine(indexPageMachine);

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <h1
        className={classNames(
          "text-center",
          "text-6xl text-white font-bold",
          "tracking-wider",
          "transition-opacity duration-1000",
          state.matches("visible_title") || state.matches("loaded")
            ? "opacity-100"
            : "opacity-0"
        )}
      >
        Pleasure matters.
      </h1>
      <p
        className={classNames(
          "text-center text-3xl text-white font-bold",
          "transition-opacity duration-1000",
          state.matches("loaded") ? "opacity-100" : "opacity-0"
        )}
      >
        Sex-positive, pleasure-focused therapy for your whole being.
      </p>
    </div>
  );
}
