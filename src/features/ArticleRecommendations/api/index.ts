import { Article } from '$entities';
import { AppRoutes, rtkApi } from '$shared';

const recommendationApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    getArticleRecommendations: builder.query<Article[], number>({
      query: (limit) => ({
        url: AppRoutes.ARTICLES,
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
});

export const { useGetArticleRecommendationsQuery } = recommendationApi;
