import {
  ARTICLES_TILE_ITEMS_LIMIT,
  ArticleType,
  ErrorHints,
  ListOrderField,
  ListSortField,
  ListView,
  StateSchema,
} from '$shared';

export const getArticlesListIsLoading = (state: StateSchema) =>
  state.articlesList?.isLoading || false;

export const getArticlesListError = (state: StateSchema) =>
  (state.articlesList?.error || '') as ErrorHints;

export const getArticlesListView = (state: StateSchema) =>
  state.articlesList?.view || ListView.TILE;

export const getArticlesListPage = (state: StateSchema) =>
  state.articlesList?.page || 1;

export const getArticlesListLimit = (state: StateSchema) =>
  state.articlesList?.limit || ARTICLES_TILE_ITEMS_LIMIT;

export const getArticlesListHasMore = (state: StateSchema) =>
  state.articlesList?.hasMore || false;

export const getArticlesListIsInitialized = (state: StateSchema) =>
  state.articlesList?._isInitialized || false;

export const getArticlesListOrder = (state: StateSchema) =>
  state.articlesList?.order ?? ListOrderField.ASC;

export const getArticlesListSort = (state: StateSchema) =>
  state.articlesList?.sort ?? ListSortField.CREATED;

export const getArticlesListSearch = (state: StateSchema) =>
  state.articlesList?.search ?? '';

export const getArticlesListType = (state: StateSchema) =>
  state.articlesList?.type ?? ArticleType.ALL;
