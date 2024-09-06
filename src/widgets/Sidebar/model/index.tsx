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

  const authData = useSelector(getUserAuthData);

  const itemsList = useMemo(
    () =>
      SidebarItemsList.map((item) => {
        if (item.authOnly && !authData) {
          return;
        }

        const userId = item.isUserId ? authData?.id : '';

        return (
          <SidebarItem
            queryParameter={userId}
            item={item}
            isCollapsed={isCollapsed}
            key={item.path}
          />
        );
      }),
    [isCollapsed, authData],
  );

  return { onToggle, isCollapsed, itemsList };
};
