import React, { useRef, useEffect, forwardRef } from 'react';

import { StyledToast, getDefaultValues } from '../styles/Toast.styles';

import { IToastProps } from '../types';

import { ThemeProvider } from '../theme';

import { getIconByType } from '../helpers/Icons';

import { Button } from "./index";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FaSolidIcons from '@fortawesome/free-solid-svg-icons';

/** @public */
const Toast = forwardRef<HTMLDivElement, IToastProps>((props, ref): JSX.Element => {
    /** @desc Initialize reference objects for show/hide message toast */
    const containerRefObj = useRef(null);
    const progressRefObj = useRef(null);

    let iTimerContainer: NodeJS.Timeout;
    let iTimerProgress: NodeJS.Timeout;

    /** @desc Perform side effects in function components -> Similar to componentDidMount and componentDidUpdate */
    useEffect(() => {
        if (containerRefObj && progressRefObj) {
            /** @ts-ignore */
            containerRefObj.current.classList.add("toast-active");

            /** @ts-ignore */
            progressRefObj.current.classList.add("toast-progress-active");

            /** @desc Determine timeout id for clearing when clicking close button */
            iTimerContainer = _setTimeoutContainer();
            iTimerProgress = _setTimeoutProgress();
        }
    }, []);

    /** @private */
    const _onClose = (): void => {
        /** @ts-ignore */
        containerRefObj.current.classList.remove("toast-active");

        setTimeout(() => {
            /** @ts-ignore */
            progressRefObj.current.classList.remove("toast-progress-active");
        }, 300);

        clearTimeout(iTimerContainer);
        clearTimeout(iTimerProgress);
    };

    /** @private */
    const _setTimeoutContainer = (): NodeJS.Timeout => setTimeout(() => {
        /** @ts-ignore */
        containerRefObj.current.classList.remove("toast-active");
    }, (props?.timeMS || getDefaultValues(props).timeMS));

    /** @private */
    const _setTimeoutProgress = (): NodeJS.Timeout => setTimeout(() => {
        /** @ts-ignore */
        progressRefObj.current.classList.remove("toast-progress-active");
    }, ((props?.timeMS || getDefaultValues(props).timeMS) + 500));

    /** @private */
    const _addToastContent = () => (
        <div className="toast-content">
            <div className="toast-content-icon">
                {/*@ts-ignore*/}
                <FontAwesomeIcon icon={FaSolidIcons[getIconByType()[props?.type || "information"]]} />
            </div>
            <div className="toast-content-message">
                <h4>{props.title}</h4>
                <span>{props.message}</span>
            </div>
        </div>
    );

    /** @private */
    const _addToastActions = () => (
        (props?.customButtons && props.customButtons.length > 0) && <div className="toast-actions">
            {props.customButtons.map((oButton) => (
                <Button {...oButton} />
            ))}
        </div>
    );

    /** @private */
    const _addToastClose = () => (
        <FontAwesomeIcon
            className="toast-close"
            icon={FaSolidIcons["faXmark"]}
            onClick={_onClose}/>
    );

    /** @private */
    const _addToastProgress = () => (
        <div
            ref={progressRefObj}
            className="toast-progress" />
    );

    return (
        <ThemeProvider theme={props?.theme}>
            <StyledToast
                ref={ref}
                {...getDefaultValues(props)}>
                <div
                    ref={containerRefObj}
                    className="toast-container">
                    {_addToastContent()}
                    {_addToastActions()}
                    {_addToastClose()}
                    {_addToastProgress()}
                </div>
            </StyledToast>
        </ThemeProvider>
    )
});

export default Toast;