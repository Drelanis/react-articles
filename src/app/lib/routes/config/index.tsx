import { RoutePath } from '../constants';

import { UserRole } from '$entities';
import {
  AboutLazyPage,
  AdminPanelLazyPage,
  ArticleDetailsLazyPage,
  ArticlesLazyPage,
  ForbiddenPage,
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
    path: `${RoutePath.profile}:id`,
    element: <ProfileLazyPage />,
    authOnly: true,
  },
  {
    path: RoutePath.articles,
    element: <ArticlesLazyPage />,
    authOnly: true,
  },
  {
    path: RoutePath.admin,
    element: <AdminPanelLazyPage />,
    authOnly: true,
    roles: [UserRole.ADMIN, UserRole.MANAGER],
  },
  {
    path: `${RoutePath.article}:id`,
    element: <ArticleDetailsLazyPage />,
    authOnly: true,
  },
  {
    path: RoutePath.forbidden,
    element: <ForbiddenPage />,
  },
  {
    path: RoutePath['not-found'],
    element: <NotFoundPage />,
  },
];
