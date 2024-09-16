import { createAsyncThunk } from '@reduxjs/toolkit';

import { ProfileType } from '$entities';
import { ErrorHints, ThunkConfig, USER_LOCAL_STORAGE_KEY } from '$shared';

export const fetchProfileData = createAsyncThunk<
  ProfileType,
  string,
  ThunkConfig<ErrorHints>
>('profile/fetchProfileData', async (profileId, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;
  try {
    const response = await extra.api.get<ProfileType>(`/profile/${profileId}`, {
      headers: {
        Authorization: localStorage.getItem(USER_LOCAL_STORAGE_KEY) || '',
      },
    });

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch {
    return rejectWithValue('COMMON_ERROR');
  }
});
