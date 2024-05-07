import { useRoutes } from 'shared';
import { routeConfig } from '../config';

export const useModel = () => {
  const { routes } = useRoutes(routeConfig);

  return { routes };
};
