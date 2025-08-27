import { createStitches } from "@stitches/react";

export const { styled, globalCss } = createStitches({
  theme: {
    colors: {
      background: "#f9f9f9",
      primary: "#0988F0",
      text: "#2d3436",
      gray: "#4b4f50ff",
      white: "#ffffff",
    },
    radii: {
      lg: "12px",
    },
  },
});
