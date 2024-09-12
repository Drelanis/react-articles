import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Card } from '.';
import { Text } from '$shared';

export default {
  title: 'shared/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: <Text title="test" text="text text" />,
};
