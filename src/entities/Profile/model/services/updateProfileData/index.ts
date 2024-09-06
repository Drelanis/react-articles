import { createAsyncThunk } from '@reduxjs/toolkit';

import { getProfileForm } from '../../selectors';
import { Profile } from '../../types';
import { validateProfileData } from '../validateProfileData';

import {
  AppRoutes,
  ErrorHints,
  ThunkConfig,
  ValidateErrorHintKeys,
} from '$shared';

export const updateProfileData = createAsyncThunk<
  Profile,
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

    const response = await extra.api.put<Profile>(
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
