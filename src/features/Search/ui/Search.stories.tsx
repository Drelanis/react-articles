import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Search } from '.';

export default {
  title: 'features/Search',
  component: Search,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
