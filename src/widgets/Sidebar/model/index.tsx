import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import { SidebarItem } from '../components';

import { getSidebarItems } from './selectors';

import { getUserAuthData } from '$entities';

export const useModel = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  const onToggle = () => {
    setIsCollapsed((prev) => !prev);
  };

  const authData = useSelector(getUserAuthData);
  const sidebarItems = useSelector(getSidebarItems);

  const itemsList = useMemo(
    () =>
      sidebarItems.map((item) => {
        if (item.authOnly && !authData) {
          return;
        }

        return (
          <SidebarItem item={item} isCollapsed={isCollapsed} key={item.path} />
        );
      }),
    [isCollapsed, authData, sidebarItems],
  );

  return { onToggle, isCollapsed, itemsList };
};

export * from './types';
