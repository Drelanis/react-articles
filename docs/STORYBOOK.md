## Storybook

In the project, story cases are described for each component.  
Server requests are mocked using storybook-addon-mock.

The file with story cases is created next to the component with the `.stories.tsx` extension.

You can start Storybook with the following command:

- `npm run storybook`

More details about [Storybook](/docs/storybook.md)

Example:

```typescript jsx
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ButtonSize, ButtonVariant } from '../constants';

import { Button } from '.';
import { ThemeDecorator } from '$shared/configs';
import { ThemeVariants } from '$shared/providers';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button text',
  variant: ButtonVariant.PRIMARY,
};
```
