import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  getArticlesListHasMore,
  getArticlesListIsLoading,
  getArticlesListPage,
} from '../../selectores';
import { fetchArticlesList } from '../fetchArticlesList';

import { articlesListActions } from '$pages/Articles/model/slices';
import { ThunkConfig } from '$shared';

export const fetchNextArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>('articlesPage/fetchNextArticlesPage', async (_, thunkApi) => {
  const { getState, dispatch } = thunkApi;
  const hasMore = getArticlesListHasMore(getState());
  const page = getArticlesListPage(getState());
  const isLoading = getArticlesListIsLoading(getState());

  if (hasMore && !isLoading) {
    dispatch(articlesListActions.setPage(page + 1));
    await dispatch(fetchArticlesList({}));
  }
});
