import { EntityState } from '@reduxjs/toolkit';

import { CommentType } from '$entities';

export interface ArticleDetailsCommentsSchema extends EntityState<CommentType> {
  error?: string;
  isLoading?: boolean;
}
