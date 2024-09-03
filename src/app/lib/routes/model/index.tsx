import { useSelector } from 'react-redux';

import { routeConfig } from '../config';

import { getUserAuthData } from '$entities';
import { useRoutes } from '$shared';

export const useModel = () => {
  const isAuth = useSelector(getUserAuthData);

  const { routes } = useRoutes(routeConfig, Boolean(isAuth));

  return { routes };
};
