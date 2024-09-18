import { useSelector } from 'react-redux';

import { NavigationRequirements } from '../components';
import { routeConfig } from '../config';

import { getUserMounted } from '$entities';
import { useRoutes } from '$shared';

export const useModel = () => {
  const isUserMounted = useSelector(getUserMounted);

  const { routes } = useRoutes({
    params: routeConfig,
    NavigationRequirements,
  });

  return { routes, isUserMounted };
};
