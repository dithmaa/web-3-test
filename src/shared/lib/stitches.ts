import { createStitches } from '@stitches/react';
import type * as Stitches from "@stitches/react";

export const stitchesConfig = createStitches({
  theme: {
    colors: {
      primary: "#0988F0",
      primaryHover: "#0e6ebcff",
      white: "#ffffff",
      text: "#2d3436",
      gray: "#4b4f50ff",
    },
    space: {
      sm: "8px",
      md: "16px",
      lg: "24px",
    },
    radii: {
      sm: "4px",
      md: "8px",
    },
  },
});

export type CSS = Stitches.CSS<(typeof stitchesConfig)["config"]>;
export const { styled, css, config, theme } = stitchesConfig;
