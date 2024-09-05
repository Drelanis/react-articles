import { FC, memo } from 'react';

import { useModel } from '../model';

import { ArticleDetails, articleDetailsReducer } from '$entities';
import { DynamicModuleLoader, ReducersList } from '$shared';

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

const ArticleDetailsPage: FC = memo(() => {
  useModel();

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <ArticleDetails />
    </DynamicModuleLoader>
  );
});

export default ArticleDetailsPage;
