import { css } from "@emotion/react";
import classNames from "classnames";

export function IndexPage() {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <p
        className={classNames(
          "text-center",
          "text-6xl text-white font-bold",
          "tracking-wider"
        )}
      >
        Pleasure matters.
      </p>
    </div>
  );
}
