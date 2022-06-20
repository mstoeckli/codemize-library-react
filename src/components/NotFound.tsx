import React, { forwardRef } from 'react';

import { StyledNotFound } from '../styles/NotFound.styles';

import { INotFoundInProps } from '../types';

import { ThemeProvider } from '../theme';

/** @public */
const NotFound = forwardRef<HTMLDivElement, INotFoundInProps>((props, ref): JSX.Element => (
    <ThemeProvider theme={props?.theme}>
        <StyledNotFound ref={ref}>
            In Progress!
        </StyledNotFound>
    </ThemeProvider>
));

export default NotFound;