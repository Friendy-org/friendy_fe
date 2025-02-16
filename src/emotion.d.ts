import '@emotion/react';
import { theme } from './styles/theme';

type ThemeType = typeof theme;

declare module '@emotion/react' {
  export interface Theme {
    mode: 'light' | 'dark';
    color: {
      primary: Record<number, string>;
      secondary: Record<number, string>;
      tertiary: Record<number, string>;
      gray: Record<number, string>;
    };
    font: {
      heading: {
        900: string;
        800: string;
        700: string;
        600: string;
        500: string;
        400: string;
        300: string;
        200: string;
        100: string;
      };
      common: {
        large: string;
        medium: string;
        regular: string;
        regularAccent: string;
        small: string;
        smallAccent: string;
        extraSmall: string;
      };
    };
  }
}
