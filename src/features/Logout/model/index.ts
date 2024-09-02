import { useCallback } from 'react';

import { userActions } from '$entities';
import { useAppDispatch } from '$shared';

export const useModel = () => {
  const dispatch = useAppDispatch();

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  return { onLogout };
};
