import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Avatar } from '.';
import AvatarImg from '$shared/assets/tests/storybook.jpg';

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: 150,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- exception
  src: AvatarImg,
};

export const Small = Template.bind({});
Small.args = {
  size: 50,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- exception
  src: AvatarImg,
};
