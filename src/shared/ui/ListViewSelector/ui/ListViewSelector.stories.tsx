import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ListViewSelector } from '.';

export default {
  title: 'shared/ListViewSelector',
  component: ListViewSelector,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ListViewSelector>;

const Template: ComponentStory<typeof ListViewSelector> = (args) => (
  <ListViewSelector {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
