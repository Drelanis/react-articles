import { DeepPartial, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { loginReducer, LoginSchema } from '../store';

import LoginForm from './LoginForm';

import { StateSchema, StoreDecorator } from '$shared';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
  <LoginForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

const asyncLoginReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  // TODO: Research this moment
  login: loginReducer as Reducer<LoginSchema | undefined>,
};

export const withError = Template.bind({});
withError.args = {};
withError.decorators = [
  StoreDecorator(
    {
      login: {
        userName: '',
        password: '',
        error: 'LOGIN_ERROR',
        isLoading: false,
      },
    },
    asyncLoginReducers,
  ),
];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [
  StoreDecorator(
    {
      login: {
        isLoading: true,
        userName: '',
        password: '',
      },
    },
    asyncLoginReducers,
  ),
];
