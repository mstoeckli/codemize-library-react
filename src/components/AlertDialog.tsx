import React, { useState, forwardRef } from 'react';

import { StyledAlertDialog, getDefaultValues } from '../styles/AlertDialog.styles';

import { IAlertDialogProps, AlertDialogIconType } from '../types';

import { Button } from './';

import { ThemeProvider } from '../theme';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FaSolidIcons from '@fortawesome/free-solid-svg-icons';

/** @public */
const AlertDialog = forwardRef<HTMLDivElement, IAlertDialogProps>((props, ref): JSX.Element => {
    /** @desc Returns a stateful value, and a function to update it. -> Updates visibility of modal dialog by attribute "display"
     *  @type {[state:string, setState:function]} */
    const [ state, setState ] = useState("flex");

    /** @private */
    const _onClick = (oEvt: React.MouseEvent<HTMLButtonElement>, fnCallback: (oEvt: React.MouseEvent<HTMLButtonElement>) => void): void => {
        /** @desc Update state state for closing dialog after clicking a default button -> Used also for custom click event!! */
        setState("none");

        /** @desc Call callback function for custom handling */
        fnCallback(oEvt);
    };

    /** @private */
    const _getIconByAlertType = (): AlertDialogIconType => ({
        information: "faInfo",
        success: "faCheckDouble",
        warning: "faExclamation",
        error: "faXmark"
    });

    /** @private */
    const _addCloseIcon = (): JSX.Element => ( <FontAwesomeIcon
        className="alert-dialog-close-icon"
        icon={FaSolidIcons["faClose"]}
        onClick={() => setState("none")}/>
    );

    /** @private */
    const _addDialogTypeIcon = (): JSX.Element => (
        <div className="alert-dialog-type-icon">
            {/*@ts-ignore*/}
            <FontAwesomeIcon icon={FaSolidIcons[_getIconByAlertType()[props?.type || "information"]]} />
        </div>
    );

    /** @private */
    const _addCustomButtons = (): JSX.Element[] => {
        const aCustomButtons: JSX.Element[] = [];

        /** @desc Add custom buttons to JSX-Array */
        for (const oCustomButton of props?.dialog.customButtons ? props.dialog.customButtons : []) {
            aCustomButtons.push(<Button
                {...oCustomButton}
                onClick={(oEvt: React.MouseEvent<HTMLButtonElement>) => _onClick(oEvt, oCustomButton.onClick)} />)
        } return aCustomButtons;
    };

    /** @private */
    const _addSupportButton = (): JSX.Element => (
        <Button
            theme={props?.theme}
            text={props.dialog.buttonSupport?.text || "Support"}
            iconSrc={props.dialog.buttonSupport?.iconSrc || <FontAwesomeIcon icon={FaSolidIcons["faHandsHelping"]} />}
            onClick={(oEvt: React.MouseEvent<HTMLButtonElement>) => _onClick(oEvt, props.dialog.buttonSupport?.onClick ? props.dialog.buttonSupport.onClick : () => {})} />
    );

    /** @private */
    const _addCancelButton = (): JSX.Element => (
        <Button
            theme={props?.theme}
            type="error"
            text={props.dialog.buttonCancel?.text || "Abbrechen"}
            iconSrc={props.dialog.buttonCancel?.iconSrc || <FontAwesomeIcon icon={FaSolidIcons["faXmark"]} />}
            onClick={(oEvt: React.MouseEvent<HTMLButtonElement>) => _onClick(oEvt, props.dialog.buttonCancel?.onClick ? props.dialog.buttonCancel.onClick : () => {})} />
    );

    /** @private */
    const _addOkButton = (): JSX.Element => (
        <Button
            theme={props?.theme}
            type="success"
            text={props.dialog.buttonOK?.text || "OK"}
            iconSrc={props.dialog.buttonOK?.iconSrc || <FontAwesomeIcon icon={FaSolidIcons["faCheck"]} />}
            onClick={(oEvt: React.MouseEvent<HTMLButtonElement>) => _onClick(oEvt, props.dialog.buttonOK?.onClick ? props.dialog.buttonOK.onClick : () => {})} />
    );

    /** @private */
    const _addButtons = (): JSX.Element => (
        <div className="alert-dialog-buttons">
            <div className="alert-dialog-custom-buttons">
                {_addCustomButtons()}
                {props?.dialog.buttonSupport?.visible && _addSupportButton()}
            </div>
            <div className="alert-dialog-default-buttons">
                {props?.dialog.buttonCancel?.visible && _addCancelButton()}
                {props?.dialog.buttonOK?.visible && _addOkButton()}
            </div>
        </div>
    );

    return (
        <ThemeProvider theme={props?.theme}>
            <StyledAlertDialog
                ref={ref}
                state={state}
                {...getDefaultValues(props)}>
                <div className="dialog">
                    {_addCloseIcon()}
                    {!props?.dialog.hideIconSrc && _addDialogTypeIcon()}
                    {props?.dialog.title && <h4>{props.dialog.title}</h4>}
                    {props?.dialog.info && <span>{props.dialog.info}</span>}
                    {((props?.dialog?.buttonOK?.visible === true || props?.dialog?.buttonCancel?.visible === true || props?.dialog?.buttonSupport?.visible === true) || (props?.dialog?.customButtons && props?.dialog.customButtons.length > 0)) && _addButtons()}
                </div>
            </StyledAlertDialog>
        </ThemeProvider>
    )
});

export default AlertDialog;