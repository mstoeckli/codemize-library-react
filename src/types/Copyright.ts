import { DefaultTheme } from "styled-components";

/** @public
 *  @desc Defines the properties of each copyright element */
export interface ICopyrightProps {
    text: string,
    theme?: DefaultTheme,
}

/** @public
 *  @desc Defines the theme properties for all the copyright config */
export type CopyrightConfigTheme = {
    fontSize: string, // -> 0.65rem
    fontWeight: number // -> 500
}