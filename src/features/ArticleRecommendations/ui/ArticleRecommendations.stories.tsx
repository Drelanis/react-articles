import { ComponentMeta, ComponentStory } from '@storybook/react';
import withMock from 'storybook-addon-mock';

import { ArticleRecommendations } from '.';
import { Article } from '$entities';
import { AppRoutes, StoreDecorator } from '$shared';

export default {
  title: 'features/ArticleRecommendations',
  component: ArticleRecommendations,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [withMock],
} as ComponentMeta<typeof ArticleRecommendations>;

const Template: ComponentStory<typeof ArticleRecommendations> = (args) => (
  <ArticleRecommendations {...args} />
);

const article: Article = {
  id: '1',
  img: '',
  createdAt: '',
  views: 123,
  user: { id: '1', userName: '123' },
  blocks: [],
  type: [],
  title: '123',
  subtitle: 'asfsa',
};

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
  mockData: [
    {
      url: `${API}/${AppRoutes.ARTICLES}?_limit=4`,
      method: 'GET',
      status: 200,
      response: [
        { ...article, id: '1' },
        { ...article, id: '2' },
        { ...article, id: '3' },
      ],
    },
  ],
};
