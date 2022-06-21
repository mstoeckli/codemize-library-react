import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Search } from '../components';

export default {
    title: 'ReactLibrary/Search',
    component: Search,
} as ComponentMeta<typeof Search>;

/** @desc Initialize template for component story */
const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;

/** @public
 *  @desc Story example 1 */
export const Example1 = Template.bind({});
Example1.args = {
    onChange: (oEvt, value) => console.log(value)
};

/** @public
 *  @desc Story example 2 */
export const Example2WithPredefinedValue = Template.bind({});
Example2WithPredefinedValue.args = {
    value: "Codemize GmbH",
    onChange: (oEvt, value) => console.log(value)
};

/** @public
 *  @desc Story example 3 */
export const Example3HideLeftIcon = Template.bind({});
Example3HideLeftIcon.args = {
    hideIconLeft: true,
    onChange: (oEvt, value) => console.log(value)
};

/** @public
 *  @desc Story example 4 */
export const Example4HideRightIcon = Template.bind({});
Example4HideRightIcon.args = {
    hideIconRight: true,
    onChange: (oEvt, value) => console.log(value)
};

/** @public
 *  @desc Story example 5 */
export const Example5HideAllIcons = Template.bind({});
Example5HideAllIcons.args = {
    hideIconLeft: true,
    hideIconRight: true,
    onChange: (oEvt, value) => console.log(value)
};

/** @public
 *  @desc Story example 6 */
export const Example6SpecificWidth = Template.bind({});
Example6SpecificWidth.args = {
    width: "150px",
    onChange: (oEvt, value) => console.log(value)
};