// TODO Fix this problem!!!
import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';

import { CounterSchema, UserSchema } from '$entities';
import { LoginSchema } from '$features';

export type StateSchema = {
  counter: CounterSchema;
  user: UserSchema;

  // Async reducers
  login?: LoginSchema;
};

export type StateSchemaKey = keyof StateSchema;

export type ReducerManager = {
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  remove: (key: StateSchemaKey) => void;
};

export interface ReduxStoreManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}
