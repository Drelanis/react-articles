import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { userActions } from '$entities';

export const useModel = () => {
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  return { onLogout };
};
