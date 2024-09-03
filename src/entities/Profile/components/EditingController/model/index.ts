import { useCallback } from 'react';

import { profileActions, updateProfileData } from '$entities/Profile/model';
import { useAppDispatch } from '$shared';

export const useModel = () => {
  const dispatch = useAppDispatch();

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(async () => {
    await dispatch(updateProfileData());

    dispatch(profileActions.setReadonly(true));
  }, [dispatch]);

  return { onSave, onCancelEdit };
};
