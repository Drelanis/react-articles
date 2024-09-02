import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import {
  getLoginError,
  getLoginIsLoading,
  getLoginPassword,
  getLoginUserName,
  loginActions,
  loginByUsername,
} from '../store';

import { useAppDispatch } from '$shared';

export const useModel = () => {
  const dispatch = useAppDispatch();

  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);
  const userName = useSelector(getLoginUserName);
  const password = useSelector(getLoginPassword);

  const onChangeUserName = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const login = useCallback(async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- TODO: Fix it
    // @ts-expect-error
    await dispatch(loginByUsername({ userName, password }));
  }, [dispatch, userName, password]);

  return {
    onChangeUserName,
    onChangePassword,
    userName,
    password,
    login,
    isLoading,
    error,
  };
};
