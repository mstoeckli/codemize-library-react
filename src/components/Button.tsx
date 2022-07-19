import React, { useState, forwardRef, useEffect, useRef } from 'react';

import { StyledButton, getDefaultValues } from '../styles/Button.styles';

import { Dropdown } from './';

import { IButtonProps } from '../types';

import { ThemeProvider } from '../theme';

/** @public */
const Button = forwardRef<HTMLButtonElement, IButtonProps>((props, ref): JSX.Element => {
    /** @desc Returns a stateful value, and a function to update it. -> Handle dropdown visibility
     *  @type {[isActive:boolean, setIsActive:function]} */
    const [ isActive, setIsActive ] = useState(false);

    /** @desc Returns a stateful value, and a function to update it. -> Handle float of dropdown container -> LTR/RTL
     *  @type {[clientRect:DOMRect, setClientRect:function]} */
    const [ clientRect, setClientRect ] = useState<DOMRect>({
        bottom: 0, height: 0, left: 0, right: 0, top: 0, width: 0, x: 0, y: 0,
        toJSON(): any {}
    });

    /** @desc Create a reference object to determine the width of button element */
    const buttonRefObj = ref ? ref : useRef<HTMLButtonElement>(null);

    /** @desc Perform side effects in function components -> Similar to componentDidMount and componentDidUpdate */
    useEffect((): void => {
        if (buttonRefObj) {
            /** @desc Possible use -> Loading the font can lead to possible inconsistencies in the width of a button */
            setTimeout(() => {
                /** @desc Update client rect width for handling float RTL of dropdown
                 *  @ts-ignore */
                setClientRect(buttonRefObj.current.getBoundingClientRect());
            }, getDefaultValues(props).timeoutClientRect);
        }
    }, [buttonRefObj]);

    /** @private */
    const _onClick = (): void => setIsActive(!isActive);

    /** @private */
    const _addDropdown = (): JSX.Element => (
        <Dropdown
            float={getDefaultValues(props).dropdownFloat}
            content={props.dropdownContent || <></>}
            clientRect={clientRect}
            isActive={isActive}
            clickedOutside={(isActive) => setIsActive(isActive)}/>
    );

    return (
        <ThemeProvider theme={props?.theme}>
            <>
                <StyledButton
                    ref={buttonRefObj}
                    onClick={props.hasOwnProperty("dropdownContent") && props.dropdownContent ? _onClick : props?.onClick}
                    data-badgevalue={props?.badgeValue}
                    {...getDefaultValues(props)}>
                    {props?.iconSrc}
                    {props?.text && <span className="button-text">{props.text}</span> }
                </StyledButton>
                {props?.dropdownContent && _addDropdown()}
            </>
        </ThemeProvider>
    );
});

export default Button;