import {
  configureStore,
  DeepPartial,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { NavigateFunction } from 'react-router-dom';

import { StateSchema } from '../types';

import { createReducerManager } from './reducerManager';

// TODO Fix it!
import { counterReducer, userReducer } from '$entities';
import { $api } from '$shared/api';

type Params = {
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
  initialState?: DeepPartial<StateSchema>;
  navigate?: NavigateFunction;
};

export const createReduxStore = (params: Params) => {
  const { initialState, asyncReducers, navigate } = params;

  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- TODO: Fix me
    // @ts-ignore
    reducer: reducerManager.reduce,
    devTools: IS_DEV,
    preloadedState: initialState as StateSchema,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- TODO: Fix me
    // @ts-ignore
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            api: $api,
            navigate,
          },
        },
      }),
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- TODO Fix me
  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
