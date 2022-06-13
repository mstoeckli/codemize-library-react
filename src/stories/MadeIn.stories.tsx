import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MadeIn } from '../components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FaSolidIcons from '@fortawesome/free-solid-svg-icons';

export default {
    title: 'ReactLibrary/MadeIn',
    component: MadeIn,
} as ComponentMeta<typeof MadeIn>;

/** @desc Initialize template for component story */
const Template: ComponentStory<typeof MadeIn> = (args) => <MadeIn {...args} />;

/** @public
 *  @desc Story example 1 */
export const Example1WithoutIcon = Template.bind({});
Example1WithoutIcon.args = {
    text: "Made in Switzerland"
};

/** @public
 *  @desc Story example 1 */
export const Example2WithCustomIcon = Template.bind({});
Example2WithCustomIcon.args = {
    text: "Made in Switzerland",
    iconSrc: <FontAwesomeIcon icon={FaSolidIcons["faGlobe"]} />
};