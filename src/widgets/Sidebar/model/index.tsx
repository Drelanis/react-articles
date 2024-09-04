import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import { SidebarItem } from '../components';
import { SidebarItemsList } from '../constants';

import { getUserAuthData } from '$entities';

export const useModel = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  const onToggle = () => {
    setIsCollapsed((prev) => !prev);
  };

  const isAuth = useSelector(getUserAuthData);

  const itemsList = useMemo(
    () =>
      SidebarItemsList.map((item) => {
        if (item.authOnly && !isAuth) {
          return;
        }

        return (
          <SidebarItem item={item} isCollapsed={isCollapsed} key={item.path} />
        );
      }),
    [isCollapsed, isAuth],
  );

  return { onToggle, isCollapsed, itemsList };
};
