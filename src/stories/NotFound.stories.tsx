import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NotFound } from '../components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FaSolidIcons from '@fortawesome/free-solid-svg-icons';

export default {
    title: 'ReactLibrary/NotFound',
    component: NotFound,
} as ComponentMeta<typeof NotFound>;

/** @desc Initialize template for component story */
const Template: ComponentStory<typeof NotFound> = (args) => <NotFound {...args} />;

/** @public
 *  @desc Story example 1 */
export const Example1WithoutIcon = Template.bind({});
Example1WithoutIcon.args = {

};
