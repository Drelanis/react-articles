import { createAsyncThunk } from '@reduxjs/toolkit';

import { Article } from '$entities';
import { AppRoutes, ErrorHints, ThunkConfig } from '$shared';

export const fetchArticlesRecommendations = createAsyncThunk<
  Article[],
  void,
  ThunkConfig<ErrorHints>
>('articleList/fetchArticlesRecommendations', async (props, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  try {
    const response = await extra.api.get<Article[]>(AppRoutes.ARTICLES, {
      params: {
        _limit: 4,
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
