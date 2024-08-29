import { DeepPartial } from '@reduxjs/toolkit';
import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';

import { createReduxStore, StateSchema } from '$app/store';

type StoreProviderProps = {
  children?: ReactNode;
  initialState?: DeepPartial<StateSchema>;
};

export const StoreProvider: FC<StoreProviderProps> = (props) => {
  const { children, initialState } = props;

  const store = createReduxStore(initialState as StateSchema);

  return <Provider store={store}>{children}</Provider>;
};
