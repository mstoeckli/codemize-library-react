import { DefaultTheme } from "styled-components";

/** @public
 *  @desc Defines the properties of the theme provider */
export interface IThemeProviderProps {
    theme?: DefaultTheme,
    children: JSX.Element
}