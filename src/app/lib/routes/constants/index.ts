export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not-found',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article',
  ADMIN = 'admin',
  FORBIDDEN = 'forbidden',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile/', // :id
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ADMIN]: '/admin',
  [AppRoutes.ARTICLE_DETAILS]: '/articles/', // :id
  [AppRoutes.FORBIDDEN]: '/forbidden', // :id
  [AppRoutes.NOT_FOUND]: '*',
};
