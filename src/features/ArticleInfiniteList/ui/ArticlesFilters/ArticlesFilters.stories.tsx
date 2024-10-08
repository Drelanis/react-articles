import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticlesFilters } from '.';

export default {
  title: 'features/ArticlesFilters',
  component: ArticlesFilters,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticlesFilters>;

const Template: ComponentStory<typeof ArticlesFilters> = (args) => (
  <ArticlesFilters {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
