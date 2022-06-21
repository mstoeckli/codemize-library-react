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
export const Example1Success = Template.bind({});
Example1Success.args = {
    title: "Success",
    message: "Data are successfully stored in database",
    type: "success"
};

/** @public
 *  @desc Story example 2 */
export const Example2Warning = Template.bind({});
Example2Warning.args = {
    title: "Success",
    message: "Data are successfully stored in database",
    type: "warning"
};

/** @public
 *  @desc Story example 3 */
export const Example3Error = Template.bind({});
Example3Error.args = {
    title: "Success",
    message: "Data are successfully stored in database",
    type: "error"
};

/** @public
 *  @desc Story example 4 */
export const Example4Information = Template.bind({});
Example4Information.args = {
    title: "Success",
    message: "Data are successfully stored in database",
    type: "information"
};

/** @public
 *  @desc Story example 5 */
export const Example5CustomButtons = Template.bind({});
Example5CustomButtons.args = {
    title: "Success",
    message: "Data are successfully stored in database",
    type: "information",
    customButtons: [{
        text: "Close",
        iconSrc: <FontAwesomeIcon icon={FaSolidIcons["faXmark"]} />,
        onClick: () => { alert("close") }
    }]
};

/** @public
 *  @desc Story example 4 */
export const Example6CustomTime = Template.bind({});
Example6CustomTime.args = {
    title: "Success",
    message: "Data are successfully stored in database",
    type: "information",
    timeMS: 2000
};

