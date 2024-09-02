import { RouteProps } from 'react-router-dom';

import { RoutePath } from '../constants';

import {
  AboutLazyPage,
  MainLazyPage,
  NotFoundPage,
  ProfileLazyPage,
} from '$pages';

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
    path: RoutePath.profile,
    element: <ProfileLazyPage />,
  },
  {
    path: RoutePath['not-found'],
    element: <NotFoundPage />,
  },
];
