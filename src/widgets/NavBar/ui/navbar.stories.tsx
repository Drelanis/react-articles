import { ComponentMeta, ComponentStory } from '@storybook/react';

import { NavBar } from '.';
import { StoreDecorator, ThemeDecorator, ThemeVariants } from '$shared';

export default {
  title: 'widget/Navbar',
  component: NavBar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];
export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(ThemeVariants.DARK), StoreDecorator({})];

export const AuthNavBarLight = Template.bind({});
AuthNavBarLight.args = {};
AuthNavBarLight.decorators = [
  StoreDecorator({
    user: { authData: { id: '1', username: 'admin' } },
  }),
];

export const AuthNavBarDark = Template.bind({});
AuthNavBarDark.args = {};
AuthNavBarDark.decorators = [
  ThemeDecorator(ThemeVariants.DARK),
  StoreDecorator({
    user: { authData: { id: '1', username: 'admin' } },
  }),
];
