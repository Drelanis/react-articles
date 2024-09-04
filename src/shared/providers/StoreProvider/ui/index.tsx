import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { FC } from 'react';
import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { createReduxStore, StateSchema } from '$shared/store';

type Props = {
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
  initialState?: DeepPartial<StateSchema>;
};

export const StoreProvider: FC<Props> = (props) => {
  const { children, initialState, asyncReducers } = props;
  const navigate = useNavigate();

  const store = createReduxStore({ initialState, asyncReducers, navigate });

  return <Provider store={store}>{children}</Provider>;
};
