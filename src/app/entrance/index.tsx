import { useTheme } from '../providers';
import { useClassNames } from 'shared';
import { Routes } from '../lib';
import { NavBar } from 'widgets';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={useClassNames({ classNames: 'app', additional: [theme] })}>
      <NavBar />
      <button onClick={toggleTheme}>TOGGLE</button>
      <Routes />
    </div>
  );
};
