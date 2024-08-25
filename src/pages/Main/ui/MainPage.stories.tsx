import { ComponentMeta, ComponentStory } from '@storybook/react';

import MainPage from './MainPage';

import { ThemeDecorator, ThemeVariants } from '$shared';

export default {
  title: 'pages/MainPage',
  component: MainPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = (args) => (
  <MainPage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(ThemeVariants.DARK)];
