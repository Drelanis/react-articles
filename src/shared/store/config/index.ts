import { configureStore } from '@reduxjs/toolkit';

import { StateSchema } from '../types';

// TODO Fix it!
import { counterReducer } from '$entities';

export const createReduxStore = (initialState?: StateSchema) => {
  const store = configureStore<StateSchema>({
    reducer: {
      counter: counterReducer,
    },
    devTools: IS_DEV,
    preloadedState: initialState,
  });

  return store;
};
