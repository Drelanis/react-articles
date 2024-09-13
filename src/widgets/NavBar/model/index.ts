import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { getUserAuthData, userActions } from '$entities';
import { useAppDispatch } from '$shared';

export const useModel = () => {
  const dispatch = useAppDispatch();

  const userAuthData = useSelector(getUserAuthData);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  return { userAuthData, onLogout };
};
