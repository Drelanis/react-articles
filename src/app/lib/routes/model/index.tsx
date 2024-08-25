import { routeConfig } from '../config';

import { useRoutes } from '$shared';

export const useModel = () => {
  const { routes } = useRoutes(routeConfig);

  return { routes };
};
