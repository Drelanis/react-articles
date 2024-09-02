import { useMemo, useState } from 'react';

import { SidebarItem } from '../components';
import { SidebarItemsList } from '../constants';

export const useModel = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  const onToggle = () => {
    setIsCollapsed((prev) => !prev);
  };

  const itemsList = useMemo(
    () =>
      SidebarItemsList.map((item) => (
        <SidebarItem item={item} isCollapsed={isCollapsed} key={item.path} />
      )),
    [isCollapsed],
  );

  return { onToggle, isCollapsed, itemsList };
};
