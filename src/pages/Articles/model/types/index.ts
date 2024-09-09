import { EntityState } from '@reduxjs/toolkit';

import { Article, ArticleView } from '$entities';

export interface ArticlesListSchemaType extends EntityState<Article> {
  view: ArticleView;
  error?: string;
  hasMore?: boolean;
  isLoading?: boolean;
  limit?: number;
  page?: number;
}
