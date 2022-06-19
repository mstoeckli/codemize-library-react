import React, { forwardRef } from 'react';

import { StyledNotFound } from '../styles/NotFound.styles';

import { INotFoundInProps } from '../types';

import { ThemeProvider } from '../theme';

/** @public */
const NotFound = forwardRef((props: INotFoundInProps, ref: React.ForwardedRef<any>|React.RefObject<any>|any): JSX.Element => (
    <ThemeProvider theme={props?.theme}>
        <StyledNotFound ref={ref}>

        </StyledNotFound>
    </ThemeProvider>
));

export default NotFound;