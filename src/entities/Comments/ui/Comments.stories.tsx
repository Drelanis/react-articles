import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Comments } from '.';

export default {
  title: 'entities/CommentList',
  component: Comments,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Comments>;

const Template: ComponentStory<typeof Comments> = (args) => (
  <Comments {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  isLoading: false,
  comments: [
    {
      id: '1',
      text: 'Hello world1',
      user: {
        id: '1',
        userName: 'admin',
        avatar:
          'https://seeklogo.com/images/L/linkin-park-band-logo-3F627013D0-seeklogo.com.png',
      },
    },
    {
      id: '2',
      text: 'Hello world2',
      user: {
        id: '1',
        userName: 'admin',
        avatar:
          'https://seeklogo.com/images/L/linkin-park-band-logo-3F627013D0-seeklogo.com.png',
      },
    },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
  comments: [
    {
      id: '1',
      text: 'Hello world1',
      user: {
        id: '1',
        userName: 'admin',
        avatar:
          'https://seeklogo.com/images/L/linkin-park-band-logo-3F627013D0-seeklogo.com.png',
      },
    },
    {
      id: '2',
      text: 'Hello world2',
      user: {
        id: '1',
        userName: 'admin',
        avatar:
          'https://seeklogo.com/images/L/linkin-park-band-logo-3F627013D0-seeklogo.com.png',
      },
    },
  ],
};
