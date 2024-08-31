import { DeepPartial } from '@reduxjs/toolkit';

import { getLoginIsLoading } from '.';
import { StateSchema } from '$shared';

describe('getLoginIsLoading.test', () => {
  test('should return false', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        password: '',
        userName: '',
        isLoading: false,
      },
    };

    expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
  });
});
