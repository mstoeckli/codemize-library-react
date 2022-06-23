import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Copyright } from '../components';

export default {
    title: 'ReactLibrary/Copyright',
    component: Copyright,
} as ComponentMeta<typeof Copyright>;

/** @desc Initialize template for component story */
const Template: ComponentStory<typeof Copyright> = (args) => <Copyright {...args} />;

/** @public
 *  @desc Story example 1 */
export const Example1 = Template.bind({});
Example1.args = {
    text: "Copyright by Codemize"
}