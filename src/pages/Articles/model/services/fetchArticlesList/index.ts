import { createAsyncThunk } from '@reduxjs/toolkit';

import { getArticlesListLimit } from '../../selectores';

import { Article } from '$entities';
import { ErrorHints, ThunkConfig } from '$shared';

type Props = {
  page?: number;
};

export const fetchArticlesList = createAsyncThunk<
  Article[],
  Props,
  ThunkConfig<ErrorHints>
>('articleList/fetchArticlesList', async (props, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;
  const { page = 1 } = props;

  const limit = getArticlesListLimit(getState());

  try {
    const response = await extra.api.get<Article[]>('/articles', {
      params: {
        _expand: 'user',
        _limit: limit,
        _page: page,
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
