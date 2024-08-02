import { ThemeContext } from '../lib';
import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeVariants } from '../constants';

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme =
      theme === ThemeVariants.LIGHT ? ThemeVariants.DARK : ThemeVariants.LIGHT;

    setTheme(newTheme);

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme,
    toggleTheme,
  };
};
