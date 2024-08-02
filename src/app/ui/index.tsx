import { useClassNames, useTheme } from 'shared';
import { Routes } from '../lib';
import { NavBar, Sidebar } from 'widgets';
import classNames from './index.module.scss';

export const App = () => {
  const { containerClassName } = useStyles();

  return (
    <div className={containerClassName}>
      <NavBar />
      <div className={classNames.pageContainer}>
        <Sidebar />
        <Routes />
      </div>
    </div>
  );
};

const useStyles = () => {
  const { theme } = useTheme();

  const containerClassName = useClassNames({
    classNames: classNames.app,
    additional: [theme],
  });

  return { containerClassName };
};
