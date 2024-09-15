import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import {
  articleDetailsCommentsReducer,
  articleRecommendationsReducer,
  useModel,
} from '../model';

import classNames from './ArticleDetailsPage.module.scss';

import { ArticleDetails, Comments } from '$entities';
import { AddCommentFormLazy, ArticleRecommendations } from '$features';
import {
  Button,
  ButtonVariant,
  DynamicModuleLoader,
  ReducersList,
  Text,
  VStack,
} from '$shared';
import { Page } from '$widgets';

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
  articleRecommendations: articleRecommendationsReducer,
};

const ArticleDetailsPage: FC = memo(() => {
  const { comments, isCommentsLoading, onSendComment, onBackToList } =
    useModel();

  const { t } = useTranslation();

  return (
    <Page>
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
        <Button variant={ButtonVariant.OUTLINE} onClick={onBackToList}>
          {t('goBack')}
        </Button>
        <ArticleDetails />
        <ArticleRecommendations />
        <VStack gap="16">
          {!isCommentsLoading && (
            <Text className={classNames.commentTitle} title={t('comments')} />
          )}
          {!isCommentsLoading && (
            <AddCommentFormLazy onSendComment={onSendComment} />
          )}
          <Comments comments={comments} isLoading={isCommentsLoading} />
        </VStack>
      </DynamicModuleLoader>
    </Page>
  );
});

export default ArticleDetailsPage;
