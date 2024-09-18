import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  getArticlesListLimit,
  getArticlesListOrder,
  getArticlesListPage,
  getArticlesListSearch,
  getArticlesListSort,
  getArticlesListType,
} from '../../selectors';

import { Article } from '$entities';
import {
  addQueryParams,
  AppRoutes,
  ArticleType,
  ErrorHints,
  ThunkConfig,
  USER_LOCAL_STORAGE_KEY,
} from '$shared';

type Params = {
  replace?: boolean;
};

export const fetchArticlesList = createAsyncThunk<
  Article[],
  Params,
  ThunkConfig<ErrorHints>
>('articleList/fetchArticlesList', async (_, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;

  try {
    const limit = getArticlesListLimit(getState());
    const page = getArticlesListPage(getState());
    const sort = getArticlesListSort(getState());
    const order = getArticlesListOrder(getState());
    const search = getArticlesListSearch(getState());
    const type = getArticlesListType(getState());

    const typeParameter = type === ArticleType.ALL ? undefined : type;

    addQueryParams({
      sort,
      order,
      search,
      type,
    });

    const response = await extra.api.get<Article[]>(AppRoutes.ARTICLES, {
      headers: {
        Authorization: localStorage.getItem(USER_LOCAL_STORAGE_KEY),
      },
      params: {
        _expand: 'user',
        _limit: limit,
        _page: page,
        _sort: sort,
        _order: order,
        q: search,
        type: typeParameter,
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
