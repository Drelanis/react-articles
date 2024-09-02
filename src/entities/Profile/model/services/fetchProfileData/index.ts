import { createAsyncThunk } from '@reduxjs/toolkit';

import { Profile } from '../../types';

import { ErrorHints, ServerEndpoints, ThunkConfig } from '$shared';

export const fetchProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ErrorHints>
>('profile/fetchProfileData', async (_, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI;
  try {
    const response = await extra.api.get<Profile>(ServerEndpoints.PROFILE);

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (error) {
    return rejectWithValue('LOGIN_ERROR');
  }
});
