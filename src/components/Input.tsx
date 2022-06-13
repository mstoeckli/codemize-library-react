import React, { forwardRef } from 'react';

import { StyledInput } from '../styles/Input.styles';

import { IInputProps } from '../types';

import { ThemeProvider } from '../theme';

/** @public */
const Input = forwardRef((props: IInputProps, ref: React.ForwardedRef<any>|React.RefObject<any>|any): JSX.Element => {
    /** @private */
    const _addLabel = (): JSX.Element => (
         <span className="input-label">{props.label}</span>
    );

    return (
        <ThemeProvider theme={props?.theme}>
            <StyledInput
                ref={ref}
                hasLabel={props.hasOwnProperty("label")}>
                {props?.label && (props?.position === "left" || !props?.position) &&  _addLabel()}
                <input {...props.inputProps} />
                {props?.label && props?.position === "right" &&  _addLabel()}
            </StyledInput>
        </ThemeProvider>
    )
});

export default Input;