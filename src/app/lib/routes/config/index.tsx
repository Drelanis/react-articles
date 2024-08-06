import { AboutLazyPage, MainLazyPage, NotFoundPage } from 'pages';
import { RouteProps } from 'react-router-dom';

import { RoutePath } from '../constants';

export const routeConfig: RouteProps[] = [
  {
    path: RoutePath.main,
    element: <MainLazyPage />,
  },
  {
    path: RoutePath.about,
    element: <AboutLazyPage />,
  },
  {
    path: RoutePath['not-found'],
    element: <NotFoundPage />,
  },
];
