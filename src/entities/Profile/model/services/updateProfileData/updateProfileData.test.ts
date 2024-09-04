import { updateProfileData } from '.';
import { Country } from '$entities/CountrySelector';
import { Currency } from '$entities/CurrencySelector';
import { TestAsyncThunk } from '$shared';

const data = {
  userName: 'admin',
  age: 22,
  country: Country.UKRAINE,
  lastName: 'Denys',
  firstName: 'asd',
  city: 'asf',
  currency: Currency.USD,
};

jest.mock('axios');

describe('updateProfileData.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        error: undefined,
        isLoading: false,
        validationError: undefined,
        readonly: true,
        form: data,
        data,
      },
    });

    thunk.api.put.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        error: undefined,
        isLoading: false,
        validationError: undefined,
        readonly: true,
        form: data,
        data,
      },
    });

    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual('COMMON_ERROR');
  });

  test('validate error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: {
          ...data,
          lastName: '',
        },
        error: undefined,
        isLoading: false,
        validationError: undefined,
        readonly: true,
        data,
      },
    });

    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual(['INCORRECT_USER_DATA']);
  });
});
