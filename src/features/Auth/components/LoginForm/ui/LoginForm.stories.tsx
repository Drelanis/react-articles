import { ComponentMeta, ComponentStory } from '@storybook/react';

import LoginForm from './LoginForm';

import { StoreDecorator } from '$shared';

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

export const withError = Template.bind({});
withError.args = {};
withError.decorators = [
  StoreDecorator({
    login: { userName: '123', password: 'asd', error: 'LOGIN_ERROR' },
  }),
];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [
  StoreDecorator({
    login: { isLoading: true },
  }),
];
