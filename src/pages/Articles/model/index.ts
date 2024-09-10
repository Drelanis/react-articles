import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import {
  getArticlesListError,
  getArticlesListIsLoading,
  getArticlesListView,
} from './selectores';
import { fetchArticlesList, fetchNextArticlesPage } from './services';
import { articlesListActions, getArticlesList } from './slices';

import { ArticleView } from '$entities';
import { useAppDispatch, useInitialEffect } from '$shared';

export const useModel = () => {
  const dispatch = useAppDispatch();

  const articles = useSelector(getArticlesList.selectAll);
  const isLoading = useSelector(getArticlesListIsLoading);
  const errorMessage = useSelector(getArticlesListError);
  const articlesListView = useSelector(getArticlesListView);

  const onChangeView = useCallback(
    (view: ArticleView) => dispatch(articlesListActions.setView(view)),
    [dispatch],
  );

  const onLoadNextPage = useCallback(async () => {
    await dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(articlesListActions.initState());

    void dispatch(fetchArticlesList({ page: 1 }));
  });

  return {
    articles,
    isLoading,
    errorMessage,
    articlesListView,
    onChangeView,
    onLoadNextPage,
  };
};
