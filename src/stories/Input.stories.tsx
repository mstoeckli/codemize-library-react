import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input,  } from '../components';

export default {
    title: 'ReactLibrary/Input',
    component: Input,
} as ComponentMeta<typeof Input>;

/** @desc Initialize template for component story */
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

/** @public
 *  @desc Story example 1 */
export const Example1LabelLeft = Template.bind({});
Example1LabelLeft.args = {
    width: "400px",
    label: "https://",
    inputProps: {
        placeholder: "Entry value...",
        onChange: (oEvt: React.ChangeEvent<HTMLInputElement>) => console.log(oEvt.currentTarget.value)
    }
};

/** @public
 *  @desc Story example 2 */
export const Example2LabelRight = Template.bind({});
Example2LabelRight.args = {
    label: "@codemize.ch",
    position: "right",
    inputProps: {
        placeholder: "Entry value...",
        onChange: (oEvt: React.ChangeEvent<HTMLInputElement>) => console.log(oEvt.currentTarget.value)
    }
};

/** @public
 *  @desc Story example 1 */
export const Example3WithoutLabel = Template.bind({});
Example3WithoutLabel.args = {
    inputProps: {
        placeholder: "Entry value...",
        onChange: (oEvt: React.ChangeEvent<HTMLInputElement>) => console.log(oEvt.currentTarget.value)
    }
};