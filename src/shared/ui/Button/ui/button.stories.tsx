import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ButtonVariant } from '../constants';

import { Button } from '.';
import { ThemeDecorator } from '$shared/configs';
import { ThemeVariants } from '$shared/providers';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button text',
  variant: ButtonVariant.PRIMARY,
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Button text',
  variant: ButtonVariant.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Button text',
  variant: ButtonVariant.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Button text',
  variant: ButtonVariant.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(ThemeVariants.DARK)];
