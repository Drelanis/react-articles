import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import classNames from './index.module.scss';

import { Select, SelectOption } from '$shared/ui/Select';
import { buildClassNames } from '$shared/utils';

type Props = {
  onChangeOrder: (newOrder: string) => void;
  onChangeSort: (newSort: string) => void;
  order: string;
  orderOptions: SelectOption[];
  sort: string;
  sortFieldOptions: SelectOption[];
  className?: string;
};

export const ListSortSelector: FC<Props> = memo((props: Props) => {
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

  const changeSortHandler = useCallback(
    (newSort: string) => {
      onChangeSort(newSort);
    },
    [onChangeSort],
  );

  const changeOrderHandler = useCallback(
    (newOrder: string) => {
      onChangeOrder(newOrder);
    },
    [onChangeOrder],
  );

  const { containerClassNames } = useStyles({ className });

  return (
    <div className={containerClassNames}>
      <Select
        options={sortFieldOptions}
        label={t('sortBy')}
        value={sort}
        onChange={changeSortHandler}
      />
      <Select
        options={orderOptions}
        value={order}
        onChange={changeOrderHandler}
        className={classNames.order}
      />
    </div>
  );
});

type StyleProps = Pick<Props, 'className'>;

const useStyles = (params: StyleProps) => {
  const { className = '' } = params;

  const containerClassNames = buildClassNames({
    classNames: classNames.articleSortSelector,
    additional: [className],
  });

  return { containerClassNames };
};
