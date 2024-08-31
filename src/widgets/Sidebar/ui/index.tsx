/* eslint-disable i18next/no-literal-string -- TODO */
import { useTranslation } from 'react-i18next';

import { useModel } from '../model';

import { Switchers } from './components';
import classNames from './index.module.scss';

import {
  AppLinkTheme,
  AppRoutes,
  buildClassNames,
  Button,
  ButtonSize,
  ButtonVariant,
  Link,
} from '$shared';
import AboutIcon from '$shared/assets/icons/about-20-20.svg';
import MainIcon from '$shared/assets/icons/main-20-20.svg';

type Props = {
  className?: string;
};

export const Sidebar = (props: Props) => {
  const { className } = props;

  const { t } = useTranslation();

  const { onToggle, isCollapsed } = useModel();

  const { containerClassName } = useStyles({ className, isCollapsed });

  return (
    <div data-testid="sidebar" className={containerClassName}>
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={classNames.collapsedButton}
        variant={ButtonVariant.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        square
      >
        {isCollapsed ? '>' : '<'}
      </Button>
      <div className={classNames.items}>
        <Link
          theme={AppLinkTheme.SECONDARY}
          className={[classNames.item]}
          to={AppRoutes.MAIN}
        >
          <MainIcon className={classNames.icon} />
          <span className={classNames.link}>{t('main')}</span>
        </Link>
        <Link
          theme={AppLinkTheme.SECONDARY}
          className={[classNames.item]}
          to={AppRoutes.ABOUT}
        >
          <AboutIcon className={classNames.icon} />
          <span className={classNames.link}>{t('about')}</span>
        </Link>
      </div>
      <Switchers column={isCollapsed} />
    </div>
  );
};

type StylesParams = {
  isCollapsed: boolean;
} & Pick<Props, 'className'>;

const useStyles = (props: StylesParams) => {
  const { className = '', isCollapsed } = props;

  const containerClassName = buildClassNames({
    classNames: classNames.container,
    mods: {
      [classNames.collapsed]: isCollapsed,
    },
    additional: [className],
  });

  return { containerClassName };
};
