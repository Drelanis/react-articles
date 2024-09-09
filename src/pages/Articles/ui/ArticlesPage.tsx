import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useModel } from '../model';
import { articlesListReducer } from '../model/slices';

import { ArticlesList } from '$entities';
import { ArticleViewSelector } from '$features';
import {
  buildClassNames,
  DynamicModuleLoader,
  ReducersList,
  Text,
  TextAlign,
} from '$shared';

const reducers: ReducersList = {
  articlesList: articlesListReducer,
};

type Props = {
  className?: string;
};

const ArticlesPage = memo((props: Props) => {
  const { className } = props;
  const { t } = useTranslation('articles');

  const { containerClassNames } = useStyles({ className });

  const { isLoading, articles, articlesListView, onChangeView } = useModel();

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={containerClassNames}>
        <Text align={TextAlign.CENTER} title={t('articlesPageTitle')} />
        <ArticleViewSelector
          view={articlesListView}
          onViewClick={onChangeView}
        />
        <ArticlesList
          articles={articles}
          isLoading={isLoading}
          view={articlesListView}
        />
      </div>
    </DynamicModuleLoader>
  );
});

const useStyles = (params: Props) => {
  const { className = '' } = params;

  const containerClassNames = buildClassNames({
    classNames: '',
    additional: [className],
  });

  return { containerClassNames };
};

export default ArticlesPage;
