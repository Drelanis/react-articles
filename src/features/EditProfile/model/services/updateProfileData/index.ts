import { createAsyncThunk } from '@reduxjs/toolkit';

import { getProfileForm } from '../../selectors';
import { validateProfileData } from '../validateProfileData';

import { ProfileType } from '$entities';
import {
  AppRoutes,
  ErrorHints,
  ThunkConfig,
  ValidateErrorHintKeys,
} from '$shared';

export const updateProfileData = createAsyncThunk<
  ProfileType,
  void,
  ThunkConfig<ErrorHints | ValidateErrorHintKeys[]>
>('profile/updateProfileData', async (profileId, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;

  try {
    const formData = getProfileForm(getState());

    const errors = validateProfileData(formData);

    if (errors.length) {
      return rejectWithValue(errors);
    }

    const response = await extra.api.put<ProfileType>(
      `${AppRoutes.PROFILE}/${formData?.id}`,
      formData,
    );

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch {
    return rejectWithValue('COMMON_ERROR');
  }
});
