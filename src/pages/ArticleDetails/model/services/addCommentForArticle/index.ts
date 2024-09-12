import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId';

import { getArticleDetailsData, getUserAuthData } from '$entities';
import { AppRoutes, ErrorHints, ThunkConfig } from '$shared';

export const addCommentForArticle = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<ErrorHints>
>('articleDetails/addCommentForArticle', async (text, thunkApi) => {
  const { extra, dispatch, rejectWithValue, getState } = thunkApi;

  const userData = getUserAuthData(getState());
  const article = getArticleDetailsData(getState());

  if (!userData || !text || !article) {
    return rejectWithValue('NO_DATA');
  }

  try {
    const response = await extra.api.post<Comment>(AppRoutes.COMMENTS, {
      articleId: article.id,
      userId: userData.id,
      text,
    });

    if (!response.data) {
      throw new Error();
    }

    await dispatch(fetchCommentsByArticleId(article.id));

    return response.data;
  } catch {
    return rejectWithValue('COMMON_ERROR');
  }
});
