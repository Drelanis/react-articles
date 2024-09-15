import { useGetArticleRecommendationsQuery } from '../api';

import { ARTICLES_LIST_ITEMS_LIMIT } from '$shared';

export const useModel = () => {
  const { data, isLoading, error } = useGetArticleRecommendationsQuery(
    ARTICLES_LIST_ITEMS_LIMIT,
  );

  return { data, isLoading, error };
};
