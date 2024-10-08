import {
  CombinedState,
  configureStore,
  DeepPartial,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';

import { StateSchema } from '../types';

import { createReducerManager } from './reducerManager';

import { counterReducer, userReducer } from '$entities';
import { scrollRestorationReducer } from '$features/ScrollRestoration';
import { $api, rtkApi } from '$shared/api';

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
    scrollRestoration: scrollRestorationReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: IS_DEV,
    preloadedState: initialState as StateSchema,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            api: $api,
          },
        },
      }).concat(rtkApi.middleware),
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- TODO Fix me
  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
