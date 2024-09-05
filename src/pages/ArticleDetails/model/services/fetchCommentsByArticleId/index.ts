import { createAsyncThunk } from '@reduxjs/toolkit';

import { CommentType } from '$entities';
import { ErrorHints, ThunkConfig } from '$shared';

export const fetchCommentsByArticleId = createAsyncThunk<
  CommentType[],
  string | undefined,
  ThunkConfig<ErrorHints>
>('articleDetails/fetchCommentsByArticleId', async (articleId, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  if (!articleId) {
    return rejectWithValue('COMMON_ERROR');
  }

  try {
    const response = await extra.api.get<CommentType[]>('/comments', {
      params: {
        articleId,
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
