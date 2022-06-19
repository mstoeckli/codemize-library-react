import React from 'react';
import { DefaultTheme } from 'styled-components';

import { IButtonProps } from './Button';

/** @public
 *  @desc Defines the properties of each dialog */
export interface IAlertDialogProps {
    height?: string,
    width?: string,
    top?: string,
    left?: string,
    right?: string,
    bottom?: string,
    title: string,
    info: string,
    type?: AlertDialogType,
    theme?: DefaultTheme,
    hideIconSrc?: boolean,
    iconSrcType?: {
        default?: JSX.Element,
        success?: JSX.Element,
        warning?: JSX.Element,
        error?: JSX.Element
    },
    buttonOK?: AlertDialogButtonConfig,
    buttonCancel?: AlertDialogButtonConfig,
    buttonSupport?: AlertDialogButtonConfig,
    customButtons?: IButtonProps[]
}

/** @public
 *  @desc Defines the theme properties for all the alert dialog config */
export type AlertDialogConfigTheme = {
    width: string, // -> 300px
    minWidth: string, // -> 250px
    maxWidth: string, // -> 350px
    borderRadius: string, // -> 8px
    padding: string, // -> 16px
    boxShadow: string, // -> rgb(0 0 0 / 24%) 0 3px 8px
    zIndex: number, // -> 99
    containerIconType: {
        size: string, // -> 40px
        iconSize: string, // -> 24px
        marginBottom: string, // -> 18px
        borderRadius: string, // -> 50%
    },
    containerIconClose: {
        width: string, // -> 10px
        fontSize: string, // -> 1rem
        border: string, // -> none
        cursor: string, // -> pointer
        padding: string // -> 4px
    },
    containerTitle: {
        width: string, // -> 100%
        fontSize: string, // -> 0.85rem,
        fontWeight: number, // -> 600,
        textAlign: string, // -> center,
        marginBottom: string // -> 12px
    },
    containerInfo: {
        width: string, // -> 100%
        fontSize: string, // -> 0.775rem
        fontWeight: number, // -> 500
        textAlign: string, // -> center
        marginBottom: string // -> 0
    },
    containerButtons: {
        justifyContent: string, // -> center,
        alignItems: string, // -> center,
        gap: string, // -> 8px,
        flexWrap: string, // -> wrap,
        marginTop: string // -> 18px
    }
}

/** @public
 *  @desc Defines the dialog types for different visualization */
export type AlertDialogType = "information" | "success" | "warning" | "error";

/** @public
 *  @desc Defines the icon of each alert type */
export type AlertDialogIconType = {
    information: string,
    success: string,
    warning: string,
    error: string
}

/** @public
 *  @desc Defines the default button configuration */
export type AlertDialogButtonConfig = {
    visible?: boolean,
    text?: string,
    iconSrc?: JSX.Element,
    onClick?: (oEvt: React.MouseEvent<HTMLButtonElement>) => void
}