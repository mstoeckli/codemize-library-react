import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Loader } from '../components';

export default {
    title: 'ReactLibrary/Loader',
    component: Loader,
} as ComponentMeta<typeof Loader>;

/** @desc Initialize template for component story */
const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

/** @public
 *  @desc Story example 1 */
export const Example1FullWidthAndHeight = Template.bind({});
Example1FullWidthAndHeight.args = {

};

/** @public
 *  @desc Story example 2 */
export const Example2CustomWidthAndHeight = Template.bind({});
Example2CustomWidthAndHeight.args = {
    width: "50%",
    height: "50%"
};

/** @public
 *  @desc Story example 3 */
export const Example3CustomTopAndBottom = Template.bind({});
Example3CustomTopAndBottom.args = {
    top: "200px",
    bottom: "200px",
    height: "auto",
    width: "auto"
};

/** @public
 *  @desc Story example 3 */
export const Example4CustomLeftAndRight = Template.bind({});
Example4CustomLeftAndRight.args = {
    left: "200px",
    right: "200px",
    height: "auto",
    width: "auto"
};