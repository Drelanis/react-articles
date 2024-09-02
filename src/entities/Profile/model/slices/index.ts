import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { profileInitialState } from '../schemes';
import { fetchProfileData } from '../services';
import { Profile } from '../types';

export const profileSlice = createSlice({
  name: 'profile',
  initialState: profileInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchProfileData.fulfilled,
        (state, action: PayloadAction<Profile>) => {
          state.data = action.payload;
          state.isLoading = false;
        },
      )
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
