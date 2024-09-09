import { EntityState } from '@reduxjs/toolkit';

import { Article, ArticleView } from '$entities';

export interface ArticlesListSchemaType extends EntityState<Article> {
  view: ArticleView;
  error?: string;
  isLoading?: boolean;
}
