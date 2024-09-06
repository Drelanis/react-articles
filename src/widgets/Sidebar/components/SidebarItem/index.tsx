import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import classNames from './index.module.scss';

import { AppLinkTheme, Link } from '$shared';
import { SidebarItemType } from '$widgets/Sidebar';

type Props = {
  isCollapsed: boolean;
  item: SidebarItemType;
  queryParameter?: string;
};

export const SidebarItem: FC<Props> = memo((props) => {
  const { item, isCollapsed, queryParameter } = props;

  const { t } = useTranslation(item.translation);

  const currentQueryParameter = queryParameter ? `/${queryParameter}` : '';

  return (
    <Link
      theme={AppLinkTheme.SECONDARY}
      className={[classNames.item]}
      to={`${item.path}${currentQueryParameter}`}
    >
      <item.icon className={classNames.icon} />
      {!isCollapsed && <span className={classNames.link}>{t(item.text)}</span>}
    </Link>
  );
});
