import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import {
  getArticlesListError,
  getArticlesListIsLoading,
  getArticlesListView,
} from './selectores';
import { fetchNextArticlesPage, initArticlesPage } from './services';
import { getArticlesList } from './slices';

import { useAppDispatch, useInitialEffect } from '$shared';

export const useModel = () => {
  const dispatch = useAppDispatch();

  const articles = useSelector(getArticlesList.selectAll);
  const isLoading = useSelector(getArticlesListIsLoading);
  const errorMessage = useSelector(getArticlesListError);
  const articlesListView = useSelector(getArticlesListView);

  const onLoadNextPage = useCallback(async () => {
    await dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  useInitialEffect(() => {
    void dispatch(initArticlesPage());
  });

  return {
    articles,
    isLoading,
    errorMessage,
    articlesListView,
    onLoadNextPage,
  };
};
