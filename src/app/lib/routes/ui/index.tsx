import { FC, Suspense } from 'react';
import { Routes as ReactRoutes } from 'react-router-dom';
import { PageLoader } from 'widgets';

import { useModel } from '../model';

import classNames from './index.module.scss';

export const Routes: FC = () => {
  const { routes } = useModel();

  return (
    <Suspense fallback={<PageLoader />}>
      <div className={classNames.pageWrapper}>
        <ReactRoutes>{routes}</ReactRoutes>
      </div>
    </Suspense>
  );
};
