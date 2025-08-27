import { createStitches } from '@stitches/react';
import type * as Stitches from "@stitches/react";

export const stitchesConfig = createStitches({
  theme: {
    colors: {
      primary: "#4f46e5",
      primaryHover: "#4338ca",
      white: "#ffffff",
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
