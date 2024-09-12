import { EntityState } from '@reduxjs/toolkit';

import { Article, CommentType } from '$entities';

export interface ArticleDetailsCommentsSchema extends EntityState<CommentType> {
  error?: string;
  isLoading?: boolean;
}

export interface ArticleRecommendationsSchema extends EntityState<Article> {
  error?: string;
  isLoading?: boolean;
}
