import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ListBox } from '.';

export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
  <ListBox {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  label: 'Enter value',
  value: 'first',
  items: [
    { value: 'first', content: 'First value' },
    { value: 'second', content: 'Second value' },
  ],
};
