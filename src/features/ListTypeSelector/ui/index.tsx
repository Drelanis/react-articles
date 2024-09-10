import { FC, memo, useCallback } from 'react';

import { ArticleType } from '$entities';
import { buildClassNames, TabItem, Tabs } from '$shared';

type Props = {
  onChangeType: (type: ArticleType) => void;
  typeTabs: TabItem[];
  value: string;
  className?: string;
};

export const ListTypeSelector: FC<Props> = memo((props) => {
  const { className, value, onChangeType, typeTabs } = props;

  const { containerClassNames } = useStyles({ className });

  const onTabClick = useCallback(
    (tab: TabItem) => {
      onChangeType(tab.value as ArticleType);
    },
    [onChangeType],
  );

  return (
    <Tabs
      tabs={typeTabs}
      value={value}
      onTabClick={onTabClick}
      className={containerClassNames}
    />
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
