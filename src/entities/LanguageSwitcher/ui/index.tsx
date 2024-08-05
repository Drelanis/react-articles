import { Button, ButtonVariant, useClassNames } from 'shared';

import { useModel } from '../model';

type LangSwitcherProps = {
  className?: string;
};

export const LanguageSwitcher = (props: LangSwitcherProps) => {
  const { className } = props;

  const { t, toggleLanguage } = useModel();

  const { buttonClassNames } = useStyles({ className });

  return (
    <Button
      className={buttonClassNames}
      variant={ButtonVariant.CLEAR}
      onClick={toggleLanguage}
    >
      {t('language')}
    </Button>
  );
};

type StylesParams = Pick<LangSwitcherProps, 'className'>;

const useStyles = (props: StylesParams) => {
  const { className = '' } = props;

  const buttonClassNames = useClassNames({
    classNames: '',
    additional: [className],
  });

  return { buttonClassNames };
};
