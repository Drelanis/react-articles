import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Sidebar } from '.';
import { StoreDecorator, ThemeDecorator, ThemeVariants } from '$shared';

export default {
  title: 'widget/Sidebar',
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <Sidebar {...args} />
);

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
  StoreDecorator({
    user: { authData: { id: '1', userName: 'admin' } },
  }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  ThemeDecorator(ThemeVariants.DARK),
  StoreDecorator({
    user: { authData: { id: '1', userName: 'admin' } },
  }),
];

export const NoAuth = Template.bind({});
NoAuth.args = {};
NoAuth.decorators = [
  StoreDecorator({
    user: {},
  }),
];
