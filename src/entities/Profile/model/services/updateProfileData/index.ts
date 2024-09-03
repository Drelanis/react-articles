import { createAsyncThunk } from '@reduxjs/toolkit';

import { getProfileForm } from '../../selectors';
import { Profile } from '../../types';

import { ErrorHints, ThunkConfig } from '$shared';

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ErrorHints>
>('profile/updateProfileData', async (_, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;

  const formData = getProfileForm(getState());

  try {
    const response = await extra.api.put<Profile>('/profile', formData);

    return response.data;
  } catch {
    return rejectWithValue('COMMON_ERROR');
  }
});
