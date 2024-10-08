import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { loginInitialState } from '../schemes';
import { loginByUsername } from '../services';

export const loginSlice = createSlice({
  name: 'login',
  initialState: loginInitialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByUsername.pending, (state) => {
        state.error = undefined;
        // state.isLoading = true;
      })
      .addCase(loginByUsername.fulfilled, (state) => {
        state.userName = '';
        state.password = '';
        state.isLoading = false;
      })
      .addCase(loginByUsername.rejected, (state, action) => {
        state.isLoading = false;
        state.password = '';
        state.error = action.payload;
      });
  },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
