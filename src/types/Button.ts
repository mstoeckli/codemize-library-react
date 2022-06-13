import React from 'react';

import { DefaultTheme } from "styled-components";

import { DropdownFloat } from "./Dropdown";

/** @public
 *  @desc Defines the properties of each button */
export interface IButtonProps {
    text?: string,
    iconSrc?: JSX.Element,
    type?: ButtonType,
    disabled?: boolean,
    dropdownContent?: JSX.Element,
    dropdownFloat?: DropdownFloat,
    theme?: DefaultTheme,
    customTheme?: DefaultTheme,
    onClick: (oEvt: React.MouseEvent<HTMLButtonElement>) => void,
}

/** @public
 *  @desc Defines the button types for different visualization */
export type ButtonType = "default" | "success" | "warning" | "error" | "create";

/** @public
 *  @desc Defines the theme properties for all the button colors */
export type ButtonColors = {
    text: ButtonColorsType,
    icon: ButtonColorsType,
    border: ButtonColorsType,
    background: ButtonColorsType
};

/** @public
 *  @desc Defines the theme properties for all the button config */
export type ButtonConfigTheme = {
    height: string, // -> 100% | 10px ...
    width: string, // -> 100% | 10px ...
    borderRadius: string, // -> 6px
    justifyContent: string, // -> center | flex-start ...
    alignItems: string, // -> center | flex-start ...
    padding: string, // -> 8px
    cursor: string, // -> pointer | default ...
    fontWeight: number, // -> 500 | 600 | 700 ...
    fontSize: string, // -> 0.775rem
    transition: string // -> all 0.3s ease
};

/** @public
 *  @desc Defines the theme properties for all the button colors of each type */
export type ButtonColorsType = {
    default: string,
    success: string,
    warning: string,
    error: string,
    create: string
};