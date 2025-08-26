import { createStitches } from "@stitches/react";

export const { styled, globalCss } = createStitches({
  theme: {
    colors: {
      background: "#f9f9f9",
      primary: "#6c5ce7",
      text: "#2d3436",
      white: "#ffffff",
    },
    radii: {
      lg: "12px",
    },
  },
});
