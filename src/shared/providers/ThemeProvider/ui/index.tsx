import { FC, useMemo, useState } from 'react';

import { LOCAL_STORAGE_THEME_KEY, ThemeVariants } from '../constants';
import { ThemeContext } from '../lib';

const defaultTheme = localStorage.getItem(
  LOCAL_STORAGE_THEME_KEY,
) as ThemeVariants;

type Props = {
  initialTheme?: ThemeVariants;
};

export const ThemeProvider: FC<Props> = (props) => {
  const { children, initialTheme } = props;

  const [theme, setTheme] = useState<ThemeVariants>(
    initialTheme || defaultTheme,
  );

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
