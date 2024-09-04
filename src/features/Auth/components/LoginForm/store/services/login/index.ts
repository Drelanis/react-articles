import { createAsyncThunk } from '@reduxjs/toolkit';

import { User, userActions } from '$entities';
import {
  AppRoutes,
  ErrorHints,
  ServerEndpoints,
  ThunkConfig,
  USER_LOCAL_STORAGE_KEY,
} from '$shared';

type Params = {
  password: string;
  userName: string;
};

export const loginByUsername = createAsyncThunk<
  User,
  Params,
  ThunkConfig<ErrorHints>
>('login/loginByUsername', async (authData, thunkAPI) => {
  const { extra, dispatch, rejectWithValue } = thunkAPI;

  const { api, navigate } = extra;

  try {
    const response = await api.post<User>(ServerEndpoints.LOGIN, authData);

    if (!response.data) {
      throw new Error();
    }

    localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
    dispatch(userActions.setAuthData(response.data));

    if (navigate) {
      navigate(AppRoutes.ABOUT);
    }

    return response.data;
  } catch (error) {
    return rejectWithValue('LOGIN_ERROR');
  }
});
