import { useClassNames, useTheme } from 'shared';
import { ThemesToggleIcons } from '../constants';

type Props = {
  className?: string;
};

export const ThemeSwitcher = (props: Props) => {
  const { className } = props;

  const { toggleTheme, theme } = useTheme();

  const classNames = useClassNames({
    classNames: '',
    additional: [className],
  });

  return (
    <button className={classNames} onClick={toggleTheme}>
      {ThemesToggleIcons[theme]}
    </button>
  );
};
