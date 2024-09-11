import { FC, memo } from 'react';

import { useModel } from '../model';

import classNames from './index.module.scss';

import {
  buildClassNames,
  ListSortSelector,
  ListTypeSelector,
  ListView,
  ListViewSelector,
  Search,
} from '$shared';

type Props = {
  onChangeOrder: () => void;
  onChangeSearch: () => void;
  onChangeSort: () => void;
  onChangeType: () => void;
  onChangeView: () => void;
  order: string;
  search: string;
  sort: string;
  type: string;
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

  const { sortFieldOptions, typeTabs, orderOptions } = useModel();

  const {
    containerClassNames,
    sortWrapperClassNames,
    searchClassNames,
    tabsClassNames,
  } = useStyles({ className });

  return (
    <div className={containerClassNames}>
      <div className={sortWrapperClassNames}>
        <ListSortSelector
          order={order}
          sort={sort}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
          orderOptions={orderOptions}
          sortFieldOptions={sortFieldOptions}
        />
        <ListViewSelector view={view} onViewClick={onChangeView} />
      </div>
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
    </div>
  );
});

type StyleProps = Pick<Props, 'className'>;

const useStyles = (params: StyleProps) => {
  const { className = '' } = params;

  const containerClassNames = buildClassNames({
    classNames: '',
    additional: [className],
  });

  const sortWrapperClassNames = buildClassNames({
    classNames: classNames.sortWrapper,
  });

  const searchClassNames = buildClassNames({
    classNames: classNames.search,
  });

  const tabsClassNames = buildClassNames({
    classNames: classNames.tabs,
  });

  return {
    containerClassNames,
    sortWrapperClassNames,
    searchClassNames,
    tabsClassNames,
  };
};
