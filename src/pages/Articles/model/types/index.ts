import { EntityState } from '@reduxjs/toolkit';

import { Article } from '$entities';
import { ListSortField, ListView, SortOrderType } from '$shared';

export interface ArticlesListSchemaType extends EntityState<Article> {
  order: SortOrderType;
  search: string;
  sort: ListSortField;
  _isInitialized?: boolean;
  error?: string;
  hasMore?: boolean;
  isLoading?: boolean;
  limit?: number;
  page?: number;
  view?: ListView;
}
