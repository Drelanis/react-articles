import { createSlice } from '@reduxjs/toolkit';

import { userInitialState } from '../schemes';

export const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {},
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
