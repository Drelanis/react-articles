import { AsyncThunkAction } from '@reduxjs/toolkit';

import { StateSchema } from '$shared/store';

type ActionCreatorType<Returned, ThunkArg, RejectedValue> = (
  thunkArg: ThunkArg,
) => AsyncThunkAction<Returned, ThunkArg, { rejectValue: RejectedValue }>;

export class TestAsyncThunk<Returned, ThunkArg, RejectedValue> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Exception
  dispatch: jest.MockedFn<any>;

  getState: () => StateSchema;

  actionCreator: ActionCreatorType<Returned, ThunkArg, RejectedValue>;

  constructor(
    actionCreator: ActionCreatorType<Returned, ThunkArg, RejectedValue>,
  ) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
  }

  async callThunk(thunkArg: ThunkArg) {
    const action = this.actionCreator(thunkArg);
    const result = await action(this.dispatch, this.getState, undefined);

    return result;
  }
}
