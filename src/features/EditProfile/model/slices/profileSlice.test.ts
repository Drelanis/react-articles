import { DeepPartial } from '@reduxjs/toolkit';

import { updateProfileData } from '../services';

import { profileActions, profileReducer } from '.';
import { ProfileSchema } from '$entities';
import { Country } from '$entities/CountrySelector';
import { Currency } from '$entities/CurrencySelector';

const data = {
  userName: 'admin',
  age: 22,
  country: Country.UKRAINE,
  lastName: 'Denys',
  firstName: 'asd',
  city: 'asf',
  currency: Currency.USD,
};

describe('profileSlice.test', () => {
  test('test set readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };

    expect(
      profileReducer(state as ProfileSchema, profileActions.setReadonly(true)),
    ).toEqual({ readonly: true });
  });

  test('test cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = { data, form: { userName: '' } };

    expect(
      profileReducer(state as ProfileSchema, profileActions.cancelEdit()),
    ).toEqual({
      readonly: true,
      validateErrors: undefined,
      data,
      form: data,
    });
  });

  test('test update profile', () => {
    const state: DeepPartial<ProfileSchema> = { form: { userName: '123' } };

    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({
          userName: '123456',
        }),
      ),
    ).toEqual({
      form: { userName: '123456' },
    });
  });

  test('test update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validationError: ['NO_DATA'],
    };

    expect(
      profileReducer(state as ProfileSchema, updateProfileData.pending),
    ).toEqual({
      isLoading: true,
      validationError: undefined,
    });
  });

  test('test update profile service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };

    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(data, ''),
      ),
    ).toEqual({
      isLoading: false,
      validateErrors: undefined,
      readonly: true,
      validateError: undefined,
      form: data,
      data,
    });
  });
});
