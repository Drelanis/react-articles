import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { profileReducer } from '../model';

import { EditProfile } from '.';
import { Country, Currency, ProfileType } from '$entities';
import { AppRoutes, componentRender } from '$shared';

const profile: ProfileType = {
  id: '1',
  firstName: 'Denys',
  lastName: 'Badaka',
  age: 100,
  currency: Currency.EUR,
  country: Country.UKRAINE,
  city: 'Dnipro',
  userName: 'admin',
  avatar:
    'https://seeklogo.com/images/L/linkin-park-band-logo-3F627013D0-seeklogo.com.png',
};

const options = {
  profile: {
    isLoading: false,
    readonly: true,
    data: profile,
    form: profile,
  },
  user: {
    authData: { id: '1', userName: 'admin' },
  },
};

describe('features/EditProfile', () => {
  test('Readonly mode', async () => {
    await componentRender({
      component: <EditProfile />,
      options: { route: AppRoutes.PROFILE },
      initialState: options,
      asyncReducers: {
        profile: profileReducer,
      },
    });

    userEvent.click(screen.getByTestId('editProfile.editButton'));

    expect(screen.getByTestId('editProfile.cancelButton')).toBeInTheDocument();
  });

  test('Reset fields', async () => {
    await componentRender({
      component: <EditProfile />,
      options: { route: AppRoutes.PROFILE },
      initialState: options,
      asyncReducers: {
        profile: profileReducer,
      },
    });

    userEvent.click(screen.getByTestId('editProfile.editButton'));

    userEvent.clear(screen.getByTestId('profileCard.firstName'));
    userEvent.clear(screen.getByTestId('profileCard.lastName'));

    userEvent.type(screen.getByTestId('profileCard.firstName'), 'user');
    userEvent.type(screen.getByTestId('profileCard.lastName'), 'user');

    expect(screen.getByTestId('profileCard.firstName')).toHaveValue('user');
    expect(screen.getByTestId('profileCard.lastName')).toHaveValue('user');

    userEvent.click(screen.getByTestId('editProfile.cancelButton'));

    expect(screen.getByTestId('profileCard.firstName')).toHaveValue('Denys');
    expect(screen.getByTestId('profileCard.lastName')).toHaveValue('Badaka');
  });
});
