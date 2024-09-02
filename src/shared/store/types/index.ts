// TODO Fix this problem!!!
import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { NavigateFunction } from 'react-router-dom';

import { CounterSchema, ProfileSchema, UserSchema } from '$entities';
import { LoginSchema } from '$features';

export type StateSchema = {
  counter: CounterSchema;
  user: UserSchema;

  // Async reducers
  login?: LoginSchema;
  profile?: ProfileSchema;
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

export type ThunkExtraArg = {
  api: AxiosInstance;
  navigate?: NavigateFunction;
};

export type ThunkConfig<Type> = {
  extra: ThunkExtraArg;
  rejectValue: Type;
};
