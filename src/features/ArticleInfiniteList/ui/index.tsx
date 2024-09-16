import { FC, memo } from 'react';

// import { useTranslation } from 'react-i18next';
import { articlesListReducer, useArticlesFilters, useLogic } from '../model';

import { ArticlesFilters } from './ArticlesFilters';
import classNames from './index.module.scss';

import { ArticlesList } from '$entities';
import {
  buildClassNames,
  DynamicModuleLoader,
  ReducersList,
  VStack,
} from '$shared';

type Props = {
  className?: string;
};

const reducers: ReducersList = {
  articlesList: articlesListReducer,
};

export const ArticleInfiniteList: FC<Props> = memo((props) => {
  const { className } = props;
  // const { t } = useTranslation();

  const { containerClassNames } = useStyles({ className });

  const { isLoading, articles, articlesListView, errorMessage } = useLogic();

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
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <VStack max className={containerClassNames}>
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
          className={classNames.articlesList}
          articles={articles}
          isLoading={isLoading}
          view={articlesListView}
          errorMessage={errorMessage}
        />
      </VStack>
    </DynamicModuleLoader>
  );
});

type UseStylesParams = Pick<Props, 'className'>;

const useStyles = (params: UseStylesParams) => {
  const { className = '' } = params;

  const containerClassNames = buildClassNames({
    classNames: '',
    additional: [className],
  });

  return { containerClassNames };
};
