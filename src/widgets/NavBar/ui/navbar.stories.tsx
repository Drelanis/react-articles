import { ComponentMeta, ComponentStory } from '@storybook/react';

import { NavBar } from '.';
import { ThemeDecorator, ThemeVariants } from '$shared';

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
export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(ThemeVariants.DARK)];

export const AuthNavBarLight = Template.bind({});
AuthNavBarLight.args = {};

export const AuthNavBarDark = Template.bind({});
AuthNavBarDark.args = {};
AuthNavBarDark.decorators = [ThemeDecorator(ThemeVariants.DARK)];
