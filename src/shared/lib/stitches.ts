import { createStitches } from '@stitches/react';

export const { styled, css, theme } = createStitches({
  theme: {
    colors: {
      primary: '#4f46e5',
      primaryHover: '#4338ca',
      white: '#ffffff',
    },
    space: {
      sm: '8px',
      md: '16px',
      lg: '24px',
    },
    radii: {
      sm: '4px',
      md: '8px',
    },
  },
});
