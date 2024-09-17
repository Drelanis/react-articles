import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { useDropdownItems } from '../useDropdownItems';

import { getUserAuthData, userActions } from '$entities';
import { useAppDispatch } from '$shared';

export const useLogic = () => {
  const dispatch = useAppDispatch();

  const userAuthData = useSelector(getUserAuthData);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const dropDownItems = useDropdownItems({ userAuthData, onLogout });

  return { userAuthData, dropDownItems };
};
