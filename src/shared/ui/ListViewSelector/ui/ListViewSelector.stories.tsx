import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleViewSelector } from '.';

export default {
  title: 'shared/ListViewSelector',
  component: ArticleViewSelector,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleViewSelector>;

const Template: ComponentStory<typeof ArticleViewSelector> = (args) => (
  <ArticleViewSelector {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
