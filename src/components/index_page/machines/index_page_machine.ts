import { createMachine, createActor } from "xstate";

export const indexPageMachine = createMachine({
  id: "indexPage",
  initial: "hidden",
  states: {
    hidden: {
      after: {
        250: { target: "visible_title" },
      },
    },
    visible_title: {
      after: {
        250: { target: "loaded" },
      },
    },
    loaded: {
      type: "final",
    },
  },
});

export const indexPageActor = createActor(indexPageMachine);
