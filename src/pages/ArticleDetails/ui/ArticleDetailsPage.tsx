import { FC, memo } from 'react';

import { useModel } from '../model';
import { articleDetailsCommentsReducer } from '../model/slices';

import { ArticleDetails, Comments } from '$entities';
import { DynamicModuleLoader, ReducersList } from '$shared';

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage: FC = memo(() => {
  const { comments, isCommentsLoading } = useModel();

  return (
    <>
      <ArticleDetails />
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
        <Comments comments={comments} isLoading={isCommentsLoading} />
      </DynamicModuleLoader>
    </>
  );
});

export default ArticleDetailsPage;
