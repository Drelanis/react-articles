import { RoutePath } from '../constants';

import {
  AboutLazyPage,
  ArticleDetailsLazyPage,
  ArticlesLazyPage,
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
    path: RoutePath.articles,
    element: <ArticlesLazyPage />,
    authOnly: true,
  },
  {
    path: `${RoutePath['article-details']}:id`,
    element: <ArticleDetailsLazyPage />,
    authOnly: true,
  },
  {
    path: RoutePath['not-found'],
    element: <NotFoundPage />,
  },
];
