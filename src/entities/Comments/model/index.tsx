import { useMemo } from 'react';

import { CommentCard } from '../components';
import classNames from '../ui/index.module.scss';

import { CommentType } from './types';

type Params = {
  comments?: CommentType[];
};

export const useModel = (params: Params) => {
  const { comments } = params;

  const isComments = Boolean(comments?.length);

  const CommentsList = useMemo(() => {
    return comments?.map((comment) => (
      <CommentCard
        key={comment.id}
        className={classNames.comment}
        comment={comment}
      />
    ));
  }, [comments]);

  return { CommentsList, isComments };
};

export * from './types';
