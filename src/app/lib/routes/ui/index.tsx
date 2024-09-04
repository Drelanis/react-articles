import { FC, Suspense } from 'react';
import { Routes as ReactRoutes } from 'react-router-dom';

import { useModel } from '../model';

import classNames from './index.module.scss';

import { PageLoader } from '$widgets';

export const Routes: FC = () => {
  const { routes, isUserMounted } = useModel();

  if (!isUserMounted) {
    return null;
  }

  return (
    <Suspense fallback={<PageLoader />}>
      <div className={classNames.pageWrapper}>
        <ReactRoutes>{routes}</ReactRoutes>
      </div>
    </Suspense>
  );
};
