import { Button, ButtonVariant, useClassNames } from 'shared';
import { useModel } from '../model';

interface LangSwitcherProps {
  className?: string;
}

export const LanguageSwitcher = (props: LangSwitcherProps) => {
  const { t, toggleLanguage } = useModel();

  const { buttonClassNames } = useStyles(props);

  return (
    <Button
      className={buttonClassNames}
      variant={ButtonVariant.CLEAR}
      onClick={toggleLanguage}
    >
      {t('Language')}
    </Button>
  );
};

type StylesParams = Pick<LangSwitcherProps, 'className'>;

const useStyles = (props: StylesParams) => {
  const { className } = props;

  const buttonClassNames = useClassNames({
    classNames: '',
    additional: [className],
  });

  return { buttonClassNames };
};
