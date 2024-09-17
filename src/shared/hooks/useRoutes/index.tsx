import { useMemo } from 'react';
import { Route } from 'react-router-dom';

import { AppRoutesProps } from '$shared/types';

type Props = {
  AuthWrapper: ({
    children,
    roles,
  }: {
    children: JSX.Element;
    roles?: string[];
  }) => JSX.Element;
  params: AppRoutesProps[];
};

export const useRoutes = (props: Props) => {
  const { AuthWrapper, params } = props;

  const routes = useMemo(() => {
    return params.map(({ element, path, authOnly, roles }) => {
      const routeElement = authOnly ? (
        <AuthWrapper roles={roles}>{element as JSX.Element}</AuthWrapper>
      ) : (
        element
      );

      return <Route key={path} path={path} element={routeElement} />;
    });
  }, [params, AuthWrapper]);

  return { routes };
};
