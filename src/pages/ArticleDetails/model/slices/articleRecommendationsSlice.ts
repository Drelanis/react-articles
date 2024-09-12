import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { fetchArticlesRecommendations } from '../services';
import { ArticleRecommendationsSchema } from '../types';

import { Article } from '$entities';
import { StateSchema } from '$shared';

const recommendationsAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticleRecommendations =
  recommendationsAdapter.getSelectors<StateSchema>(
    (state) =>
      state.articleRecommendations || recommendationsAdapter.getInitialState(),
  );

const articleRecommendationsSlice = createSlice({
  name: 'articleRecommendationsSlice',
  initialState:
    recommendationsAdapter.getInitialState<ArticleRecommendationsSchema>({
      isLoading: false,
      error: undefined,
      ids: [],
      entities: {},
    }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesRecommendations.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticlesRecommendations.fulfilled, (state, action) => {
        state.isLoading = false;
        recommendationsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticlesRecommendations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articleRecommendationsReducer } =
  articleRecommendationsSlice;
