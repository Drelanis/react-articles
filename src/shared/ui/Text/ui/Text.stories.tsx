import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TextVariants } from '../constants';

import { Text } from '.';
import { ThemeDecorator } from '$shared/configs';
import { ThemeVariants } from '$shared/providers';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title lorem ipsun',
  text: 'Description Description Description Description',
};

export const Error = Template.bind({});
Error.args = {
  title: 'Title lorem ipsun',
  text: 'Description Description Description Description',
  variant: TextVariants.ERROR,
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
  title: 'Title lorem ipsun',
};

export const onlyText = Template.bind({});
onlyText.args = {
  text: 'Description Description Description Description',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'Title lorem ipsun',
  text: 'Description Description Description Description',
};
PrimaryDark.decorators = [ThemeDecorator(ThemeVariants.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
  title: 'Title lorem ipsun',
};
onlyTitleDark.decorators = [ThemeDecorator(ThemeVariants.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
  text: 'Description Description Description Description',
};
onlyTextDark.decorators = [ThemeDecorator(ThemeVariants.DARK)];
