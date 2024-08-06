import { Suspense } from 'react';
import { buildClassNames, useTheme } from 'shared';
import { NavBar, Sidebar } from 'widgets';

import { Routes } from '../lib';

import classNames from './index.module.scss';

export const App = () => {
  const { containerClassName } = useStyles();

  return (
    <div className={containerClassName}>
      <Suspense fallback="">
        <NavBar />
        <div className={classNames.pageContainer}>
          <Sidebar />
          <Routes />
        </div>
      </Suspense>
    </div>
  );
};

const useStyles = () => {
  const { theme } = useTheme();

  const containerClassName = buildClassNames({
    classNames: 'app',
    additional: [theme],
  });

  return { containerClassName };
};
