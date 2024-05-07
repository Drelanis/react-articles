import { Link } from 'react-router-dom';
import { useTheme } from '../providers';
import { buildClassNames } from 'shared';
import { Routes } from '../lib';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={buildClassNames({ classNames: 'app', additional: [theme] })}
    >
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={'/about'}>about</Link>
      <Link to={'/'}>main</Link>
      <Routes />
    </div>
  );
};
