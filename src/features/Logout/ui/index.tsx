import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { useModel } from '../model';

import { Button, ButtonVariant } from '$shared';

type Props = {
  className?: string;
};

export const Logout: FC<Props> = (props) => {
  const { className } = props;

  const { t } = useTranslation();

  const { onLogout } = useModel();

  return (
    <Button
      variant={ButtonVariant.CLEAR_INVERTED}
      className={className}
      onClick={onLogout}
    >
      {t('logout')}
    </Button>
  );
};
