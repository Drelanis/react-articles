import { Suspense } from 'react';
import { useModel } from '../model';
import { Routes as ReactRoutes } from 'react-router-dom';

export const Routes = () => {
  const { routes } = useModel();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ReactRoutes>{routes}</ReactRoutes>
    </Suspense>
  );
};
