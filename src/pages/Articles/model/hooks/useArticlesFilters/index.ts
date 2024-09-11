import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import {
  getArticlesListOrder,
  getArticlesListSearch,
  getArticlesListSort,
  getArticlesListType,
  getArticlesListView,
} from '../../selectores';
import { fetchArticlesList } from '../../services';
import { articlesListActions } from '../../slices';

import {
  ArticleType,
  ListOrderField,
  ListSortField,
  ListView,
  useAppDispatch,
} from '$shared';

export const useArticlesFilters = () => {
  const dispatch = useAppDispatch();

  const view = useSelector(getArticlesListView);
  const sort = useSelector(getArticlesListSort);
  const order = useSelector(getArticlesListOrder);
  const search = useSelector(getArticlesListSearch);
  const type = useSelector(getArticlesListType);

  const fetchData = useCallback(async () => {
    await dispatch(fetchArticlesList({ replace: true }));
  }, [dispatch]);

  const onChangeView = useCallback(
    async (listView: ListView) => {
      dispatch(articlesListActions.setView(listView));
      await fetchData();
    },
    [dispatch, fetchData],
  );

  const onChangeSort = useCallback(
    async (newSort: ListSortField) => {
      dispatch(articlesListActions.setSort(newSort));
      dispatch(articlesListActions.setPage(1));
      await fetchData();
    },
    [dispatch, fetchData],
  );

  const onChangeOrder = useCallback(
    async (newOrder: ListOrderField) => {
      dispatch(articlesListActions.setOrder(newOrder));
      dispatch(articlesListActions.setPage(1));
      await fetchData();
    },
    [dispatch, fetchData],
  );

  const onChangeSearch = useCallback(
    async (searchValue: string) => {
      dispatch(articlesListActions.setSearch(searchValue));
      dispatch(articlesListActions.setPage(1));
      await fetchData();
    },
    [dispatch, fetchData],
  );

  const onChangeType = useCallback(
    async (value: ArticleType) => {
      dispatch(articlesListActions.setType(value));
      dispatch(articlesListActions.setPage(1));
      await fetchData();
    },
    [dispatch, fetchData],
  );

  return {
    view,
    sort,
    order,
    search,
    type: type ?? ArticleType.ALL,
    onChangeView,
    onChangeSort,
    onChangeOrder,
    onChangeSearch,
    onChangeType,
  };
};
