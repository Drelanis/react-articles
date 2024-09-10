import { useCallback, useMemo } from 'react';

import { TabItem } from '../types';

import { Card, CardVariant } from '$shared/ui/Card';

type Params = {
  onTabClick: (tab: TabItem) => void;
  tabs: TabItem[];
  value: string;
};

export const useModel = (params: Params) => {
  const { tabs, onTabClick, value } = params;

  const clickHandle = useCallback(
    (tab: TabItem) => () => {
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
