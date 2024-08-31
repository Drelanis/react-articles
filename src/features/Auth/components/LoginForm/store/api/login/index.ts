import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { User, userActions } from '$entities';
import { ErrorHints, ServerEndpoints, USER_LOCAL_STORAGE_KEY } from '$shared';

type Params = {
  password: string;
  userName: string;
};

export const loginByUsername = createAsyncThunk<
  User,
  Params,
  { rejectValue: ErrorHints }
>('login/loginByUsername', async (authData, thunkAPI) => {
  try {
    const response = await axios.post<User>(ServerEndpoints.LOGIN, authData);

    if (!response.data) {
      throw new Error();
    }

    localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
    thunkAPI.dispatch(userActions.setAuthData(response.data));

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('LOGIN_ERROR');
  }
});
