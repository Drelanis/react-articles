import { createAsyncThunk } from '@reduxjs/toolkit';

import { getArticlesListIsInitialized } from '../../selectores';
import { fetchArticlesList } from '../fetchArticlesList';

import { articlesListActions } from '$pages/Articles/model/slices';
import { ThunkConfig } from '$shared';

export const initArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>('articlesPage/initArticlesPage', async (_, thunkApi) => {
  const { dispatch, getState } = thunkApi;
  const isInitialized = getArticlesListIsInitialized(getState());

  if (!isInitialized) {
    dispatch(articlesListActions.initState());
    await dispatch(fetchArticlesList({ page: 1 }));
  }
});
