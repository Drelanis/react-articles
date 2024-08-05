import { createContext } from 'react';

import { ThemeVariants } from '../constants';

export type ThemeContextProps = {
  setTheme: (theme: ThemeVariants) => void;
  theme: ThemeVariants;
};

export const ThemeContext = createContext({} as ThemeContextProps);
