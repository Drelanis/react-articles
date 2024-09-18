import { DeepPartial } from '@reduxjs/toolkit';

import { getCounterValue } from '.';
import { StateSchema } from '$shared';

describe('getCounterValue.test', () => {
  test('', () => {
    const value = 10;

    const state: DeepPartial<StateSchema> = {
      counter: { value },
    };

    expect(getCounterValue(state as StateSchema)).toEqual(value);
  });
});
