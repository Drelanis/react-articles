import { buildClassNames, Button, ButtonVariant, useTheme } from 'shared';

import { ThemesToggleIcons } from '../constants';

type Props = {
  className?: string;
};

export const ThemeSwitcher = (props: Props) => {
  const { className } = props;

  const { toggleTheme, theme } = useTheme();

  const { buttonClassName } = useStyle({ className });

  return (
    <Button
      className={buttonClassName}
      onClick={toggleTheme}
      variant={ButtonVariant.CLEAR}
    >
      {ThemesToggleIcons[theme]}
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
