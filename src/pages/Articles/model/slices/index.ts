import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

import { ArticlesPageLimits } from '../constants';
import { fetchArticlesList } from '../services';
import { ArticlesListSchemaType } from '../types';

import { Article, ArticleView } from '$entities';
import {
  ARTICLES_TILE_ITEMS_LIMIT,
  LOCAL_STORAGE_ARTICLES_VIEW,
  StateSchema,
} from '$shared';

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticlesList = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesList || articlesAdapter.getInitialState(),
);

const articlesSlice = createSlice({
  name: 'articlesSlice',
  initialState: articlesAdapter.getInitialState<ArticlesListSchemaType>({
    ids: [],
    entities: {},
    isLoading: false,
    error: '',
    view: ArticleView.LIST,
    hasMore: true,
    limit: ARTICLES_TILE_ITEMS_LIMIT,
    page: 1,
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(LOCAL_STORAGE_ARTICLES_VIEW, action.payload);
    },
    initState: (state) => {
      const view =
        (localStorage.getItem(LOCAL_STORAGE_ARTICLES_VIEW) as ArticleView) ||
        ArticleView.TILE;

      state.view = view;
      state.limit = ArticlesPageLimits[view];
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
    setHasMore: (state, action: PayloadAction<boolean>) => {
      state.hasMore = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchArticlesList.fulfilled,
        (state, action: PayloadAction<Article[]>) => {
          state.isLoading = false;
          articlesAdapter.setAll(state, action.payload);
        },
      )
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articlesListReducer } = articlesSlice;
export const { actions: articlesListActions } = articlesSlice;
