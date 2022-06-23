import { DefaultTheme } from "styled-components";

/** @public
 *  @desc Defines the properties of each button */
export interface IDropdownProps {
    content: JSX.Element,
    float: DropdownFloat,
    isActive: boolean,
    clientRect: DOMRect,
    theme?: DefaultTheme,
    clickedOutside?: (isActive:boolean) => void
}

/** @public
 *  @desc Defines the dropdown float */
export type DropdownFloat = "right" | "left";

/** @public
 *  @desc Defines the theme properties for all the dropdown config */
export type DropdownConfigTheme = {
    width: string, // -> 100% | 10px ...
    minWidth: string, // -> 100% | 10px ...
    maxWidth: string, // -> 100% | 10px ...
    borderRadius: string, // -> 6px
    padding: string, // -> 8px
    top: string, // -> 10px
    boxShadow: string, // -> rgba(0, 0, 0, 0.24) 0 3px 8px
    overflow: string, // -> hidden
    transition: string, // -> all 0.2s ease-in-out
    zIndex: number // -> 9
};