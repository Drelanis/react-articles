import { DeepPartial } from '@reduxjs/toolkit';

import { getCounterValue } from '.';
import { StateSchema } from '$shared';

describe('getCounterValue', () => {
  test('get value from state', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    };

    const value = 10;

    expect(getCounterValue(state as StateSchema)).toEqual(value);
  });
});
