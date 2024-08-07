import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator, ThemeVariants } from 'shared';

import { NavBar } from '.';

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
