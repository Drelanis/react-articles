import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useModel } from '../model';
import { articleDetailsCommentsReducer } from '../model/slices';

import classNames from './ArticleDetailsPage.module.scss';

import { ArticleDetails, Comments } from '$entities';
import { AddCommentFormLazy } from '$features';
import {
  Button,
  ButtonVariant,
  DynamicModuleLoader,
  ReducersList,
  Text,
} from '$shared';

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage: FC = memo(() => {
  const { comments, isCommentsLoading, onSendComment, onBackToList } =
    useModel();

  const { t } = useTranslation();

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Button variant={ButtonVariant.OUTLINE} onClick={onBackToList}>
        {t('goBack')}
      </Button>
      <ArticleDetails />
      {!isCommentsLoading && (
        <Text className={classNames.commentTitle} title={t('comments')} />
      )}
      {!isCommentsLoading && (
        <AddCommentFormLazy onSendComment={onSendComment} />
      )}
      <Comments comments={comments} isLoading={isCommentsLoading} />
    </DynamicModuleLoader>
  );
});

export default ArticleDetailsPage;
