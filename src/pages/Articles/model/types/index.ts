import { EntityState } from '@reduxjs/toolkit';

import { Article } from '$entities';
import { ArticleType, ListOrderField, ListSortField, ListView } from '$shared';

export interface ArticlesListSchemaType extends EntityState<Article> {
  order: ListOrderField;
  search: string;
  sort: ListSortField;
  _isInitialized?: boolean;
  error?: string;
  hasMore?: boolean;
  isLoading?: boolean;
  limit?: number;
  page?: number;
  type?: ArticleType;
  view?: ListView;
}
