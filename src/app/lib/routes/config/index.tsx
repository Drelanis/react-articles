import { RoutePath } from '../constants';

import {
  AboutLazyPage,
  MainLazyPage,
  NotFoundPage,
  ProfileLazyPage,
} from '$pages';
import { AppRoutesProps } from '$shared';

export const routeConfig: AppRoutesProps[] = [
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
    authOnly: true,
  },
  {
    path: RoutePath['not-found'],
    element: <NotFoundPage />,
  },
];
