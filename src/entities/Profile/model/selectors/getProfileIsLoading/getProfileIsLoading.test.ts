import { DeepPartial } from '@reduxjs/toolkit';

import { getProfileIsLoading } from '.';
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
        form: data,
        error: 'ERROR',
        isLoading: false,
        validationError: undefined,
        readonly: true,
        data,
      },
    };

    expect(getProfileIsLoading(state as StateSchema)).toEqual(false);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined);
  });
});
