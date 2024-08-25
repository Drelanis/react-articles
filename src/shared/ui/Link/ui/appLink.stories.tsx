import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AppLinkTheme } from '../constants';

import { Link } from '.';
import { ThemeDecorator } from '$shared/configs';
import { ThemeVariants } from '$shared/providers';

export default {
  title: 'shared/AppLink',
  component: Link,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
  theme: AppLinkTheme.PRIMARY,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Text',
  theme: AppLinkTheme.SECONDARY,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'Text',
  theme: AppLinkTheme.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(ThemeVariants.DARK)];

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  children: 'Text',
  theme: AppLinkTheme.SECONDARY,
};
SecondaryDark.decorators = [ThemeDecorator(ThemeVariants.DARK)];
