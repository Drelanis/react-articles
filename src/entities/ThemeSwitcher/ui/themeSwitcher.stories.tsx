import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeSwitcher } from '.';
import { ThemeDecorator, ThemeProvider, ThemeVariants } from '$shared';

export default {
  title: 'entities/ThemeSwitcher',
  component: ThemeSwitcher,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => (
  <ThemeProvider>
    <ThemeSwitcher {...args} />
  </ThemeProvider>
);

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(ThemeVariants.DARK)];
