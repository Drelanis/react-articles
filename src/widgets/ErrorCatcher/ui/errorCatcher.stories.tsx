import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ErrorCatcher } from '.';
import { ThemeDecorator, ThemeVariants } from '$shared';

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
