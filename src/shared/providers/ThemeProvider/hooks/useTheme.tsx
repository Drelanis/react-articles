import { useContext, useEffect } from 'react';

import { LOCAL_STORAGE_THEME_KEY, ThemeVariants } from '../constants';
import { ThemeContext } from '../lib';

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    let newTheme: ThemeVariants;
    switch (theme) {
      case ThemeVariants.DARK:
        newTheme = ThemeVariants.LIGHT;
        break;
      case ThemeVariants.LIGHT:
        newTheme = ThemeVariants.ORANGE;
        break;
      case ThemeVariants.ORANGE:
        newTheme = ThemeVariants.DARK;
        break;
      default:
        newTheme = ThemeVariants.LIGHT;
    }
    setTheme?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  useEffect(() => {
    const isThemeSet = localStorage.getItem('theme');

    if (isThemeSet) {
      return;
    }

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, ThemeVariants.LIGHT);
    setTheme(ThemeVariants.LIGHT);
  }, [setTheme]);

  return {
    theme,
    toggleTheme,
  };
};
