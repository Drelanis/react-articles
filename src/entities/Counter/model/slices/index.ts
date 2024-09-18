import { counterInitialState } from '../schemes';

import { buildAppSlice } from '$shared';

export const counterSlice = buildAppSlice({
  name: 'counter',
  initialState: counterInitialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const {
  actions: counterActions,
  reducer: counterReducer,
  useActions: useCounterActions,
} = counterSlice;
