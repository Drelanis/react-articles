import { configureStore } from '@reduxjs/toolkit';

import { StateSchema } from '../types';

import { counterReducer } from '$entities';

export const createReduxStore = (initialState?: StateSchema) => {
  return configureStore<StateSchema>({
    reducer: {
      counter: counterReducer,
    },
    devTools: IS_DEV,
    preloadedState: initialState,
  });
};
