import { DeepPartial } from '@reduxjs/toolkit';

import { getLoginPassword } from '.';
import { StateSchema } from '$shared';

describe('getLoginPassword.test', () => {
  test('should return 123', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        userName: '',
        password: '123',
        isLoading: false,
      },
    };

    expect(getLoginPassword(state as StateSchema)).toEqual('123');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginPassword(state as StateSchema)).toEqual('');
  });
});
