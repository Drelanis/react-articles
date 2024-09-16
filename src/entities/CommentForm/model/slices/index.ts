import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialAddCommentFormState } from '../schemes';

export const addCommentFormSlice = createSlice({
  name: 'addCommentForm',
  initialState: initialAddCommentFormState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
});

export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
