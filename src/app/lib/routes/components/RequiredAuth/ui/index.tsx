import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { RoutePath } from '$app/lib/routes/constants';
import { getUserAuthData } from '$entities';

export const RequireAuth = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const isAuth = useSelector(getUserAuthData);
  const location = useLocation();

  if (!isAuth) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }

  return children;
};
