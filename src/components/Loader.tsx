import React, { forwardRef } from 'react';

import { StyledLoader, getDefaultValues } from '../styles/Loader.styles';

import { ILoaderProps } from '../types';

import { ThemeProvider } from '../theme';

/** @public */
const Loader = forwardRef((props: ILoaderProps, ref: React.ForwardedRef<any>|React.RefObject<any>|any): JSX.Element => (
    <ThemeProvider theme={props?.theme}>
        <StyledLoader
            ref={ref}
            {...getDefaultValues(props)}>
            <span className="loader" />
        </StyledLoader>
    </ThemeProvider>
));

export default Loader;