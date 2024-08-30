import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import classNames from './index.module.scss';

import { buildClassNames, Button, Input } from '$shared';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = (props) => {
  const { className } = props;

  const { t } = useTranslation();

  const { containerClassNames } = useStyles({ className });

  return (
    <div className={containerClassNames}>
      <Input
        autofocus
        type="text"
        className={classNames.input}
        placeholder={t('typeUsername')}
      />
      <Input
        type="text"
        className={classNames.input}
        placeholder={t('typePassword')}
      />
      <Button className={classNames.loginBtn}>{t('login')}</Button>
    </div>
  );
};

const useStyles = (params: LoginFormProps) => {
  const { className = '' } = params;

  const containerClassNames = buildClassNames({
    classNames: classNames.loginForm,
    additional: [className],
  });

  return { containerClassNames };
};
