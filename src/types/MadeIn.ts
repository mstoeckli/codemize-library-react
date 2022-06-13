import { DefaultTheme } from "styled-components";

/** @public
 *  @desc Defines the properties of each copyright element */
export interface IMadeInProps {
    text: string,
    iconSrc?: JSX.Element,
    theme?: DefaultTheme,
}

/** @public
 *  @desc Defines the theme properties for all the copyright config */
export type MadeInConfigTheme = {
    fontSize: string, // -> 0.8rem
    fontWeight: number, // -> 600
    margin: string, // -> 16px 0 8px 0
    paddingRightSVG: string // -> 0.5rem
}