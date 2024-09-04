import { Reducer } from '@reduxjs/toolkit';
import { FC, useEffect } from 'react';
import { useStore } from 'react-redux';

import { useAppDispatch } from '$shared/hooks';
import { ReduxStoreManager, StateSchema, StateSchemaKey } from '$shared/store';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

interface DynamicModuleLoaderProps {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const { children, reducers, removeAfterUnmount } = props;

  const store = useStore() as ReduxStoreManager;
  const dispatch = useAppDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      store.reducerManager.add(name as keyof StateSchema, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name as keyof StateSchema);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Only one time
  }, []);

  // eslint-disable-next-line react/jsx-no-useless-fragment -- Exception
  return <>{children}</>;
};
