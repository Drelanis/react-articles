import { useMemo } from 'react';
import { Route } from 'react-router-dom';

import { AppRoutesProps } from '$shared/types';

type Props = {
  NavigationRequirements: ({
    children,
    roles,
  }: {
    children: JSX.Element;
    roles?: string[];
  }) => JSX.Element;
  params: AppRoutesProps[];
};

export const useRoutes = (props: Props) => {
  const { NavigationRequirements, params } = props;

  const routes = useMemo(() => {
    return params.map(({ element, path, authOnly, roles }) => {
      const routeElement = authOnly ? (
        <NavigationRequirements roles={roles}>
          {element as JSX.Element}
        </NavigationRequirements>
      ) : (
        element
      );

      return <Route key={path} path={path} element={routeElement} />;
    });
  }, [params, NavigationRequirements]);

  return { routes };
};
