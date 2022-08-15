import { DefaultTheme } from "styled-components";

import { INavItemProps } from "../types";

/** @public
 *  @desc Defines the properties of each header */
export interface INavBarProps {
    theme?: DefaultTheme,
    left?: {
        iconSrcCollapse?: JSX.Element,
        navItems?: INavItemProps[]
    },
    middle?: INavItemProps[],
    right?: {
        iconSrcCollapse?: JSX.Element,
        navItems?: INavItemProps[]
    },
}