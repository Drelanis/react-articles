import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import classNames from './index.module.scss';

import { AppLinkTheme, Link } from '$shared';
import { SidebarItemType } from '$widgets/Sidebar/model';

type Props = {
  isCollapsed: boolean;
  item: SidebarItemType;
};

export const SidebarItem: FC<Props> = memo((props) => {
  const { item, isCollapsed } = props;

  const { t } = useTranslation(item.translation);

  return (
    <Link
      theme={AppLinkTheme.SECONDARY}
      className={[classNames.item]}
      to={item.path}
    >
      <item.icon className={classNames.icon} />
      {!isCollapsed && <span className={classNames.link}>{t(item.text)}</span>}
    </Link>
  );
});
