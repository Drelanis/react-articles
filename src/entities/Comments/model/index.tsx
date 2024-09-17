import { useMemo } from 'react';

import { CommentCard } from '../components';

import { CommentType } from './types';

type Params = {
  comments?: CommentType[];
};

export const useModel = (params: Params) => {
  const { comments } = params;

  const isComments = Boolean(comments?.length);

  const CommentsList = useMemo(() => {
    return comments?.map((comment) => (
      <CommentCard key={comment.id} comment={comment} />
    ));
  }, [comments]);

  return { CommentsList, isComments };
};

export * from './types';
