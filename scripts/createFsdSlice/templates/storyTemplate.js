module.exports = (layer, componentName) => `
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ${componentName} } from '.';

export default {
    title: '${layer}/${componentName}',
    component: ${componentName},
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ${componentName}>;

const Template: ComponentStory<typeof ${componentName}> = (args) => <${componentName} {...args} />;

export const Normal = Template.bind({});
Normal.args = {
   
};`;
