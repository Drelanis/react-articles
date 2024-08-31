import { DeepPartial } from '@reduxjs/toolkit';

import { getLoginError } from '.';
import { StateSchema } from '$shared';

describe('getLoginError.test', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        password: '',
        userName: '',
        isLoading: false,
        error: 'LOGIN_ERROR',
      },
    };

    expect(getLoginError(state as StateSchema)).toEqual('LOGIN_ERROR');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginError(state as StateSchema)).toEqual('');
  });
});
