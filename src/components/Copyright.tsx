import React, { forwardRef } from 'react';

import { StyledCopyright } from '../styles/Copyright.styles';

import { ICopyrightProps } from '../types';

import { ThemeProvider } from '../theme';

/** @public */
const Copyright = forwardRef((props: ICopyrightProps, ref: React.ForwardedRef<any>|React.RefObject<any>|any): JSX.Element => {
    return (
        <ThemeProvider>
            <StyledCopyright>
                © {new Date().getFullYear()} {props.text}.
            </StyledCopyright>
        </ThemeProvider>
    )
});

export default Copyright;