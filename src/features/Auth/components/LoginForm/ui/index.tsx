import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useModel } from '../model';

import classNames from './index.module.scss';

import {
  buildClassNames,
  Button,
  ButtonVariant,
  Input,
  Text,
  TextVariants,
} from '$shared';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = memo((props) => {
  const { className } = props;

  const { t } = useTranslation();

  const { containerClassNames } = useStyles({ className });

  const {
    userName,
    password,
    onChangePassword,
    onChangeUserName,
    login,
    isLoading,
    error,
  } = useModel();

  return (
    <div className={containerClassNames}>
      <Text title={t('loginForm')} />
      {error && <Text text={t(error)} variant={TextVariants.ERROR} />}
      <Input
        autofocus
        type="text"
        value={userName}
        onChange={onChangeUserName}
        className={classNames.input}
        placeholder={t('typeUsername')}
      />
      <Input
        type="text"
        value={password}
        onChange={onChangePassword}
        className={classNames.input}
        placeholder={t('typePassword')}
      />
      <Button
        onClick={login}
        disabled={isLoading}
        variant={ButtonVariant.OUTLINE}
        className={classNames.loginBtn}
      >
        {t('login')}
      </Button>
    </div>
  );
});

const useStyles = (params: LoginFormProps) => {
  const { className = '' } = params;

  const containerClassNames = buildClassNames({
    classNames: classNames.loginForm,
    additional: [className],
  });

  return { containerClassNames };
};
