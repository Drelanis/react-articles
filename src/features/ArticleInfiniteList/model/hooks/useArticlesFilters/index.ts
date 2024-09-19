import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import {
  getArticlesListOrder,
  getArticlesListSearch,
  getArticlesListSort,
  getArticlesListType,
  getArticlesListView,
} from '../../selectors';
import { fetchArticlesList } from '../../services';
import { articlesListActions } from '../../slices';

import {
  ARTICLES_LIST_ITEMS_LIMIT,
  ARTICLES_TILE_ITEMS_LIMIT,
  ArticleType,
  FETCH_DATA_DELAY,
  ListOrderField,
  ListSortField,
  ListView,
  useAppDispatch,
  useDebounce,
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

  const debouncedFetchData = useDebounce(fetchData, FETCH_DATA_DELAY);

  const onChangeView = useCallback(
    async (listView: ListView) => {
      dispatch(articlesListActions.setView(listView));

      if (listView === ListView.LIST) {
        dispatch(articlesListActions.setLimit(ARTICLES_LIST_ITEMS_LIMIT));
      } else {
        dispatch(articlesListActions.setLimit(ARTICLES_TILE_ITEMS_LIMIT));
      }

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
    (searchValue: string) => {
      dispatch(articlesListActions.setSearch(searchValue));
      dispatch(articlesListActions.setPage(1));
      debouncedFetchData();
    },
    [dispatch, debouncedFetchData],
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
