import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { isUserAdmin, isUserManager, User } from '$entities';
import { AppRoutes, DropdownItem } from '$shared';

type Params = {
  onLogout: () => void;
  userAuthData?: User;
};

export const useDropdownItems = (params: Params) => {
  const { onLogout, userAuthData } = params;

  const { t } = useTranslation();
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const isAdminPanelAvailable = isAdmin || isManager;

  return useMemo(() => {
    const items: DropdownItem[] = [
      ...(isAdminPanelAvailable
        ? [{ content: t('adminPanel'), href: AppRoutes.ADMIN }]
        : []),
      {
        content: t('profile'),
        href: `${AppRoutes.PROFILE}/${userAuthData?.id}`,
      },
      { content: t('logout'), onClick: onLogout },
    ];
    return items;
  }, [isAdminPanelAvailable, onLogout, t, userAuthData?.id]);
};
