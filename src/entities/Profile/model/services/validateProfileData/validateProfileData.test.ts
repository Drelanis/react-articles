import { validateProfileData } from '.';
import { Country, Currency } from '$entities';

const data = {
  userName: 'admin',
  age: 22,
  country: Country.UKRAINE,
  lastName: 'Denys',
  firstName: 'asd',
  city: 'asf',
  currency: Currency.USD,
};

describe('validateProfileData.test', () => {
  test('success', () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test('without first and last name', () => {
    const result = validateProfileData({
      ...data,
      firstName: '',
      lastName: '',
    });

    expect(result).toEqual(['INCORRECT_USER_DATA']);
  });

  test('incorrect age', () => {
    const result = validateProfileData({ ...data, age: undefined });

    expect(result).toEqual(['INCORRECT_AGE']);
  });

  test('incorrect country', () => {
    const result = validateProfileData({ ...data, country: undefined });

    expect(result).toEqual(['INCORRECT_COUNTRY']);
  });

  test('incorrect all', () => {
    const result = validateProfileData({});

    expect(result).toEqual([
      'INCORRECT_USER_DATA',
      'INCORRECT_AGE',
      'INCORRECT_COUNTRY',
    ]);
  });
});
