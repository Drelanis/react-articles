import { buildClassNames, Button, ButtonVariant, useTheme } from 'shared';
import ThemeIcon from 'shared/assets/icons/theme-toggle-icon.svg';

import classNames from './index.module.scss';

type Props = {
  className?: string;
};

export const ThemeSwitcher = (props: Props) => {
  const { className } = props;

  const { toggleTheme } = useTheme();

  const { buttonClassName } = useStyle({ className });

  return (
    <Button
      className={buttonClassName}
      onClick={toggleTheme}
      variant={ButtonVariant.CLEAR}
    >
      <ThemeIcon className={classNames.icon} />
    </Button>
  );
};

type StyleParams = Pick<Props, 'className'>;

const useStyle = (params: StyleParams) => {
  const { className = '' } = params;

  const buttonClassName = buildClassNames({
    classNames: '',
    additional: [className],
  });

  return { buttonClassName };
};
