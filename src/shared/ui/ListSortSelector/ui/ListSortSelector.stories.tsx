import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ListSortSelector } from '.';
import { ArticleType, ListOrderField } from '$shared/constants';

export default {
  title: 'shared/ListSortSelector',
  component: ListSortSelector,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ListSortSelector>;

const Template: ComponentStory<typeof ListSortSelector> = (args) => (
  <ListSortSelector {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  orderOptions: [
    {
      value: ListOrderField.ASC,
      content: 'desc',
    },
    {
      value: ListOrderField.DESC,
      content: 'asc',
    },
  ],
  sortFieldOptions: [
    {
      value: ArticleType.ALL,
      content: 'all',
    },
    {
      value: ArticleType.IT,
      content: 'it',
    },
    {
      value: ArticleType.ECONOMICS,
      content: 'economics',
    },
    {
      value: ArticleType.SCIENCE,
      content: 'science',
    },
  ],
};
