import { createAsyncThunk } from '@reduxjs/toolkit';

import { getProfileForm } from '../../selectors';
import { Profile } from '../../types';
import { validateProfileData } from '../validateProfileData';

import { ErrorHints, ThunkConfig } from '$shared';

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ErrorHints>
>('profile/updateProfileData', async (_, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;

  try {
    const formData = getProfileForm(getState());

    const errors = validateProfileData(formData);

    if (errors.length) {
      return rejectWithValue(errors[0]);
    }

    const response = await extra.api.put<Profile>('/profile', formData);

    return response.data;
  } catch {
    return rejectWithValue('INCORRECT_USER_DATA');
  }
});
