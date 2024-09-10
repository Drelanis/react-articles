import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

import { ArticleSortField, ArticlesPageLimits } from '../constants';
import { fetchArticlesList } from '../services';
import { ArticlesListSchemaType } from '../types';

import { Article } from '$entities';
import {
  ARTICLES_TILE_ITEMS_LIMIT,
  ListView,
  LOCAL_STORAGE_ARTICLES_VIEW,
  SortOrderType,
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
    search: '',
    sort: ArticleSortField.CREATED,
    order: 'ask',
    ids: [],
    entities: {},
    isLoading: false,
    error: '',
    view: ListView.LIST,
    hasMore: true,
    limit: ARTICLES_TILE_ITEMS_LIMIT,
    page: 1,
  }),
  reducers: {
    setView: (state, action: PayloadAction<ListView>) => {
      state.view = action.payload;
      localStorage.setItem(LOCAL_STORAGE_ARTICLES_VIEW, action.payload);
    },
    initState: (state) => {
      const view =
        (localStorage.getItem(LOCAL_STORAGE_ARTICLES_VIEW) as ListView) ||
        ListView.TILE;

      state.view = view;
      state.limit = ArticlesPageLimits[view];
      state._isInitialized = true;
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
    setOrder: (state, action: PayloadAction<SortOrderType>) => {
      state.order = action.payload;
    },
    setSort: (state, action: PayloadAction<ArticleSortField>) => {
      state.sort = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
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
          articlesAdapter.addMany(state, action.payload);
          state.hasMore = action.payload.length > 0;
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
