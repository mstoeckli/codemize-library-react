import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Loader } from '../components';

export default {
    title: 'ReactLibrary/Loader',
    component: Loader,
} as ComponentMeta<typeof Loader>;

/** @desc Initialize template for component story */
const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

/** @public
 *  @desc Story example 1 */
export const Example1FullWidthAndHeight = Template.bind({});
Example1FullWidthAndHeight.args = {

};

/** @public
 *  @desc Story example 2 */
export const Example2CustomWidthAndHeight = Template.bind({});
Example2CustomWidthAndHeight.args = {
    width: "50%",
    height: "50%"
};

/** @public
 *  @desc Story example 3 */
export const Example3CustomTopAndBottom = Template.bind({});
Example3CustomTopAndBottom.args = {
    top: "200px",
    bottom: "200px",
    height: "auto",
    width: "auto"
};

/** @public
 *  @desc Story example 3 */
export const Example4CustomLeftAndRight = Template.bind({});
Example4CustomLeftAndRight.args = {
    left: "200px",
    right: "200px",
    height: "auto",
    width: "auto"
};

/** @public
 *  @desc Story example 3 */
export const Example5CustomColors = Template.bind({});
Example5CustomColors.args = {
    theme: {
        global: {
            fontFamily: '"Montserrat", Helvetica, Arial, sans-serif',
        },
        button: {
            colors: {
                active:  {
                    text: {
                        default: "#3b4148",
                        success: "#3ca987",
                        warning: "#edc32c",
                        error: "#a93c3c",
                        create: "#fff",
                    },
                    icon: {
                        default: "#455a64",
                        success: "#3ca987",
                        warning: "#edc32c",
                        error: "#a93c3c",
                        create: "#fff"
                    },
                    border: {
                        default: "#e9e9e9",
                        success: "#3ca987",
                        warning: "#edc32c",
                        error: "#a93c3c",
                        create: "#3f6ad8"
                    },
                    background: {
                        default: "#fff",
                        success: "#fff",
                        warning: "#fff",
                        error: "#fff",
                        create: "#688ccd"
                    }
                },
                hover: {
                    text: {
                        default: "#3f6ad8",
                        success: "#3fd8aa",
                        warning: "#d8d13f",
                        error: "#d83f3f",
                        create: "#fff"
                    },
                    icon: {
                        default: "#3f6ad8",
                        success: "#3fd8aa",
                        warning: "#d8d13f",
                        error: "#d83f3f",
                        create: "#fff"
                    },
                    border: {
                        default: "#3f6ad8",
                        success: "#3fd8aa",
                        warning: "#d8d13f",
                        error: "#d83f3f",
                        create: "#3f6ad8"
                    },
                    background: {
                        default: "#e0f3ff",
                        success: "#e0ffee",
                        warning: "#fbffe0",
                        error: "#ffe0e0",
                        create: "#5379cd"
                    }
                }
            },
            config: {
                height: "32px",
                width: "auto",
                borderRadius: "6px",
                justifyContent: "center",
                alignItems: "center",
                padding: "8px",
                cursor: "pointer",
                fontWeight: 500,
                fontSize: "0.775rem",
                transition: "all 0.3s ease"
            }
        },
        dropdown: {
            colors: {
                borderColor: "#bfbfbf",
                background: "#fff"
            },
            config: {
                top: "calc(100% + 10px)",
                width: "100%",
                minWidth: "200px",
                maxWidth: "300px",
                borderRadius: "6px",
                overflow: "hidden",
                boxShadow: "rgba(0, 0, 0, 0.24) 0 3px 8px",
                padding: "8px",
                transition: "all 0.2s ease-in-out",
                zIndex: 9
            }
        },
        copyright: {
            colors: {
                color: "#767676"
            },
            config: {
                fontSize: "0.65rem",
                fontWeight: 500
            }
        },
        search: {
            colors: {
                active: {
                    text: "#3b4148",
                    border: "#e9e9e9",
                    iconLeft: "#455a64",
                    iconRight: "#a93c3c",
                    background: "#fff",
                    placeholder: "#e9e9e9"
                },
                hover: {
                    text: "#3b4148",
                    border: "#3f6ad8",
                    iconLeft: "#3f6ad8",
                    iconRight: "#a93c3c",
                    background: "#fff",
                    placeholder: "#3f6ad8"
                }
            },
            config: {
                height: "32px",
                width: "300px",
                minWidth: "300px",
                maxWidth: "300px",
                borderRadius: "6px",
                fontSizeSVG: "1rem",
                paddingSVG: "0 0.5rem 0 0.5rem",
                fontSizeInput: "0.775rem",
                fontWeightInput: 500,
                marginInput: "0",
                marginInputLeftWithoutIcon: "0.5rem",
                marginInputRightWithoutIcon: "0.5rem",
                outline: "none",
                transition: "all 0.3s ease",
                cursor: "pointer"
            }
        },
        loader: {
            colors: {
                backgroundContainer: "rgba(218, 222, 224, 0.3)",
                backgroundLoaderTile: "#EAB464",
                backgroundLoaderTileActive: "#A7754D",
                backgroundLoaderTileFolding: "#EAB464"
            },
            config: {
                justifyContent: "center",
                alignItems: "center",
                loaderSize: "48px",
                loaderTileSize: "24px",
                loaderTileAfterBoxShadow: "0 0 10px rgba(0, 0, 0, 0.15)",
                zIndex: 99
            }
        },
        madeIn: {
            colors: {
                text: "#3b4148",
                icon: "#455a64"
            },
            config: {
                fontSize: "0.8rem",
                fontWeight: 600,
                margin: "16px 0 8px 0",
                paddingRightSVG: "0.5rem"
            }
        }
    }
};