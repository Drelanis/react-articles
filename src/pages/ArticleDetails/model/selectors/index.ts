import { StateSchema } from '$shared';

export const getArticleCommentsIsLoading = (state: StateSchema) =>
  state.articleDetailsComments?.isLoading;

export const getArticleCommentsError = (state: StateSchema) =>
  state.articleDetailsComments?.error;

export * from './recommendations';
