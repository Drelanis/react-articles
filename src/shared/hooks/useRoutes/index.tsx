import { useMemo } from 'react';
import { Route } from 'react-router-dom';

import { AppRoutesProps } from '$shared/types';

export const useRoutes = (params: AppRoutesProps[], isAuth?: boolean) => {
  const routes = useMemo(() => {
    return params.map(({ element, path, authOnly }) => {
      if (authOnly && !isAuth) {
        return;
      }

      return <Route key={path} path={path} element={element} />;
    });
  }, [params, isAuth]);

  return { routes };
};
