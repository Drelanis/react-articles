import { FC, memo } from 'react';

import { useBuildArticlesFilters } from '../../model';

import classNames from './index.module.scss';

import {
  ArticleType,
  buildClassNames,
  HStack,
  ListOrderField,
  ListSortField,
  ListSortSelector,
  ListTypeSelector,
  ListView,
  ListViewSelector,
  Search,
  VStack,
} from '$shared';

type Props = {
  onChangeOrder: (newOrder: ListOrderField) => void;
  onChangeSearch: (searchValue: string) => void;
  onChangeSort: (newSort: ListSortField) => void;
  onChangeType: (value: ArticleType) => void;
  onChangeView: (listView: ListView) => void;
  order: ListOrderField;
  search: string;
  sort: ListSortField;
  type: ArticleType;
  view: ListView;
  className?: string;
};

export const ArticlesFilters: FC<Props> = memo((props) => {
  const {
    className,
    order,
    search,
    sort,
    type,
    view,
    onChangeOrder,
    onChangeSearch,
    onChangeSort,
    onChangeType,
    onChangeView,
  } = props;

  const { sortFieldOptions, typeTabs, orderOptions } =
    useBuildArticlesFilters();

  const { containerClassNames, searchClassNames, tabsClassNames } = useStyles({
    className,
  });

  return (
    <VStack max className={containerClassNames}>
      <HStack max align="center" justify="between">
        <ListSortSelector
          order={order}
          sort={sort}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
          orderOptions={orderOptions}
          sortFieldOptions={sortFieldOptions}
        />
        <ListViewSelector view={view} onViewClick={onChangeView} />
      </HStack>
      <Search
        className={searchClassNames}
        onChangeSearch={onChangeSearch}
        value={search}
      />
      <ListTypeSelector
        value={type}
        onChangeType={onChangeType}
        className={tabsClassNames}
        typeTabs={typeTabs}
      />
    </VStack>
  );
});

type StyleProps = Pick<Props, 'className'>;

const useStyles = (params: StyleProps) => {
  const { className = '' } = params;

  const containerClassNames = buildClassNames({
    classNames: '',
    additional: [className],
  });

  const searchClassNames = buildClassNames({
    classNames: classNames.search,
  });

  const tabsClassNames = buildClassNames({
    classNames: classNames.tabs,
  });

  return {
    containerClassNames,
    searchClassNames,
    tabsClassNames,
  };
};
