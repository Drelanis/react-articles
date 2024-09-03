import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { userActions } from '$entities';
import { AppRoutes, useAppDispatch } from '$shared';

export const useModel = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());

    navigate(AppRoutes.ABOUT);
  }, [dispatch, navigate]);

  return { onLogout };
};
