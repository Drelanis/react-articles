import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User, userInitialState } from '../schemes';

import { USER_LOCAL_STORAGE_KEY } from '$shared';

export const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
      if (user) {
        state.authData = JSON.parse(user) as User;
      }
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
