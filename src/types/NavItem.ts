import { ReactElement } from "react";
import { DefaultTheme } from "styled-components";


/** @public
 *  @desc Defines the properties of each navigation item */
export interface INavItemProps {
    theme?: DefaultTheme,
    text?: string,
    icon?: {
        src?: JSX.Element,
        color?: string,
        position?: IconPosition
    }
    logoSrc?: HTMLImageElement|ReactElement<HTMLImageElement>,
    onClick?: () => void,
    isTitle?: boolean,
    isLogo?: boolean,
    isSeparator?: boolean
}


/** @public
 *  @desc Defines the icon position for different visualization */
export type IconPosition = "right" | "left";