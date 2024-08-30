import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';

import { StateSchema } from '../types';

// TODO Fix it!
import { counterReducer, userReducer } from '$entities';
import { loginReducer } from '$features';

export const createReduxStore = (initialState?: StateSchema) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    login: loginReducer,
  };

  const store = configureStore<StateSchema>({
    reducer: rootReducers,
    devTools: IS_DEV,
    preloadedState: initialState,
  });

  return store;
};
