import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ButtonSize, ButtonVariant } from '../constants';

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
  children: 'Text',
  variant: ButtonVariant.OUTLINE,
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
  children: 'Text',
  variant: ButtonVariant.OUTLINE,
  size: ButtonSize.L,
};

export const OutlineSizeXl = Template.bind({});
OutlineSizeXl.args = {
  children: 'Text',
  variant: ButtonVariant.OUTLINE,
  size: ButtonSize.XL,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Text',
  variant: ButtonVariant.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(ThemeVariants.DARK)];

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
  children: 'Text',
  variant: ButtonVariant.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
  children: 'Text',
  variant: ButtonVariant.BACKGROUND_INVERTED,
};

export const Square = Template.bind({});
Square.args = {
  children: '>',
  variant: ButtonVariant.BACKGROUND_INVERTED,
  square: true,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
  children: '>',
  variant: ButtonVariant.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.L,
};

export const SquareSizeXl = Template.bind({});
SquareSizeXl.args = {
  children: '>',
  variant: ButtonVariant.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.XL,
};
