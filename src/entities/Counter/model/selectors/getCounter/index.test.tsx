import { DeepPartial } from '@reduxjs/toolkit';

import { getCounterValue } from '.';
import { StateSchema } from '$shared';

describe('getCounter', () => {
  test('should return counter value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    };

    expect(getCounterValue(state as StateSchema)).toEqual({ value: 10 });
  });
});
