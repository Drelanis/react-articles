import { fetchProfileData } from '.';
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

describe('fetchProfileData.test', () => {
  test('fulfilled', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);

    thunk.api.get.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('reject', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);

    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
  });
});
