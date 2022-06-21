import { DefaultTheme } from "styled-components";

import { IButtonProps } from "./Button";

/** @public
 *  @desc Defines the properties of each toast element */
export interface IToastProps {
    theme?: DefaultTheme,
    timeMS?: number,
    type?: ToastType,
    title: string,
    message: string,
    customButtons?: IButtonProps[]
}

/** @public
 *  @desc Defines the theme properties for all the toast config */
export type ToastConfigTheme = {

}

/** @public
 *  @desc Defines the toast types for different visualization */
export type ToastType = "information" | "success" | "warning" | "error";

/** @public
 *  @desc Defines the icon of each toast type */
export type ToastIconType = {
    information: string,
    success: string,
    warning: string,
    error: string
}