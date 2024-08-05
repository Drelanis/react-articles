import { Suspense } from 'react';
import { Routes as ReactRoutes } from 'react-router-dom';

import { useModel } from '../model';

import classNames from './index.module.scss';

export const Routes = () => {
  const { routes } = useModel();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={classNames.pageWrapper}>
        <ReactRoutes>{routes}</ReactRoutes>
      </div>
    </Suspense>
  );
};
