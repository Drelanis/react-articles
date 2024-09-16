import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import {
  getArticlesListError,
  getArticlesListIsLoading,
  getArticlesListView,
} from '../../selectors';
import { initArticlesPage } from '../../services';
import { getArticlesList } from '../../slices';

import { useAppDispatch, useInitialEffect } from '$shared';

export const useLogic = () => {
  const dispatch = useAppDispatch();

  const [searchParams] = useSearchParams();

  const articles = useSelector(getArticlesList.selectAll);
  const isLoading = useSelector(getArticlesListIsLoading);
  const errorMessage = useSelector(getArticlesListError);
  const articlesListView = useSelector(getArticlesListView);

  useInitialEffect(() => {
    void dispatch(initArticlesPage(searchParams));
  });

  return {
    articles,
    isLoading,
    errorMessage,
    articlesListView,
  };
};
