import { DeepPartial, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Profile, profileReducer, ProfileSchema } from '../model';

import { ProfileCard } from '.';
import { Country } from '$entities/CountrySelector';
import { Currency } from '$entities/CurrencySelector';
import { StateSchema, StoreDecorator } from '$shared';
import AvatarImg from '$shared/assets/tests/storybook.jpg';

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

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
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

export const WithError = Template.bind({});
WithError.args = {};
WithError.decorators = [
  StoreDecorator(
    {
      profile: {
        isLoading: false,
        readonly: true,
        data,
        error: 'ERROR',
        form: data,
        validationError: undefined,
      },
    },
    asyncProfileReducers,
  ),
];

export const Loading = Template.bind({});
Loading.args = {};
Loading.args = {};
Loading.decorators = [
  StoreDecorator(
    {
      profile: {
        isLoading: true,
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

export const Edit = Template.bind({});
Edit.args = {};
Edit.args = {};
Edit.decorators = [
  StoreDecorator(
    {
      profile: {
        isLoading: false,
        readonly: false,
        data,
        error: undefined,
        form: data,
        validationError: undefined,
      },
    },
    asyncProfileReducers,
  ),
];

export const ValidationErrors = Template.bind({});
ValidationErrors.args = {};
ValidationErrors.args = {};
ValidationErrors.decorators = [
  StoreDecorator(
    {
      profile: {
        isLoading: false,
        readonly: false,
        data,
        error: undefined,
        form: data,
        validationError: [
          'INCORRECT_AGE',
          'INCORRECT_COUNTRY',
          'INCORRECT_USER_DATA',
        ],
      },
    },
    asyncProfileReducers,
  ),
];
