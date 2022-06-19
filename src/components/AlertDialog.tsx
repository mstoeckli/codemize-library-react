import React, { useState, forwardRef } from 'react';

import { StyledAlertDialog, getDefaultValues } from '../styles/AlertDialog.styles';

import { IAlertDialogProps, AlertDialogIconType } from '../types';

import { Button } from './';

import { ThemeProvider } from '../theme';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FaSolidIcons from '@fortawesome/free-solid-svg-icons';

/** @public */
const AlertDialog = forwardRef((props: IAlertDialogProps, ref: React.ForwardedRef<any>|React.RefObject<any>|any): JSX.Element => {
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
        for (const oCustomButton of props?.customButtons ? props.customButtons : []) {
            aCustomButtons.push(<Button
                {...oCustomButton}
                onClick={(oEvt: React.MouseEvent<HTMLButtonElement>) => _onClick(oEvt, oCustomButton.onClick)} />)
        } return aCustomButtons;
    };

    /** @private */
    const _addSupportButton = (): JSX.Element => (
        <Button
            theme={props?.theme}
            text={props.buttonSupport?.text || "Support"}
            iconSrc={props.buttonSupport?.iconSrc || <FontAwesomeIcon icon={FaSolidIcons["faHandsHelping"]} />}
            onClick={(oEvt: React.MouseEvent<HTMLButtonElement>) => _onClick(oEvt, props.buttonSupport?.onClick ? props.buttonSupport.onClick : () => {})} />
    );

    /** @private */
    const _addCancelButton = (): JSX.Element => (
        <Button
            theme={props?.theme}
            type="error"
            text={props.buttonCancel?.text || "Abbrechen"}
            iconSrc={props.buttonCancel?.iconSrc || <FontAwesomeIcon icon={FaSolidIcons["faXmark"]} />}
            onClick={(oEvt: React.MouseEvent<HTMLButtonElement>) => _onClick(oEvt, props.buttonCancel?.onClick ? props.buttonCancel.onClick : () => {})} />
    );

    /** @private */
    const _addOkButton = (): JSX.Element => (
        <Button
            theme={props?.theme}
            type="success"
            text={props.buttonOK?.text || "OK"}
            iconSrc={props.buttonOK?.iconSrc || <FontAwesomeIcon icon={FaSolidIcons["faCheck"]} />}
            onClick={(oEvt: React.MouseEvent<HTMLButtonElement>) => _onClick(oEvt, props.buttonOK?.onClick ? props.buttonOK.onClick : () => {})} />
    );

    /** @private */
    const _addButtons = (): JSX.Element => (
        <div className="alert-dialog-buttons">
            <div className="alert-dialog-custom-buttons">
                {_addCustomButtons()}
                {props.buttonSupport?.visible && _addSupportButton()}
            </div>
            <div className="alert-dialog-default-buttons">
                {props.buttonCancel?.visible && _addCancelButton()}
                {props.buttonOK?.visible && _addOkButton()}
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
                    {!props?.hideIconSrc && _addDialogTypeIcon()}
                    {props?.title && <h4>{props.title}</h4>}
                    {props?.info && <span>{props.info}</span>}
                    {_addButtons()}
                </div>
            </StyledAlertDialog>
        </ThemeProvider>
    )
});

export default AlertDialog;