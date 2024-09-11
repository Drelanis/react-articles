import { useCallback, useMemo } from 'react';

import { TabItem } from '../types';

import { Card, CardVariant } from '$shared/ui/Card';

type Params<Type extends string> = {
  onTabClick: (tab: TabItem<Type>) => void;
  tabs: TabItem<Type>[];
  value: Type;
};

export const useModel = <Type extends string>(params: Params<Type>) => {
  const { tabs, onTabClick, value } = params;

  const clickHandle = useCallback(
    (tab: TabItem<Type>) => () => {
      onTabClick(tab);
    },
    [onTabClick],
  );

  const TabComponents = useMemo(() => {
    return tabs.map((tab) => (
      <Card
        variant={
          tab.value === value ? CardVariant.NORMAL : CardVariant.OUTLINED
        }
        key={tab.value}
        onClick={clickHandle(tab)}
      >
        {tab.content}
      </Card>
    ));
  }, [clickHandle, tabs, value]);

  return { TabComponents };
};
