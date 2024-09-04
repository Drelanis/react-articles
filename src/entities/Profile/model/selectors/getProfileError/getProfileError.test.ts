import { DeepPartial } from '@reduxjs/toolkit';

import { getProfileError } from '.';
import { Country } from '$entities/CountrySelector';
import { Currency } from '$entities/CurrencySelector';
import { StateSchema } from '$shared';

describe('getProfileData.test', () => {
  test('should return error', () => {
    const data = {
      userName: 'admin',
      age: 22,
      country: Country.UKRAINE,
      lastName: 'Denys',
      firstName: 'asd',
      city: 'asf',
      currency: Currency.USD,
    };

    const state: DeepPartial<StateSchema> = {
      profile: {
        error: 'ERROR',
        isLoading: false,
        validationError: undefined,
        readonly: true,
        data,
      },
    };

    expect(getProfileError(state as StateSchema)).toEqual('ERROR');
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileError(state as StateSchema)).toEqual(undefined);
  });
});
