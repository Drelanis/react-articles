import {
  ARTICLES_TILE_ITEMS_LIMIT,
  ErrorHints,
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
