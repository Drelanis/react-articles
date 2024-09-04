import { DeepPartial, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import ProfilePage from './ProfilePage';

import { Profile, profileReducer, ProfileSchema } from '$entities';
import { Country } from '$entities/CountrySelector';
import { Currency } from '$entities/CurrencySelector';
import {
  StateSchema,
  StoreDecorator,
  ThemeDecorator,
  ThemeVariants,
} from '$shared';
import AvatarImg from '$shared/assets/tests/storybook.jpg';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>;

const asyncProfileReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  profile: profileReducer as Reducer<ProfileSchema | undefined>,
};

const data: Profile = {
  userName: 'admin',
  age: 100,
  country: Country.UKRAINE,
  lastName: 'LAST_NAME',
  firstName: 'FIRST_NAME',
  city: 'CITY',
  currency: Currency.USD,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- exception
  avatar: AvatarImg,
};

const Template: ComponentStory<typeof ProfilePage> = (args) => (
  <ProfilePage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
  StoreDecorator(
    {
      profile: {
        isLoading: false,
        readonly: true,
        data,
        error: undefined,
        form: data,
        validationError: undefined,
      },
    },
    asyncProfileReducers,
  ),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  ThemeDecorator(ThemeVariants.DARK),
  StoreDecorator(
    {
      profile: {
        isLoading: false,
        readonly: true,
        data,
        error: undefined,
        form: data,
        validationError: undefined,
      },
    },
    asyncProfileReducers,
  ),
];
