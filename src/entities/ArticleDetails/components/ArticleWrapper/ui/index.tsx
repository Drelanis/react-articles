import { FC } from 'react';
import { useParams } from 'react-router-dom';

import {
  articleDetailsReducer,
  fetchArticleById,
} from '$entities/ArticleDetails/model';
import {
  DynamicModuleLoader,
  ReducersList,
  useAppDispatch,
  useInitialEffect,
} from '$shared';

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleWrapper: FC = (props) => {
  const { children } = props;

  const { id } = useParams<{ id: string }>();

  const dispatch = useAppDispatch();

  useInitialEffect(() => {
    void dispatch(fetchArticleById(id));
  });

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      {children}
    </DynamicModuleLoader>
  );
};
