import { createAsyncThunk } from '@reduxjs/toolkit';

import { Profile } from '../../types';

import { ErrorHints, ThunkConfig } from '$shared';

export const fetchProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ErrorHints>
>('profile/fetchProfileData', async (_, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;
  try {
    const response = await extra.api.get<Profile>('/profile');

    return response.data;
  } catch {
    return rejectWithValue('COMMON_ERROR');
  }
});
