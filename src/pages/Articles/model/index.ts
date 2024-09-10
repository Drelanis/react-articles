import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
  getArticlesListError,
  getArticlesListIsLoading,
  getArticlesListView,
} from './selectores';
import { fetchNextArticlesPage, initArticlesPage } from './services';
import { articlesListActions, getArticlesList } from './slices';

import { ArticleType, ArticleView } from '$entities';
import { TabItem, useAppDispatch, useInitialEffect } from '$shared';

export const useModel = () => {
  const { t } = useTranslation();

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
    void dispatch(initArticlesPage());
  });

  const typeTabs = useMemo<TabItem[]>(
    () => [
      {
        value: ArticleType.ALL,
        content: t('all'),
      },
      {
        value: ArticleType.IT,
        content: t('it'),
      },
      {
        value: ArticleType.ECONOMICS,
        content: t('economics'),
      },
      {
        value: ArticleType.SCIENCE,
        content: t('science'),
      },
    ],
    [t],
  );

  return {
    typeTabs,
    articles,
    isLoading,
    errorMessage,
    articlesListView,
    onChangeView,
    onLoadNextPage,
  };
};
