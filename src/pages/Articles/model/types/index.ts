import { EntityState } from '@reduxjs/toolkit';

import { ArticleSortField } from '../constants';

import { Article } from '$entities';
import { ListView, SortOrderType } from '$shared';

export interface ArticlesListSchemaType extends EntityState<Article> {
  order: SortOrderType;
  search: string;
  sort: ArticleSortField;
  _isInitialized?: boolean;
  error?: string;
  hasMore?: boolean;
  isLoading?: boolean;
  limit?: number;
  page?: number;
  view?: ListView;
}
