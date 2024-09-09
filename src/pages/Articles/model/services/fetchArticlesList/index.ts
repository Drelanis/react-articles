import { createAsyncThunk } from '@reduxjs/toolkit';

import { Article } from '$entities';
import { ErrorHints, ThunkConfig } from '$shared';

export const fetchArticlesList = createAsyncThunk<
  Article[],
  void,
  ThunkConfig<ErrorHints>
>('articleList/fetchArticlesList', async (_, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  try {
    const response = await extra.api.get<Article[]>('/articles', {
      params: {
        _expand: 'user',
      },
    });

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch {
    return rejectWithValue('COMMON_ERROR');
  }
});
