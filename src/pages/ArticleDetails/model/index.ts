import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getArticleCommentsIsLoading } from './selectors';
import { fetchCommentsByArticleId } from './services';
import { getArticleComments } from './slices';

import { useAppDispatch, useInitialEffect } from '$shared';

export const useModel = () => {
  const { id } = useParams<{ id: string }>();

  const dispatch = useAppDispatch();

  const comments = useSelector(getArticleComments.selectAll);
  const isCommentsLoading = useSelector(getArticleCommentsIsLoading);

  useInitialEffect(() => {
    void dispatch(fetchCommentsByArticleId(id));
  });

  return { comments, isCommentsLoading };
};

export { ArticleDetailsCommentsSchema } from './types';
