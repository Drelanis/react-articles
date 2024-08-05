import { useClassNames } from 'shared';
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
    <div className={containerClassName}>
      <button onClick={onToggle}>toggle</button>
      <Switchers />
    </div>
  );
};

type StylesParams = {
  collapsed: boolean;
} & Pick<Props, 'className'>;

const useStyles = (props: StylesParams) => {
  const { className = '', collapsed } = props;

  const containerClassName = useClassNames({
    classNames: classNames.container,
    mods: {
      [classNames.collapsed]: collapsed,
    },
    additional: [className],
  });

  return { containerClassName };
};
