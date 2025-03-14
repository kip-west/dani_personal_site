import { useMachine } from "@xstate/react";
import classNames from "classnames";
import { indexPageMachine } from "./machines/index_page_machine";
import { Button } from "../ui/button";
import { PAGES_CONFIG } from "src/constants/pages.ts";
import { css } from "@emotion/react";
export function IndexPage() {
  const [state] = useMachine(indexPageMachine);

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div
        className="flex flex-col items-center justify-center rounded-full"
        css={css`
          --bgcolor: rgba(0, 0, 0, 0.5);
          background-color: var(--bgcolor);
          box-shadow: 0 0 60px 60px var(--bgcolor);
          backdrop-filter: blur(2px);
        `}
      >
        <h1
          className={classNames(
            "text-center",
            "text-4xl md:text-6xl text-white font-bold",
            "tracking-wider",
            getTransitionClassNames(
              state.matches("visible_title") ||
                state.matches("visible_cta") ||
                state.matches("loaded")
            )
          )}
        >
          Pleasure matters.
        </h1>
        <p
          className={classNames(
            "text-center text-xl md:text-3xl text-white font-bold",
            getTransitionClassNames(
              state.matches("visible_cta") || state.matches("loaded")
            )
          )}
        >
          Sex-positive, pleasure-focused therapy for your whole being.
        </p>
        <div className="flex items-centerjustify-center mt-3 h-11">
          <a
            href={PAGES_CONFIG.approach.href}
            className={classNames(
              "rounded-full border-2 border-white border-solid",
              "py-2 px-6",
              "bg-transparent text-white font-bold",
              "hover:bg-white/20 hover:shadow hover:shadow-white/40 hover:text-no-underline",
              getTransitionClassNames(state.matches("loaded"))
            )}
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}

function getTransitionClassNames(isVisible: boolean) {
  return classNames(
    "transition-opacity duration-1000",
    isVisible ? "opacity-100" : "opacity-0"
  );
}
