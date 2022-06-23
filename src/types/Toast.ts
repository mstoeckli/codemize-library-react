import { DefaultTheme } from "styled-components";

import { IButtonProps } from "./Button";

/** @public
 *  @desc Defines the properties of each toast element */
export interface IToastProps {
    top?: string,
    right?: string,
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
    container: {
        borderRadius: string, // -> 12px
        padding: string, // -> 8px
        boxShadow: string, // -> rgba(0, 0, 0, 0.05) 0 6px 24px 0, rgba(0, 0, 0, 0.08) 0 0 0 1px;
        borderLeftSize: string, // -> 6px
        transition: string // -> all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.35);
    },
    contentIcon: {
        size: string, // -> 28px
        borderRadius: string, // -> 50%
        fontSize: string // -> 1rem
    },
    contentMessage: {
        minWidth: string, // -> 275px
        maxWidth: string, // -> 300px
        margin: string, // -> 0 8px
        alignItems: string, // -> flex-start
        fontSizeTitle: string, // -> 0.75rem
        fontWeightTitle: number, // -> 600
        fontSizeMessage: string, // -> 0.75rem
        fontWeightMessage: number // -> 500
    },
    contentActions: {
        gap: string, // -> 8px
        paddingTop: string, // -> 8px
        paddingLeft: string // -> 8px
    },
    contentClose: {
        top: string, // -> 4px
        right: string, // -> 12px
        padding: string, // -> 4px
        cursor: string, // -> pointer
        opacity: number // -> 0.7
    }
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