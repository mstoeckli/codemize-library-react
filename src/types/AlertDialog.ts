import React from 'react';
import { DefaultTheme } from 'styled-components';

import { IButtonProps } from './Button';

/** @public
 *  @desc Defines the properties of each dialog */
export interface IAlertDialogProps {
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
    buttonOK: AlertDialogButtonConfig,
    buttonCancel: AlertDialogButtonConfig,
    buttonSupport: AlertDialogButtonConfig,
    customButtons?: IButtonProps[]
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