import React, {useRef, useEffect, forwardRef, useState} from 'react';

import { StyledInput, getDefaultValues } from '../styles/Input.styles';

import { IInputProps } from '../types';

import { ThemeProvider } from '../theme';

/** @public */
const Input = forwardRef<HTMLDivElement, IInputProps>((props, ref): JSX.Element => {
    /** @desc Returns a stateful value, and a function to update it. -> Handle width of input element
     *  @type {[clientRect:DOMRect, setClientRect:function]} */
    const [ clientRect, setClientRect ] = useState<DOMRect>({
        bottom: 0, height: 0, left: 0, right: 0, top: 0, width: 0, x: 0, y: 0,
        toJSON(): any {}
    });

    /** @desc Create a reference object to determine the width of button element */
    const labelRefObj = useRef<HTMLSpanElement>(null);

    /** @desc Perform side effects in function components -> Similar to componentDidMount and componentDidUpdate */
    useEffect(() => {
        if (labelRefObj && labelRefObj.current) {
            /** @desc Update client rect width for handling input width
             *  @ts-ignore */
            setClientRect(labelRefObj.current.getBoundingClientRect());
        }
    }, [props.label])

    /** @private */
    const _addLabel = (): JSX.Element => (
         <span
            ref={labelRefObj}
            className="input-label">{props.label}</span>
    );

    return (
        <ThemeProvider theme={props?.theme}>
            <div>
                <StyledInput
                    ref={ref}
                    clientRect={clientRect}
                    {...getDefaultValues(props)}>
                    {props?.label && (props?.position === "left" || !props?.position) &&  _addLabel()}
                    <input {...props.inputProps} />
                    {props?.label && props?.position === "right" &&  _addLabel()}
                </StyledInput>
            </div>
        </ThemeProvider>
    )
});

export default Input;