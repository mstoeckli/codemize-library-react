import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Toast } from '../components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FaSolidIcons from '@fortawesome/free-solid-svg-icons';

export default {
    title: 'ReactLibrary/Toast',
    component: Toast,
} as ComponentMeta<typeof Toast>;

/** @desc Initialize template for component story */
const Template: ComponentStory<typeof Toast> = (args) => <Toast {...args} />;

/** @public
 *  @desc Story example 1 */
export const Example1 = Template.bind({});
Example1.args = {

};
