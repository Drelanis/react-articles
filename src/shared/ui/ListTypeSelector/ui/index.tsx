import { FC, memo, useCallback } from 'react';

import { buildClassNames, TabItem, Tabs } from '$shared';

type Props = {
  onChangeType: (type: string) => void;
  typeTabs: TabItem[];
  value: string;
  className?: string;
};

export const ListTypeSelector: FC<Props> = memo((props) => {
  const { className, value, onChangeType, typeTabs } = props;

  const { containerClassNames } = useStyles({ className });

  const onTabClick = useCallback(
    (tab: TabItem) => {
      onChangeType(tab.value);
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
