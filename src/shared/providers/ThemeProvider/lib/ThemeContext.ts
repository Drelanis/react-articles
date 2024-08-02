import { ThemeVariants } from '../constants';
import { createContext } from 'react';

export type ThemeContextProps = {
  theme: ThemeVariants;
  setTheme: (theme: ThemeVariants) => void;
};

export const ThemeContext = createContext({} as ThemeContextProps);
