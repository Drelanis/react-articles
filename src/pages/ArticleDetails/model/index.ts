import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { getArticleCommentsIsLoading } from './selectors';
import { addCommentForArticle, fetchCommentsByArticleId } from './services';
import { getArticleComments } from './slices';

import { AppRoutes, useAppDispatch, useInitialEffect } from '$shared';

export const useModel = () => {
  const { id } = useParams<{ id: string }>();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const comments = useSelector(getArticleComments.selectAll);
  const isCommentsLoading = useSelector(getArticleCommentsIsLoading);

  const onSendComment = useCallback(
    async (text: string) => {
      await dispatch(addCommentForArticle(text));
    },
    [dispatch],
  );

  useInitialEffect(() => {
    void dispatch(fetchCommentsByArticleId(id));
  });

  const onBackToList = useCallback(() => {
    navigate(AppRoutes.ARTICLES);
  }, [navigate]);

  return { comments, isCommentsLoading, onSendComment, onBackToList };
};

export { ArticleDetailsCommentsSchema } from './types';
export { articleDetailsCommentsReducer } from './slices';
