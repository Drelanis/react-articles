import { useTranslation } from 'react-i18next';

import classNames from './index.module.scss';

import { GenericMemoWrapper } from '$shared/lib';
import { Select, SelectOption } from '$shared/ui/Select';
import { buildClassNames } from '$shared/utils';

type Props<OrderType extends string, SortType extends string> = {
  onChangeOrder: (newOrder: OrderType) => void;
  onChangeSort: (newSort: SortType) => void;
  order: OrderType;
  orderOptions: SelectOption<OrderType>[];
  sort: SortType;
  sortFieldOptions: SelectOption<SortType>[];
  className?: string;
};

export const ListSortSelector = GenericMemoWrapper(
  <OrderType extends string, SortType extends string>(
    props: Props<OrderType, SortType>,
  ) => {
    const {
      className,
      onChangeOrder,
      onChangeSort,
      order,
      sort,
      orderOptions,
      sortFieldOptions,
    } = props;

    const { t } = useTranslation();

    const { containerClassNames } = useStyles({ className });

    return (
      <div className={containerClassNames}>
        <Select
          options={sortFieldOptions}
          label={t('sortBy')}
          value={sort}
          onChange={onChangeSort}
        />
        <Select
          options={orderOptions}
          value={order}
          onChange={onChangeOrder}
          className={classNames.order}
        />
      </div>
    );
  },
);

type StyleProps = Pick<Props<string, string>, 'className'>;

const useStyles = (params: StyleProps) => {
  const { className = '' } = params;

  const containerClassNames = buildClassNames({
    classNames: classNames.articleSortSelector,
    additional: [className],
  });

  return { containerClassNames };
};
