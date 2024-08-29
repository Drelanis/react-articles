import { DeepPartial } from '@reduxjs/toolkit';
import { FC } from 'react';
import { Provider } from 'react-redux';

import { createReduxStore, StateSchema } from '$shared/store';

type Props = {
  initialState?: DeepPartial<StateSchema>;
};

export const StoreProvider: FC<Props> = (props) => {
  const { children, initialState } = props;

  const store = createReduxStore(initialState as StateSchema);

  return <Provider store={store}>{children}</Provider>;
};
