import { useCallback } from 'react';

import { updateProfileData } from '../../services';
import { profileActions } from '../../slices';

import { useAppDispatch } from '$shared';

export const useEditingController = () => {
  const dispatch = useAppDispatch();

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(async () => {
    await dispatch(updateProfileData());
  }, [dispatch]);

  return { onSave, onCancelEdit };
};
