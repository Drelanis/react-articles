import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ListTypeSelector } from '.';
import { ArticleType } from '$entities';

export default {
  title: 'shared/ListTypeSelector',
  component: ListTypeSelector,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ListTypeSelector>;

const Template: ComponentStory<typeof ListTypeSelector> = (args) => (
  <ListTypeSelector {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  typeTabs: [
    {
      value: ArticleType.ALL,
      content: 'All',
    },
    {
      value: ArticleType.IT,
      content: 'It',
    },
    {
      value: ArticleType.ECONOMICS,
      content: 'Economics',
    },
    {
      value: ArticleType.SCIENCE,
      content: 'Science',
    },
  ],
};
