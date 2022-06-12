import React, { useState, forwardRef, useRef, useEffect } from 'react';

import { StyledButton, getDefaultValues } from '../styles/Button.styles';

import { Dropdown } from './';

import { IButtonProps } from '../types';

import { ThemeProvider } from '../theme';

/** @public */
const Button = forwardRef((props: IButtonProps, ref: React.ForwardedRef<any>|React.RefObject<any>|any): JSX.Element => {
    /** @desc Create a reference object to determine the width of button element */
    const buttonRefObj = useRef(ref);

    /** @desc Returns a stateful value, and a function to update it. -> Handle dropdown visibility
     *  @type {[isActive:boolean, setIsActive:function]} */
    const [ isActive, setIsActive ] = useState(false);

    /** @desc Returns a stateful value, and a function to update it. -> Handle float of dropdown container -> LTR/RTL
     *  @type {[clientRectWidth:number, setClientRectWidth:function]} */
    const [ clientRectWidth, setClientRectWidth ] = useState(0);

    /** @desc Perform side effects in function components -> Similar to componentDidMount and componentDidUpdate */
    useEffect((): void => {
        if (buttonRefObj) {
            /** @desc Update client rect width for handling float RTL of dropdown
             *  @ts-ignore */
            setClientRectWidth(buttonRefObj?.current.getBoundingClientRect().width);
        }
    }, [buttonRefObj]);

    /** @private */
    const _onClick = (): void => setIsActive(!isActive);

    /** @private */
    const _addDropdown = (): JSX.Element => (
        <Dropdown
            float={getDefaultValues(props).dropdownFloat}
            content={props.dropdownContent || <></>}
            clientRectWidth={clientRectWidth}
            isActive={isActive}
            clickedOutside={(isActive) => setIsActive(isActive)}/>
    );

    return (
        <ThemeProvider>
            <StyledButton
                ref={buttonRefObj}
                clientRectWidth={clientRectWidth}
                onClick={props?.dropdownContent ? _onClick : props?.onClick}
                {...getDefaultValues(props)}>
                {props?.iconSrc}
                {props?.text && <span className="button-text">{props.text}</span> }
                {props?.dropdownContent && _addDropdown()}
            </StyledButton>
        </ThemeProvider>
    );
});

export default Button;