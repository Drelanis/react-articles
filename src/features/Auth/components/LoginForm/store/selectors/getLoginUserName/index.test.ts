import { DeepPartial } from '@reduxjs/toolkit';

import { getLoginUserName } from '.';
import { StateSchema } from '$shared';

describe('getLoginUserName.test', () => {
  test('should return admin', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        userName: 'admin',
        password: '',
        isLoading: false,
      },
    };

    expect(getLoginUserName(state as StateSchema)).toEqual('admin');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginUserName(state as StateSchema)).toEqual('');
  });
});
