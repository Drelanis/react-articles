/* eslint-disable i18next/no-literal-string -- TODO */

import { memo } from 'react';

import { useModel } from '../model';

import { Switchers } from './components';
import classNames from './index.module.scss';

import { buildClassNames, Button, ButtonSize, ButtonVariant } from '$shared';

type Props = {
  className?: string;
};

export const Sidebar = memo((props: Props) => {
  const { className } = props;

  const { onToggle, isCollapsed, itemsList } = useModel();

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
      <div className={classNames.items}>{itemsList}</div>
      <Switchers column={isCollapsed} />
    </div>
  );
});

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
