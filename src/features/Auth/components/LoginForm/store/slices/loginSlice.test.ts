import { DeepPartial } from '@reduxjs/toolkit';

import { LoginSchema } from '../types';

import { loginActions, loginReducer } from '.';

describe('loginSlice.test', () => {
  test('test set username', () => {
    const state: DeepPartial<LoginSchema> = { userName: '' };

    expect(
      loginReducer(state as LoginSchema, loginActions.setUsername('admin')),
    ).toEqual({
      userName: 'admin',
    });
  });

  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = { password: '' };

    expect(
      loginReducer(state as LoginSchema, loginActions.setPassword('123123')),
    ).toEqual({
      password: '123123',
    });
  });
});
