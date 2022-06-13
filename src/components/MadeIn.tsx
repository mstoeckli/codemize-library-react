import React, { forwardRef } from 'react';

import { StyledMadeIn } from '../styles/MadeIn.styles';

import { IMadeInProps } from '../types';

import { ThemeProvider } from '../theme';

/** @public */
const MadeIn = forwardRef((props: IMadeInProps, ref: React.ForwardedRef<any>|React.RefObject<any>|any): JSX.Element => (
    <ThemeProvider theme={props?.theme}>
        <StyledMadeIn ref={ref}>
            {props?.iconSrc}
            <span className="made-in-text">{props.text}</span>
        </StyledMadeIn>
    </ThemeProvider>
));

export default MadeIn;