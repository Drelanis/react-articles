import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getArticleCommentsIsLoading } from './selectors';
import { addCommentForArticle, fetchCommentsByArticleId } from './services';
import { getArticleComments } from './slices';

import { useAppDispatch, useInitialEffect } from '$shared';

export const useModel = () => {
  const { id } = useParams<{ id: string }>();

  const dispatch = useAppDispatch();

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

  return { comments, isCommentsLoading, onSendComment };
};

export { ArticleDetailsCommentsSchema } from './types';
