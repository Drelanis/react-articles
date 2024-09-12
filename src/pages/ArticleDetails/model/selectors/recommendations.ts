import { StateSchema } from '$shared';

export const getArticleRecommendationsIsLoading = (state: StateSchema) =>
  state.articleRecommendations?.isLoading;

export const getArticleRecommendationsError = (state: StateSchema) =>
  state.articleRecommendations?.error;
