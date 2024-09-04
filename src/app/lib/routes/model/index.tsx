import { useSelector } from 'react-redux';

import { RequireAuth } from '../components';
import { routeConfig } from '../config';

import { getUserMounted } from '$entities';
import { useRoutes } from '$shared';

export const useModel = () => {
  const isUserMounted = useSelector(getUserMounted);

  const { routes } = useRoutes({
    params: routeConfig,
    AuthWrapper: RequireAuth,
  });

  return { routes, isUserMounted };
};
