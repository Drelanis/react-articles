import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CommentCard } from '.';

export default {
  title: 'entities/CommentCard',
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => (
  <CommentCard {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  comment: {
    id: '1',
    text: 'Hello world',
    user: {
      id: '1',
      userName: 'admin',
      avatar:
        'https://seeklogo.com/images/L/linkin-park-band-logo-3F627013D0-seeklogo.com.png',
    },
  },
};
