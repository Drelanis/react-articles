import { useMemo } from 'react';
import { Route, RouteProps } from 'react-router-dom';

export const useRoutes = (params: RouteProps[]) => {
  const routes = useMemo(() => {
    return params.map(({ element, path }) => {
      return <Route key={path} path={path} element={element} />;
    });
  }, [params]);

  return { routes };
};
