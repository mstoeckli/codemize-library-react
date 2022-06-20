import React from "react";

import { DefaultTheme } from "styled-components";

/** @public
 *  @desc Defines the properties of each search element */
export interface ISearchProps {
    width?: string,
    minWidth?: string,
    maxWidth?: string,
    value?: string,
    placeholder: string,
    iconSrcLeft?: JSX.Element,
    iconSrcRight?: JSX.Element,
    hideIconLeft?: boolean,
    hideIconRight?: boolean
    theme?: DefaultTheme,
    onChange?: (oEvt: React.ChangeEvent<HTMLInputElement>, value:string) => void,
    onSearch?: (oEvt: React.MouseEvent<SVGSVGElement>, value:string) => void,
    onClear?: (oEvt: React.MouseEvent<SVGSVGElement>) => void,
}

/** @public
 *  @desc Defines the theme properties for all the button colors */
export type SearchColors = {
    text: string,
    iconLeft: string,
    iconRight: string,
    border: string,
    background: string,
    placeholder: string
};

/** @public
 *  @desc Defines the theme properties for all the search config */
export type SearchConfigTheme = {
    height: string, // -> 32px ...
    borderRadius: string, // -> 6px
    fontSizeSVG: string, // -> 1rem
    paddingSVG: string, // -> 0 0.5rem 0 0.5rem
    fontSizeInput: string, // -> 0.775rem
    fontWeightInput: number, // -> 500
    marginInput: string, // -> 0
    marginInputLeftWithoutIcon: string // -> 0.5rem
    marginInputRightWithoutIcon: string // -> 0.5rem
    outline: string, // -> none
    transition: string, // -> all 0.3s ease
    cursor: string // -> pointer
}