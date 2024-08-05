import { AboutLazyPage, MainLazyPage } from 'pages';
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
];
