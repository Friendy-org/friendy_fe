import { Theme } from '@emotion/react';
import { dark, light } from '@styles/color';

const mode: 'light' | 'dark' = 'light';

export const theme: Theme = {
  mode,
  color: mode === 'light' ? light : dark,
};
