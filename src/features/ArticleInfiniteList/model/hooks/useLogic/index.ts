import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import {
  getArticlesListError,
  getArticlesListIsLoading,
  getArticlesListView,
} from '../../selectors';
import { fetchNextArticlesPage } from '../../services';
import { getArticlesList } from '../../slices';

import { useAppDispatch } from '$shared';

export const useLogic = () => {
  const dispatch = useAppDispatch();

  const articles = useSelector(getArticlesList.selectAll);
  const isLoading = useSelector(getArticlesListIsLoading);
  const errorMessage = useSelector(getArticlesListError);
  const articlesListView = useSelector(getArticlesListView);

  const onLoadNextPage = useCallback(async () => {
    await dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  return {
    articles,
    isLoading,
    errorMessage,
    articlesListView,
    onLoadNextPage,
  };
};
