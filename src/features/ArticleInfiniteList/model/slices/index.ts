import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

import { ArticlesPageLimits } from '../constants';
import { fetchArticlesList } from '../services';
import { ArticlesListSchemaType } from '../types';

import { Article } from '$entities';
import {
  ARTICLES_TILE_ITEMS_LIMIT,
  ArticleType,
  ListOrderField,
  ListSortField,
  ListView,
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
    search: '',
    sort: ListSortField.CREATED,
    order: ListOrderField.ASC,
    ids: [],
    entities: {},
    isLoading: false,
    error: '',
    view: ListView.LIST,
    hasMore: true,
    limit: ARTICLES_TILE_ITEMS_LIMIT,
    page: 1,
    type: ArticleType.ALL,
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
    setOrder: (state, action: PayloadAction<ListOrderField>) => {
      state.order = action.payload;
    },
    setSort: (state, action: PayloadAction<ListSortField>) => {
      state.sort = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setType: (state, action: PayloadAction<ArticleType>) => {
      state.type = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;

        if (action.meta.arg.replace) {
          articlesAdapter.removeAll(state);
        }
      })
      .addCase(fetchArticlesList.fulfilled, (state, action) => {
        const listLimit = state.limit || ARTICLES_TILE_ITEMS_LIMIT;

        state.isLoading = false;
        state.hasMore = action.payload.length >= listLimit;

        if (action.meta.arg.replace) {
          articlesAdapter.setAll(state, action.payload);
        } else {
          articlesAdapter.addMany(state, action.payload);
        }
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articlesListReducer } = articlesSlice;
export const { actions: articlesListActions } = articlesSlice;
