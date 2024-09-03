import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Select } from '.';

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Enter value',
  options: [
    { value: 'first', content: 'First value' },
    { value: 'second', content: 'Second value' },
  ],
};
