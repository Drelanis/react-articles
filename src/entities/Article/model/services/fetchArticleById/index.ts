import { createAsyncThunk } from '@reduxjs/toolkit';

import { Article } from '../../types';

import { ErrorHints, ThunkConfig } from '$shared';

export const fetchArticleById = createAsyncThunk<
  Article,
  string | undefined,
  ThunkConfig<ErrorHints>
>('articleDetails/fetchArticleById', async (articleId, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  try {
    const response = await extra.api.get<Article>(`/articles/${articleId}`);

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch {
    return rejectWithValue('COMMON_ERROR');
  }
});
