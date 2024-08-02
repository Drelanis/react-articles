import { useClassNames, useTheme } from 'shared';
import { Routes } from '../lib';
import { NavBar, ThemeSwitcher } from 'widgets';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={useClassNames({ classNames: 'app', additional: [theme] })}>
      <NavBar />
      <ThemeSwitcher />
      <Routes />
    </div>
  );
};
