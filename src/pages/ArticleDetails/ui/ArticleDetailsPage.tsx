import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useModel } from '../model';
import { articleDetailsCommentsReducer } from '../model/slices';

import classNames from './index.module.scss';

import { ArticleDetails, Comments } from '$entities';
import { AddCommentFormLazy } from '$features';
import { DynamicModuleLoader, ReducersList, Text } from '$shared';

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage: FC = memo(() => {
  const { comments, isCommentsLoading, onSendComment } = useModel();

  const { t } = useTranslation();

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <ArticleDetails />
      <Text className={classNames.commentTitle} title={t('comments')} />
      <AddCommentFormLazy onSendComment={onSendComment} />
      <Comments comments={comments} isLoading={isCommentsLoading} />
    </DynamicModuleLoader>
  );
});

export default ArticleDetailsPage;
