import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator, ThemeVariants } from 'shared';

import { ErrorCatcher } from '.';

export default {
  title: 'widget/ErrorPage',
  component: ErrorCatcher,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ErrorCatcher>;

const Template: ComponentStory<typeof ErrorCatcher> = (args) => (
  <ErrorCatcher {...args} />
);

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(ThemeVariants.DARK)];
