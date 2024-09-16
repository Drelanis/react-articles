import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { profileInitialState } from '../schemes';
import { fetchProfileData, updateProfileData } from '../services';

import { ProfileType } from '$entities';

export const profileSlice = createSlice({
  name: 'profile',
  initialState: profileInitialState,
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload;
    },
    cancelEdit: (state) => {
      state.readonly = true;
      state.validationError = undefined;
      state.form = state.data;
    },
    updateProfile: (state, action: PayloadAction<ProfileType>) => {
      state.form = {
        ...state.form,
        ...action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
        state.validationError = undefined;
      })
      .addCase(
        fetchProfileData.fulfilled,
        (state, action: PayloadAction<ProfileType>) => {
          state.isLoading = false;
          state.data = action.payload;
          state.form = action.payload;
        },
      )
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateProfileData.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
        state.validationError = undefined;
      })
      .addCase(
        updateProfileData.fulfilled,
        (state, action: PayloadAction<ProfileType>) => {
          state.isLoading = false;
          state.data = action.payload;
          state.form = action.payload;
          state.readonly = true;
        },
      )
      .addCase(updateProfileData.rejected, (state, action) => {
        state.isLoading = false;

        if (Array.isArray(action.payload)) {
          state.validationError = action.payload;
        }
      });
  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
