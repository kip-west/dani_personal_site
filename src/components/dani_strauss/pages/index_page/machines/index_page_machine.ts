import { createMachine, createActor } from "xstate";

export const indexPageMachine = createMachine({
  id: "indexPage",
  initial: "hidden",
  states: {
    hidden: {
      after: {
        100: { target: "visible_title" },
      },
    },
    visible_title: {
      after: {
        400: { target: "visible_cta" },
      },
    },
    visible_cta: {
      after: {
        400: { target: "loaded" },
      },
    },
    loaded: {
      type: "final",
    },
  },
});

export const indexPageActor = createActor(indexPageMachine);
