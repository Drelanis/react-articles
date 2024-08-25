import { FC } from 'react';

import { useModel } from '../model';

import { buildClassNames, Button, ButtonVariant } from '$shared';

type LangSwitcherProps = {
  className?: string;
};

export const LanguageSwitcher: FC<LangSwitcherProps> = (props) => {
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

  const buttonClassNames = buildClassNames({
    classNames: '',
    additional: [className],
  });

  return { buttonClassNames };
};
