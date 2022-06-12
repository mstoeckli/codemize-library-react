import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FaSolidIcons from '@fortawesome/free-solid-svg-icons';

export default {
    title: 'ReactLibrary/Button',
    component: Button,
} as ComponentMeta<typeof Button>;

/** @desc Initialize template for component story */
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

/** @public
 *  @desc Story example 1 - Icon with text */
export const Example1IconWithText = Template.bind({});
Example1IconWithText.args = {
    text: "Click me",
    iconSrc: <FontAwesomeIcon icon={FaSolidIcons["faCubes"]}/>,
    onClick: () => alert("Example 1 Clicked")
};

/** @public
 *  @desc Story example 2 - Icon without text */
export const Example2IconWithoutText = Template.bind({});
Example2IconWithoutText.args = {
    iconSrc: <FontAwesomeIcon icon={FaSolidIcons["faCubes"]} />,
    onClick: () => alert("Example 2 Clicked")
};

/** @public
 *  @desc Story example 3 - Icon without text */
export const Example3TextWithoutIcon = Template.bind({});
Example3TextWithoutIcon.args = {
    text: "Click me",
    onClick: () => alert("Example 3 Clicked")
};

/** @public
 *  @desc Story example 4 - Text with type create */
export const Example4TypeCreate = Template.bind({});
Example4TypeCreate.args = {
    text: "Click me",
    type: "create",
    onClick: () => alert("Example 4 Clicked")
};

/** @public
 *  @desc Story example 5 - Text with type success */
export const Example5TypeSuccess = Template.bind({});
Example5TypeSuccess.args = {
    text: "Click me",
    type: "success",
    onClick: () => alert("Example 5 Clicked")
};

/** @public
 *  @desc Story example 6 - Text with type error */
export const Example6TypeError = Template.bind({});
Example6TypeError.args = {
    text: "Click me",
    type: "error",
    iconSrc: <FontAwesomeIcon icon={FaSolidIcons["faBug"]} />,
    onClick: () => alert("Example 6 Clicked")
};

/** @public
 *  @desc Story example 7 - Text and icon with dropdown */
export const Example7TextAndIconWithDropdown = Template.bind({});
Example7TextAndIconWithDropdown.args = {
    text: "Click me",
    dropdownContent: <div>Any JSX-Element as content</div>,
    iconSrc: <FontAwesomeIcon icon={FaSolidIcons["faInfo"]} />,
    onClick: () => alert("Example 7 Clicked")
};