import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { scrollRestorationInitialSchema } from '../schemes';

export const scrollRestorationSlice = createSlice({
  name: 'scrollRestoration',
  initialState: scrollRestorationInitialSchema,
  reducers: {
    setScrollPosition: (
      state,
      action: PayloadAction<{ path: string; position: number }>,
    ) => {
      const { path, position } = action.payload;

      state.scroll[path] = position;
    },
  },
});

export const { actions: scrollRestorationActions } = scrollRestorationSlice;
export const { reducer: scrollRestorationReducer } = scrollRestorationSlice;
