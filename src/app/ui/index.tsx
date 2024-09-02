import { FC, Suspense, useEffect } from 'react';

import { Routes } from '../lib';

import classNames from './index.module.scss';

import { userActions } from '$entities';
import { buildClassNames, useAppDispatch, useTheme } from '$shared';
import { NavBar, Sidebar } from '$widgets';

export const App: FC = () => {
  const { containerClassName } = useStyles();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

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

  document.body.className = theme;

  const containerClassName = buildClassNames({
    classNames: 'app',
  });

  return { containerClassName };
};
