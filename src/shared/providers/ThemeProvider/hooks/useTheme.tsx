import { useCallback, useContext, useEffect } from 'react';

import { LOCAL_STORAGE_THEME_KEY, ThemeVariants } from '../constants';
import { ThemeContext } from '../lib';

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = useCallback(() => {
    const newTheme =
      theme === ThemeVariants.LIGHT ? ThemeVariants.DARK : ThemeVariants.LIGHT;

    setTheme(newTheme);

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  }, [theme, setTheme]);

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
