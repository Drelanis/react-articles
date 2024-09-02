import {
  configureStore,
  DeepPartial,
  ReducersMapObject,
} from '@reduxjs/toolkit';

import { StateSchema } from '../types';

import { createReducerManager } from './reducerManager';

// TODO Fix it!
import { counterReducer, userReducer } from '$entities';

type Params = {
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
  initialState?: DeepPartial<StateSchema>;
};

export const createReduxStore = (params: Params) => {
  const { initialState, asyncReducers } = params;

  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore<StateSchema>({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- TODO: Fix me
    // @ts-ignore
    reducer: reducerManager.reduce,
    devTools: IS_DEV,
    preloadedState: initialState as StateSchema,
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- TODO Fix me
  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
