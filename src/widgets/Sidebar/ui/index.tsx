/* eslint-disable i18next/no-literal-string -- TODO */
import { buildClassNames } from 'shared';

import { useModel } from '../model';

import { Switchers } from './components';
import classNames from './index.module.scss';

type Props = {
  className?: string;
};

export const Sidebar = (props: Props) => {
  const { className } = props;

  const { onToggle, collapsed } = useModel();

  const { containerClassName } = useStyles({ className, collapsed });

  return (
    <div data-testid="sidebar" className={containerClassName}>
      <button data-testid="sidebar-toggle" type="button" onClick={onToggle}>
        toggle
      </button>
      <Switchers />
    </div>
  );
};

type StylesParams = {
  collapsed: boolean;
} & Pick<Props, 'className'>;

const useStyles = (props: StylesParams) => {
  const { className = '', collapsed } = props;

  const containerClassName = buildClassNames({
    classNames: classNames.container,
    mods: {
      [classNames.collapsed]: collapsed,
    },
    additional: [className],
  });

  return { containerClassName };
};
