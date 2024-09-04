import {
  Action,
  AsyncThunkAction,
  DeepPartial,
  ThunkDispatch,
} from '@reduxjs/toolkit';
import axios, { AxiosStatic } from 'axios';
import { NavigateFunction } from 'react-router-dom';

import { StateSchema } from '$shared/store';

type ActionCreatorType<Return, Arg, RejectedValue> = (
  arg: Arg,
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

if (PROJECT === 'jest') {
  jest.mock('axios');
}

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: jest.MockedFn<ThunkDispatch<Return, Arg, Action<unknown>>>;

  getState: () => StateSchema;

  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

  api: jest.MockedFunctionDeep<AxiosStatic>;

  navigate: jest.MockedFn<NavigateFunction>;

  constructor(
    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>,
    state?: DeepPartial<StateSchema>,
  ) {
    const mockedAxios = jest.mocked(axios, true);

    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn(() => state as StateSchema);

    this.api = mockedAxios;

    this.navigate = jest.fn();
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    const result = await action(this.dispatch, this.getState, {
      api: this.api,
      navigate: this.navigate,
    });

    return result;
  }
}
