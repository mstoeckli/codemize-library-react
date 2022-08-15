import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NavBar } from '../components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FaSolidIcons from '@fortawesome/free-solid-svg-icons';

export default {
    title: 'ReactLibrary/NavBar',
    component: NavBar,
} as ComponentMeta<typeof NavBar>;

/** @desc Initialize template for component story */
const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

/** @public
 *  @desc Story example 1 */
export const Example1 = Template.bind({});
Example1.args = {
    left: {
        navItems: [{
            text: "Excel-Import",
            icon: {
                src: <FontAwesomeIcon icon={FaSolidIcons["faFileExcel"]} />,
                color: "#AC7088"
            }
        }, {
            isSeparator: true
        }, {
            text: "Excel-Import",
            icon: {
                src: <FontAwesomeIcon icon={FaSolidIcons["faFileExcel"]} />,
                color: "#AC7088"
            }
        }]
    },
    middle: [{
        text: "Schule",
        isTitle: true
    }, {
        icon: {
            src: <FontAwesomeIcon icon={FaSolidIcons["faCaretSquareDown"]} />,
        }
    }],
    right: {
        navItems: [{
            icon: {
                src: <FontAwesomeIcon icon={FaSolidIcons["faHandsHelping"]} />,
                position: "right"
            }
        }, {
            isSeparator: true
        }, {
            text: "Anmelden",
            icon: {
                src: <FontAwesomeIcon icon={FaSolidIcons["faSignOut"]} />,
                position: "right"
            },
            onClick: () => alert("Sign in clicked")
        }]
    },
}