import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import {
  getArticleCommentsIsLoading,
  getArticleRecommendationsIsLoading,
} from './selectors';
import {
  addCommentForArticle,
  fetchArticlesRecommendations,
  fetchCommentsByArticleId,
} from './services';
import { getArticleComments, getArticleRecommendations } from './slices';

import { AppRoutes, useAppDispatch, useInitialEffect } from '$shared';

export const useModel = () => {
  const { id } = useParams<{ id: string }>();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const comments = useSelector(getArticleComments.selectAll);
  const isCommentsLoading = useSelector(getArticleCommentsIsLoading);

  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const isRecommendationsLoading = useSelector(
    getArticleRecommendationsIsLoading,
  );

  const onSendComment = useCallback(
    async (text: string) => {
      await dispatch(addCommentForArticle(text));
    },
    [dispatch],
  );

  useInitialEffect(() => {
    void dispatch(fetchCommentsByArticleId(id));
    void dispatch(fetchArticlesRecommendations());
  });

  const onBackToList = useCallback(() => {
    navigate(AppRoutes.ARTICLES);
  }, [navigate]);

  return {
    comments,
    isCommentsLoading,
    onSendComment,
    onBackToList,
    recommendations,
    isRecommendationsLoading,
  };
};

export {
  ArticleDetailsCommentsSchema,
  ArticleRecommendationsSchema,
} from './types';
export {
  articleDetailsCommentsReducer,
  articleRecommendationsReducer,
} from './slices';
