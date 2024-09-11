import { createAsyncThunk } from '@reduxjs/toolkit';

import { getArticlesListIsInitialized } from '../../selectores';
import { fetchArticlesList } from '../fetchArticlesList';

import { articlesListActions } from '$pages/Articles/model/slices';
import {
  ArticleType,
  ListOrderField,
  ListSortField,
  setQueryParamsInStore,
  ThunkConfig,
} from '$shared';

export const initArticlesPage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>('articlesPage/initArticlesPage', async (searchParams, thunkApi) => {
  const { dispatch, getState } = thunkApi;
  const isInitialized = getArticlesListIsInitialized(getState());

  if (!isInitialized) {
    const paramsActionsMap = {
      order: (value: string) =>
        dispatch(articlesListActions.setOrder(value as ListOrderField)),
      sort: (value: string) =>
        dispatch(articlesListActions.setSort(value as ListSortField)),
      search: (value: string) => dispatch(articlesListActions.setSearch(value)),
      type: (value: string) =>
        dispatch(articlesListActions.setType(value as ArticleType)),
    };

    setQueryParamsInStore(searchParams, paramsActionsMap);

    dispatch(articlesListActions.initState());
    await dispatch(fetchArticlesList({ replace: true }));
  }
});
