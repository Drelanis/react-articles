import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Input } from '.';
import { ThemeDecorator } from '$shared/configs';
import { ThemeVariants } from '$shared/providers';

export default {
  title: 'shared/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Type text',
  value: 'input value',
};

export const Dark = Template.bind({});
Dark.args = {
  placeholder: 'Type text',
  value: 'input value',
};
Dark.decorators = [ThemeDecorator(ThemeVariants.DARK)];
