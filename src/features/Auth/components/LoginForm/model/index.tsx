import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getLoginError,
  getLoginIsLoading,
  getLoginPassword,
  getLoginUserName,
  loginActions,
  loginByUsername,
} from '../store';

export const useModel = () => {
  const dispatch = useDispatch();

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

  const login = useCallback(() => {
    dispatch(loginByUsername({ userName, password }));
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
