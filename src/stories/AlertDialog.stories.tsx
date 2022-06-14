import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AlertDialog } from '../components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FaSolidIcons from '@fortawesome/free-solid-svg-icons';

export default {
    title: 'ReactLibrary/AlertDialog',
    component: AlertDialog,
} as ComponentMeta<typeof AlertDialog>;

/** @desc Initialize template for component story */
const Template: ComponentStory<typeof AlertDialog> = (args) => <AlertDialog {...args} />;

/** @public
 *  @desc Story example 1 */
export const Example1DefaultButtons = Template.bind({});
Example1DefaultButtons.args = {
    title: "CM-I001",
    info: "Please connect to private connection to secure your data",
    type: "success",
    buttonOK: {
        visible: true,
    },
    buttonCancel: {
        visible: true,
    },
    buttonSupport: {
        visible: true,
    }
};

/** @public
 *  @desc Story example 2 */
export const Example2CustomizeDefaultButtons = Template.bind({});
Example2CustomizeDefaultButtons.args = {
    title: "CM-I001",
    info: "Please connect to private connection to secure your data",
    buttonOK: {
        text: "Save",
        iconSrc: <FontAwesomeIcon icon={FaSolidIcons["faSave"]} />,
        visible: true,
    },
    buttonCancel: {
        text: "Reset",
        iconSrc: <FontAwesomeIcon icon={FaSolidIcons["faXmark"]} />,
        visible: true,
    },
    buttonSupport: {
        text: "Custom Support",
        visible: true,
    }
};

/** @public
 *  @desc Story example 3 */
export const Example3HideDefaultButtons = Template.bind({});
Example3HideDefaultButtons.args = {
    title: "CM-I001",
    info: "Please connect to private connection to secure your data",
    buttonOK: {
        visible: false,
    },
    buttonCancel: {
        visible: false,
    },
    buttonSupport: {
        visible: false,
    }
};

/** @public
 *  @desc Story example 4 */
export const Example4CustomButtons = Template.bind({});
Example4CustomButtons.args = {
    title: "CM-I001",
    info: "Please connect to private connection to secure your data",
    customButtons: [{
        text: "Sign Up",
        iconSrc: <FontAwesomeIcon icon={FaSolidIcons["faRightFromBracket"]} />,
        onClick: () => {}
    }, {
        type: "create",
        text: "Sign In",
        iconSrc: <FontAwesomeIcon icon={FaSolidIcons["faRightToBracket"]} />,
        onClick: () => {}
    }]
};

/** @public
 *  @desc Story example 5 */
export const Example1TypeError = Template.bind({});
Example1TypeError.args = {
    title: "CM-E001",
    info: "Please connect to private connection to secure your data",
    type: "error",
    buttonOK: {
        visible: true,
    },
    buttonCancel: {
        visible: true,
    },
    buttonSupport: {
        visible: false,
    }
};

/** @public
 *  @desc Story example 6 */
export const Example6TypeWarning = Template.bind({});
Example6TypeWarning.args = {
    title: "CM-W001",
    info: "Please connect to private connection to secure your data",
    type: "warning",
    buttonOK: {
        visible: true,
    },
    buttonCancel: {
        visible: true,
    },
    buttonSupport: {
        visible: false,
    }
};

/** @public
 *  @desc Story example 7 */
export const Example7TypeSuccess = Template.bind({});
Example7TypeSuccess.args = {
    title: "CM-S001",
    info: "Please connect to private connection to secure your data",
    type: "success",
    buttonOK: {
        visible: true,
    },
    buttonCancel: {
        visible: true,
    },
    buttonSupport: {
        visible: false,
    }
};

/** @public
 *  @desc Story example 8 */
export const Example8HideIconSrc = Template.bind({});
Example8HideIconSrc.args = {
    title: "CM-I001",
    info: "Please connect to private connection to secure your data",
    hideIconSrc: true
};