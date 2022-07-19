import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DatePicker } from '../components';

export default {
    title: 'ReactLibrary/DatePicker',
    component: DatePicker,
} as ComponentMeta<typeof DatePicker>;

/** @desc Initialize template for component story */
const Template: ComponentStory<typeof DatePicker> = (args) => <DatePicker {...args} />;

/** @public
 *  @desc Story example 1 */
export const Example1 = Template.bind({});
Example1.args = {
    apply: {
        onClick: (dStartDate, dEndDate) => {
            alert(`${dStartDate} - ${dEndDate}`);
        }
    },
    reset: {
        onClick: () => {}
    }
}