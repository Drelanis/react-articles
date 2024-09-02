import { FC, memo } from 'react';

import { useModel } from '../model';

import { buildClassNames, Button, ButtonVariant } from '$shared';

type LangSwitcherProps = {
  isShort: boolean;
  className?: string;
};

export const LanguageSwitcher: FC<LangSwitcherProps> = memo((props) => {
  const { className, isShort } = props;

  const { toggleLanguage, buttonText } = useModel({ isShort });

  const { buttonClassNames } = useStyles({ className });

  return (
    <Button
      className={buttonClassNames}
      variant={ButtonVariant.CLEAR_INVERTED}
      onClick={toggleLanguage}
    >
      {buttonText}
    </Button>
  );
});

type StylesParams = Pick<LangSwitcherProps, 'className'>;

const useStyles = (props: StylesParams) => {
  const { className = '' } = props;

  const buttonClassNames = buildClassNames({
    classNames: '',
    additional: [className],
  });

  return { buttonClassNames };
};
