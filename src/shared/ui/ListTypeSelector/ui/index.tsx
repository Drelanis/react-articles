import { useCallback } from 'react';

import { GenericMemoWrapper } from '$lib';
import { TabItem, Tabs } from '$shared/ui';
import { buildClassNames } from '$shared/utils';

type Props<Type extends string> = {
  onChangeType: (type: Type) => void;
  typeTabs: TabItem<Type>[];
  value: Type;
  className?: string;
};

export const ListTypeSelector = GenericMemoWrapper(
  <Type extends string>(props: Props<Type>) => {
    const { className, value, onChangeType, typeTabs } = props;

    const { containerClassNames } = useStyles({ className });

    const onTabClick = useCallback(
      (tab: TabItem<Type>) => {
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
  },
);

type UseStylesParams = Pick<Props<string>, 'className'>;

const useStyles = (params: UseStylesParams) => {
  const { className = '' } = params;

  const containerClassNames = buildClassNames({
    classNames: '',
    additional: [className],
  });

  return { containerClassNames };
};
