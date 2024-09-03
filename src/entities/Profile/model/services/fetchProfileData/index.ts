import { createAsyncThunk } from '@reduxjs/toolkit';

import { Profile } from '../../types';

import { ErrorHints, ThunkConfig, USER_LOCAL_STORAGE_KEY } from '$shared';

export const fetchProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ErrorHints>
>('profile/fetchProfileData', async (_, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;
  try {
    const response = await extra.api.get<Profile>('/profile', {
      // TODO: Fix me
      headers: {
        Authorization: localStorage.getItem(USER_LOCAL_STORAGE_KEY) || '',
      },
    });

    return response.data;
  } catch {
    return rejectWithValue('COMMON_ERROR');
  }
});
