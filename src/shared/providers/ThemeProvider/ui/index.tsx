import { FC, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeVariants } from '../constants';
import { ThemeContext } from '../lib';

const defaultTheme = localStorage.getItem(
  LOCAL_STORAGE_THEME_KEY,
) as ThemeVariants;

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<ThemeVariants>(defaultTheme);

  const defaultProps = useMemo(
    () => ({
      theme: theme,
      setTheme: setTheme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
