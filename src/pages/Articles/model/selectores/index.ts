import { StateSchema } from '$shared';

export const getArticlesListIsLoading = (state: StateSchema) =>
  state.articlesList?.isLoading;

export const getArticlesListError = (state: StateSchema) =>
  state.articlesList?.error;

export const getArticlesListView = (state: StateSchema) =>
  state.articlesList?.view;
