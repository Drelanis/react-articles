import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useModel } from '../model';
import { useArticlesFilters } from '../model/hooks';
import { articlesListReducer } from '../model/slices';

import classNames from './index.module.scss';

import { ArticlesList } from '$entities';
import { ArticlesFilters } from '$features';
import {
  buildClassNames,
  DynamicModuleLoader,
  ReducersList,
  Text,
  TextAlign,
} from '$shared';
import { Page } from '$widgets';

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

  const {
    isLoading,
    articles,
    articlesListView,
    onLoadNextPage,
    errorMessage,
  } = useModel();

  const {
    view,
    sort,
    order,
    search,
    type,
    onChangeView,
    onChangeSort,
    onChangeOrder,
    onChangeSearch,
    onChangeType,
  } = useArticlesFilters();

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page className={containerClassNames} onScrollEnd={onLoadNextPage}>
        <Text align={TextAlign.CENTER} title={t('articlesPageTitle')} />
        <ArticlesFilters
          className={classNames.articlesFilersContainer}
          view={view}
          onChangeView={onChangeView}
          onChangeOrder={onChangeOrder}
          onChangeSearch={onChangeSearch}
          onChangeSort={onChangeSort}
          onChangeType={onChangeType}
          order={order}
          search={search}
          sort={sort}
          type={type}
        />
        <ArticlesList
          articles={articles}
          isLoading={isLoading}
          view={articlesListView}
          errorMessage={errorMessage}
        />
      </Page>
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
