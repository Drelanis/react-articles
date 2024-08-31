import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useModel } from '../model';
import { loginReducer } from '../store';

import classNames from './index.module.scss';

import {
  buildClassNames,
  Button,
  ButtonVariant,
  DynamicModuleLoader,
  Input,
  ReducersList,
  Text,
  TextVariants,
} from '$shared';

const initialReducer: ReducersList = {
  login: loginReducer,
};

type Props = {
  className?: string;
};

const LoginForm: FC<Props> = memo((props) => {
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
    <DynamicModuleLoader removeAfterUnmount reducers={initialReducer}>
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
    </DynamicModuleLoader>
  );
});

const useStyles = (params: Props) => {
  const { className = '' } = params;

  const containerClassNames = buildClassNames({
    classNames: classNames.loginForm,
    additional: [className],
  });

  return { containerClassNames };
};

export default LoginForm;
