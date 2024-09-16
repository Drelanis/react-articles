import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import {
  articleDetailsCommentsReducer,
  articleRecommendationsReducer,
  useModel,
} from '../model';

import { ArticleDetails } from '$entities';
import { ArticleComments, ArticleRecommendations } from '$features';
import {
  Button,
  ButtonVariant,
  DynamicModuleLoader,
  ReducersList,
} from '$shared';
import { Page } from '$widgets';

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
  articleRecommendations: articleRecommendationsReducer,
};

const ArticleDetailsPage: FC = memo(() => {
  const { onBackToList } = useModel();

  const { t } = useTranslation();

  return (
    <Page>
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
        <Button variant={ButtonVariant.OUTLINE} onClick={onBackToList}>
          {t('goBack')}
        </Button>
        <ArticleDetails />
        <ArticleRecommendations />
        <ArticleComments />
      </DynamicModuleLoader>
    </Page>
  );
});

export default ArticleDetailsPage;
